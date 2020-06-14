const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fire = require('./firebase');
const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, '../frontend/build');

// Serve static files from the React app
app.use(express.static(path.join(CLIENT_BUILD_PATH)));

const db = fire.database();
const { default_other_messages } = require('./defaults');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* __________ Begin GET requests __________ */

app.get('/api', (req, res) => res.send('Hello from Uplift!'));

// '/profile' endpoint takes a user id and attempts to return its profile.
app.get('/api/profile', (req, res) => {
    const uid = req.query.uid;
    if (uid == null) {
        return res.status(400).send('Bad Request: uid is not provided.');
    }
    const userRef = db.ref(`/users/${uid}`);
    userRef.once('value').then((snapshot) => {
        if (!snapshot.exists()) {
            // couldn't find user with uid
            return res.status(404).send(`No user found with id ${uid}`);
        }
        return res.status(200).json(snapshot.val());
    });
});

// '/random-friend' endpoint takes a self_id and returns a random friend profile.
app.get('/api/random-friend', (req, res) => {
    const selfID = req.query.self_id;
    if (selfID == null) {
        return res.status(400).send('Bad Request: self_id is not provided.');
    }
    const userRef = db.ref(`/users/${selfID}`);
    userRef
        .once('value')
        .then((snapshot) => {
            if (!snapshot.exists()) {
                // couldn't find user with selfID
                return -1;
            }
            const selfProfile = snapshot.val();
            const friends = selfProfile.friends;
            const friendUIDs = Object.keys(friends);
            // see ../odm.json if confused about the profile's structure
            const randomFriendUID =
                friendUIDs[(friendUIDs.length * Math.random()) << 0];
            return randomFriendUID;
        })
        .then((randUID) => {
            if (randUID == -1) {
                return res.status(404).send(`No user found with id ${selfID}`);
            }
            db.ref(`/users/${randUID}`)
                .once('value')
                .then((snapshot) => {
                    if (!snapshot.exists()) {
                        // couldn't find random friend from randUID
                        return res
                            .status(404)
                            .send(`No friend found with id ${randUID}`);
                    }
                    return res.status(200).json(snapshot.val());
                });
        });
});

// '/random-message' takes a self_id and returns a random message from other_messages
app.get('/api/random-message', (req, res) => {
    const selfID = req.query.self_id;
    if (selfID == null) {
        return res.status(400).send('Bad Request: self_id is not provided.');
    }
    const userRef = db.ref(`/users/${selfID}`);
    userRef.once('value').then((snapshot) => {
        if (!snapshot.exists()) {
            // couldn't find user with uid
            return res.status(404).send(`No user found with id ${selfID}`);
        }
        const selfProfile = snapshot.val();
        // see ../odm.json if confused about the profile's structure
        const otherMessages = selfProfile.other_messages;
        const messageIDs = Object.keys(otherMessages);
        if (messageIDs.length == 0) {
            return res
                .status(404)
                .send(`User ${selfID} does not have any other_messages`);
        }
        const randomMessageID =
            messageIDs[(messageIDs.length * Math.random()) << 0];
        return res.status(200).send(otherMessages[randomMessageID]);
    });
});

/* __________ Begin POST requests __________ */

// 'to-self' endpoint takes a self_id and a message, and writes self_messages.
app.post('/api/to-self/:self_id', (req, res) => {
    const selfID = req.params.self_id;
    const message = req.body.message;
    console.log(`Received selfID=${selfID}, message: ${message}`);
    if (selfID == null) {
        return res.status(400).send('Bad Request: self_id is not provided.');
    }
    if (message == null) {
        return res.status(400).send('Bad Request: message is not provided.');
    }
    const messagesRef = db.ref(`/users/${selfID}/self_messages`);
    messagesRef.push(message, (err) => {
        if (err != null) {
            return res.status(400).send(`Write Error: ${error}`);
        }
        return res.status(200).send(`Write successful. Message: ${message}`);
    });
});

// 'to' endpoint takes a uid and a message, and writes it to other_messages.
app.post('/api/to/:uid', (req, res) => {
    const uid = req.params.uid;
    const message = req.body.message;
    console.log(`Received uid=${uid}, message: ${message}`);
    if (uid == null) {
        return res.status(400).send('Bad Request: uid is not provided.');
    }
    if (message == null) {
        return res.status(400).send('Bad Request: message is not provided.');
    }
    const messagesRef = db.ref(`/users/${uid}/other_messages`);
    messagesRef.push(message, (err) => {
        if (err != null) {
            return res.status(400).send(`Write Error: ${error}`);
        }
        return res.status(200).send(`Write successful. Message: ${message}`);
    });
});

// 'add-friend' takes self_id and friend_email, checks for existence, then adds friendship.
app.post('/api/add-friend/:self_uid', async (req, res) => {
    const selfID = req.params.self_uid;
    const friendEmail = req.body.friend_email;
    if (selfID == null || friendEmail == null) {
        return res
            .status(400)
            .send('Bad Request: Please provide both self_uid and friend_email');
    }

    // Check self_uid exists
    const selfSnapshot = await db.ref(`/users/${selfID}`).once('value');
    if (!selfSnapshot.exists()) {
        return res
            .status(404)
            .send(`Invalid Self: No user found with self_uid ${selfID}`);
    }

    // Check friend_email exists
    const usersRef = await db.ref('/users');
    const friendSnapshot = await usersRef
        .orderByChild('email')
        .equalTo(friendEmail)
        .once('value');
    if (!friendSnapshot.exists()) {
        return res
            .status(404)
            .send(
                `Invalid Friend: No user found with friend_email ${friendEmail}`
            );
    }

    // This newFriendRef shouldn't exist before this.
    let friend = await friendSnapshot.val();
    const friendID = Object.keys(friend)[0];
    const friendName = friendSnapshot.child(friendID).val().name;
    const newFriendRef = db.ref(`/users/${selfID}/friends/${friendID}`);
    newFriendRef.set(friendName, (err) => {
        if (err != null) {
            return res.status(400).send(`Write Error: ${error}`);
        }
    });

    const backFriendRef = db.ref(`/users/${friendID}/friends/${selfID}`);
    const backFriendName = await selfSnapshot.val().name;
    backFriendRef.set(backFriendName, (err) => {
        if (err != null) {
            return res.status(400).send(`Write Error: ${error}`);
        }
        return res
            .status(200)
            .send(`Success. Added friendship ${selfID} to ${friendID}`);
    });
});

// 'remove-friend' endpoint takes self_id and friend_id, verifies existence, then attempts to remove the friendship (one way)
app.post('/api/remove-friend/:self_uid/:friend_uid', async (req, res) => {
    const selfID = req.params.self_uid;
    const friendID = req.params.friend_uid;
    if (selfID == null || friendID == null) {
        return res
            .status(400)
            .send('Bad Request: Please provide both self_uid and friend_uid');
    }

    // Check self_uid exists
    const selfSnapshot = await db.ref(`/users/${selfID}`).once('value');
    if (!selfSnapshot.exists()) {
        return res
            .status(404)
            .send(`Invalid Self: No user found with self_uid ${selfID}`);
    }

    // Check friend_uid exists
    const friendSnapshot = await db
        .ref(`/users/${selfID}/friends/${friendID}`)
        .once('value');
    if (!friendSnapshot.exists()) {
        return res
            .status(404)
            .send(`Invalid Friend: No friend found with uid ${friendID}`);
    }

    // This newFriendRef shouldn't exist before this.
    const targetFriendRef = db.ref(`/users/${selfID}/friends/${friendID}`);
    targetFriendRef.remove((err) => {
        if (err != null) {
            return res.status(400).send(`Removal Error: ${err}`);
        }
        return res
            .status(200)
            .send(`Success. Removed friendship ${selfID} to ${friendID}`);
    });
});

// ! Creating a new user should come with nice defaults.
// NOTE: autopopulate the other_messages field with appropriate starter comments
app.post('/api/new-user', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const uid = req.body.uid;
    if (username == null || email == null || uid == null) {
        return res
            .status(400)
            .send('Bad Request: Please provide username, email, and uid');
    }
    const usersRef = db.ref('/users');
    usersRef.child(uid).set(
        {
            name: username,
            email: email,
            uid: uid,
            other_messages: default_other_messages,
        },
        (err) => {
            if (err != null) {
                return res.status(400).send(`Initialization Error: ${err}`);
            }
            return res
                .status(200)
                .send(`Success. Added user ${username} to Uplift`);
        }
    );
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

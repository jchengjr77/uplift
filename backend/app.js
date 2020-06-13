const express = require('express');
const bodyParser = require('body-parser');
const fire = require('./firebase');
const app = express();

const db = fire.database();
const auth = fire.auth();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* __________ Begin GET requests __________ */

app.get('/', (req, res) => res.send('Hello from Uplift!'));

// '/profile' endpoint takes a user id and attempts to return its profile.
app.get('/profile', (req, res) => {
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
app.get('/random-friend', (req, res) => {
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
app.get('/random-message', (req, res) => {
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
app.post('/to-self/:self_id', (req, res) => {
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
app.post('/to/:uid', (req, res) => {
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

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

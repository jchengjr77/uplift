const express = require('express');
const app = express();
const fire = require('./firebase');

const db = fire.database();
const auth = fire.auth();

const port = 3000;

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

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

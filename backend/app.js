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
            return res.status(404).send(`No user found with uid ${uid}`);
        }
        return res.status(200).json(snapshot.val());
    });
});

app.get('/other');

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

const express = require('express');
const app = express();
const fire = require('./firebase');

const db = fire.database();
const auth = fire.auth();

const port = 3000;

app.get('/', (req, res) => res.send('Hello from Uplift!'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

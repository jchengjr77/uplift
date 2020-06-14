const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCfsjdMR80t_G8q28yXPwBT05mX7xBPLkY",
  authDomain: "uplift-6825c.firebaseapp.com",
  databaseURL: "https://uplift-6825c.firebaseio.com",
  projectId: "uplift-6825c",
  storageBucket: "uplift-6825c.appspot.com",
  messagingSenderId: "276669351562",
  appId: "1:276669351562:web:259636b64f1a3d53c3cf73"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

module.exports = auth;
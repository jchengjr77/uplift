import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Messages from "./pages/messages";
import auth from "./fire";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
        setCurrentUser(user);
      } else {
        setLoggedIn(false);
        setCurrentUser(null);
      }
    });
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home to="profile" isAuthed={loggedIn} user={currentUser} />
        </Route>
        <Route path="/profile">
          <Profile to="home" isAuthed={loggedIn} user={currentUser} />
        </Route>
        <Route path="/messages">
          <Messages to="home" isAuthed={loggedIn} user={currentUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

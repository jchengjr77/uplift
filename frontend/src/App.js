import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Messages from "./pages/messages";
import auth from "./fire";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
        setLoaded(true);
      } else {
        setLoggedIn(false);
        setLoaded(true);
      }
    });
  }, [auth.currentUser]);

  if (!loaded) {
    return <div />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home to="profile" isAuthed={loggedIn} />
        </Route>
        <Route path="/profile">
          <Profile to="home" isAuthed={loggedIn} />
        </Route>
        <Route path="/messages">
          <Messages to="home" isAuthed={loggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home to="profile" />
        </Route>
        <Route path="/profile">
          <Profile to="home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

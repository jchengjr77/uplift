import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from "./pages/template";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Template />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;

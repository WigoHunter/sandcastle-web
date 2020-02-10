import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import ProfilePage from "./ProfilePage";

const createRoutes = () => (
  <Router>
    <Switch>
      <Route path="/profile/:id">
        <ProfilePage />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

export default createRoutes;

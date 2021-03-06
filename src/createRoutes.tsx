import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App";
import ProfilePage from "./components/ProfilePage";
import StarredList from "./components/StarredList";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { GRAPHQL_ENDPOINT } from "./config";
import Navigation from "./components/Navigation";
import NoteList from "./components/NoteList";

const createRoutes = () => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/list">
            <StarredList />
          </Route>
          <Route path="/notes">
            <NoteList />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </ApolloProvider>
  );
};

export default createRoutes;

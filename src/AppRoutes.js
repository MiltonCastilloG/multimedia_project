import React from "react";
import { Switch, Route } from "react-router-dom";
import CharactersView from "./views/CharactersView.js";
import Home from "./views/Home.js";
import HistoryView from "./views/HistoryView.js";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/history">
        <HistoryView />
      </Route>
      <Route exact path="/characters">
        <CharactersView />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
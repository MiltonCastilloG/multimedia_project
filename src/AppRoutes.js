import React from "react";
import { Switch, Route } from "react-router-dom";
import CharactersView from "./views/CharactersView.js";
import Home from "./views/Home.js";
import HistoryView from "./views/HistoryView.js";
import CharacterPageView from "./views/CharacterPageView.js";
import AboutView from "./views/AboutView.js"

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={HistoryView} />
      <Route path="/characters" component={CharactersView} />
      <Route path="/character-page-view/:id" component={CharacterPageView} />
      <Route path="/about" component={AboutView} />
    </Switch>
  );
};

export default AppRoutes;
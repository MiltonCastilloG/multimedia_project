import React from "react";
import { Switch, Route } from "react-router-dom";
import NewsRow from "./components/NewsRow.js";
import Home from "./views/Home.js";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <NewsRow />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
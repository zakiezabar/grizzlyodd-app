import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const DesignKit = () => (
  <div>
    <h1>Design Kit</h1>
    <span>Free for all</span>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/' component={DesignKit} />
      </Switch>
    </div>
  );
}

export default App;

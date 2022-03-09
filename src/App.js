import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact="true" path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;

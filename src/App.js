import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact="true" path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;

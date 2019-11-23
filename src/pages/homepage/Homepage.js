import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
import ShopPage from "../shop-page/ShopPage";
import { Switch, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path="/" component={Directory} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default Homepage;

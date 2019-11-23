import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
import { Switch, Route } from "react-router-dom";

const HatPage = () => {
  return <h1>Hat Page</h1>;
};

const Homepage = () => {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path="/" component={Directory} />
        <Route exact path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
};

export default Homepage;

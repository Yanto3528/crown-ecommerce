import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
import ShopPage from "../shop-page/ShopPage";
import { Switch, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import SignInSignUpPage from "../sign-in-sign-up-page/SignInSignUpPage";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Switch>
        <Route exact path="/" component={Directory} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
};

export default Homepage;

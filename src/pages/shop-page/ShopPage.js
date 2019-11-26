import React from "react";
import "./ShopPage.scss";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;

import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import "./ShopPage.scss";
import CollectionPreview from "../../components/collections-preview/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

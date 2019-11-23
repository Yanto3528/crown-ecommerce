import React from "react";

import "./CollectionsPreview.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherCollectionItem }) => (
          <CollectionItem key={id} {...otherCollectionItem} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

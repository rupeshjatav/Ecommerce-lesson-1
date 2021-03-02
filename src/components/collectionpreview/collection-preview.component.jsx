import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "../collectionpreview/collectionpreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map(({ id, ...othercollectionprops }) => <CollectionItem key={id} {...othercollectionprops} />)}
            </div>
        </div>
    )
}

export default CollectionPreview
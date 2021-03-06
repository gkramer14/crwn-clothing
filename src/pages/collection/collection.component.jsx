import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectColletion } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection: { title, items } }) => {
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectColletion(ownProps.match.params.collectionId)(state),
    }
}

export default connect(mapStateToProps)(CollectionPage);
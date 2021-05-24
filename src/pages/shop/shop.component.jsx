import React from 'react'
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;

        return (
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        )
    }
}

export default ShopPage;
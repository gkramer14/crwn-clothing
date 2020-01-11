import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'chapeus',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                size: 'normal',
                linkUrl: 'shop/hats'
            },
            {
                title: 'jaquetas',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                size: 'normal',
                linkUrl: 'shop/jackets'
            },
            {
                title: 'tenis',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                size: 'normal',
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'mulheres',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl: 'shop/womens'
            },
            {
                title: 'homens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large',
                linkUrl: 'shop/mens'
            }]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, title, imageUrl, size }) =>
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                )}
            </div>
        );
    }
}

export default Directory;
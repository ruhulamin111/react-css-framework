import React from 'react';
import Item from '../Item/Item';

const BootstrapCart = () => {
    const shop = [
        { id: 1, name: 'ice cream', price: 150 },
        { id: 2, name: 'chocolet', price: 100 },
        { id: 3, name: 'chips', price: 50 },
        { id: 4, name: 'buiscuit', price: 120 },
        { id: 5, name: 'cool drinks', price: 80 },
        { id: 6, name: 'pure water', price: 60 }
    ]

    return (
        <div>
            <div class="card-group">
                {
                    shop.map((product, index) => <Item
                        key={index}
                        product={product}
                    ></Item>)}
            </div>
        </div>
    );
};

export default BootstrapCart;
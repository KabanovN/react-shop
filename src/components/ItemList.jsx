import React, { useContext } from 'react';
import { ShopContext } from '../context';

import Item from './Item';

function ItemList(props) {
    const { items = [] } = props;
    const { addItem } = useContext(ShopContext);

    if (!items.length) {
        return <h3>Ничего не нашёл...</h3>;
    }

    return (
        <div className='cards'>
            {items.map((item) => {
                return <Item key={item.id} {...item} addItem={addItem} />;
            })}
        </div>
    );
}

export default ItemList;

import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

import { API_KEY, API_URL } from '../config';
import ItemList from './ItemList';
import Preloader from './Preloader';
import Cart from './Cart';
import CartList from './CartList';
import Toast from './Toast';

function Shop() {
    const { items, order, isLoading, isCartShow, toastName, setItems } =
        useContext(ShopContext);

    //первичный рендеринг
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className='content container'>
            <Cart quantity={order.length} />

            {isLoading ? <Preloader /> : <ItemList items={items} />}

            {isCartShow ? <CartList order={order} /> : null}

            {toastName && <Toast name={toastName} />}
        </main>
    );
}
export default Shop;

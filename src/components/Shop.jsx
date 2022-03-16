import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import ItemList from './ItemList';
import Preloader from './Preloader';
import Cart from './Cart';

function Shop() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);

    //добавляем новый товар в корзину
    const addItem = (item) => {
        const indexItem = order.findIndex((good) => good.id === item.id);

        if (indexItem === -1) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((good, index) => {
                if (index === indexItem) {
                    return {
                        ...good,
                        quantity: good.quantity + 1,
                    };
                } else {
                    return good;
                }
            });
            setOrder(newOrder);
        }
    };

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
                setIsLoading(false);
            });
    }, []);

    return (
        <main className='content container'>
            <Cart quantity={order.length} />
            {isLoading ? (
                <Preloader />
            ) : (
                <ItemList items={items} addItem={addItem} />
            )}
        </main>
    );
}
export default Shop;

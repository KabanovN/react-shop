import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import ItemList from './ItemList';
import Preloader from './Preloader';
import Cart from './Cart';
import CartList from './CartList';

function Shop() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);

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

    //отображение корзины по клику
    const handleCartShow = () => {
        setCartShow(!isCartShow);
    };

    //удаление элемента корзины
    const deleteItem = (id) => {
        const newCart = order.filter((good) => good.id !== id);
        setOrder(newCart);
    };

    //увеличение кол-ва позиций в корзине
    const increment = (id) => {
        const newOrder = order.map((good) => {
            if (good.id === id) {
                return {
                    ...good,
                    quantity: good.quantity + 1,
                };
            } else {
                return good;
            }
        });

        setOrder(newOrder);
    };

    const decrement = (id) => {
        const newOrder = order.map((good) => {
            if (good.quantity && good.id === id) {
                return {
                    ...good,
                    quantity: good.quantity - 1,
                };
            } else {
                return good;
            }
        });

        setOrder(newOrder);
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
            <Cart quantity={order.length} handleCartShow={handleCartShow} />

            {isLoading ? (
                <Preloader />
            ) : (
                <ItemList items={items} addItem={addItem} />
            )}

            {isCartShow ? (
                <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    deleteItem={deleteItem}
                    increment={increment}
                    decrement={decrement}
                />
            ) : null}
        </main>
    );
}
export default Shop;

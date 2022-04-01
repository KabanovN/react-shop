import { useContext } from 'react';
import { ShopContext } from '../context';

import CartItem from './CartItem';

function CartList(props) {
    const { order = [] } = props;
    const { toggleCartShow } = useContext(ShopContext);

    const totalPrice = order.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className='cart-wrapper'>
            <ul className='collection cart-list'>
                <li className='collection-item active'>
                    Корзина
                    <span
                        className='secondary-content'
                        onClick={toggleCartShow}>
                        <i className='material-icons'>close</i>
                    </span>
                </li>
                {order.length ? (
                    order.map((good) => {
                        return <CartItem key={good.id} {...good} />;
                    })
                ) : (
                    <li className='collection-item'>Корзина пуста</li>
                )}
                <li className='collection-item active'>
                    Общая стоимость: {totalPrice} руб.
                </li>
                <li className='collection-item'>
                    <button className='btn'>Оформить заказ</button>
                </li>
            </ul>
        </div>
    );
}

export default CartList;

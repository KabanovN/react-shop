import CartItem from './CartItem';

function CartList(props) {
    const {
        order = [],
        handleCartShow,
        deleteItem,
        increment,
        decrement,
    } = props;

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
                        onClick={handleCartShow}>
                        <i className='material-icons'>close</i>
                    </span>
                </li>
                {order.length ? (
                    order.map((good) => {
                        return (
                            <CartItem
                                key={good.id}
                                {...good}
                                deleteItem={deleteItem}
                                increment={increment}
                                decrement={decrement}
                            />
                        );
                    })
                ) : (
                    <li className='collection-item'>Корзина пуста</li>
                )}
                <li className='collection-item active'>
                    Общая стоимость: {totalPrice} руб.
                </li>
            </ul>
        </div>
    );
}

export default CartList;

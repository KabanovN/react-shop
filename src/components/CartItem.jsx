function CartItem(props) {
    const { id, name, price, quantity, deleteItem, increment, decrement } =
        props;

    return (
        <li className='collection-item'>
            <div>
                {name}{' '}
                <button className='btn-tiny' onClick={() => increment(id)}>
                    +
                </button>{' '}
                x{quantity}{' '}
                <button className='btn-tiny' onClick={() => decrement(id)}>
                    -
                </button>{' '}
                = {price * quantity} руб.
                <span
                    className='secondary-content'
                    onClick={() => deleteItem(id)}>
                    <i className='material-icons'>delete</i>
                </span>
            </div>
        </li>
    );
}

export default CartItem;

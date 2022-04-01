import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
    const { id, name, price, quantity } = props;

    const { increment, decrement, deleteItem } = useContext(ShopContext);

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

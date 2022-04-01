import React, { useContext } from 'react';
import { ShopContext } from '../context';

function Item(props) {
    const { id, name, description, price, full_background } = props;
    const { addItem } = useContext(ShopContext);

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn right'
                    onClick={() => addItem({ id, name, price })}>
                    Купить
                </button>
                <span>Цена: {price} руб.</span>
            </div>
        </div>
    );
}

export default Item;

function Item(props) {
    const { id, name, description, price, icon, addItem } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={icon} alt={name} />
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

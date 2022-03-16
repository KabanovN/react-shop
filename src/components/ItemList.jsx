import Item from './Item';

function ItemList(props) {
    const { items = [], addItem = Function.prototype } = props;

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

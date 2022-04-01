import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Toast(props) {
    const { name } = props;
    const { closeToast } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeToast, 2000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export default Toast;

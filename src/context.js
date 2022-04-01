import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    isLoading: true,
    items: [],
    order: [],
    isCartShow: false,
    toastName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    value.deleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: { id: id } });
    };

    value.closeToast = () => {
        dispatch({ type: 'CLOSE_TOAST' });
    };

    value.toggleCartShow = () => {
        dispatch({ type: 'TOGGLE_CART_SHOW' });
    };

    value.increment = (id) => {
        dispatch({ type: 'INCREMENT', payload: { id: id } });
    };

    value.decrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: { id: id } });
    };

    value.setItems = (data) => {
        dispatch({ type: 'SET_ITEMS', payload: data });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};

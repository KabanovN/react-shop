export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: payload || [],
                isLoading: false,
            };
        case 'ADD_ITEM': {
            const indexItem = state.order.findIndex(
                (good) => good.id === payload.id
            );

            let newOrder = null;
            if (indexItem === -1) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((good, index) => {
                    if (index === indexItem) {
                        return {
                            ...good,
                            quantity: good.quantity + 1,
                        };
                    } else {
                        return good;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                toastName: payload.name,
            };
        }
        case 'DELETE_ITEM':
            return {
                ...state,
                order: state.order.filter((good) => good.id !== payload.id),
            };
        case 'CLOSE_TOAST':
            return {
                ...state,
                toastName: '',
            };
        case 'TOGGLE_CART_SHOW':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };
        case 'INCREMENT':
            return {
                ...state,
                order: state.order.map((good) => {
                    if (good.id === payload.id) {
                        return {
                            ...good,
                            quantity: good.quantity + 1,
                        };
                    } else {
                        return good;
                    }
                }),
            };
        case 'DECREMENT':
            return {
                ...state,
                order: state.order.map((good) => {
                    if (good.quantity && good.id === payload.id) {
                        return {
                            ...good,
                            quantity: good.quantity - 1,
                        };
                    } else {
                        return good;
                    }
                }),
            };
        default:
            return state;
    }
};

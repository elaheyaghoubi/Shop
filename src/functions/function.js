const counter = (state, id) => {
    if (!state?.cart) return 0;
    const item = state.cart.find(item => item.id === id);
    return item ? item.quantity : 0;
};

const isInCart = (state, id) => {
    return state?.cart?.some(item => item.id === id) || false;
};

export {counter, isInCart}
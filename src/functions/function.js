const counter = (state, id) => {
    // console.log(state.cart)
    const index = state.cart.findIndex(item => item.id === id);
    if (index === -1){
        return false

    }else{
        return state.cart[index].quantity

    }
}

const isInCart = (state, id) => {
    return !!state.cart.find(item => item.id === id);
}

export {counter, isInCart}
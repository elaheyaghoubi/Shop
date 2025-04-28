import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    count: 0,
}
const sumItem = (item) => {
    const itemsCounter = item.reduce((count, cart) => count + cart.quantity, 0);
    return itemsCounter;
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push(
                    {
                        ...action.payload,
                        quantity: 1,
                    }
                );
                state.count = sumItem(state.cart);
            }
        },
        removeFromCart: (state, action) => {
            const newCart = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = newCart;
            state.count = sumItem(newCart);
        },
        increaseCart: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[index].quantity++;
            state.count = sumItem(state.cart);
        },
        decreaseCart: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[index].quantity--;
            state.count = sumItem(state.cart);
        },
    }
})

export default cartSlice.reducer;
export const { addToCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
} = cartSlice.actions;
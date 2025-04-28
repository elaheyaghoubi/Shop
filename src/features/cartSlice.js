import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            state.count = state.cart.reduce((total, item) => total + item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.count = state.cart.reduce((total, item) => total + item.quantity, 0);
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.count += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                state.count -= 1;
                if (item.quantity <= 0) {
                    state.cart = state.cart.filter(i => i.id !== action.payload);
                }
            }
        }
    }
});

// Export actions and reducer
export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
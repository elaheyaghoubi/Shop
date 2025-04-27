import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    count: 0,
}

const calculateCountItems = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            console.log(action.payload);
            if (existingItem) {
                console.log("if")
                existingItem.quantity += 1;
            } else {
                // console.log(action.payload.id)
                // state.cart.push({
                //     ...action.payload,
                //     quantity: 1,
                // });
                state.cart = [
                    ...state.cart,
                    {
                        ...action.payload,  // Spread all properties from payload
                        quantity: 1        // Add quantity property
                    }
                ];

                state.count = calculateCountItems(state.cart);
                // console.log(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.count = calculateCountItems(state.cart);
        },
        increase: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity++;
                state.count = calculateCountItems(state.cart);
            }
        },
        decrease: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity--;
                if (item.quantity <= 0) {
                    state.cart = state.cart.filter(i => i.id !== action.payload.id);
                }
                state.count = calculateCountItems(state.cart);
            }
        }
    }
});

export const { addToCart, decrease, increase, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
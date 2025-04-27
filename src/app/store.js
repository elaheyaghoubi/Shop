import { configureStore } from "@reduxjs/toolkit";
import getAllProductSlice from "../features/getAllProductSlice.js";
import getDetailsSlice from "../features/getDetailsSlice.js";
import cartSlice from "../features/cartSlice.js";

const store = configureStore({
    reducer: {
        products: getAllProductSlice,
        details: getDetailsSlice,
        cart: cartSlice
    },
    // Enable Redux DevTools with detailed tracing
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    // devTools: process.env.NODE_ENV !== 'production'
});

export default store;
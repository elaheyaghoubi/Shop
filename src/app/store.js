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

});

export default store;
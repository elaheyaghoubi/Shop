import {configureStore} from "@reduxjs/toolkit";
import getAllProductSlice from "../features/getAllProductSlice.js";
import getDetailsSlice from "../features/getDetailsSlice.js";
import cartReducer from "../features/cartSlice.js";
import favoriteSlice from "../features/favoriteSlice.js";

const store = configureStore({
    reducer: {
        products : getAllProductSlice,
        details : getDetailsSlice,
        cart : cartReducer,
        favorites: favoriteSlice
    }
})
export default store;
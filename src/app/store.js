import {configureStore} from "@reduxjs/toolkit";
import getAllProductSlice from "../features/getAllProductSlice.js";
const store = configureStore({
    reducer: {
        products : getAllProductSlice,
    }
})


export default store;
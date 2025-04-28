import {configureStore} from "@reduxjs/toolkit";
import getAllProductSlice from "../features/getAllProductSlice.js";
import getDetailsSlice from "../features/getDetailsSlice.js";

const store = configureStore({
    reducer: {
        products : getAllProductSlice,
        details : getDetailsSlice,
    }
})
export default store;
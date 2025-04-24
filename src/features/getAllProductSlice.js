import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products : [],
    errors : "",
    loading: false,
}

const fetchProducts = createAsyncThunk("products", async () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
        return response;
    }).catch((error) => {
        return error;

        // console.log(error)
    })
})

const getAllProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(builder.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(builder.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.errors = "";

        })
        builder.addCase(builder.reject, (state, action) => {
            state.loading = false;
            state.products = [];
            state.errors = action.payload;
        })
    }
})

export default getAllProductSlice.reducer
export {fetchProducts}
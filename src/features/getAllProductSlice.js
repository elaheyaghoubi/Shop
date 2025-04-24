import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    errors: "",
    loading: false,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",  // Better naming convention
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }
);

const getAllProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.errors = "";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.errors = "";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.errors = action.payload;
            });
    }
});

export default getAllProductSlice.reducer;
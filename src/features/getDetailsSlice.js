import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: "",
    details: {}
}

const fetchDetails = createAsyncThunk("details/fetchDetails", async (id) => {
    try {
        // console.log(id)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }catch (error) {
        return error;
    }
})

const getDetailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(fetchDetails.pending, (state) => {
                    state.loading = true;

            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.details = action.payload;
                state.error = ""
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.details = []
            })
    }
})

export default getDetailsSlice.reducer;
export {fetchDetails}
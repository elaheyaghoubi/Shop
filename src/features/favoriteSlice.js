import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
}

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const existingItem = state.favorites.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.favorites.push({
                    ...action.payload,
                    isFilled: true,
                });
            }

        },
        removeFromFavorite: (state, action) => {
            const item = state.favorites.find(item => item.id === action.payload.id);
            if (item) {
                item.isFilled = false; // Toggle instead of removing
                state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
            }
        }
    }
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer
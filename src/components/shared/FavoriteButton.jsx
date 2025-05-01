import React from 'react';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { addToFavorite, removeFromFavorite } from "../../features/favoriteSlice.js";
import { useDispatch, useSelector } from "react-redux";

function FavoriteButton({ product }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);

    // Find if the product is favorited (and get its `isFilled` status)
    const favoriteItem = favorites.find((item) => item.id === product.id);
    const isFilled = favoriteItem?.isFilled || false;

    const handleToggleFavorite = () => {
        console.log(isFilled)
        if (isFilled) {
            dispatch(removeFromFavorite(product)); // Sets isFilled: false
        } else {
            dispatch(addToFavorite(product));      // Sets isFilled: true
        }
    };

    return (
        <div onClick={handleToggleFavorite} style={{ cursor: "pointer" }}>
            {isFilled ? (
                <IoHeartSharp style={{ color: "red" }} />
            ) : (
                <IoHeartOutline />
            )}
        </div>
    );
}

export default FavoriteButton;
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FavoritesCard from "./FavoritesCard.jsx";
import { removeFromFavorite } from "../../features/favoriteSlice.js";

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorites.favorites) || [];


    return (
        <div>
            {favorites.length > 0 ? (
                <div>
                    {favorites.map((item) => (
                        <div key={item.id}>
                            <FavoritesCard
                                data={item}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No favorites found.</div>
            )}
        </div>
    );
}
export default FavoritesPage;
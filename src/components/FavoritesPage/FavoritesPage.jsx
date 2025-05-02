import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FavoritesCard from "./FavoritesCard.jsx";
import { removeFromFavorite } from "../../features/favoriteSlice.js";
import {Link} from "react-router-dom";
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
                <div className={"flex justify-center gap-2"}>
                    <div className={"font-medium text-red-700"}>Your Favorite List Is Empty. </div>
                    <Link to={"/"}>
                        <div className={"text-amber-300 underline font-medium"}>Go To Shop</div>
                    </Link>
                </div>
            )}
        </div>
    );
}
export default FavoritesPage;
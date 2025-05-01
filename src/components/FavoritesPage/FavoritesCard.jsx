import React from 'react'
import FavoriteButton from "../shared/FavoriteButton.jsx";

function FavoritesCard({data}) {

    return (
        <div>
            <div className={"flex justify-around p-[1em] items-center"}>
                <div>
                    <img className={"h-64"}
                         src={data.image}
                         alt=""
                    />
                </div>
                <div className={"w-[55%]"}>
                    <div className={"flex gap-1 rounded-lg border-2 border-blue-900 p-[1em] m-3"}>
                        <div className={"text-amber-300 font-medium"}>Title: </div>
                        <div className={"text-blue-900 "}>{data.title}</div>
                    </div>
                    <div className={"flex gap-1 rounded-lg border-2 border-blue-900 p-[1em] m-3"}>
                        <div className={"text-amber-300 font-medium"}>Category: </div>
                        <div className={"text-blue-900 "}>{data.category}</div>
                    </div>
                    <div className={"flex gap-1 rounded-lg border-2 border-blue-900 p-[1em] m-3"}>
                        <div className={"text-amber-300 font-medium"}>Price: </div>
                        <div className={"text-blue-900 "}>{data.price}</div>
                    </div>
                </div>
                <div>
                    <FavoriteButton product={data} />
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default FavoritesCard

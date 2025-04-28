import React from 'react'
import Buttons from "../shared/Buttons.jsx";

function CartCard({data}) {

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
                    <Buttons product={data} />
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default CartCard

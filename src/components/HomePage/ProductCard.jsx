import React from 'react'
import {Link} from "react-router-dom";

function ProductCard({ product }) {
    const {image, category, title, price, id} = product;

    return (
        <div className={"flex justify-between flex-col rounded-lg border-blue-900 border-2 p-[1em] "}>
            <div className={"w-full]"}>
                <img src={image} alt=""/>
            </div>
           <div>
               <div className={""}>{title}</div>
               <div className={"flex gap-1"}>
                   <div className={"text-blue-900 "}>Category: </div>
                   <div>{category}</div>
               </div>
               <div className={"flex gap-1"}>
                   <div className={"text-blue-900"}>Price: </div>
                   <div>{price}$</div>
               </div>
               <div className={"text-center"}>
                   <Link className={"text-decoration-none hover:!text-blue-900 !text-emerald-600" } to={`/products/${id}`}>Details</Link>
               </div>
           </div>
        </div>
    )
}

export default ProductCard

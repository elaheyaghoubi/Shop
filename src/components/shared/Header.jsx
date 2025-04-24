import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { TbFolderHeart } from "react-icons/tb";

function Header() {
    return (
        <div className={"m-[1em] p-[1em] rounded-lg bg-[hsl(251,85%,36%)]"}>
            <ul className={"flex flex-row justify-between items-center w-[9%] flex-wrap"}>
                <li>
                    <div>Home</div>
                </li>
                <li>
                    <FaShoppingCart />
                </li>
                <li>
                    <TbFolderHeart />
                </li>
            </ul>
        </div>
    )
}

export default Header

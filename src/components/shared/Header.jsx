import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { TbFolderHeart } from "react-icons/tb";

function Header() {
    return (
        <div className={"m-[1em] p-[1em] rounded-lg bg-[hsl(251,85%,36%)]"}>
            <ul className={"flex flex-row justify-between items-center w-[9%] flex-wrap"}>
                <li>
                    <div className={"text-white font-medium hover:cursor-pointer"}>Home</div>
                </li>
                <li>
                    <div className={"relative p-[10px]"}>
                        <FaShoppingCart
                            size={22}
                            className={"text-white hover:cursor-pointer "}
                        />
                        <div
                        className={"absolute text-white hover:cursor-pointer bg-[#900707] text-xs text-center rounded-full top-0 right-0 p-[2px]"}>
                            0
                        </div>
                    </div>
                </li>
                <li>
                    <TbFolderHeart
                        size={22}
                        className={"text-white hover:cursor-pointer"}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Header

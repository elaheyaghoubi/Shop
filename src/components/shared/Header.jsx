import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { TbFolderHeart } from "react-icons/tb";
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
function Header() {
    const count = useSelector(state => state.cart.count);

    return (
        <div className={"m-[1em] p-[1em] rounded-lg bg-[hsl(251,85%,36%)]"}>
            <ul className={"flex flex-row justify-between items-center w-[12%] flex-wrap mb-0"}>
                <li>
                    <Link to={"/"}>
                        <div className={"text-white font-medium hover:cursor-pointer"}>Home</div>
                    </Link>
                </li>
                <li>
                    <Link to={`/cart`}>
                        <div className={"relative p-[10px]"}>
                            <FaShoppingCart
                                size={22}
                                className={"text-white hover:cursor-pointer "}
                            />
                            <div
                                className={"absolute text-white hover:cursor-pointer bg-[#900707] text-xs text-center rounded-full top-0 right-0 p-[2px]"}>
                                {count}
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={`/favorites`}>
                        <TbFolderHeart
                            size={22}
                            className={"text-white hover:cursor-pointer"}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header

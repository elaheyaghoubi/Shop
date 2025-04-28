import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import CartCard from "./CartCard.jsx";

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart) || [];
    console.log(cart);
    return (
        <div>
            {cart.count !== 0 ? (
                <div>
                    {Array.isArray(cart) && cart.map((item) => (
                        <div key={item.id}>
                            <CartCard data={item} />
                        </div>
                    ))}
                </div>
                )
                : (
                <div className={"flex justify-center gap-2"}>
                    <div className={"font-medium text-red-700 font-medium"}>Your Cart Is Empty. </div>
                    <Link to={"/"}>
                        <div className={"text-amber-300 underline font-medium"}>Go To Shop</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
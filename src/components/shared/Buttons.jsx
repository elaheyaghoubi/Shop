import React from 'react';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    increaseCart,
    decreaseCart,
    removeFromCart
} from "../../features/cartSlice";
import {counter, isInCart} from "../../functions/functions.js";

function Buttons({product}) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    return (
        <div>
            {isInCart(cart, product.id) ? (
                <button
                    onClick={() => dispatch(increaseCart(product))}
                    className="p-1 hover:bg-gray-100 rounded"
                >
                    <FaPlus size={15} />
                </button>
            ): (
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            )}
            {counter(cart, product.id) > 0 && (
                <span>{counter(cart, product.id)}</span>
            )}
            {counter(cart, product.id) === 1 && (
                <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                >
                    <FaTrash size={15} />
                </button>
            )}
            {counter(cart, product.id) > 1 && (
                <button
                    onClick={() => dispatch(decreaseCart(product))}
                    className="p-1 hover:bg-gray-100 rounded"
                >
                    <FaMinus size={15} />
                </button>
            )}
        </div>
    )
}

export default Buttons

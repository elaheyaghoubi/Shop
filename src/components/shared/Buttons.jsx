import React from 'react';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem, deleteItem } from "../features/cartSlice";
import {addToCart, increaseQuantity, removeFromCart, decreaseQuantity} from "../../features/cartSlice.js";

function Buttons({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart?.items || []);
    const quantity = cartItems.find(item => item.id === product.id)?.quantity || 0;

    return (
        <div className="flex items-center gap-2">
            {quantity > 0 ? (
                <>
                    <button
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <FaMinus size={14} />
                    </button>

                    <span>{quantity}</span>

                    <button
                        onClick={() => dispatch(increaseQuantity(product))}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <FaPlus size={14} />
                    </button>

                    <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="p-1 text-red-500 hover:text-red-700"
                    >
                        <FaTrash size={14} />
                    </button>
                </>
            ) : (
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export default Buttons;
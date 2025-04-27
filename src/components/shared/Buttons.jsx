import React from 'react';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "../../features/cartSlice";

function Buttons({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const quantity = cart.find(item => item.id === product.id)?.quantity || 0;

    return (
        <div className="flex items-center gap-2">
            {quantity > 0 ? (
                <>
                    <button
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <FaMinus size={15} />
                    </button>

                    <span>{quantity}</span>

                    <button
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <FaPlus size={15} />
                    </button>

                    {quantity === 1 && (
                        <button
                            onClick={() => dispatch(removeFromCart(product.id))}
                            className="p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                            <FaTrash size={15} />
                        </button>
                    )}
                </>
            ) : (
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export default Buttons;
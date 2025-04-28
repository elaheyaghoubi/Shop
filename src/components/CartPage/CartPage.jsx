import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector(state => state.cart); // Access the whole cart slice
    const { items = [], totalQuantity = 0, totalAmount = 0 } = cart || {}; // Safely destructure

    console.log('Cart state:', cart); // Debug the entire cart slice

    return (
        <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Your Cart ({totalQuantity} items)</h3>

            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="space-y-4">
                    {items.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-3">
                            <div>
                                <h4 className="font-medium">{item.title}</h4>
                                <p className="text-sm text-gray-600">
                                    {item.quantity} × ${item.price.toFixed(2)}
                                </p>
                            </div>
                            <p className="font-medium">
                                ${(item.quantity * item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}

                    <div className="border-t pt-3">
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
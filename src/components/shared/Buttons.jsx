import React from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {addToCart, increase, decrease, removeFromCart} from "../../features/cartSlice.js";
import {useSelector, useDispatch} from "react-redux";
import {counter, isInCart} from "../../functions/function.js";
// import button from "bootstrap/js/src/button.js";

function Buttons({product}) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(product)
    return (
        <div>
            {counter(cart, product.id) === 1 && (
                <button onClick={() => dispatch(removeFromCart(cart, product.id))}>
                    <FaTrash size={15} />
                </button>
            )}

            {counter(cart, product.id)> 0 && (
                <div>
                    {counter(cart, product.id)}
                </div>
            )}

            {counter(cart, product.id) > 1 && (
                <button onClick={() => dispatch(decrease(cart, product.id))}>
                    <FaMinus size={15}/>
                </button>
            )}

            {isInCart(cart, product.id) ? (
                <button onClick={() => dispatch(increase(cart, product.id))}>
                    <FaPlus size={15}/>
                </button>
            ):(
              <button onClick={() => {

                  dispatch(addToCart(cart, product))
              }}>
                  <div>add to cart</div>
              </button>
                )}

        </div>
    )
}

export default Buttons

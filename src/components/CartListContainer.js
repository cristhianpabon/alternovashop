import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

import "./CartListContainer.css";

const CartListContainer = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cartList">
      <div className="cart">
        {cart.length ? (
          <>
            <div>
              <h2>CART</h2>
              {cart.map((cartItem, index) => (
                <CartItem {...cartItem} key={index} />
              ))}
            </div>
            <div className="cartFooter">
              <p>Total Order Price</p>
              <button>Create Order</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty..</p>
        )}
      </div>
    </div>
  );
};

export default CartListContainer;

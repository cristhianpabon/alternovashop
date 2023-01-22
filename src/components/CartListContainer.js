import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../redux/slice/cartSlice";

import CartItem from "../components/CartItem";

import "./CartListContainer.css";

function CartListContainer() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    console.log(cart);

  return (
        <div className="cartList">
          <div className="cart">
            <div>
              <h2>CART</h2>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="cartFooter">
              <p>Total Order Price</p>
              <button>Create Order</button>
            </div>
          </div>
        </div>
  );
}

export default CartListContainer;

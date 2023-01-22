import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

import "./CartListContainer.css";

const CartListContainer = () => {
  const { cart } = useSelector((state) => state.cart);

  const getFormattedDate = () => {
    const date = new Date();
    return (
      date.getMilliseconds() +
      date.getSeconds() +
      "_" +
      date.getDate() +
      "_" +
      (date.getMonth() + 1) +
      "_" +
      date.getFullYear()
    );
  };

  const generateJsonOrder = (orderList) => {
    const date = getFormattedDate();
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(orderList)], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(textFile);
    element.download = `order${date}.json`;
    document.body.appendChild(element);
    element.click();
  };

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
              <button onClick={() => generateJsonOrder()}>Create Order</button>
            </div>
          </>
        ) : (
          <div className="emptyCartStyles">
            <p>Your cart is empty..</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartListContainer;

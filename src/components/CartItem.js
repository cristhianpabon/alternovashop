import React from "react";
import "./CartItem.css";

const CartItem = ({ name, quantity, unitPrice, total }) => {
  return (
    <ul className="cartItem">
      <ul>
        <li>{name}</li>
        <li>
          <span>Cantidad:</span> {quantity}
        </li>
      </ul>
      <ul>
        <li>
          <span>Unit Price:</span> ${unitPrice}
        </li>
        <li>
          <span>Total:</span> ${total}
        </li>
      </ul>
    </ul>
  );
};

export default CartItem;

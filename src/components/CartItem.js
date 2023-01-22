import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/cartSlice";
import "./CartItem.css";

function CartItem() {
  //   const { value } = useSelector((state) => state.cart);
  //   console.log(value);
  return (
    <ul className="cartItem">
      <ul>
        <li>Iphone 14 Pro Max</li>
        <li>
          <span>Cantidad:</span> 5
        </li>
      </ul>
      <ul>
        <li>
          <span>Unit Price:</span> $5000
        </li>
        <li>
          <span>Total:</span> $25000
        </li>
      </ul>
    </ul>
  );
}

export default CartItem;

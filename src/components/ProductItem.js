import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/slice/cartSlice";
import "./ProductItem.css";

const ProductItem = ({ name, stock, type, unit_price }) => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };

  const getTotalPrice = (quantity, unitPrice) => quantity * unitPrice;

  const handleAddCartButton = () => {
    console.log("clicking...");
    dispatch(
      addCartItem({
        name,
        quantity: counter,
        unitPrice: unit_price,
        total: getTotalPrice(counter, unit_price),
      })
    );
  };

  return (
    <div className="product">
      <div className="productImage">
        <img src="./dummyphoto.png" alt="dummyphoto" />
      </div>
      <div className="productContent">
        <h2>{name}</h2>
        <div className="productDetails">
          <p className="productStock">{stock}</p>
          <p className="productPrice">{unit_price}</p>
        </div>
        <div className="productFooter">
          <div className="productCounter">
            <button onClick={() => handleDecrementCounter()}>-</button>
            <p>{counter}</p>
            <button onClick={() => handleIncrementCounter()}>+</button>
          </div>
          <button
            onClick={() => handleAddCartButton()}
            className="productAddButton"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

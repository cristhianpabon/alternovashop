import React from "react";
import "./ProductItem.css";

const ProductCounterItem = ({ counter, setCounter, availableStock }) => {
  const handleIncrementCounter = () => {
    if (availableStock > counter) {
      setCounter(counter + 1);
    }
  };

  const handleDecrementCounter = () => {
    const isNegativeNumber = counter - 1;
    if (isNegativeNumber > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="productCounter">
      <button onClick={() => handleDecrementCounter()}>-</button>
      <p>{counter}</p>
      <button onClick={() => handleIncrementCounter()}>+</button>
    </div>
  );
};

export default ProductCounterItem;

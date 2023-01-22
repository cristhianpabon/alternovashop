import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/slice/cartSlice";
import { updateProductStock } from "../redux/slice/productsSlice";
import "./ProductItem.css";

import ProductCounterItem from "./ProductCounterItem";

const ProductItem = ({ name, stock, type, unit_price }) => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);

  const getTotalPrice = (quantity, unitPrice) => quantity * unitPrice;

  const handleAddCartButton = () => {
    if (counter) {
      dispatch(
        addCartItem({
          name,
          quantity: counter,
          unitPrice: unit_price,
          total: getTotalPrice(counter, unit_price),
        })
      );
      dispatch(updateProductStock({ name, stock: counter }));
      setCounter(0);
    }
  };

  return (
    <div className="productContainer">
      {!stock && (
        <div className="noStockStyles">
          <p>No Stock</p>
        </div>
      )}
      <div className={"product " + (!stock && "halfOpacity")}>
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
            <ProductCounterItem
              counter={counter}
              setCounter={setCounter}
              availableStock={stock}
            />
            <button
              onClick={() => handleAddCartButton()}
              className="productAddButton"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

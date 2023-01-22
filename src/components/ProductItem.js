import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/cartSlice";
import "./ProductItem.css";

function ProductItem({ name, stock, type, unit_price }) {
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
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
          <button className="productAddButton">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";

import "./ProductsListContainer.css";

function ProductsListContainer() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="productList">
      {products.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </div>
  );
}

export default ProductsListContainer;

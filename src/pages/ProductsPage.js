import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/slice/productsSlice";

import ProductsListContainer from "../components/ProductsListContainer";
import CartListContainer from "../components/CartListContainer";

import "./ProductsPage.css";

import productsJSON from "../data/products.json";

function ProductsPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJson = () => {
      const dataPromise = new Promise((resolve, reject) =>
        resolve(productsJSON.products)
      );
      dataPromise
        .then((response) => {
          if (response) {
            dispatch(setProducts(response));
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    };
    setTimeout(() => {
      fetchJson();
    }, "1000");
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <header>
        <nav>
          <h1>Alternova Shop</h1>
        </nav>
      </header>
      <main>
        <ProductsListContainer />
        <CartListContainer />
      </main>
    </div>
  );
}

export default ProductsPage;

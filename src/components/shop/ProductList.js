import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";
import "./ProductList.css";

function ProductList() {
  return (
    <>
      <div className="center">
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;

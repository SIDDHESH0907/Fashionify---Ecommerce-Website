import React from "react";
import './ProductCard.css'

function ProductCard() {
  return (
    <>
      <div className="card">

        <div className="image">
          <div>
            <img src="./clothes.jpg" />
          </div>
        </div>

        <div className="details">
          <div className="name">Name</div>
          <div className="price">Price</div>
        </div>

        <div>
            <button className="buy">Buy</button>
        </div>

      </div>
    </>
  );
}

export default ProductCard;

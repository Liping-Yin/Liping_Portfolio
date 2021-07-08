import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <div className="product__images">
        <img src={image} alt="product" />
      </div>

      <button>Add to basket</button>
    </div>
  );
}

export default Product;

import React from 'react';
import './style.css';
// product card
function ProductCard({ product }) {
  return (

    <div className="col-4 ">
      <div className="card">
        <img src={product.img} alt="" />
        <h1>{product.name}</h1>
        <h2>{product.color}</h2>
        <h2>{product.type}</h2>
        
      </div>
    </div>
  );
}

export default ProductCard;

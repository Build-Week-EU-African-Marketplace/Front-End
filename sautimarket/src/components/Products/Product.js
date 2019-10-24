import React, { useState, useEffect } from "react";
import placeHolderImg from "../../images/placeholder1.png"
import "./products.css";

export default function Product(props) {
  const productStyle = {
    background: 'url("../../images/placeholder1.png") cover no-repeat',
   
  };

  return (
    <div className="product-item">
      <div style={productStyle} className="product-img-div">
        {/* <div className="product-quick-view">
          <button className="button">Quick View</button>
        </div> */}
        <img src={placeHolderImg} alt="beef" />
      </div>
      <div className="product-content-details">
        <p>Cow Beef</p>
        <p>Tasty cow beef</p>
        <p>$1.99</p>
      </div>
    </div>
  );
}

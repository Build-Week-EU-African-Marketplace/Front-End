import React, { useState, useEffect } from "react";
// import placeHolderImg from "../../images/i"
import "./products.css";

export default function Product(props) {
  return (
        <div className="product-item">
          <div style={{background:'url("../../images/placeholder.png")'}} className="product-img-div">
            <div className="product-quick-view">
                <button>Quick View</button>
            </div>
          </div>
          <div>
              <p>Beef</p>
              <p>Description</p>
              <p>Price</p>
          </div>
        </div>
  );
}

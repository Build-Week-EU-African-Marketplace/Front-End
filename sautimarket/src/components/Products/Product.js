import React, { useState, useEffect } from "react";
import placeHolderImg from "../../images/placeholder1.png";
import "./products.css";

export default function Product(props) {
  const productStyle = {
    background: 'url("../../images/placeholder1.png") cover no-repeat'
  };

  return (
    <div className="product-item">
      <div style={productStyle} className="product-img-div">
        {/* <div className="product-quick-view">
          <button className="button">Quick View</button>
        </div> */}
        <img src={props.URL} alt={props.name} />
      </div>
      <div className="product-content-details">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>${props.price}</p>
        {props.canModify && (
          <>
            <p onClick={props.openEdit} className="modify-product">
              Edit
            </p>
            <p onClick={props.deleteItem} className="modify-product">
              Delete
            </p>
          </>
        )}
      </div>
    </div>
  );
}

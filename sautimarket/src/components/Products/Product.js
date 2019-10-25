import React, { useState, useEffect } from "react";
import placeHolderImg from "../../images/placeholder1.png";
import "./products.css";
// import { Card, Image, Button } from 'semantic-ui-react';

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
            <button onClick={props.openEdit} className="modify-product">
              Edit
            </button>
            <button onClick={props.deleteItem} className="modify-product2">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from "react";
// import placeHolderImg from "../../images/placeholder1.png";
// import "./products.css";
// import { Card, Image, Button } from 'semantic-ui-react';

// const Product = (props) => (
//   <Card>
//   <Image src = {props.URL} alt={props.name} wrapped ui={false} />
//   <Card.Content>
//     <Card.Header>{props.name}</Card.Header>
//     <Card.Meta>
//       ${props.price}
//     </Card.Meta>
//     <Card.Description>
//       {props.description}
//     </Card.Description>
//     {props.canModify && (
//       <>
//       <Button onClick={props.openEdit} className="modify-product">
//         Edit
//       </Button>
//        <Button onClick={props.deleteItem} className="modify-product">
//         Delete
//        </Button>
//        </>
//     )}
//   </Card.Content>
//   </Card>
// )
//   return ( 
//     <div class="ui card">
//   <div class="image">
//     <img src="" />
//   </div>
//   <div class="content">
//     <div class="header">Matthew</div>
//     <div class="meta"><span class="date">Joined in 2015</span></div>
//     <div class="description">Matthew is a musician living in Nashville.</div>
//   </div>
//   <div class="extra content">
//     <a>
//       <i aria-hidden="true" class="user icon"></i>
//       22 Friends
//     </a>
//   </div>
// </div>
//   );

// export default Product













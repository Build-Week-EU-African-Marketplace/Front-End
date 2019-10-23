import React, {useState,useEffect} from "react";
import * as actionCreators from "../../actions/actionCreators";
import {connect} from "react-redux";
import Product from "./Product";

function Products({addUser,loginUser}) {

    // useEffect(()=>{
    //     const user = {
    //         username:"o",
    //         password:"o",
    //         department:"buyer"
    //     }
    //     loginUser(user);
    // },[]);


    return <div>
        <Product />
    </div>
}

export default connect(
    state => state,
    actionCreators,
  )(Products);
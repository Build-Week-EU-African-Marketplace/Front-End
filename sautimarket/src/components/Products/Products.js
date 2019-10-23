import React, {useState,useEffect} from "react";
import * as actionCreators from "../../actions/actionCreators";
import {connect} from "react-redux";

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
        products
    </div>
}

export default connect(
    state => state,
    actionCreators,
  )(Products);
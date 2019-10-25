import React from 'react';
import {Route} from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navigation from "./components/UI/Nav/Nav";
import Products from "./components/Products/Products";
import MyPage from "./components/MyPage/MyPage";


function App() {
  return (
    <>
    <Route path="/" component={Navigation} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/header" component={Header} />
    <Route path="/products" component={Products} />
    <Route path="/dashboard" component={MyPage} />
    </>
  );
}

export default App;

import React from 'react';
import {Route} from "react-router-dom";
import Nav from "./components/UI/Nav/Nav";
import Header from "./components/UI/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <>
    <Route path="/nav" component={Nav} />
    <Route path="/header" component={Header} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    </>
  );
}

export default App;

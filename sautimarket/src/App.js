import React from 'react';
import {Route} from "react-router-dom";
import Nav from "./components/UI/Nav/Nav";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <>
    <Route path="/nav" component={Nav} />
    <Route path="/header" component={Header} />
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import * as reducers from "./reducers";


const allReducers = combineReducers({
    user:reducers.userReducer,
    items:reducers.itemsReducer
})

const store = createStore(
    allReducers,
    {},
  compose(
      applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

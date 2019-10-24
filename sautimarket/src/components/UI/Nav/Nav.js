import React from "react";
import { Route, NavLink} from "react-router-dom";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import "./nav.css"

export default function Navigation () {
  return (
    <div>
        <nav>
                <div class = "logo">
                <h1>SautiWomen</h1>
                </div>
                <div class = "link">
                <NavLink className="navlink" exact to="/Login" activeClassName="active">
                <h1>Login</h1>
                </NavLink>
                <NavLink className="navlink" exact to="/Register" activeClassName="active">
                <h1>Register</h1>
                </NavLink>
                </div>
        </nav>

      <main>
        <Route exact path="/Login" component={Login} />
        &nbsp;
        <Route path="/Register" component={Register} />
      </main>
    </div>
  );
}
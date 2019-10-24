import React from "react";
import { Route, NavLink} from "react-router-dom";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import "./nav.css"

export default function Navigation () {
  return (
    <div>
        <nav>
            <NavLink className="navlink" exact to="/" activeClassName="active">
            <h1>SautiWomen</h1>
            </NavLink>
            <NavLink className="navlink" exact to="/Login" activeClassName="active">
            Login
            </NavLink>
            &nbsp;
            <NavLink className="navlink" exact to="/Register" activeClassName="active">
            Register
            </NavLink>
        </nav>

      <main>
        <Route exact path="/Login" component={Login} />
        &nbsp;
        <Route path="/Register" component={Register} />
      </main>
    </div>
  );
}
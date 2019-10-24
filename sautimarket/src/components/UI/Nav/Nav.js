import React from "react";
import { Route, NavLink} from "react-router-dom";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import "./nav.css"

export default function Navigation () {
  return (
    <div>
        <nav>
            <nav-logo>SautiWomen</nav-logo>
        
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
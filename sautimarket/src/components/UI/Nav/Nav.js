import React from "react";
import "./nav.css"

export default function Navigation() {
return (
<nav>
    <nav-logo>
        <h1>SautiWomen</h1>
    </nav-logo>
    <nav-menu>
        <div><a href ="#">Signup</a></div>
        <div><a href ="#">Login</a></div>
        <div><a href ="#">Product List</a></div>
    </nav-menu>
</nav>
);
}
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">Fashionify</div>
        <div className="middle">
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Login / Register</li>
            <li>Search</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

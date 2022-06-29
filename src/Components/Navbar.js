import React from "react";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <div className="wrapper">
      <h3 className="title"> Dahal Online Shopping</h3>
      <div className="cart-logo">
        <i className="fa-solid fa-cart-shopping cart"></i>
        {cartCount > 0 && <span className="items-count">{cartCount}</span>}
      </div>
    </div>
  );
};

export default Navbar;

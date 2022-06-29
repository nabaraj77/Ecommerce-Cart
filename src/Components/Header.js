import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="cart-wrapper">
      <h3>Your Cart Items</h3>
      <div className="cart-logo">
        <i className="fa-solid fa-cart-shopping cart"></i>
        <span className="items-count">100</span>
      </div>
    </div>
  );
};

export default Header;

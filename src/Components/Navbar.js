import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, checkCart }) => {
  return (
    <div className="wrapper">
      <h3 className="title"> Dahal Online Shopping</h3>
      <div className="cart-logo" onClick={checkCart}>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping cart"></i>
        </Link>
        {cartCount > 0 && <span className="items-count">{cartCount}</span>}
      </div>
    </div>
  );
};

export default Navbar;

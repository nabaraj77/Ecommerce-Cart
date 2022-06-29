import React from "react";
import "./Main.css";

const Main = ({ data, addToCart }) => {
  return (
    <div className="content-display">
      {/* DISPLAYING ITEMS */}
      {data.map((item, value) => {
        return (
          <div className="items" key={value}>
            <h4 className="item-name">{item.name}</h4>
            <img src={item.img} alt={item.name} className="image" />
            <p className="price">Price: ${item.price}</p>
            <button className="btn-cart" onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

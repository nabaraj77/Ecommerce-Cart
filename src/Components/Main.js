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
            <div className="in-stock">
              <img src={item.img} alt={item.name} className="image" />
              {item.isAvailable === false && (
                <span className="not-available">Out of Stock</span>
              )}
            </div>

            <p className="price">Price: ${item.price}</p>
            {item.isAvailable === true ? (
              <button className="btn-cart" onClick={() => addToCart(item.id)}>
                Add to Cart
              </button>
            ) : (
              <span className="no-items">
                <h4>Product will be Available soon</h4>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Main;

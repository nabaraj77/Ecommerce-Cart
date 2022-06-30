import "./Cart.css";

const Cart = ({ cartItems, deleteHandler, minusHandler, plusHandler }) => {
  console.log(cartItems);
  let totalAmount = cartItems.reduce((acc, val) => {
    return (acc += val.quantity * val.price);
  }, 0);
  return (
    <div className="cart-wrapper">
      {cartItems.length > 0 && <h2 className="cart-display ">Your Cart:</h2>}
      {cartItems.map((item) => {
        return (
          <div className="items-cart" key={item.id}>
            <div className="cart-item-name">
              <h5>{item.name}</h5>
            </div>
            <div className="cart-image">
              <img src={item.img} alt={item.name} className="image-cart" />
            </div>

            <div className="quantity">
              <button
                className="item-plus-minus"
                onClick={() => minusHandler(item.id)}
              >
                -
              </button>
              <p className="item-display">{item.quantity}</p>
              <button
                className="item-plus-minus"
                onClick={() => plusHandler(item.id)}
              >
                +
              </button>
            </div>
            <div className="price">
              <p>Rs: ${item.price}</p>
            </div>

            <p className="amount">
              Tot: ${Math.trunc(item.quantity * item.price)}
            </p>
            <i
              className="fa-solid fa-trash trash"
              onClick={() => deleteHandler(item.id)}
            ></i>
          </div>
        );
      })}
      {totalAmount > 0 ? (
        <span className="total-amount">Total:${Math.trunc(totalAmount)}</span>
      ) : (
        "Cart Empty: Please add the items to the cart"
      )}
    </div>
  );
};

export default Cart;

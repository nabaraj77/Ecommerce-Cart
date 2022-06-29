import "./Cart.css";

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  let totalAmount = cartItems.reduce((acc, val) => {
    return (acc += val.quantity * val.price);
  }, 0);
  return (
    <div className="cart-wrapper">
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
              <p>Q:{item.quantity}</p>
            </div>
            <div className="price">
              <p>Rs: ${item.price}</p>
            </div>

            <p className="amount">Tot: ${item.quantity * item.price}</p>
            <i className="fa-solid fa-trash"></i>
          </div>
        );
      })}

      {totalAmount > 0 ? (
        <span className="total-amount">Total:${totalAmount}</span>
      ) : (
        "Cart Empty: Please add the items to the cart"
      )}
    </div>
  );
};

export default Cart;

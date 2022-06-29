import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Data from "./Components/Data";
import { useState } from "react";
import Cart from "./Components/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id) => {
    setCartCount(cartCount + 1);

    //CHECK ITEMS IF EXISTS IN THE CART

    let existItem = cartItems.find((item) => {
      return item.id === id;
    });
    if (existItem) {
      let updatedCart = cartItems.map((item) => {
        if (item.id === existItem.id) {
          console.log("Duplicate");
          console.log(existItem.quantity);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      console.log(updatedCart);
      setCartItems(updatedCart);
    } else {
      //ADDING CART ITEMS
      setCartItems([
        ...cartItems,
        ...Data.filter((item) => {
          return item.id === id;
        }),
      ]);
    }
  };
  // console.log(cartItems);
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Main data={Data} cartCount={cartCount} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </>
  );
}

export default App;

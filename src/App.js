import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Data from "./Components/Data";
import { useState } from "react";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id) => {
    setCartCount(cartCount + 1);

    //SHOW CART ON CLICK

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
    //DELETING THE ITEMS
  };
  const deleteHandler = (id) => {
    const updatedCart = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(updatedCart);
    setCartCount(cartCount - 1);
  };
  const minusHandler = (id) => {
    let existItem = cartItems.find((item) => {
      return item.id === id;
    });
    if (existItem) {
      let updatedCart = cartItems.map((item) => {
        if (item.id === existItem.id) {
          console.log("Duplicate");
          console.log(existItem.quantity);
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      console.log(updatedCart);
      setCartItems(updatedCart);
    }
  };

  const plusHandler = (id) => {
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
    }
  };
  // console.log(cartItems);
  return (
    <>
      {
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar cartCount={cartCount} />
                <Main data={Data} cartCount={cartCount} addToCart={addToCart} />
              </>
            }
          ></Route>

          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                deleteHandler={deleteHandler}
                minusHandler={minusHandler}
                plusHandler={plusHandler}
              />
            }
          ></Route>
        </Routes>
      }
    </>
  );
}

export default App;

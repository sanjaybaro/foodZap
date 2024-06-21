import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    if (!cartItems[itemID]) {
      //if that id not avilable create new one
      setCartItems((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      //if available add prev +1
      setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

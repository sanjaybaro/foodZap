import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { url } from "../utils/url";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      //if that id not avilable create new one
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //if available add prev +1
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // useEffect(() => {
  //   // console.log(cartItems);
  // }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  //fetchfoodlist from backend
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/food/list");
    setFoodList(response.data.data);
    setLoading(false);
  };

  //load the cart data even pasge was refresh
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  //page will remain same with token even after reloding below logic
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    loading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Myorders from "./Pages/MyOrders/Myorders";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Verify from "./Pages/Verify/Verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    <ToastContainer/>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

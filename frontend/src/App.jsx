import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Verify from "./Pages/Verify/Verify";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { url } from "../../utils/url";
import "./Myorders.css";
import { toast } from "react-toastify";

const Myorders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/order/userorders",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      setData(response.data.data);
      toast.success("Order Placed");
    } else {
      toast.error("Order Not Placed!");
    }

    // console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf; </span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorders;

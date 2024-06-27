import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./List.css";
import { url } from "../../utils/url";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/food/list`);
      // console.log(response.data.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
    }
  };

  const removeFood = async (foodId) => {
    // console.log(foodId);
    try {
      const response = await axios.post(`${url}/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error Remove");
      }
    } catch (error) {
      toast.error("An error occurred while removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Sl No.</b>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <p className="idx">{index + 1 + " ) "}</p>
            <img src={`${url}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className="cursor">
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

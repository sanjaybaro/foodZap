import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { Oval } from "react-loader-spinner";

const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(StoreContext);

  if (loading) {
    return (
      <>
        <h1 style={{ textAlign: "center", fontFamily: "Outfit" }}>
          Top dishes near you loading...
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#ece52a"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // {console.log(category,item.category);}
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

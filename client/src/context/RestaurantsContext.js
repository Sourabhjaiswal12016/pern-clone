import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
    toast.success("Restaurant added successfully..");
  };
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};

//usingcontext api -- to store the api results of backend:
//benefit---: anywhere in our front end app, we can use the data , no need to worry about passing the data to props or states.

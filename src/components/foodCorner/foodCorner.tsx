import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import RestaurantCard from "./restaurantCard"

const FoodCorner: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#FADADD",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div >
        <Typography variant="h2" gutterBottom>
          Food Corner
        </Typography>
        <h2>Food Corner</h2>
        {/* <RestaurantCard/> */}
        {/* Swiggy API Integration will go here */}
      </div>
    </div>
  );
};

export default FoodCorner;

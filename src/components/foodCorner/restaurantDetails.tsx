// components/RestaurantDetails.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import restaurantStore from "../../store/FoodCorner/restaurantStore";
import { Box, Typography, CircularProgress, Divider } from "@mui/material";
import { toJS } from "mobx";

const RestaurantDetails: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchRestaurantDetails();
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}`
      );
      const json = await data.json();
      restaurantStore.setRestaurantDetails(json?.data || null);
    } catch (error) {
      console.error("Failed to fetch restaurant details:", error);
    }
  };

  let resInfo = restaurantStore.restaurantDetails;
  resInfo = toJS(resInfo);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating
} = resInfo?.cards?.[2]?.card?.card?.info || {};
console.log('res info', resInfo)

const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards  || [];
console.log("item cards: " + JSON.stringify(itemCards))

  if (!resInfo) return <CircularProgress sx = {{marginTop: 10}} />;

  return (
    <Box p={4} sx = {{ marginTop: 10}}>
      <Typography variant="h4" sx={{marginTop: 10}} gutterBottom>
        {name}
      </Typography>
      {/* <Typography variant="subtitle1" color="textSecondary">
        {itemCards.cuisines.join(", ")}
      </Typography> */}
      <Typography variant="body1" color="textSecondary">
        Cost for Two: {costForTwoMessage}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Menu Items:</Typography>
      {/* <ul>
        {itemCards.items.map((item: any, index: number) => (
          <li key={index}>
            <Typography variant="body2">{item.name}</Typography>
          </li>
        ))}
      </ul> */}
    </Box>
  );
});

export default RestaurantDetails;

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import restaurantStore from "../../store/FoodCorner/restaurantStore";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Box as MuiBox,
} from "@mui/material";
import { toJS } from "mobx";

const RestaurantList: React.FC = observer(() => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      restaurantStore.setRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      p={2}
      sx={{ marginTop: 10 }}
    >
      {restaurantStore.restaurants.map((res) => {
        const unwrappedRes = toJS(res);
        const { info } = unwrappedRes;
        const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`;

        return (
          <Card
            key={info.id}
            sx={{
              width: 250,
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              borderRadius: "8px",
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link
              to={`/restaurant/${info.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <MuiBox
                  component="img"
                  src={imageUrl}
                  alt={info.name}
                  sx={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                  {info.name || "Restaurant Name Not Available"}
                </Typography>

                <Typography variant="body2" gutterBottom>
                  {info.header || "Header Not Available"}
                </Typography>

                <Typography variant="body2" gutterBottom>
                  {info.discountTag || "No Discount"}
                </Typography>

                <Typography variant="body2" gutterBottom>
                  {info.locality || "Locality Not Available"}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {info.cuisines
                    ? info.cuisines.join(", ")
                    : "Cuisine Not Available"}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {info.costForTwo || "Cost for Two Not Available"}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {info.avgRating ? `${info.avgRating} stars` : "No Rating"}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {info.eta || "ETA Not Available"}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        );
      })}
    </Box>
  );
});

export default RestaurantList;

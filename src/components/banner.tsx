import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo at the top-left corner */}
      <Box
        component="img"
        src="https://www.gaganpublicschool.com/wp-content/uploads/2018/03/Untitled-1.jpg" // Replace with your logo URL
        alt="Logo"
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "90px", // Adjust the size as needed
          height: "auto",
          zIndex: 2, // Ensure it stays above the carousel
        }}
      />

      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        dynamicHeight
        interval={3000}
      >
        {/* First Slide */}
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
          <img
            src="https://thumbs.dreamstime.com/b/new-school-new-teacher-black-woman-little-boy-meeting-vector-cartoon-no-transparencies-eps-55274605.jpg"
            alt="Banner Image 1"
            style={{
              width: "100vw",
              height: "100%",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
            }}
          >
            Welcome to School Spy
          </Typography>
        </div>

        {/* Second Slide */}
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
          <img
            src="https://media.istockphoto.com/id/1197654394/vector/vector-of-happy-children-students-runnning-on-a-bridge-handshake.jpg?s=612x612&w=0&k=20&c=cIeXiSUxJ9ZJzIQNpXTCu_mdOlwJWjXbGxCcJqIn9Tc="
            alt="Banner Image 2"
            style={{
              width: "100vw",
              height: "100%",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
            }}
          >
            Discover the Best Schools Through Honest Feedback and Real Experiences.
          </Typography>
        </div>
      </Carousel>
    </Box>
  );
};

export default Banner;

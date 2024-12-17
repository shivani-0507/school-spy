import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import Navbar from "./navbar";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle the search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <Navbar />
      {/* Main Container for Background Image */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          backgroundImage:
            "url('https://media.bizj.us/view/img/11177505/cyber*xx866-487-0-57.jpg')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Logo at the top left */}
        <Box
          component="img"
          src="https://www.gaganpublicschool.com/wp-content/uploads/2018/03/Untitled-1.jpg" // Replace with your logo URL
          alt="Logo"
          sx={{
            position: "absolute",
            top: "50px",
            left: "20px",
            width: "90px", // Adjust the size as needed
            height: "auto",
            zIndex: 2,
          }}
        />

        {/* Overlay to make text more readable */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
            zIndex: 1,
          }}
        />

        {/* Main title */}
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2, // Text stays above the overlay
            maxWidth: "80%", // Prevent text from being too wide
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: 4,
              marginTop: 4,
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          >
            Find the Best School for Your Child
          </Typography>
        </Box>

        {/* Search bar */}
        <TextField
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            width: "50%",
            marginTop: "20%",
            marginBottom: 3,
            backgroundColor: "white",
            borderRadius: "25px",
            position: "relative", // Ensure it's above other content
            zIndex: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search for schools or areas"
        />

        {/* Three white boxes inside the background image section */}
        <Box
          sx={{ width: "100%", padding: "0 20px", zIndex: 2, marginTop: 50 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Space out the boxes
              flexWrap: "nowrap", // Keep the boxes in the same line
              gap: 2,
            }}
          >
            {/* Chunk 1 */}
            <Paper
              sx={{
                flex: "1 1 13%", // Decreased width of the box
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
              }}
            >
              <SchoolIcon sx={{ marginBottom: 2, color: "#1976D2" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Empowering Parents and Students
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                At School Spy, we believe in empowering parents and students
                with the knowledge to make informed decisions. With honest
                feedback from students, teachers, and parents, our platform
                offers a transparent way to explore and evaluate schools across
                various regions.
              </Typography>
            </Paper>

            {/* Chunk 2 */}
            <Paper
              sx={{
                flex: "1 1 13%", // Decreased width of the box
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
              }}
            >
              <ChatIcon sx={{ marginBottom: 2, color: "#1976D2" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                A Transparent Way to Evaluate Schools
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Whether you're looking for top-rated schools, schools with
                specific facilities, or just want to read real experiences from
                others, School Spy helps you make the right choice for your
                future. Our reviews provide all the information you need in one
                place.
              </Typography>
            </Paper>

            {/* Chunk 3 */}
            <Paper
              sx={{
                flex: "1 1 13%", // Decreased width of the box
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
              }}
            >
              <PeopleIcon sx={{ marginBottom: 2, color: "#1976D2" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Join Our Community and Find Your School Today
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Join the School Spy community today and start discovering
                schools that best match your needs. It’s easy, it’s fast, and
                it’s free! Start your search now and find the right educational
                institution for your child's future.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

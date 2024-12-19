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

  return (
    <>
      <Navbar />
      {/* Main Container for Background Image */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          backgroundImage:
            "url('https://image.made-in-china.com/2f0j00kocWAjMBpirm/Factory-Direct-Sale-Summer-and-Spring-School-Uniforms-for-Primary-and-Secondary-School-Children-Can-Export-Comfortable-and-Breathable-New-School-Uniform.jpg')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "top center",
          position: "relative",
        }}
      >
        {/* Logo at the top left */}
        {/* <Box
          component="img"
          src="https://t4.ftcdn.net/jpg/02/73/32/91/360_F_273329186_mHB7vFG2MsMLU4zdchrVPf7RsnIBfcQH.jpg" // Replace with your logo URL
          alt="Logo"
          sx={{
            position: "absolute",
            top: "50px",
            left: "20px",
            width: "60px", // Adjust the size as needed
            height: "auto",
            zIndex: 2,
          }}
        /> */}

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
            zIndex: 2,
            maxWidth: "80%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: 4,
              marginTop: "30%",
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
          sx={{
            width: "50%",
            marginTop: "45%",
            marginBottom: 3,
            backgroundColor: "white",
            borderRadius: "25px",
            position: "relative",
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

        <Box
          sx={{ width: "100%", padding: "0 20px", zIndex: 2, marginTop: 11 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              gap: 2,
            }}
          >
            {/* Chunk 1 */}
            <Paper
              sx={{
                flex: "1 1 13%",
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#FADADD",
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
                flex: "1 1 13%",
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#FADADD",
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
                flex: "1 1 13%",
                padding: "20px",
                boxShadow: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#FADADD",
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

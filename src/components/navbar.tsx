// NavBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="fixed" // Keeps the nav bar fixed at the top over the background
      sx={{
        backgroundColor: "transparent", // No background color
        boxShadow: "none", // Remove the box shadow
        color: "white", // Text color will be white so it stands out against the background
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {/* Logo or App Title */}
          <Typography variant="h6" component="div">
            School Spy
          </Typography>
        </Box>
        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/food-corner">
          Food Corner
        </Button>
        <Button color="inherit" component={Link} to="/feedback">
          Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

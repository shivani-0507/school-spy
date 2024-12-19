// NavBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="fixed" 
      sx={{
        backgroundColor: "transparent", 
        boxShadow: "none", 
        color: "black", 
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          
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
        <Button color="inherit" component={Link} to="/restaurant">
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

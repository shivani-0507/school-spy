import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import RestaurantDetails from "./components/foodCorner/restaurantDetails";
import RestaurantList from "./components/foodCorner/restaurantList";
import Feedback from "./components/foodCorner/feedbackForm";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;

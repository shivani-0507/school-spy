import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import FoodCorner from "./components/foodCorner/foodCorner";
import Feedback from "./components/foodCorner/feedbackForm";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-corner" element={<FoodCorner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;

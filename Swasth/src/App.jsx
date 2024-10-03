// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Header from "./components/Header";
// import Features from "./components/Features";
import HealthForm from "./components/HealthForm";
import GoalForm from "./components/GoalFrom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Header/>
      <HealthForm />
      {/* <Features/> */}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/set-goal" element={<GoalForm />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;

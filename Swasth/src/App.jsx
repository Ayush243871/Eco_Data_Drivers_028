// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Header from "./components/Header";
// import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Header/>
      <Features/>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;

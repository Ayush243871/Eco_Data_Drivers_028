// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Header from "./components/Header";
import {Features} from "./components/Features"
import Footer from "./components/Footer";
import WeatherWidget from "./components/Weather/weather";
import SleepMonitor from './components/SleepMonitor/Sleepmonitor'

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <WeatherWidget/>
      <Header/>
      <Features/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/sleep-monitor" element={<SleepMonitor />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">Welcome to Swasth</h1>
      <p className="sub-header">
        Experience a holistic approach to well-being with tailored health plans, activity tracking, balanced nutrition, and mental wellness support—all seamlessly integrated.
        <br />
        Empower your well-being journey with expert recommendations and real-time health insights.
      </p>
      <Link to="/get-started">
        <button className="button-primary">Get Started</button>
      </Link>
      <Link to="/about"> 
        <button className="button-secondary">Learn More</button>
      </Link>
    </div>
  );
};

export default Header;

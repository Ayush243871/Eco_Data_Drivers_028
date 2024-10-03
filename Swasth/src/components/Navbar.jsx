import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="./src/assets/logo.png"
          alt="Logo"
          className="logoImg"
        />
        <span className="logoText">Swasth</span>
      </div>
      <div className="navLinks">
        <a href="/" className="link">
          Home
        </a>

        
      </div>
      <button className="loginButton">Login</button>
    </nav>
  );
};

export default Navbar;

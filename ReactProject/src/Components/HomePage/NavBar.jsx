import Logo from '../../assets/LogoWhite.jpg';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearAuthenticated } from "../../store/AuthSlice";
import "./NavBar.css";
import { Image } from '@chakra-ui/react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearAuthenticated());
      localStorage.removeItem("lastRoute"); // Clear last route on logout
      navigate("/"); // Redirect to landing page
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleNavigation = (path) => {
    localStorage.setItem("lastRoute", path); // Store the last visited route
    navigate(path);
  };

  return (
    <nav className="navbar sticky">
      <div className="logo">
      <Image src={Logo} boxSize="40px" /* Adjust the size of the logo */
  borderRadius={10} onClick={() => handleNavigation("/Main")}/>
       
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
    
        <li>
          <NavLink to="/Main/HealthForm" onClick={() => handleNavigation("/Main/HealthForm")}>Health Form</NavLink>
        </li>
        <li>
          <NavLink to="/Main/GoalForm" onClick={() => handleNavigation("/Main/GoalForm")}>Goal Form</NavLink>
        </li>
        <li>
          <NavLink to="/Main/MealWrapper" onClick={() => handleNavigation("/Main/MealWrapper")}>Meal Track</NavLink>
        </li>
        <li>
          <NavLink to="/Main/wellness" onClick={() => handleNavigation("/Main/wellness")}>Wellness Tips</NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

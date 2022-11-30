import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navigation.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useEffect } from "react";

// In Navbar, we can assign a style from an object by using curly braces
function Navigation() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setExpandNavbar((prev) => !prev);}}>
        <ReorderIcon /> 
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/AboutMe"> About Me </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Resume"> Resume </Link>
      </div>
    </div>
  );
}

export default Navigation;

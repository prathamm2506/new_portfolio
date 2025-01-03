import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`line top ${isMenuOpen ? "rotate-top" : ""}`}></div>
        <div className={`line middle ${isMenuOpen ? "hidden" : ""}`}></div>
        <div
          className={`line bottom ${isMenuOpen ? "rotate-bottom" : ""}`}
        ></div>
      </div>

      {/* Slide-in Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

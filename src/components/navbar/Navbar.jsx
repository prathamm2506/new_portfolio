import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Logo */}
      <p className="logo">Pratham</p>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`line top ${isMenuOpen ? "rotate-top" : ""}`}></div>
        <div className={`line middle ${isMenuOpen ? "hidden" : ""}`}></div>
        <div className={`line bottom ${isMenuOpen ? "rotate-bottom" : ""}`}></div>
      </div>

      {/* Slide-in Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>Portfolio</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

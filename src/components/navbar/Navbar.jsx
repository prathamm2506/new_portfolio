import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="contt">
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
            <a href="#expsec" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#testsec" onClick={closeMenu}>Testimonials</a>
          </li>
          <li>
            <a href="#edusec" onClick={closeMenu}>Education</a>
          </li>
          <li>
            <a href="#skillssec" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#projectsec" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#contactsec" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

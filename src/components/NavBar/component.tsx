import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import burgerIcon from "../../assets/icons/burger-menu.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="NavBar">
      <div className="nav-description">
        <span>François Touchard</span>
        <span className="nav-description-job">Développeur front-end applications mobile</span>
      </div>
      <div className="nav-links">
        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={closeMenu}>Home</Link>
        <Link className={`nav-link ${isActive('/skills') ? 'active' : ''}`} to="/skills" onClick={closeMenu}>Skills</Link>
        <Link className={`nav-link ${isActive('/work') ? 'active' : ''}`} to="/work" onClick={closeMenu}>Work</Link>
        <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about" onClick={closeMenu}>About</Link>
        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <button className="burger" onClick={toggleMenu} aria-label="Menu">
        <img src={burgerIcon} alt="Menu" />
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/work" onClick={closeMenu}>Work</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

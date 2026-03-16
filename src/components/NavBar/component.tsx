import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import burgerIcon from "../../assets/icons/burger-menu.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


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
      <div className="nav-description" onClick={() => navigate("/")}>
        <span className="nav-description-name">François Touchard</span>
        <span className="nav-description-job">Développeur Frontend</span>
      </div>
      <div className="nav-links">
        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={closeMenu}>Accueil</Link>
        <Link className={`nav-link ${isActive('/skills') ? 'active' : ''}`} to="/skills" onClick={closeMenu}>Compétences</Link>
        <Link className={`nav-link ${isActive('/work') ? 'active' : ''}`} to="/works" onClick={closeMenu}>Réalisations</Link>
        <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about" onClick={closeMenu}>À propos</Link>
        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <button className="burger" onClick={toggleMenu} aria-label="Menu">
        <img src={burgerIcon} alt="Menu" />
      </button>

      {
        isOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={closeMenu}>Accueil</Link>
            <Link to="/skills" onClick={closeMenu}>Compétences</Link>
            <Link to="/works" onClick={closeMenu}>Réalisations</Link>
            <Link to="/about" onClick={closeMenu}>À propos</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
        )
      }
    </nav >
  );
};

export default NavBar;

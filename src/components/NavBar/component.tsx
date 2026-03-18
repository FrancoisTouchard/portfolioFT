import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./NavBar.css";
import burgerIcon from "../../assets/icons/burger-menu.svg";
import rafterDown from "../../assets/icons/rafter-down.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Fermer les dropdowns si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (skillsRef.current && !skillsRef.current.contains(e.target as Node)) {
        setSkillsOpen(false);
      }
      if (worksRef.current && !worksRef.current.contains(e.target as Node)) {
        setWorksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="NavBar">
      <div className="nav-description" onClick={() => navigate("/")}>
        <span className="nav-description-name">François Touchard</span>
        <span className="nav-description-job">Développeur Frontend</span>
      </div>
      <div className="nav-links">
        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={closeMenu}>Accueil</Link>
        {/* Dropdown Skills */}
        <div className="nav-link-dropdown-wrapper" ref={skillsRef}>
          <Link className={`nav-link ${isActive("/skills") ? "active" : ""}`} to="/skills">
            Compétences
          </Link>
          <button
            className={`dropdown-toggle ${skillsOpen ? "open" : ""}`}
            onClick={() => setSkillsOpen(!skillsOpen)}
            aria-label="Ouvrir le sous-menu Compétences"
          >
            <img src={rafterDown} alt="Icône de menu déroulant" />
          </button>
          {skillsOpen && (
            <div className="dropdown-menu">
              <Link to="/skills/javascript" onClick={() => setSkillsOpen(false)}>JavaScript</Link>
              <Link to="/skills/typescript" onClick={() => setSkillsOpen(false)}>TypeScript</Link>
              <Link to="/skills/react-native" onClick={() => setSkillsOpen(false)}>React Native</Link>
              <Link to="/skills/react" onClick={() => setSkillsOpen(false)}>React</Link>
              <Link to="/skills/uxui" onClick={() => setSkillsOpen(false)}>UX/UI</Link>
              <Link to="/skills/communication" onClick={() => setSkillsOpen(false)}>Communication</Link>
              <Link to="/skills/creativity" onClick={() => setSkillsOpen(false)}>Créativité</Link>
              <Link to="/skills/critical-thinking" onClick={() => setSkillsOpen(false)}>Esprit Critique</Link>
              <Link to="/skills/commitment" onClick={() => setSkillsOpen(false)}>Implication</Link>
              <Link to="/skills/organization" onClick={() => setSkillsOpen(false)}>Organisation</Link>
            </div>
          )}
        </div>
        {/* Dropdown Works */}
        <div className="nav-link-dropdown-wrapper" ref={worksRef}>
          <Link className={`nav-link ${isActive("/works") ? "active" : ""}`} to="/works">
            Réalisations
          </Link>
          <button
            className={`dropdown-toggle ${worksOpen ? "open" : ""}`}
            onClick={() => setWorksOpen(!worksOpen)}
            aria-label="Ouvrir le sous-menu Réalisations"
          >
            <img src={rafterDown} alt="Icône de menu déroulant" />
          </button>
          {worksOpen && (
            <div className="dropdown-menu">
              <Link to="/works/multimedia-carrousel" onClick={() => setWorksOpen(false)}>Carrousel Multimédia</Link>
              <Link to="/works/wiki" onClick={() => setWorksOpen(false)}>Module Cours & Wiki</Link>
              <Link to="/works/indigo-project" onClick={() => setWorksOpen(false)}>The Indigo Project</Link>
              <Link to="/works/mygiflibrary" onClick={() => setWorksOpen(false)}>My Gif Library</Link>
              <Link to="/works/chatbot" onClick={() => setWorksOpen(false)}>Pickme & HelloMyBot</Link>
            </div>
          )}
        </div>
        <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about" onClick={closeMenu}>À propos</Link>
        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      {/* Burger Menu Mobile */}
      <button className="burger" onClick={toggleMenu} aria-label="Menu">
        <img src={burgerIcon} alt="Icône de menu mobile" />
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

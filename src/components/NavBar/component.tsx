import './NavBar.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import burgerIcon from '../../assets/icons/burger-menu.svg';
import rafterDown from '../../assets/icons/rafter-down.svg';
import {
  SKILLS_NAV_LINKS,
  WORKS_NAV_LINKS,
} from '../../utils/navigation/navigation-links';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSkillsDesktopOpen, setIsSkillsDesktopOpen] = useState(false);
  const [isWorksDesktopOpen, setIsWorksDesktopOpen] = useState(false);
  const [isSkillsMobileOpen, setIsSkillsMobileOpen] = useState(false);
  const [isWorksMobileOpen, setIsWorksMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const skillsMobileRef = useRef<HTMLDivElement>(null);
  const worksMobileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAll = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsSkillsMobileOpen(false);
    setIsWorksMobileOpen(false);
    setIsSkillsDesktopOpen(false);
    setIsWorksDesktopOpen(false);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const onNameClick = () => {
    navigate('/');
    closeAll();
  };

  // Fermer les menus si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        closeAll();
      }
      if (skillsRef.current && !skillsRef.current.contains(target)) {
        setIsSkillsDesktopOpen(false);
      }
      if (worksRef.current && !worksRef.current.contains(target)) {
        setIsWorksDesktopOpen(false);
      }
      if (
        skillsMobileRef.current &&
        !skillsMobileRef.current.contains(target)
      ) {
        setIsSkillsMobileOpen(false);
      }
      if (worksMobileRef.current && !worksMobileRef.current.contains(target)) {
        setIsWorksMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [closeAll]);

  return (
    <nav className="NavBar">
      <div className="nav-description" onClick={onNameClick}>
        <span className="nav-description-name">François Touchard</span>
        <span className="nav-description-job">Développeur Frontend</span>
      </div>
      <div className="nav-links">
        <Link
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
          to="/"
          onClick={closeAll}>
          Accueil
        </Link>
        {/* Dropdown Skills */}
        <div className="nav-link-dropdown-wrapper" ref={skillsRef}>
          <Link
            className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
            to="/skills">
            Compétences
          </Link>
          <button
            className={`dropdown-toggle ${isSkillsDesktopOpen ? 'open' : ''}`}
            onClick={() => setIsSkillsDesktopOpen(!isSkillsDesktopOpen)}
            aria-label="Ouvrir le sous-menu Compétences">
            <img src={rafterDown} alt="Icône de menu déroulant" />
          </button>
          {isSkillsDesktopOpen && (
            <div className="dropdown-menu">
              {SKILLS_NAV_LINKS.map(skill => (
                <Link
                  key={skill.path}
                  to={`/skills/${skill.path}`}
                  onClick={closeAll}>
                  {skill.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Dropdown Works */}
        <div className="nav-link-dropdown-wrapper" ref={worksRef}>
          <Link
            className={`nav-link ${isActive('/works') ? 'active' : ''}`}
            to="/works">
            Réalisations
          </Link>
          <button
            className={`dropdown-toggle ${isWorksDesktopOpen ? 'open' : ''}`}
            onClick={() => setIsWorksDesktopOpen(!isWorksDesktopOpen)}
            aria-label="Ouvrir le sous-menu Réalisations">
            <img src={rafterDown} alt="Icône de menu déroulant" />
          </button>
          {isWorksDesktopOpen && (
            <div className="dropdown-menu">
              {WORKS_NAV_LINKS.map(work => (
                <Link
                  key={work.path}
                  to={`/works/${work.path}`}
                  onClick={closeAll}>
                  {work.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          to="/about"
          onClick={closeAll}>
          À propos
        </Link>
        <Link
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          to="/contact"
          onClick={closeAll}>
          Contact
        </Link>
      </div>

      {/* Menu Mobile */}
      <button
        className="burger"
        onClick={toggleMenu}
        aria-label="Menu"
        ref={burgerRef}>
        <img src={burgerIcon} alt="Icône de menu mobile" />
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          <Link to="/" onClick={closeAll}>
            Accueil
          </Link>

          <div className="mobile-menu-item-wrapper" ref={skillsMobileRef}>
            <div className="mobile-menu-item">
              <Link to="/skills" onClick={closeAll}>
                Compétences
              </Link>
              <button
                className={`dropdown-toggle ${isSkillsMobileOpen ? 'open' : ''}`}
                onClick={() => setIsSkillsMobileOpen(!isSkillsMobileOpen)}>
                <img src={rafterDown} alt="Menu déroulant compétences" />
              </button>
            </div>
            {isSkillsMobileOpen && (
              <div className="mobile-dropdown-menu">
                {SKILLS_NAV_LINKS.map(skill => (
                  <Link
                    key={skill.path}
                    to={`/skills/${skill.path}`}
                    onClick={closeAll}>
                    {skill.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-menu-item-wrapper" ref={worksMobileRef}>
            <div className="mobile-menu-item">
              <Link to="/works" onClick={closeAll}>
                Réalisations
              </Link>
              <button
                className={`dropdown-toggle ${isWorksMobileOpen ? 'open' : ''}`}
                onClick={() => setIsWorksMobileOpen(!isWorksMobileOpen)}>
                <img src={rafterDown} alt="Menu déroulant réalisations" />
              </button>
            </div>
            {isWorksMobileOpen && (
              <div className="mobile-dropdown-menu">
                {WORKS_NAV_LINKS.map(work => (
                  <Link
                    key={work.path}
                    to={`/works/${work.path}`}
                    onClick={closeAll}>
                    {work.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" onClick={closeAll}>
            À propos
          </Link>
          <Link to="/contact" onClick={closeAll}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

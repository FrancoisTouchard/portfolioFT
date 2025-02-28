import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="NavBar">
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/work'>Work</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
};

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'; // Ensure this path matches your project structure

const InstagramLogo = () => (
    <svg className="instagram-logo" width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z'/>
      <path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z'/>
      <circle cx='15.156' cy='4.858' r='1.237'/>
    </svg>
  );

  const NavBar = ({ className }) => {
    return (
      <nav className={`NavBar ${className}`}>
        <div className="brand">
          <NavLink to="/work" className="brand-link">PRISPRODUCED</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/work" className={({ isActive }) => isActive ? 'active' : undefined}>Work</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink></li>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <InstagramLogo />
        </a>
        </ul>

      </nav>
    );
  };
  
  export default NavBar;
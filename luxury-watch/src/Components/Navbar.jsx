import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Include FontAwesome icons with React
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'; //Import browser and heart icons
import './NavBar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        NOBLETIME
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/about">MEN'S WATCHES</NavLink>
        </li>
        <li>
          <NavLink to="/services">WOMEN'S WATCHES</NavLink>
        </li>
      </ul>
      <div className="icons">
        <NavLink to="/search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </NavLink>
        <NavLink to="/wishlist">
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </NavLink>
      </div>
    </nav>
  );
};

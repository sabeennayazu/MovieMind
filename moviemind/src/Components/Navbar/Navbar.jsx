import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import {
  FaBars,
  FaHeart,
  FaBookmark,
  FaUser,
  FaSignOutAlt,
  FaCog,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaHistory,
  FaThLarge,
} from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [browseDropdownOpen, setBrowseDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleBrowseDropdown = () => {
    setBrowseDropdownOpen(!browseDropdownOpen);
  };

  return (
    <nav className="navbar">
      
<div className="navbar-left">
  <Link to="/" className="nav-home-link">
    <FaBars className="menu-icon" />
    <h1 className="navbar-logo">MovieMind</h1>
  </Link>
  <input type="text" placeholder="Search movies..." className="search-bar" />
</div>

      <div className="navbar-right">
        {/* Browse Dropdown */}
        <div className="nav-icon-group" title="Browse" onClick={toggleBrowseDropdown}>
          <FaThLarge className="icon browse-icon" />
          <span className="nav-label">Browse</span>
          {browseDropdownOpen && (
            <div className="dropdown-menu browse-dropdown">
              <button className="dropdown-item">Popular</button>
              <button className="dropdown-item">Top rated</button>
              <button className="dropdown-item">Trending</button>
              <button className="dropdown-item">Recommendation</button>
            </div>
          )}
        </div>

        {/* Favourites */}
       <Link to="/favourites" className="nav-icon-group" title="Favourites">
  <FaHeart className="icon" />
  <span className="nav-label">Favourites</span>
</Link>

        {/* Wishlist */}
        <Link to="/Wishlist" className="nav-icon-group" title="Wishlist">
  <FaBookmark className="icon" />
  <span className="nav-label">Wishlist</span>
</Link>
        

        {/* Profile & Dropdown */}
        <div className="profile-container">
          <div onClick={toggleDropdown} className="nav-icon-group">
            <FaUser className={`icon-profile ${dropdownOpen ? 'active' : ''}`} title="Profile" />
            <span className="nav-label">Profile</span>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item"><FaUser /> Profile</button>
              <button className="dropdown-item"><FaHistory /> Your Activity</button>
              <button className="dropdown-item"><FaCog /> Settings & Privacy</button>
              <button className="dropdown-item"><FaQuestionCircle /> Help & Support</button>
              <button className="dropdown-item"><FaExclamationTriangle /> Report a Problem</button>
              <hr />
              <Link to="/Login" className="dropdown-item logout">
  <FaSignOutAlt /> Logout
</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
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
} from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="menu-icon" />
        <h1 className="navbar-logo">MovieMind</h1>
        <input type="text" placeholder="Search movies..." className="search-bar" />
      </div>
      <div className="nav_components">
      <div className="navbar-right">
        {/* Favourites */}
        <div className="nav-icon-group" title="Favourites">
          <FaHeart className="icon" />
          <span className="nav-label">Favourites</span>
        </div>

        {/* Wishlist */}
        <div className="nav-icon-group" title="Wishlist">
          <FaBookmark className="icon" />
          <span className="nav-label">Wishlist</span>
        </div>

        {/* Profile + Dropdown */}
        <div className="profile-container">
          <FaUser
            className="icon-profile"
            title="Profile"
            onClick={toggleDropdown}
            style={{ cursor: 'pointer' }}
            />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item"><FaUser /> Profile</button>
              <button className="dropdown-item"><FaHistory /> Your Activity</button>
              <button className="dropdown-item"><FaCog /> Settings & Privacy</button>
              <button className="dropdown-item"><FaQuestionCircle /> Help & Support</button>
              <button className="dropdown-item"><FaExclamationTriangle /> Report a Problem</button>
              <hr />
              <button className="dropdown-item logout"><FaSignOutAlt /> Logout</button>
            </div>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

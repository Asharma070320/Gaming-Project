import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar_container">
      <div className="nav_leftSection">
        <img className="set_logo" src={logo} alt="company_logo" />
      </div>

      <div className="nav_rightSection">
        {/* Search Bar */}
        <div className="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>

          <input
            id="query"
            className="input"
            type="search"
            placeholder="Search..."
            name="searchbar"
          />
        </div>
        <p className="rules">Rules</p>
        <div className="balance_Exp">
          <p className="balance">
            Balance:1500 <br /> Exp:0
          </p>
        </div>
        <div className="demo_icon" onClick={toggleDropdown} ref={dropdownRef}>
          <p className="demo">
            Demo{" "}
            <i
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
              className={
                isDropdownOpen
                  ? "ri-arrow-drop-up-line icon"
                  : "ri-arrow-down-s-line icon"
              }
            ></i>
          </p>
          {isDropdownOpen && (
            <div className="dropdown_menu">
              <ul>
                <li>Account Statement</li>
                <li>Current Bet</li>
                <li>Casino Results</li>
                <li>Set Button Values</li>
                <hr />
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

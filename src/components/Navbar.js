import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="nav_leftSection">
        <div className="nav_logo"></div>
        <h1>
          SAFFRON <br /> EXCH
        </h1>
      </div>

      <div className="nav_rightSection">
        {/* Search Bar */}
        <div class="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>

          <input
            id="query"
            class="input"
            type="search"
            placeholder="Search..."
            name="searchbar"
          />
        </div>
        <p className="rules">Rules</p>
        <div className="balance_Exp">
            <p className="balance">Balance:1500 <br /> Exp:0</p>
        </div>
        <div className="demo_icon">
            <p className="demo">Demo <i class="ri-arrow-down-s-line"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Add paths to deadlinks
// Make navbar sticky

import React, { useState } from "react";
import "./Navbar.css";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          {/* Navbar */}
          <div className="navbar-wrapper">
            <a href="">
              <img src="/images/home/LogoBlack.png" alt="Black Logo" />
            </a>

            {/* Links */}
            <nav className="navbar-links" hidden>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu */}
            <nav className={!nav ? "mobile-navbar-links" : "navbar-links"}>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </nav>

            {/* Buttons */}
            <div className="navbar-btns">
              <button className="login-btn">Login</button>
              <button className="sign-up-btn">Sign Up</button>
            </div>

            {/* Menu */}
            <Menu className="menu" size={20} onClick={handleNav} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

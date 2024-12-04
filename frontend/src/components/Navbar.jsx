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
          <div className="wrapper">
            <a href="/">
              <img src="/images/home/LogoBlack.png" alt="Black Logo" />
            </a>
            <nav className="navbar-links" hidden>
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </nav>
            <nav className={!nav ? "mobile-navbar-links" : "navbar-links"}>
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </nav>
            <div className="navbar-btns">
              <button className="login-btn">Login</button>
              <button className="sign-up-btn">Sign Up</button>
            </div>
            <Menu className="menu" size={30} onClick={handleNav} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

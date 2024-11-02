// import React from "react";
import "./Navbar.css"
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">

                    {/* Navbar */}
                    <div className="navbar-wrapper">

                        {/* Logo */}
                        <div className="navbar-logo-wrapper">
                            <div className="navbar-logo">
                                <a href=""><img src="/images/home/LogoBlack.png" alt="Black Logo" /></a>  
                            </div>
                        </div>

                        {/* Links */}
                        <div className="navbar-links-wrapper">
                            <div className="navbar-links">
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">How it works</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">FAQs</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="navbar-btns-wrapper">
                            <div className="navbar-btns">
                                <div className="login-btn-wrapper">
                                    <button>Login</button>
                                </div>
                                <div className="sign-up-btn-wrapper">
                                    <button>Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu-icon-wrapper">
                            <div className="menu-icon">
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
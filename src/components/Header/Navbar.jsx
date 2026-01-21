import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  // addevent listener for scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}
    >
      {/* {Header top start} */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>

      {/* Header botton */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Sign in & Log In */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Log In
              </Link>

              {/* Menu Toggler */}
              <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                <span></span>
                <span></span>
                <span></span>
              </div>

                {/* Social Toggler */}
                <div className="ellepsis-bar d-md-none" onClick={() => setsocialToggle(!socialToggle)}>
                <i class="icofont-info-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Navbar;

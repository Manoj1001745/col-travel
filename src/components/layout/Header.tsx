import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle body class for scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <span className="logo-icon">✈️</span>
          <div className="logo-text">
            <div className="logo-main">COL TRAVEL</div>
            <div className="logo-sub">& TOURS</div>
          </div>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Show X button when menu is open */}
        {isMenuOpen && (
          <button
            className="menu-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              zIndex: 1100,
              background: "none",
              border: "none",
              fontSize: "2rem",
              color: "#0891b2",
              cursor: "pointer",
            }}
          >
            
          </button>
        )}

        {/* Overlay backdrop for mobile menu */}
        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/tour-packages"
            className={`nav-link ${
              location.pathname === "/tour-packages" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Tour Packages
          </Link>
          <Link
            to="/visitor-info"
            className={`nav-link ${
              location.pathname === "/visitor-info" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Visitor Info
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        <div className={`header-actions ${isMenuOpen ? "active" : ""}`}>
          <a href="tel:+1234567890" className="action-btn">
            📞 Call Us
          </a>
          {/* Book Now button only visible when menu is not open */}
          {!isMenuOpen && (
            <Link
              to="/signin"
              className="action-btn primary"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

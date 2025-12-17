import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">✈️</span>
              <div className="logo-text">
                <div className="logo-main">COL TRAVEL</div>
                <div className="logo-sub">& TOURS</div>
              </div>
            </div>
            <p className="footer-description">
              Your trusted travel partner since 2010. Creating unforgettable
              memories worldwide.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tours">Tour Packages</a>
              </li>
              <li>
                <a href="/visa">Visa Services</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li>
                <a href="/flights">Flight Booking</a>
              </li>
              <li>
                <a href="/tours">Tour Packages</a>
              </li>
              <li>
                <a href="/visa">Visa Processing</a>
              </li>
              <li>
                <a href="/insurance">Travel Insurance</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>📍 Travel Hub, Main Street</li>
              <li>📞 +1-234-567-8900</li>
              <li>📱 +1-234-567-8901</li>
              <li>✉️ info@coltravels.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Col Travel & Tours. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

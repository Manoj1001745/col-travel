import React from "react";
import { MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import "./TopHeader.css";

const TopHeader: React.FC = () => {
  return (
    <section className="top-header">
      <div className="top-header-container">
        <div className="top-header-left">
          <a href="#location" className="top-header-item">
            <MapPin className="icon" />
            <span>Find Us</span>
          </a>
          <a
            href="https://wa.me/9779851110341"
            className="top-header-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="icon" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="top-header-right">
          <a href="tel:+97714002016" className="top-header-item">
            <Phone className="icon" />
            <span>+977-1-4002016/17/18</span>
          </a>
          <a href="tel:+9779851110341" className="top-header-item">
            <Phone className="icon" />
            <span>+977-9851110341</span>
          </a>
          <a href="mailto:info@rajshreetravels.com" className="top-header-item">
            <Mail className="icon" />
            <span>info@rajshreetravels.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;

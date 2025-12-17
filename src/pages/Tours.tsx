import React from "react";
import TourCard from "../components/common/TourCard";
import { toursData } from "../data/mockData";
import "./Tours.css";

const Tours: React.FC = () => {
  return (
    <div className="tours-page">
      <section className="page-hero">
        <div className="container">
          <h1>Tour Packages</h1>
          <p>
            Explore our handpicked destinations and create unforgettable
            memories
          </p>
        </div>
      </section>

      <section className="tours-content">
        <div className="container">
          <div className="tours-filters">
            <select className="filter-select">
              <option value="">All Destinations</option>
              <option value="thailand">Thailand</option>
              <option value="malaysia">Malaysia</option>
              <option value="singapore">Singapore</option>
              <option value="indonesia">Indonesia</option>
            </select>
            <select className="filter-select">
              <option value="">All Durations</option>
              <option value="5">5 Days</option>
              <option value="6">6 Days</option>
              <option value="7">7 Days</option>
              <option value="8+">8+ Days</option>
            </select>
            <select className="filter-select">
              <option value="">Price Range</option>
              <option value="low">Under $800</option>
              <option value="mid">$800 - $1000</option>
              <option value="high">Above $1000</option>
            </select>
          </div>

          <div className="tours-grid">
            {toursData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;

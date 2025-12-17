import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  DollarSign,
  Compass,
  Mountain,
  Palmtree,
  Building2,
} from "lucide-react";
import { toursData } from "../data/mockData";
import "./TourPackages.css";

const TourPackages: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [duration, setDuration] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Packages", icon: <Compass size={20} /> },
    { id: "adventure", name: "Adventure", icon: <Mountain size={20} /> },
    { id: "beach", name: "Beach & Resort", icon: <Palmtree size={20} /> },
    { id: "cultural", name: "Cultural", icon: <Building2 size={20} /> },
    { id: "pilgrimage", name: "Pilgrimage", icon: <Star size={20} /> },
  ];

  const priceRanges = [
    { id: "all", label: "All Prices" },
    { id: "budget", label: "Under $500", max: 500 },
    { id: "mid", label: "$500 - $1000", min: 500, max: 1000 },
    { id: "premium", label: "Above $1000", min: 1000 },
  ];

  const durations = [
    { id: "all", label: "All Durations" },
    { id: "short", label: "1-3 days", max: 3 },
    { id: "medium", label: "4-7 days", min: 4, max: 7 },
    { id: "long", label: "8+ days", min: 8 },
  ];

  const filteredTours = toursData.filter((tour) => {
    // Category filter
    if (selectedCategory !== "all") {
      const categoryMatch =
        tour.title.toLowerCase().includes(selectedCategory) ||
        tour.description.toLowerCase().includes(selectedCategory);
      if (!categoryMatch) return false;
    }

    // Price filter
    if (priceRange !== "all") {
      const range = priceRanges.find((r) => r.id === priceRange);
      if (range) {
        const tourPrice = parseInt(tour.price.replace(/[^0-9]/g, ""));
        if (range.max && tourPrice > range.max) return false;
        if (range.min && tourPrice < range.min) return false;
      }
    }

    // Duration filter
    if (duration !== "all") {
      const durationObj = durations.find((d) => d.id === duration);
      if (durationObj) {
        const tourDays = parseInt(tour.duration.split(" ")[0]);
        if (durationObj.max && tourDays > durationObj.max) return false;
        if (durationObj.min && tourDays < durationObj.min) return false;
      }
    }

    return true;
  });

  const handlePackageClick = (tourId: string) => {
    navigate(`/tours/${tourId}`);
  };

  return (
    <div className="tour-packages-page">
      {/* Hero Section */}
      <section className="packages-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Tour Packages</h1>
          <p>Discover our carefully curated travel experiences</p>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>{toursData.length}+</strong>
              <span>Packages</span>
            </div>
            <div className="stat-item">
              <strong>50+</strong>
              <span>Destinations</span>
            </div>
            <div className="stat-item">
              <strong>10K+</strong>
              <span>Happy Travelers</span>
            </div>
          </div>
        </div>
      </section>

      <div className="packages-content">
        {/* Filter Section */}
        <section className="filters-section">
          <div className="filter-group">
            <label>Category</label>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${
                    selectedCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-controls">
            <div className="filter-item">
              <label htmlFor="price-filter">
                <DollarSign size={18} />
                Price Range
              </label>
              <select
                id="price-filter"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="duration-filter">
                <Calendar size={18} />
                Duration
              </label>
              <select
                id="duration-filter"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                {durations.map((dur) => (
                  <option key={dur.id} value={dur.id}>
                    {dur.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="results-count">
              <strong>{filteredTours.length}</strong> packages found
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="packages-grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="package-card"
                onClick={() => handlePackageClick(tour.id)}
              >
                <div className="package-image">
                  <img src={tour.image} alt={tour.title} />
                  <div className="package-badge">
                    <Star size={16} fill="currentColor" />
                    <span>{tour.rating}</span>
                  </div>
                </div>
                <div className="package-content">
                  <h3 className="package-title">{tour.title}</h3>
                  <p className="package-description">{tour.description}</p>

                  <div className="package-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{tour.location}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Users size={16} />
                      <span>Group Tour</span>
                    </div>
                  </div>

                  <div className="package-footer">
                    <div className="package-price">
                      <span className="price-label">Starting from</span>
                      <strong className="price-amount">{tour.price}</strong>
                      <span className="price-per">per person</span>
                    </div>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <Compass size={64} />
              <h3>No packages found</h3>
              <p>Try adjusting your filters to see more options</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange("all");
                  setDuration("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <h1 className="section-title">Why Choose Our Packages?</h1>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h3>Best Price Guarantee</h3>
              <p>We offer competitive prices with no hidden fees</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h3>Expert Local Guides</h3>
              <p>Experienced guides who know the destinations inside out</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for a worry-free trip</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h3>Flexible Booking</h3>
              <p>Easy cancellation and modification policies</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="packages-cta">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Let us create a custom package tailored to your preferences</p>
          <button
            className="custom-package-btn"
            onClick={() => navigate("/contact")}
          >
            Request Custom Package
          </button>
        </section>
      </div>
    </div>
  );
};

export default TourPackages;

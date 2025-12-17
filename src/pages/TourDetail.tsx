    import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, MapPin, Star } from "lucide-react";
import { toursData } from "../data/mockData";
import "./TourDetail.css";

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const tour = toursData.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="tour-detail-not-found">
        <h2>Tour not found</h2>
        <button onClick={() => navigate("/tours")}>Back to Tours</button>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <div className="tour-detail-hero">
        <img src={tour.image} alt={tour.title} />
        <div className="tour-detail-overlay">
          <div className="container">
            <button className="back-button" onClick={() => navigate(-1)}>
              <ArrowLeft className="icon" />
              Back
            </button>
            <h1>{tour.title}</h1>
            <div className="tour-detail-meta">
              <span className="country-badge">{tour.country}</span>
              <div className="rating">
                <Star className="icon filled" />
                <span>{tour.rating}</span>
                <span className="reviews">({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tour-detail-content">
        <div className="container">
          <div className="tour-detail-grid">
            <div className="tour-detail-main">
              <section className="tour-section">
                <h2>About This Tour</h2>
                <p>{tour.description}</p>
              </section>

              <section className="tour-section">
                <h2>Tour Highlights</h2>
                <ul className="highlights-list">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>
                      <MapPin className="icon" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="tour-section">
                <h2>Tour Information</h2>
                <div className="tour-info-grid">
                  <div className="info-item">
                    <Calendar className="icon" />
                    <div>
                      <h4>Duration</h4>
                      <p>{tour.duration}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Users className="icon" />
                    <div>
                      <h4>Group Size</h4>
                      <p>{tour.people}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="tour-detail-sidebar">
              <div className="booking-card">
                <div className="price-section">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">${tour.price}</span>
                  <span className="price-note">per person</span>
                </div>
                <button className="book-now-button">Book Now</button>
                <button
                  className="contact-button"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;

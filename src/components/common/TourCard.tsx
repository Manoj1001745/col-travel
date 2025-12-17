import React from "react";
import { useNavigate } from "react-router-dom";
import type { Tour } from "../../types";
import Card from "./Card";
import "./TourCard.css";

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tours/${tour.id}`);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/tours/${tour.id}`);
  };

  return (
    <Card
      hover
      className="tour-card tour-card-clickable"
      onClick={handleCardClick}
    >
      <div className="tour-card-image">
        <img src={tour.image} alt={tour.title} />
        <span className="tour-card-badge">{tour.country}</span>
      </div>
      <div className="tour-card-content">
        <div className="tour-card-header">
          <h3 className="tour-title">{tour.title}</h3>
          <div className="tour-card-rating">
            <span className="rating-star">⭐</span>
            <span className="rating-value">{tour.rating}</span>
            <span className="rating-reviews">({tour.reviews})</span>
          </div>
        </div>
        <div className="tour-card-info">
          <span>📅 {tour.duration}</span>
          <span>👥 {tour.people}</span>
        </div>
        <div className="tour-card-highlights">
          {tour.highlights.map((highlight, index) => (
            <span key={index} className="highlight-tag">
              {highlight}
            </span>
          ))}
        </div>
        <div className="tour-card-footer">
          <div className="tour-price">
            <span className="price-label">From</span>
            <span className="price-value">${tour.price}</span>
          </div>
          <button className="tour-btn" onClick={handleButtonClick}>
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;

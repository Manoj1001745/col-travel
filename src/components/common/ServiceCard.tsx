import React from "react";
import type { Service } from "../../types";
import Card from "./Card";
import "./ServiceCard.css";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hover className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      {service.link && (
        <a href={service.link} className="service-link">
          Explore More →
        </a>
      )}
    </Card>
  );
};

export default ServiceCard;

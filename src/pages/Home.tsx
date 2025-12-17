import React from "react";
import TourCard from "../components/common/TourCard";
import ServiceCard from "../components/common/ServiceCard";
import Button from "../components/common/Button";
import FlightSearch from "../components/common/FlightSearch";
import { toursData, servicesData } from "../data/mockData";
import "./Home.css";
// import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-flight-search">
          <FlightSearch />
        </div>


        {/* Flight Search in Hero */}
      </section>
              {/* <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">
            From cultural explorations to adventure trips, your next
            unforgettable journey starts here!
          </p>
          <div className="hero-actions">
            <Button size="large">Explore Tours</Button>
            <Link to="/contact">
            <Button variant="outline" size="large">
              Contact Us
            </Button>
            </Link>
          </div>
        </div> */}

      {/* Tours Section */}
      <section className="tours-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FEATURED TOURS</span>
            <h1 className="section-title">Explore Amazing Destinations</h1>
            <p className="section-description">
              Discover our handpicked tour packages. From cultural explorations
              to adventure trips.
            </p>
          </div>
          <div className="tours-grid">
            {toursData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="section-cta">
            <Button variant="outline" size="large">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">WHAT WE OFFER</span>
            <h1 className="section-title">Our Premium Services</h1>
            <p className="section-description">
              Everything you need for seamless travel experiences
            </p>
          </div>
          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h1 className="cta-title">Ready to Start Your Journey?</h1>
            <p className="cta-description">
              Contact us today and let's plan your dream vacation together
            </p>
            <Button size="large">Contact Us Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

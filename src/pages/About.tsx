import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted travel partner for unforgettable experiences</p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">100+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>
              Welcome to <span className="travel">Col Travel & Tours </span>{" "}
            </h2>
            <p>
              Since 2010, we have been committed to creating exceptional travel
              experiences for our clients. With over 15 years of expertise in
              the travel industry, we specialize in customized tour packages,
              visa services, flight bookings, and hotel reservations.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To make travel accessible and memorable for everyone by
                providing exceptional service and creating unique experiences
                that last a lifetime.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted travel partner globally, known for
                our personalized service and commitment to customer
                satisfaction.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Integrity, excellence, innovation, and customer satisfaction
                drive everything we do in creating perfect travel experiences.
              </p>
            </div>
          </div>

          <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>Expert Team</h4>
                <p>
                  Experienced travel professionals dedicated to your journey
                </p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>Best Prices</h4>
                <p>Competitive rates with no hidden charges</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>24/7 Support</h4>
                <p>Round-the-clock assistance for all your travel needs</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>Customization</h4>
                <p>Tailored packages to match your preferences</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>Trusted Partners</h4>
                <p>Partnerships with leading airlines and hotels</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <h4>Secure Booking</h4>
                <p>Safe and secure payment processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

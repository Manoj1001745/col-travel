import React from "react";
import {
  FileText,
  Shield,
  AlertCircle,
  Clock,
  Map,
  Phone,
  Heart,
} from "lucide-react";
import "./VisitorInfo.css";
import { Link } from "react-router-dom";

const VisitorInfo: React.FC = () => {
  const travelTips = [
    {
      icon: <FileText size={32} />,
      title: "Travel Documents",
      description:
        "Ensure your passport is valid for at least 6 months. Keep copies of important documents.",
      details: [
        "Valid passport",
        "Visa (if required)",
        "Travel insurance",
        "Hotel bookings",
        "Flight tickets",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Health & Safety",
      description:
        "Stay informed about health requirements and safety guidelines for your destination.",
      details: [
        "Travel vaccinations",
        "Medical insurance",
        "Emergency contacts",
        "Local health advisories",
        "First aid kit",
      ],
    },
    {
      icon: <Clock size={32} />,
      title: "Best Time to Visit",
      description:
        "Plan your trip according to weather and peak seasons for the best experience.",
      details: [
        "Spring (Mar-May)",
        "Autumn (Sep-Nov)",
        "Avoid monsoon",
        "Festival seasons",
        "Off-peak discounts",
      ],
    },
    {
      icon: <Map size={32} />,
      title: "Local Customs",
      description:
        "Respect local culture, traditions, and customs to ensure a pleasant stay.",
      details: [
        "Dress modestly",
        "Remove shoes at temples",
        "Ask before photos",
        "Respect traditions",
        "Learn basic phrases",
      ],
    },
  ];

  const visaInfo = [
    {
      country: "Nepal",
      requirement: "Visa on Arrival",
      validity: "15-90 days",
      fee: "$30-$125",
      notes: "Available at airport for most nationalities",
    },
    {
      country: "India",
      requirement: "E-Visa Available",
      validity: "30-365 days",
      fee: "$10-$100",
      notes: "Apply online 4 days before arrival",
    },
    {
      country: "Bhutan",
      requirement: "Pre-arranged",
      validity: "As per tour",
      fee: "$40 processing",
      notes: "Must book through registered tour operator",
    },
    {
      country: "Thailand",
      requirement: "Visa Free",
      validity: "30-60 days",
      fee: "Free",
      notes: "For many nationalities, extendable",
    },
  ];

  const packingEssentials = [
    {
      category: "Clothing",
      items: [
        "Comfortable walking shoes",
        "Layers for temperature changes",
        "Rain jacket",
        "Sun hat and sunglasses",
        "Modest clothing for temples",
      ],
    },
    {
      category: "Electronics",
      items: [
        "Camera and chargers",
        "Power adapter",
        "Portable power bank",
        "Phone with local SIM",
        "Headphones",
      ],
    },
    {
      category: "Health & Hygiene",
      items: [
        "Prescription medications",
        "Basic first aid kit",
        "Sunscreen and insect repellent",
        "Hand sanitizer",
        "Personal toiletries",
      ],
    },
    {
      category: "Money & Documents",
      items: [
        "Cash and cards",
        "Passport copies",
        "Travel insurance documents",
        "Emergency contact list",
        "Hotel confirmations",
      ],
    },
  ];

  const importantContacts = [
    { title: "Tourist Police", number: "1144", available: "24/7" },
    { title: "Emergency Helpline", number: "100", available: "24/7" },
    { title: "Medical Emergency", number: "102", available: "24/7" },
    { title: "Our Support Line", number: "+977-9876543210", available: "24/7" },
  ];

  return (
    <div className="visitor-info-page">
      {/* Hero Section */}
      <section className="visitor-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Visitor Information</h1>
          <p>Everything you need to know for a safe and enjoyable journey</p>
        </div>
      </section>

      <div className="visitor-content">
        {/* Travel Tips Section */}
        <section className="travel-tips-section">
          <div className="section-header">
            <h2>Essential Travel Tips</h2>
            <p>Important information to help you prepare for your trip</p>
          </div>
          <div className="tips-grid">
            {travelTips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <ul className="tip-details">
                  {tip.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Visa Information */}
        <section className="visa-section">
          <div className="section-header">
            <h2>Visa Requirements</h2>
            <p>Quick guide to visa requirements for popular destinations</p>
          </div>
          <div className="visa-table-container">
            <table className="visa-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Requirement</th>
                  <th>Validity</th>
                  <th>Fee</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {visaInfo.map((visa, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{visa.country}</strong>
                    </td>
                    <td>{visa.requirement}</td>
                    <td>{visa.validity}</td>
                    <td>{visa.fee}</td>
                    <td>{visa.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="visa-note">
            <AlertCircle size={20} />
            <p>
              Visa requirements may change. Please verify with the embassy or
              consulate before traveling.
            </p>
          </div>
        </section>

        {/* Packing Essentials */}
        <section className="packing-section">
          <div className="section-header">
            <h2>Packing Essentials</h2>
            <p>Don't forget these important items for your trip</p>
          </div>
          <div className="packing-grid">
            {packingEssentials.map((category, index) => (
              <div key={index} className="packing-card">
                <h3>{category.category}</h3>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Important Contacts */}
        <section className="contacts-section">
          <div className="section-header">
            <h2>Important Contacts</h2>
            <p>Keep these numbers handy for emergencies and support</p>
          </div>
          <div className="contacts-grid">
            {importantContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <Phone className="contact-icon" size={28} />
                <h3>{contact.title}</h3>
                <p className="contact-number">{contact.number}</p>
                <p className="contact-availability">{contact.available}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Help CTA */}
        <section className="help-cta">
          <Heart size={48} />
          <h2>Need More Help?</h2>
          <p>Our travel experts are here to assist you with any questions</p>
          <Link to="/contact" className="cta-link">
          <button className="cta-button">Contact Our Team</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default VisitorInfo;

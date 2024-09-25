import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";

import "./index.css";

const Services = () => {
  return (
    <>
      <Headers />
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="fas fa-warehouse"></i>
            <h3>Warehousing Solutions</h3>
            <p className="service-description">
              Secure and spacious warehousing options for short- or long-term
              storage.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-clipboard-list"></i>
            <h3>Fleet Management</h3>
            <p className="service-description">
              Comprehensive fleet management services, ensuring your goods are
              always on the move.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-shuttle-van"></i>
            <h3>Regional Distribution</h3>
            <p className="service-description">
              Reliable transport services within the city, tailored to your
              schedule and needs.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-truck"></i>
            <h3>Long-Distance Hauling</h3>
            <p className="service-description">
              Nationwide transport solutions ensuring safe and timely deliveries
              across regions.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-box-open"></i>
            <h3>Packaging Solutions</h3>
            <p className="service-description">
              Professional packaging services to ensure the safety and integrity
              of your products during transit.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-plane"></i>
            <h3>AIR Freight Services</h3>
            <p className="service-description">
              Fast and reliable air freight services for urgent shipments,
              delivering your cargo anywhere, anytime.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;

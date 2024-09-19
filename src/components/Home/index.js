import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Headers";
import QuoteModal from "../QuoteModal";
import Footer from "../Footer";

import "./index.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetQuoteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleGetQuoteClick = () => {
  //   navigate("/get-quote");
  // };

  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about");
  };

  const handlePrivacyClick = () => {
    navigate("/privacy");
  };
  return (
    <>
      <Headers />
      <section className="hero">
        <div className="hero-content">
          <h4>LOGISTICS SERVICES</h4>
          <h1>SHIV SHAKTI TRANSPORT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            alias quas ullam blanditiis doloremque sint consequatur quasi quia
            deleniti, ex repudiandae?
          </p>
          <div className="buttons">
            <button className="btn" onClick={handleReadMoreClick}>
              Read More
            </button>
            <button className="trans-btn" onClick={handlePrivacyClick}>
              Policy
            </button>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1024/1*_PbmtaxXQ-XRwbWz6BHrzQ.jpeg"
                  alt="Freight Services"
                  className="service-image"
                />
              </div>
              <h3>Freight Services</h3>
              <p>Efficient and reliable freight services across the nation.</p>
            </div>
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://etek.com.vn/uploaded/gioi-thieu/TPE/he-sinh-thai-01.jpg"
                  alt="Warehousing"
                  className="service-image"
                />
              </div>
              <h3>Warehousing</h3>
              <p>Secure storage solutions for your goods, available 24/7.</p>
            </div>
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://l-consulting.com.ua/wp-content/uploads/Consulting_Header.jpg"
                  alt="Logistics Consulting"
                  className="service-image"
                />
              </div>
              <h3>Logistics Consulting</h3>
              <p>
                Custom logistics strategies tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <img
                src="https://img.freepik.com/vector-premium/concepto-isometrico-entrega-tiempo_165932-678.jpg"
                alt="On-time Delivery"
              />
              <h3>On-time Delivery</h3>
              <p>
                We ensure your goods reach their destination on schedule, every
                time.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://www.skillsuccess.com/wp-content/uploads/2023/05/customer-support-training-2.jpg"
                alt="24/7 Support"
              />
              <h3>24/7 Support</h3>
              <p>Our customer support team is here to help around the clock.</p>
            </div>
            <div className="choose-item">
              <img
                src="https://png.pngtree.com/png-clipart/20231206/original/pngtree-safety-first-caution-photo-png-image_13778131.png"
                alt="Safety First"
              />
              <h3>Safety First</h3>
              <p>Our top priority is the safety and security of your cargo.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "Shiv Shakti Transport has transformed our logistics operations.
                Always reliable and efficient!"
              </p>
              <h4>- John Doe, ABC Corp</h4>
            </div>
            <div className="testimonial">
              <p>
                "The best logistics company we've worked with. Professional, on
                time, and cost-effective."
              </p>
              <h4>- Jane Smith, XYZ Ltd</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to find out how we can streamline your logistics
            operations.
          </p>
          <button className="btn" onClick={handleGetQuoteClick}>
            Get a Quote
          </button>
        </div>
      </section>
      <QuoteModal show={showModal} onClose={handleCloseModal} />
      <Footer />
    </>
  );
};

export default Home;

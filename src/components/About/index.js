import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";
import "./index.css";

const About = () => {
  return (
    <>
      <Headers />
      <section className="about-section">
        <div className="about-container">
          <h3>About Us</h3>
          <p>
            Haulnet India Pvt Ltd is a leading name in the realm of
            temperature-controlled logistics, serving businesses across India
            with unmatched reliability and efficiency. Established with a vision
            to revolutionize the industry, we have evolved into a trusted
            partner for sectors requiring precision in the handling and storage
            of perishable goods. Our mission is to ensure the safe, timely, and
            efficient delivery of your products, maintaining their quality and
            integrity from origin to destination. With our state-of-the-art
            fleet of over 50 specialized vehicles and advanced technology, we
            provide comprehensive logistics solutions that consistently exceed
            industry expectations.
          </p>

          {/* <img
            src="https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys="
            alt="About us"
            className="about-image"
          /> */}

          <h3>Our Reach</h3>
          <p>
            We have strategically located branches in key cities across India,
            including Delhi, Guwahati, Mumbai, and Bangalore, enabling us to
            provide seamless logistics services across multiple states such as
            Uttar Pradesh, Delhi NCR, Maharashtra, Karnataka, Haryana, Punjab,
            and Chandigarh. This extensive network allows us to offer faster
            transit times, reduce operational costs, and ensure efficient
            delivery solutions tailored to meet the diverse needs of our clients
            in various industries.
          </p>
          <h3>Services Offered</h3>
          <p>
            We specialize in Pan India distribution and warehousing services,
            offering end-to-end logistics solutions that ensure your goods are
            delivered safely, efficiently, and in optimal condition, every time.
            Our state-of-the-art warehousing facilities and extensive nationwide
            network are designed to handle a wide variety of products, from
            perishable items to high-value goods, with precision. Through
            real-time tracking, advanced inventory management, and a dedicated
            team, we deliver unmatched reliability and transparency, providing
            peace of mind while optimizing your business operations.{" "}
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We are committed to delivering exceptional services by continually
            enhancing our processes and adopting cutting-edge technologies in
            logistics. Our mission is to provide comprehensive, efficient
            solutions that ensure a seamless and reliable experience for all our
            clients, safeguarding the integrity of their goods from start to
            finish.
          </p>
        </div>
        <div className="mission-image">
          <img src="/images/vision.jpg" alt="Mission" />
        </div>
      </section>

      <section className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <div className="reasons-container">
          <div className="reason-card">
            <i className="fas fa-shield-alt"></i>
            <h4>Reliability</h4>
            <p>
              With over 20 years in the industry, our track record speaks for
              itself. We always deliver on time.
            </p>
          </div>
          <div className="reason-card">
            <i className="fas fa-rocket"></i>
            <h4>Efficiency</h4>
            <p>
              Our team uses cutting-edge technology and a modern fleet to ensure
              efficient and hassle-free services.
            </p>
          </div>
          <div className="reason-card">
            <i className="fas fa-users"></i>
            <h4>Customer First</h4>
            <p>
              We prioritize customer satisfaction above all else. Your success
              is our success.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Haulnet India Pvt Ltd has streamlined our logistics operations
              seamlessly. Their professionalism and punctuality are
              exceptional!"
            </p>
            <h4 className="testimonial-author">Rajesh Kumar</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "We've never experienced such efficiency in transportation
              services. Haulnet India is always reliable and goes above and
              beyond to meet our needs."
            </p>
            <h4 className="testimonial-author">Anjali Patel</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Their attention to detail and excellent customer service set them
              apart from the rest. We trust Haulnet India for all our logistics
              needs."
            </p>
            <h4 className="testimonial-author">Rohit Mehta</h4>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

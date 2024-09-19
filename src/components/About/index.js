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
          <h2>About Us</h2>
          <p>
            At Shiv Shakti Transport, we’ve been revolutionizing logistics and
            transportation for over 20 years. Our dedicated team and
            state-of-the-art fleet ensure that goods arrive at their destination
            safely and on time, anywhere in the country.
          </p>
          <p>
            Our core values of reliability, efficiency, and innovation drive us
            to be the best in the business, whether you need local deliveries or
            long-distance transportation. Trust us to move what matters most to
            you.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys="
          alt="About us"
          className="about-image"
        />
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We are committed to delivering exceptional services by continually
            improving our processes and adopting the latest technologies in
            logistics. Our mission is to provide the best transport solutions,
            ensuring a seamless experience for all our clients.
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
              "Shiv Shakti Transport has been our go-to logistics partner for
              years. They are reliable, fast, and always provide excellent
              service!"
            </p>
            <h4 className="testimonial-author">
              Rajesh Kumar, CEO of XYZ Corp
            </h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "I have never worked with a transport company as efficient and
              trustworthy as Shiv Shakti. Highly recommended!"
            </p>
            <h4 className="testimonial-author">
              Anjali Patel, Operations Manager at ABC Ltd
            </h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Their customer service is unmatched. I can always rely on them to
              deliver on time."
            </p>
            <h4 className="testimonial-author">
              Rohit Mehta, Supply Chain Manager at DEF Enterprises
            </h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

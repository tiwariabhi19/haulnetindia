import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Headers = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const navigate = useNavigate();

  const changeHomePage = () => {
    navigate("/");
  };

  return (
    <header className="header-container">
      <nav className="nav">
        <div className="logo-container">
          <img
            className="logo"
            src="/images/logo.png"
            alt="logo"
            onClick={changeHomePage}
          />
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>About</li>
          </Link>
          <Link to="/services" className="nav-link">
            <li>Services</li>
          </Link>
          <Link to="/contact" className="nav-link">
            <li>Contact</li>
          </Link>
          <Link to="/privacy" className="nav-link">
            <li>Privacy</li>
          </Link>
        </ul>
        <div className="mobile-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </header>
  );
};

export default Headers;

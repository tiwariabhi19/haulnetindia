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
            src="/images/logo.svg"
            alt="logo"
            onClick={changeHomePage}
          />
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/privacy">
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

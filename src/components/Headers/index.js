import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const Headers = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const changeHomePage = () => {
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
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
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={() => setClicked(false)}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about")}`}
            onClick={() => setClicked(false)}
          >
            <li>About</li>
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive("/services")}`}
            onClick={() => setClicked(false)}
          >
            <li>Services</li>
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact")}`}
            onClick={() => setClicked(false)}
          >
            <li>Contact</li>
          </Link>
          <Link
            to="/career"
            className={`nav-link ${isActive("/career")}`}
            onClick={() => setClicked(false)}
          >
            <li>Career</li>
          </Link>
          <Link
            to="/privacy"
            className={`nav-link ${isActive("/privacy")}`}
            onClick={() => setClicked(false)}
          >
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

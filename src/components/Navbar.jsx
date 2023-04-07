import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

 function Navbar () {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <h1>Raj-Coding</h1>
        </div>

        <div className="nav-content">
          <Link to="/" className="li">Home</Link>
          <Link to="/services" className="li">Services</Link>
          <Link to="/about" className="li"> About Us </Link>
          <Link to="/contact" className="li"> Contact Us </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
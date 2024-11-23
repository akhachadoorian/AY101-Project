import React from 'react';
import { Link } from 'react-router-dom';
import planets from "../src/images/Planets.svg"

function Footer() {
  return (
    <footer className="footer">
      <img src={planets} />
      <div className="footer-content">
        <h5>Alex Khachadoorian</h5>
        <h5>AY 101 Project</h5>
        <Link 
          to={"/citations"}
        >
          <h5>Citations</h5>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
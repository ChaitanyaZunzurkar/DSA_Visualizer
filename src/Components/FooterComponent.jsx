import React from 'react';
import { Helmet } from 'react-helmet';
import './FooterComponent.module.css';
import 'https://unpkg.com/boxicons@latest/css/boxicons.min.css';

function Footer() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=League+Spartan" rel="stylesheet" />
      </Helmet>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-container">
              <h1>
                <span className="logo" id="logo">&lt;/&gt;</span> 
                <span className="logo" id="logo1">AlgoLens</span>
              </h1>
            </div>
            <p className="tagline">See Algorithms Clearly</p>
          </div>

          <div className="footer-links">
            <ul>
              <li className="footer-title">Quick Links</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Labs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul>
              <li className="footer-title">Legal</li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Refund & Cancellation Policy</a></li>
            </ul>
            <ul>
              <li className="footer-title">Get in Touch</li>
              <li><a href="mailto:support@algolens.in">support@algolens.in</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 AlgoLens Pvt Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

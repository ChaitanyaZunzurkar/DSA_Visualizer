import React from 'react';
import './Stylesheets/footer.module.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="path-to-your-logo.png" alt="Logo" className="logo" />
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
    );
}

export default Footer;

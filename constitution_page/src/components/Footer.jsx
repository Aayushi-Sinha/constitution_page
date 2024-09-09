import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality content and services. Stay connected for updates.</p>
        </div>

        <div className="footer-center">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91-123-456-7890</p>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" className="social-icon">Facebook</a>
            <a href="https://x.com/?lang=en" className="social-icon">Twitter</a>
            <a href="https://www.instagram.com/" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

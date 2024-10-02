import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="logo.png" alt="Swasth Logo" />
          <span>Swasth</span>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
        </div>
        <div className="app-store-links">
          <a href="https://www.apple.com/app-store/">
            <img src="app-store.png" alt="App Store" />
          </a>
          <a href="https://play.google.com/store">
            <img src="google-play.png" alt="Google Play Store" />
          </a>
        </div>
        <p className="footer-text">&copy; 2024 Swasth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;

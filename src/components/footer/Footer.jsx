import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_section about">
          <h2 className="footer_title">About</h2>
          <p>
            Welcome to our blog where we share insights, stories, and updates on
            various topics. Stay tuned for more interesting content!
          </p>
        </div>
        <div className="footer_section links">
          <h2 className="footer_title">Quick Links</h2>
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Home</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">About</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Blog</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_section social">
          <h2 className="footer_title">Follow Us</h2>
          <div className="social_links">
            {/* eslint-disable-next-line */}
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2023 Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

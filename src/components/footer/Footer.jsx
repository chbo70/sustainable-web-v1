import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_section about">
          <h2 className="footer_title">About</h2>
          <p>
            This website is part of my bachelor thesis, focusing on
            sustainability. This website is a practical example of a blog. It will be
            used for testing and applying sustainable methods for reducing carbon emission.
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
            <a href="https://www.facebook.com/?locale=de_DE">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://x.com/?lang=de">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://at.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

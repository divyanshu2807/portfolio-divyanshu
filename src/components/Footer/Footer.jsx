import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/divyanshu2807" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/divyanshuvats2807" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:divyanshuvats2807@gmail.com"><FaEnvelope /></a>
          <a href="tel:8539803223"><FaPhone /></a>
        </div>
        <p className="footer-text">© 2026 Divyanshu Vats. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
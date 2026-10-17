import React from 'react';
import './ContactPopup.css';
import { FaTimes, FaPhone, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2 className="popup-title">Get in Touch</h2>
        
        <div className="popup-content">
          
          {/* Phone Link */}
          <a href="tel:8539803223" className="popup-item">
            <FaPhone className="popup-icon phone" />
            <span className="popup-text">8539803223</span>
          </a>

          {/* Email Link */}
          <a href="mailto:divyanshuvats2807@gmail.com" className="popup-item">
            <FaEnvelope className="popup-icon email" />
            <span className="popup-text">divyanshuvats2807@gmail.com</span>
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/divyanshuvats2807" target="_blank" rel="noreferrer" className="popup-item">
            <FaLinkedin className="popup-icon linkedin" />
            <span className="popup-text">LinkedIn Profile</span>
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default ContactPopup;
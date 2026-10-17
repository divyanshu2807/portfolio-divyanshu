// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';
import profileImage from '../../assets/my image.jpeg';

const Hero = ({ onNavClick }) => {
  const roles = ["MERN Stack Developer", "Full Stack Developer"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);
  
  // Popup ke liye state (Open/Close)
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullTxt = roles[i];
    let updatedText = isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullTxt) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          
          {/* LEFT SIDE TEXT */}
          <div className="hero-text">
            <h1 className="greeting">Hi There! <span className="wave">👋</span></h1>
            <h1 className="name">I'M DIVYANSHU VATS</h1>
            <h2 className="role">
              <span className="typing">{text}</span>
            </h2>
            <p className="description">
              I build modern, responsive and reliable web applications using the MERN stack and modern web technologies.
            </p>
            
            <div className="hero-buttons">
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('projects');
                }}
              >
                View My Work
              </a>
              
              {/* Button click karne par popup khulega */}
              <button onClick={togglePopup} className="btn-outline">
                Let's Connect
              </button>
            </div>

            <div className="social-icons">
              <a href="https://github.com/divyanshu2807" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/divyanshuvats2807" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="mailto:divyanshuvats2807@gmail.com"><FaEnvelope /></a>
            </div>
          </div>

          {/* RIGHT SIDE SIMPLE CIRCLE WITH IMAGE */}
          <div className="hero-image-wrapper">
            <div className="img-circle">
              <img src={profileImage} alt="Divyanshu" className="profile-img" />
            </div>
            
            <div className="status-badge">
              <span className="dot"></span> Available for opportunities
            </div>
          </div>

        </div>
      </div>

      {/* ====== CONTACT POPUP START ====== */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={togglePopup}>
              <FaTimes />
            </button>
            <h2 className="popup-title">Let's Connect</h2>
            <div className="popup-content">
              <div className="contact-item">
                <span className="contact-label">📞 Call Me</span>
                <a href="tel:8539803223" className="contact-value">8539803223</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">✉️ Email Me</span>
                <a href="mailto:divyanshuvats2807@gmail.com" className="contact-value">divyanshuvats2807@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ====== CONTACT POPUP END ====== */}
      
    </section>
  );
};

export default Hero;
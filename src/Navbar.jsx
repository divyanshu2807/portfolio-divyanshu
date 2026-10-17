// src/Navbar.jsx
import React, { useState, useEffect } from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaPenFancy } from 'react-icons/fa';
import './Navbar.css';
import ContactPopup from './components/ContactPopup/ContactPopup';

const Navbar = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BootstrapNavbar 
        expand="lg" 
        fixed="top" 
        className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
        expanded={expanded}
      >
        <Container>
          <BootstrapNavbar.Brand href="#home" className="brand-logo">
            DV.
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : true)}
            className="custom-toggler"
          >
            {expanded ? <FaTimes color="#fff" size={24} /> : <FaBars color="#fff" size={24} />}
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-0 d-flex align-items-center nav-links">
              
              {/* ✅ FIX 1: Home link me href="#home" add kiya */}
              <Nav.Link href="#home" onClick={() => { onNavClick('home'); setExpanded(false); }}>
                <FaHome className="nav-icon" /> Home
              </Nav.Link>
              
              <Nav.Link href="#about" onClick={() => { onNavClick('home'); setExpanded(false); }}>
                <FaUser className="nav-icon" /> About
              </Nav.Link>
              
              <Nav.Link onClick={() => { onNavClick('skills'); setExpanded(false); }}>
                <FaPenFancy className="nav-icon" /> Skills
              </Nav.Link>
              
              <Nav.Link onClick={() => { onNavClick('projects'); setExpanded(false); }}>
                <FaProjectDiagram className="nav-icon" /> Projects
              </Nav.Link>
              
              <Nav.Link onClick={() => { onNavClick('resume'); setExpanded(false); }}>
                <FaFileAlt className="nav-icon" /> Resume
              </Nav.Link>

              <Nav.Link onClick={() => { setShowPopup(true); setExpanded(false); }} className="nav-btn-wrapper">
                <button className="nav-btn">Contact</button>
              </Nav.Link>

            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Navbar;
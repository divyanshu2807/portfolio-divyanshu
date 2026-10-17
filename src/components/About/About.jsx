// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-grid">
          
          {/* LEFT SIDE: Introduction */}
          <div className="about-left">
            <h2 className="section-title">
              About <span className="highlight">Me</span>
            </h2>
            <h3 className="sub-title">A Passionate Developer & Problem Solver</h3>
            
            <p className="about-desc">
              Hi, I'm Divyanshu Vats. I specialize in building high-quality, responsive web applications using the MERN stack. 
              I love transforming complex problems into simple, elegant solutions through clean code and modern design.
            </p>

            <p className="about-desc">
              With a strong focus on performance, usability, and user experience, I strive to deliver digital products that make a real impact.
            </p>
          </div>

          {/* RIGHT SIDE: Skills (Tabular) */}
          <div className="about-right">
            <h3 className="skills-heading">My Tech Stack</h3>
            
            <div className="skill-box">
              <div className="skill-row">
                <span className="skill-cat">Frontend</span>
                <span className="skill-tech">React.js, JavaScript, HTML/CSS</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Backend</span>
                <span className="skill-tech">Node.js, Express.js</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Database</span>
                <span className="skill-tech">MongoDB</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Tools</span>
                <span className="skill-tech">Git, VS Code, Postman</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
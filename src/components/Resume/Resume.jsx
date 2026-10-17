import React from 'react';
import './Resume.css';
import { FaDownload, FaEye, FaCode, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

import myResume from '../../assets/Divyanshu_Vats_Resume.pdf';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        
        <div className="resume-header">
          <h1 className="resume-title">My <span className="highlight">Resume</span></h1>
          <p className="resume-subtitle">
            A detailed overview of my journey, skills, and experience in the world of web development.
          </p>
        </div>

        <div className="resume-intro-card">
          <div className="intro-text">
            <h3>Divyanshu Vats</h3>
            <p className="intro-role">Full Stack / MERN Developer</p>
            <p className="intro-desc">
              Passionate about building modern, responsive, and user-centric web applications. 
              I specialize in turning complex problems into elegant, functional solutions using the MERN stack 
              and a strong focus on clean code and performance.
            </p>
          </div>
          <div className="intro-actions">
            <a href={myResume} download="Divyanshu_Vats_Resume.pdf" className="resume-btn primary-btn">
              <FaDownload /> Download CV
            </a>
            <a href={myResume} target="_blank" rel="noreferrer" className="resume-btn outline-btn">
              <FaEye /> View Online
            </a>
          </div>
        </div>

        <div className="resume-grid">
          <div className="resume-col">
            
            {/* ✅ Experience - Exact from PDF */}
            <div className="resume-card">
              <h4 className="card-title"><FaBriefcase className="card-icon" /> Experience</h4>
              
              <div className="timeline-item">
                <span className="timeline-date">Jan 2026 – Jun 2026</span>
                <h5 className="timeline-title">MERN Stack Development Trainee</h5>
                <span className="timeline-org">Ispiders (Qspiders) — Noida, India</span>
                <p className="timeline-desc">
                  • Completed an intensive MERN stack training program covering React.js, Node.js, Express.js, and MongoDB through structured coursework and hands-on practice modules.<br/>
                  • Built multiple practice applications implementing REST APIs, CRUD operations, JWT-based authentication, and responsive UI components.<br/>
                  • Practiced Git/GitHub-based version control workflows and basic deployment as part of the training curriculum.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">Jul 2024 – Aug 2024</span>
                <h5 className="timeline-title">Web Developer Intern</h5>
                <span className="timeline-org">NullClass — Delhi, India (Remote)</span>
                <p className="timeline-desc">
                  • Built a real-time video conferencing platform using React.js, Node.js, and WebRTC, supporting live chat, screen sharing, and session recording.<br/>
                  • Implemented secure peer-to-peer connections using WebRTC with Socket.io-based signaling, improving cross-device call stability and reliability.<br/>
                  • Designed a responsive login and authentication interface with modern UI components for a smooth onboarding experience.
                </p>
              </div>
            </div>

            {/* ✅ Education - Exact from PDF */}
            <div className="resume-card">
              <h4 className="card-title"><FaGraduationCap className="card-icon" /> Education</h4>
              <div className="timeline-item">
                <span className="timeline-date">Aug 2022 – Jun 2026</span>
                <h5 className="timeline-title">Bachelor of Technology in Computer Science Engineering</h5>
                <span className="timeline-org">Gateway Institute of Engineering &amp; Technology (DCRUST), Haryana, India</span>
              </div>
            </div>

          </div>

          <div className="resume-col">
            
            <div className="resume-card">
              <h4 className="card-title"><FaCode className="card-icon" /> Tech Stack</h4>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Git &amp; GitHub</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>

            {/* ✅ Certifications - Exact from PDF */}
            <div className="resume-card">
              <h4 className="card-title"><FaAward className="card-icon" /> Certifications</h4>
              <div className="cert-item">
                <span className="cert-name">Full Stack Web Development</span>
                <span className="cert-org"> — Apna College</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Cloud Computing</span>
                <span className="cert-org"> — NS2EDU</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">AI Training</span>
                <span className="cert-org"> — Bolt IoT</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Web Development</span>
                <span className="cert-org"> — Internshala</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Resume;
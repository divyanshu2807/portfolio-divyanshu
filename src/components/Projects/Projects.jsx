import React, { useEffect, useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

import novaMeetImage from '../../assets/NOVAMEET-optimized.webp';
import sigmaGptImage from '../../assets/SigmaGpt-optimized.webp';
import finSightImage from '../../assets/FINSIGHTAI-optimized.webp';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ✅ ORDER: NovaMeet (1), SigmaGPT (2), FinSight AI (3)
  const projectsData = [
    {
      id: 1,
      title: "NovaMeet",
      description: "A real-time video meeting application designed for seamless communication and interactive collaboration using WebRTC and Socket.io.",
      image: novaMeetImage,
      technologies: ["React.js", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
      github: "https://github.com/divyanshu2807/NovaMeet",
      live: "https://nova-meet-six.vercel.app/"
    },
    {
      id: 2,
      title: "SigmaGPT",
      description: "An AI-powered conversational web application built with modern frontend and backend technologies using OpenAI's GPT model.",
      image: sigmaGptImage,
      technologies: ["React.js", "Node.js", "Express.js", "OpenAI API", "MongoDB"],
      github: "https://github.com/divyanshu2807/SIGMAGPT",
      live: "https://sigmagpt-nu.vercel.app/"
    },
    {
      id: 3,
      title: "FinSight AI",
      description: "An AI-driven stock trading platform designed to provide market insights, portfolio tracking and virtual trading experiences using Machine Learning (Python).",
      image: finSightImage,
      technologies: ["React.js", "Node.js", "Express.js", "Python (ML/AI)", "MongoDB"],
      github: "https://github.com/divyanshu2807/FINSIGHTAI",
      live: "https://finsightai-beta.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        
        <div className="projects-header">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">Things I've built with code.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
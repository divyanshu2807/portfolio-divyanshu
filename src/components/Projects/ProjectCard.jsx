import React from 'react'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import './Projects.css'; 
 
const ProjectCard = ({ project, index }) => { 
  return ( 
    <div className="project-card-wrapper"> 
      <div className="project-card" style={{ animationDelay: `${index * 120}ms` }}> 
         
        {/* Image Top */} 
        <div className="project-image-container"> 
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image" 
            loading="lazy"
          /> 
          <div className="image-overlay"></div> 
        </div> 
         
        {/* Content Bottom */} 
        <div className="project-content"> 
          <h3 className="project-title">{project.title}</h3> 
          <p className="project-description">{project.description}</p> 
           
          <div className="project-tags"> 
            {project.technologies.map((tech, i) => ( 
              <span key={i} className="project-tag">{tech}</span> 
            ))} 
          </div> 
           
          <div className="project-actions"> 
            <a href={project.github} target="_blank" rel="noreferrer" className="action-btn github-btn"> 
              <FaGithub /> GitHub 
            </a> 
            <a href={project.live} target="_blank" rel="noreferrer" className="action-btn live-btn"> 
              Live Demo <FaExternalLinkAlt /> 
            </a> 
          </div> 
        </div> 
 
      </div> 
    </div> 
  ); 
}; 
 
export default ProjectCard;
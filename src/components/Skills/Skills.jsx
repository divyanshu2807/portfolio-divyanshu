import React from 'react';
import './Skills.css';

// Correct official icons
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt, 
  FaJava
} from 'react-icons/fa';

// ✅ Redux ka correct import yahan se aayega (SiRedux)
import { 
  SiMongodb, 
  SiExpress, 
  SiTypescript, 
  SiNextdotjs, 
  SiPostman, 
  SiTailwindcss,
  SiRedux
} from 'react-icons/si';

const Skills = () => {
  // ✅ Har icon ko color property di hai
  const skillsData = [
    { name: "React.js", icon: <FaReact color="#61DBFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Professional <span className="highlight">Skillset</span></h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-pill" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
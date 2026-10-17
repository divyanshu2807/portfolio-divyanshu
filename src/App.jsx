import React, { useState } from 'react';  
import "bootstrap/dist/css/bootstrap.min.css";  
import "./index.css";  
  
import Navbar from "./Navbar";  
import Hero from "./components/Hero/Hero";  
import About from "./components/About/About";  
import Skills from "./components/Skills/Skills";  
import Projects from "./components/Projects/Projects";  
import Footer from "./components/Footer/Footer";  
import Resume from "./components/Resume/Resume";  
  
function App() {  
  const [activeView, setActiveView] = useState('home');  
  
  const handleNavClick = (view) => {  
    setActiveView(view);  
  };  
  
  return (  
    <>  
      <Navbar onNavClick={handleNavClick} />  
        
      {activeView === 'home' && (  
        <>  
          <Hero onNavClick={handleNavClick} />  
          <section id="about">  
            <About />  
          </section>  
          <Footer />  
        </>  
      )}  
  
      {activeView === 'skills' && (  
        <div style={{ minHeight: '100vh', background: '#0b1120' }}>  
          <Skills />  
        </div>  
      )}  
  
      {activeView === 'projects' && (  
        <div style={{ minHeight: '100vh', background: '#0b1120' }}>  
          <Projects />  
        </div>  
      )}  
  
       
      {activeView === 'resume' && (  
        <Resume />  
      )} 
        
    </>  
  );  
}  
  
export default App;
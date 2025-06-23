import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <img src={profile} alt="Tanu Priya" className="profile-pic" />
      <h1>Hi, I'm Tanu Priya 👋</h1>
      <h2>Full Stack Web Developer</h2>
      <p>
        Passionate about building responsive web applications and solving real-world problems with code.
      </p>
      <div className="home-buttons">
        <a href="/resume"><button>View Resume</button></a>
        <a href="/contact"><button>Contact Me</button></a>
      </div>
      <div className="social-links">
        <a href="https://github.com/TanuPriya04" target="_blank" rel="noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/tanu-priya-102216254/" target="_blank" rel="noreferrer"> LinkedIn</a>
      </div>
    </div>
  );
}

export default Home;

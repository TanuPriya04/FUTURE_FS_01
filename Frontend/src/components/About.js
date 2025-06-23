import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm Tanu Priya, a passionate Full Stack Web Developer with a strong interest in designing and developing scalable web applications.
        I enjoy solving complex problems and turning ideas into real products using modern web technologies.
      </p>

      <p>
        I have hands-on experience in technologies like React.js, Node.js, MongoDB, and Express.js. Currently exploring more advanced backend tools and DevOps practices.
      </p>

      <p>
        Apart from coding, I love reading about tech trends, participating in online coding contests, and collaborating on open-source projects.
      </p>

      <h2>Education</h2>
      <ul>
        <li><strong>B.Tech in Information Technology</strong> – Techno Main Salt Lake, 2022–2026 (Expected)</li>
        <li><strong> Higher Secondary Education</strong> – ADARSH +2 UCHH VIDYALAYA MADHWATAND KODERMA
              JHARKHAND, 2020–2022 </li>
        <li><strong>Primary and Secondary Education</strong> –  GRIZZLY VIDYALAYA PO TALAIYA DAM KODERMA
              JHARKHAND, 2013–2020 </li>
      </ul>

      <h2>Technical Skills</h2>
      <ul className="skills-list">
        <li>React.js</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Git & GitHub</li>
        <li>VS Code</li>
      </ul>

      <h2>Achievements</h2>
      <ul>
        <li>Selected for Flipkart Grid Competition – Software Development Track</li>
        <li>Participated in multiple coding contests</li>
      </ul>

      <h2>Soft Skills</h2>
      <ul>
        <li>Teamwork and Collaboration</li>
        <li>Adaptability</li>
        <li>Communication</li>
        <li>Problem-Solving</li>
        <li>Self-Motivation</li>
      </ul>
    </div>
  );
}

export default About;

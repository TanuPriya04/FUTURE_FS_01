import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Tanu Priya</h1>

      <section className="contact-info">
        <p><strong>Phone:</strong> +91-9693769952</p>
        <p><strong>Email:</strong> tanupd04@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tanu-priya-102216254" target="_blank" rel="noreferrer">tanu-priya-102216254</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/TanuPriya04" target="_blank" rel="noreferrer">TanuPriya04</a></p>
        <p><strong>Date of Birth:</strong> 04-05-2004</p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li><strong>2022– Ongoing:</strong> B.Tech in Information Technology, Techno Main Salt Lake — CGPA: 7.45</li>
          <li><strong>2020–2022:</strong> Higher Secondary, ADARSH +2 UCHH VIDYALAYA, KODERMA — 74.6%</li>
          <li><strong>20013–2020:</strong> GRIZZLY VIDYALAYA, KODERMA — 91.6%</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Coding:</strong> C, C++, Java, Python</li>
          <li><strong>Developer Tools:</strong> VS Code, Git, GitHub</li>
          <li><strong>Web Dev:</strong> HTML, CSS, JavaScript, React.js</li>
          <li><strong>Databases:</strong> SQL Server, MongoDB</li>
          <li><strong>Miscellaneous:</strong> DSA, OOPs, OS</li>
          <li><strong>Languages:</strong> English (R/W/S), Hindi (S)</li>
          <li><strong>Team Management:</strong> Decoration Co-Head at Samarth</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <ul>
          <li><strong>Website for Samarth</strong> – Official Education Society Site</li>
          <li><strong>Mr. Chatur</strong> – MAKAUT resources (organizer, syllabus, PYQs)</li>
          <li><strong>MyClass</strong> – Smart India Hackathon Project</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>Udemy Certification (2024)</li>
          <li>Silver Badge on Codechef (2023)</li>
          <li>Maintaining Codechef Streak</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Clubs & Responsibilities</h2>
        <ul>
          <li>Graphics Member at Samarth</li>
          <li>Content Member at Samaritans (Social Service Club)</li>
          <li>PR Head at Mr. Chatur</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;

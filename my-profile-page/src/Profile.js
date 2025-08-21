import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [greeting, setGreeting] = useState('');

  // Time-based greeting
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Morning!';
      if (hour < 18) return 'Good Afternoon!';
      return 'Good Evening!';
    };
    setGreeting(getGreeting());
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle bio visibility
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className={`profile-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <h2 className="nav-logo">Portfolio</h2>
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="profile-image">
            <div className="avatar">👨‍💻</div>
          </div>
          <div className="header-text">
            <h1 className="name">John Doe</h1>
            <p className="profession">Full Stack Developer</p>
            <p className="tagline">Crafting digital experiences with passion and precision</p>
            <p className="greeting">{greeting} Welcome to my portfolio!</p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="bio-text">
              I'm a passionate Full Stack Developer with 3+ years of experience building 
              modern web applications. I specialize in React, Node.js, and cloud technologies.
            </p>
            {showFullBio && (
              <div className="full-bio">
                <p>
                  My journey in software development began with a curiosity about how things work 
                  on the web. Today, I create scalable solutions that solve real-world problems. 
                  I believe in writing clean, maintainable code and staying up-to-date with the 
                  latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  mentoring junior developers, or exploring new technologies. I'm always eager 
                  to learn and take on new challenges that push my boundaries.
                </p>
              </div>
            )}
            <button className="bio-toggle" onClick={toggleBio}>
              {showFullBio ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skills-list">
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>TypeScript</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skills-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul className="skills-list">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>REST APIs</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul className="skills-list">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Optional) */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution built with React, Node.js, and MongoDB.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with real-time updates.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Socket.io</span>
                <span>Express</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Weather Dashboard</h3>
              <p>A responsive weather application with location-based forecasts.</p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>Weather API</span>
                <span>CSS Grid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out!
            </p>
            <div className="contact-links">
              <a 
                href="mailto:john.doe@example.com" 
                className="contact-link email"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 john.doe@example.com
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                className="contact-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://github.com/johndoe" 
                className="contact-link github"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">
            © 2024 John Doe. All rights reserved. Built with ❤️ and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;

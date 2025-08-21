import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');

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

  // Typing animation for tagline
  useEffect(() => {
    const text = "Turning complex technical concepts into intuitive, scalable products";
    let index = 0;
    
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle bio visibility
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`profile-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <h2 className="nav-logo">Mohamed Ali</h2>
          <div className="nav-links">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
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
      <header className="header" id="home">
        <div className="header-content">
          <div className="profile-image">
            <div className="avatar">🚀</div>
          </div>
          <div className="header-text">
            <h1 className="name">Mohamed Ali</h1>
            <p className="profession">Full Stack Developer & Blockchain Enthusiast</p>
            <p className="tagline typing-effect">{typedText}<span className="cursor">|</span></p>
            <p className="greeting">{greeting} Welcome to my portfolio!</p>
            <div className="header-badges">
              <span className="badge">Computer Science Graduate</span>
              <span className="badge">React/Node.js Developer</span>
              <span className="badge">Web3 Enthusiast</span>
              <span className="badge">Full Stack Engineer</span>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">Get In Touch</a>
              <a href="#projects" className="cta-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="bio-text">
              I'm a Computer Science graduate (2025) from Misr International University, passionate about 
              software engineering, UI/UX, and blockchain development. With a strong foundation in 
              full-stack development, cybersecurity, and scalable application design, I combine technical 
              depth with creativity to build secure and user-friendly systems.
            </p>
            {showFullBio && (
              <div className="full-bio">
                <p>
                  I have hands-on experience in frontend and backend development, internship training in IT operations, 
                  and exposure to real-world challenges through freelance projects, hackathons, and startup initiatives. 
                  My goal is to grow as a software engineer while building impactful solutions through innovation, 
                  collaboration, and continuous learning.
                </p>
                <div className="education-experience">
                  <h4>🎓 Education</h4>
                  <p>B.Sc. in Computer Science & Information Systems – Misr International University (2021–2025)</p>
                  
                  <h4>💼 Professional Experience</h4>
                  <ul>
                    <li><strong>Software Intern</strong> – Circle Advertising (Sep 2024 – Oct 2024)</li>
                    <li><strong>IT Intern</strong> – CIB Egypt (Jul 2024 – Aug 2024)</li>
                    <li><strong>MINT Ambassador</strong> (2024 – Present)</li>
                    <li><strong>Freelance Developer</strong> – Seductive Pharaohs (2025)</li>
                  </ul>
                </div>
              </div>
            )}
            <button className="bio-toggle" onClick={toggleBio}>
              {showFullBio ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2nd</div>
              <div className="stat-label">ICP Hackathon Place</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul className="skills-list">
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Dart</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend & UI/UX</h3>
              <ul className="skills-list">
                <li>React.js</li>
                <li>Angular</li>
                <li>HTML5 & CSS3</li>
                <li>Bootstrap</li>
                <li>Framer</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend & Databases</h3>
              <ul className="skills-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Spring Boot</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Mobile & Tools</h3>
              <ul className="skills-list">
                <li>Flutter</li>
                <li>GitHub</li>
                <li>Jira</li>
                <li>Postman</li>
                <li>Visual Studio</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-badge">🏆 2nd Place ICP Hackathon</div>
              <h3>CargoTrace Finance</h3>
              <p>A DeFi solution connecting Ethereum & ICP to tokenize trade documents and trigger financing. Built for ICP Hackathon 2025.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Ethereum</span>
                <span>ICP</span>
                <span>DeFi</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Cybersecurity Awareness Training Platform</h3>
              <p>Graduation project featuring simulated real-world attacks, authentication, role-based access control, and progress tracking.</p>
              <div className="project-tech">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>React</span>
                <span>Express.js</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Volunteens Web & Mobile App</h3>
              <p>Recruitment and event management platform for volunteers with real-time event coordination and role-based access.</p>
              <div className="project-tech">
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Flutter</span>
                <span>Firebase</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Aussie Food Restaurant Web App</h3>
              <p>Online food ordering and reservation system with payment gateway integration.</p>
              <div className="project-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Payment API</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Linkopharm Web App</h3>
              <p>Pharmaceutical inventory and sales management system with admin dashboards.</p>
              <div className="project-tech">
                <span>PHP</span>
                <span>MySQL</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Seductive Pharaohs Landing Page</h3>
              <p>Premium landing page designed and built using Framer for a modeling agency with focus on UI/UX.</p>
              <div className="project-tech">
                <span>Framer</span>
                <span>UI/UX</span>
                <span>Landing Page</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out for collaborations, job opportunities, or just to say hello!
            </p>
            <div className="contact-links">
              <a 
                href="mailto:mohamed.ali@example.com" 
                className="contact-link email"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 mohamed.ali@example.com
              </a>
              <a 
                href="https://linkedin.com/in/mohamed-ali-dev" 
                className="contact-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://github.com/mohamed-ali-dev" 
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
            © 2025 Mohamed Ali. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;

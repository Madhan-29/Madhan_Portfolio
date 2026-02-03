import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Hostel Management System",
      tech: "Spring Boot, React, MySQL, JWT",
      desc: "Automates hostel attendance and room allocation.",
      github: "https://github.com/Madhan-29"
    },
    {
      title: "Chris AI Extension",
      tech: "JavaScript + AI",
      desc: "On-page AI chatbot and translator.",
      github: "https://github.com/Madhan-29"
    }
  ];

  const skills = [
    "C", "C++", "Java", "JavaScript",
    "React", "Node.js", "Express",
    "Spring Boot", "MongoDB", "MySQL"
  ];

  // Typing Animation
  const roles = [
    "Java Full Stack Developer",
    "AI Integration Enthusiast"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    if (index >= roles.length) {
      setIndex(0);
      return;
    }

    if (!roles[index]) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // Section reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Madhan M</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero reveal">
        <img src="/profile.jpeg" alt="profile" className="profile-photo" />

        <h1>Hi, I'm Madhan 👋</h1>
        <h3 className="typing-text">{text}|</h3>
        <p className="hero-subtitle">
          Passionate about building scalable full stack applications and AI-powered solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" download className="btn outline">Download Resume</a>
        </div>
      </section>

  <section id="about" className="about-section reveal">
  <div className="about-wrapper">

    {/* LEFT CONTENT */}
    <div className="about-main">
      <h2 className="about-title">About Me</h2>
      <div className="about-accent"></div>

      <p className="about-para">
        I am a Computer Science Engineering student focused on building modern,
        scalable, and user-friendly applications. I enjoy working across the full
        stack — from designing responsive frontends to developing secure backend systems.
      </p>

      <p className="about-para">
        Currently, I am strengthening my expertise in MERN stack development and backend
        engineering using Spring Boot, while also exploring AI integration in real-world applications.
      </p>

      {/* Highlights Grid */}
      <div className="about-highlights-grid">

        <div className="about-highlight">
          <h4>🎓 Education</h4>
          <p>B.E Computer Science Engineering</p>
        </div>

        <div className="about-highlight">
          <h4>💻 Focus</h4>
          <p> JavaFull Stack Developer </p>
        </div>

        <div className="about-highlight">
          <h4>🚀 Goal</h4>
          <p>Build Production Level Applications</p>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE CARD */}
    <div className="about-side">
      <div className="about-info-card">
  <h3>Quick Info</h3>

  <div className="info-grid">

    <div className="info-left">📍 Location</div>
    <div className="info-right">India</div>

    <div className="info-left">💼Specialization</div>
    <div className="info-right">Full Stack Development</div>

    <div className="info-left">🧠 Interests</div>
    <div className="info-right">AI + Scalable Systems</div>

    <div className="info-left">🤝 Open To</div>
    <div className="info-right">Internships & Developer Roles</div>

  </div>
</div>
    </div>
  </div>
</section>

<section id="skills" className="skills-section reveal">

  <h2 className="skills-title">Skills</h2>
  <div className="skills-line"></div>

  <div className="skills-grid">

    {/* Frontend */}
    <div className="skills-card">
      <h3>Frontend</h3>
      <div className="skills-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    {/* Backend */}
    <div className="skills-card">
      <h3>Backend</h3>
      <div className="skills-tags">
        <span>Spring Boot</span>
        <span>Node.js</span>
        <span>Express</span>
      </div>
    </div>

    {/* Database */}
    <div className="skills-card">
      <h3>Database</h3>
      <div className="skills-tags">
        <span>MySQL</span>
        <span>MongoDB</span>
      </div>
    </div>

    {/* Tools */}
    <div className="skills-card">
      <h3>Tools</h3>
      <div className="skills-tags">
        <span>Git</span>
        <span>Postman</span>
        <span>VS Code</span>
      </div>
    </div>

  </div>

</section>


      {/* Projects */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <div key={index} className="project-card hover-lift">
              <div className="project-image">Project Image</div>
              <h3>{p.title}</h3>
              <p className="tech">{p.tech}</p>
              <p>{p.desc}</p>
              <a href={p.github} target="_blank" rel="noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
     <div className="contact-row">
  <span className="contact-label">Email</span>

  <a
    href="mailto:madhanmadhan89743@gmail.com" className="contact-value">
    madhanmadhan89743@gmail.com
  </a>
</div>


      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Madhan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
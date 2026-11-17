
import "./App.css";

function App() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Java", "Python", "C", "JavaScript"],
    },
    {
      title: "Backend Development",
      items: ["Core Java", "Spring Boot", "REST APIs", "Django REST Framework"],
    },
    {
      title: "Frontend Development",
      items: ["React", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "Database & Tools",
      items: ["PostgreSQL", "SQLite", "Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    },
  ];

  const projects = [
    {
      number: "01",
      name: "Maatram VolunteerHub",
      type: "Web Application",
      description:
        "A volunteer management platform designed to connect volunteers with community service opportunities. It includes opportunity management, volunteer applications, and an admin approval workflow.",
      technologies: ["React", "Django REST Framework", "Database"],
      status: "Development",
    },
    {
      number: "02",
      name: "AquaGuard Edge",
      type: "IoT Project",
      description:
        "An IoT-based water leakage detection and localization concept focused on identifying leakage points and helping reduce water wastage through connected monitoring.",
      technologies: ["IoT", "Sensors", "Embedded Systems", "Software"],
      status: "Planning",
    },
    {
      number: "03",
      name: "StudyMate",
      type: "EdTech Platform",
      description:
        "A learning platform concept that transforms uploaded study materials into quizzes and question-answer resources to support more effective learning.",
      technologies: ["Java", "React", "PostgreSQL", "AI Integration"],
      status: "Concept",
    },
  ];

  const achievements = [
    {
      title: "National-Level Paper Presentation",
      description:
        "Participated in a national-level paper presentation and secured First Prize.",
    },
    {
      title: "B2G Mini Hackathon",
      description:
        "Participated in a mini hackathon focused on developing solutions through teamwork and innovation.",
    },
    {
      title: "KONE Elevate Hackathon",
      description:
        "Participated in a hackathon experience focused on problem-solving and technical ideas.",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          DHARUN PRASATH KANNAN<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M DHARUN 👋</p>

            <h1>
              Dharun Prasath Kannan
              <br />
              <span>Software Developer.</span>
            </h1>

            <h2>
              Building my journey in Java Backend Development, Web Technologies
              and IoT.
            </h2>

            <p className="hero-description">
              I'm a Computer Science and Engineering student who enjoys
              learning how software works behind the scenes. I explore
              programming concepts by building practical projects, developing
              APIs and understanding how different technologies work together.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/dharunprasath365-beep"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dharun-prasath-kannan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-icon">{"</>"}</div>

              <p className="profile-label">CURRENT FOCUS</p>

              <h3>Learning. Building. Improving.</h3>

              <p className="profile-description">
                Turning programming knowledge into practical software
                solutions, one project at a time.
              </p>

              <div className="profile-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>IoT</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section about-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span>Me.</span>
          </h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm Dharun Prasath Kannan, a Computer Science and Engineering
                student specializing in the Internet of Things at Sri Sairam
                Engineering College.
              </p>

              <p>
                My interest lies in software development, especially Java
                backend engineering. I enjoy understanding programming
                fundamentals, designing application logic, creating REST APIs
                and working with databases.
              </p>

              <p>
                Rather than limiting my learning to theory, I try to apply
                concepts through hands-on development. Working on projects and
                participating in technical events helps me improve my
                problem-solving, communication and teamwork skills.
              </p>

              <p>
                My current goal is to become a strong software developer with
                the ability to design, build and maintain reliable real-world
                applications.
              </p>
            </div>

            <div className="education-card">
              <p className="card-label">EDUCATION</p>
              <h3>Sri Sairam Engineering College</h3>
              <p>Computer Science and Engineering (IoT)</p>
              <p>Expected Graduation: March 2029</p>

              <div className="education-divider"></div>

              <p className="card-label">ACADEMIC PERFORMANCE</p>
              <h2>9.02 CGPA</h2>
              <p>Current academic performance</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills-section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">
            Technical <span>Skills.</span>
          </h2>

          <p className="section-description">
            Technologies and tools I am learning and using while building my
            development skills.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.title}>
                <span className="project-number">
                  0{index + 1}
                </span>

                <h3>{skill.title}</h3>

                <div className="project-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section" id="projects">
          <p className="eyebrow">MY PRACTICAL LEARNING</p>
          <h2 className="section-title">
            Featured <span>Projects.</span>
          </h2>

          <p className="section-description">
            Ideas and development experiences that help me apply technical
            concepts to practical problems.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <p className="project-status">
                  Status: {project.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section achievements-section" id="achievements">
          <p className="eyebrow">MILESTONES</p>
          <h2 className="section-title">
            Achievements & <span>Activities.</span>
          </h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={achievement.title}>
                <span className="project-number">
                  0{index + 1}
                </span>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Goals */}
        <section className="section goals-section">
          <p className="eyebrow">WHAT'S NEXT</p>
          <h2 className="section-title">
            My <span>Direction.</span>
          </h2>

          <div className="goals-card">
            <h3>Growing into a Professional Backend Developer</h3>

            <p>
              I am continuously improving my Java fundamentals, object-oriented
              programming, data structures, Spring Boot, REST API development,
              database management and software design practices.
            </p>

            <p>
              My aim is to move beyond simply writing code and learn how to
              build secure, scalable, maintainable applications that solve
              real problems.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <p className="eyebrow">HAVE AN IDEA OR OPPORTUNITY?</p>

          <h2 className="section-title">
            Let's Build Something <span>Together.</span>
          </h2>

          <p className="section-description">
            I'm open to connecting with developers, learning from experienced
            professionals, collaborating on projects and exploring internship
            opportunities.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:dharunprasath365@gmail.com"
              className="primary-button"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/dharun-prasath-kannan/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Dharun Prasath Kannan.</p>
        <p>Designed with curiosity and built with code.</p>
      </footer>
    </div>
  );
}

export default App;

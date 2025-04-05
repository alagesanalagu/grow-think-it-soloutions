import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const projects = [
    {
      name: "ProfitUp.in",
      description: "Comprehensive business management solution with inventory, accounting, and CRM features",
      tech: "Odoo, Python, PostgreSQL",
      link: "https://profitup.in"
    },
    {
      name: "NextGen2.odoo.com",
      description: "Next generation ERP system with advanced automation and AI integration",
      tech: "Odoo 16, Python, JavaScript",
      link: "https://nextgen2.odoo.com"
    },
    {
      name: "PhotoStudio.ai.in",
      description: "AI-powered photo editing studio with automated background removal and enhancement",
      tech: "React, Node.js, TensorFlow",
      link: "https://photostudio.ai.in"
    },
    {
      name: "NxTRuN",
      description: "Outstanding service management platform with real-time tracking and analytics",
      tech: "React Native, Firebase, Google Maps API",
      link: "#"
    },
    {
      name: "Stone Paper Game",
      description: "Interactive educational game developed in React Native for both iOS and Android",
      tech: "React Native, Redux, Firebase",
      link: "#"
    }
  ];

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business needs",
      icon: "💻"
    },
    {
      title: "ERP Solutions",
      description: "Comprehensive business management systems",
      icon: "📊"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform applications with React Native",
      icon: "📱"
    },
    {
      title: "AI Integration",
      description: "Smart solutions powered by machine learning",
      icon: "🧠"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications",
      icon: "🌐"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span>Grow Think</span>
          </motion.h1>
          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Innovating the future with cutting-edge technology solutions
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="about-story-section">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="story-content"
          >
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              Founded in 2023, Grow Think IT Solutions has rapidly emerged as a leader in delivering 
              innovative technology solutions to businesses worldwide. Our journey began with a small 
              team of passionate developers and has grown into a full-service technology partner.
            </p>
            <p className="story-text">
              We specialize in creating custom software solutions that drive digital transformation, 
              with expertise in ERP systems, mobile applications, AI integration, and web development.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Clients Worldwide</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="story-image-container"
          >
            <div className="story-image">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <span>Our Journey</span>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h2 className="section-title center">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="service-card"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(37, 99, 235, 0.2)"
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          <h2 className="section-title center">Our Notable Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="project-card"
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div className="project-header">
                  <div className="project-logo">{project.name.charAt(0)}</div>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span>Tech:</span> {project.tech}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-title center">Our Team</h2>
          <p className="section-subtitle center">
            Meet the talented individuals behind our success
          </p>
          <div className="team-grid">
            {[
              {
                name: "Alagesan",
                role: "CEO & Full Stack Developer",
                bio: "2+ years experience in software development. Expert in Odoo, React, and React Native.",
                expertise: "Odoo, React, Node.js"
              },
              {
                name: "Mohanaseetharaman",
                role: "Web Developer",
                bio: "Specializes in React and Node.js applications with 2+ years of experience.",
                expertise: "React, Node.js, MongoDB"
              },
              {
                name: "kannan",
                role: "UI/UX Designer",
                bio: "Creates beautiful and intuitive user interfaces with a focus on user experience.",
                expertise: "Figma, Adobe XD, CSS"
              },
              {
                name: "Aathi siva",
                role: "Business Analyst&content cretion",
                bio: "Bridges the gap between technical and business teams.content provider",
                expertise: "Agile, Scrum"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="team-card"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px rgba(37, 99, 235, 0.15)"
                }}
              >
                <div className="team-member-image">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
                <div className="team-member-expertise">
                  <strong>Expertise:</strong> {member.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mission-section"
        >
          <h2 className="section-title center">Our Mission</h2>
          <p className="mission-statement">
            To empower businesses through innovative technology solutions that drive growth, 
            efficiency, and digital transformation. We believe in building long-term 
            partnerships with our clients by delivering exceptional value and quality.
          </p>
          <div className="mission-values">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Pushing boundaries with creative solutions</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Honest and transparent in all we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Excellence</h3>
              <p>Commitment to quality in every project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
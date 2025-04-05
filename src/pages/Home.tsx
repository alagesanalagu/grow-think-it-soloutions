import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Group from '../assets/download (1).jpg';
import Intrducer from '../assets/alagesan.jpeg';
import { useEffect, useState } from 'react';
import webinar from '../assets/images (1).jpg';

const Home = () => {
  const navigate = useNavigate();
  // Set initial countdown to 2 days (48 hours)
  const [timeRemaining, setTimeRemaining] = useState({
    days: 2,
    hours: 0,
    minutes: 0
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Webinar countdown setup (2 days from now)
    const webinarDate = new Date();
    webinarDate.setDate(webinarDate.getDate() + 2);
    webinarDate.setHours(webinarDate.getHours() + 5); // Add 5 hours
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = webinarDate.getTime() - now.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeRemaining({
        days,
        hours,
        minutes
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = () => {
    navigate('/about');
  };

  const handleWebinarAction = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="home-container">
      {/* Alert Modal */}
      {showAlert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="alert-modal"
        >
          <div className="alert-content">
            <h3>Registration Coming Soon!</h3>
            <p>Keep wait guys! Registration will open in 5 hours. Stay tuned for updates!</p>
            <button onClick={() => setShowAlert(false)}>OK</button>
          </div>
        </motion.div>
      )}

      {/* Enhanced Webinar Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="webinar-banner"
      >
        <div className="banner-content">
          <div className="banner-text">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2
              }}
              className="countdown-badge"
            >
              <span>Limited Seats!</span>
            </motion.div>
            
            <motion.h3
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="banner-title"
            >
              30 Days Full Stack Development <span>Webinar</span>
            </motion.h3>
            
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
              className="banner-subtitle"
            >
              Master MERN Stack with hands-on projects and expert guidance
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="countdown-timer"
            >
              <div className="countdown-item">
                <span>{timeRemaining.days}</span>
                <small>Days</small>
              </div>
              <div className="countdown-item">
                <span>{timeRemaining.hours}</span>
                <small>Hours</small>
              </div>
              <div className="countdown-item">
                <span>{timeRemaining.minutes}</span>
                <small>Minutes</small>
              </div>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="banner-button"
              onClick={handleWebinarAction}
            >
              Register Now
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="banner-image"
          >
            <img 
              src={Intrducer} 
              alt="Instructor" 
              className="instructor-image"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="instructor-badge"
            >
              <span>Expert Instructor</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="banner-wave"
        />
      </motion.div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <h1 className="hero-title">
                Transform Your <span>Business</span> With Our IT Solutions
              </h1>
              <p className="hero-description">
                We deliver cutting-edge web development and social media management services 
                to help your business thrive in the digital world.
              </p>
              <div className="hero-buttons">
                <motion.button
                  whileHover={{ y: -3, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                  onClick={handleServiceClick}
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-image-container"
            >
              <motion.img 
                src={Group}
                alt="IT Solutions" 
                className="hero-image"
                whileHover={{ scale: 1.03 }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="floating-dots"
              >
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${5 + Math.random() * 5}px`,
                      height: `${5 + Math.random() * 5}px`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="services-grid">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB",
                icon: "💻",
                color: "#4361ee"
              },
              {
                title: "Social Media Management",
                description: "Strategic social media campaigns to boost your online presence and engagement",
                icon: "📱",
                color: "#3a0ca3"
              },
              {
                title: "IT Training",
                description: "30-day intensive bootcamps in Java and Full Stack Development with hands-on projects",
                icon: "🎓",
                color: "#7209b7"
              },
              {
                title: "Mobile App Development",
                description: "Cross-platform mobile applications for iOS and Android using React Native",
                icon: "📱",
                color: "#f72585"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: `0 10px 20px ${service.color}40` }}
                className="service-card"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <motion.div 
                  className="service-icon"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <motion.button
                  whileHover={{ backgroundColor: service.color, color: 'white' }}
                  className="service-button"
                  style={{ color: service.color }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Details Section */}
      <section className="webinar-details">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="webinar-container"
        >
          <div className="webinar-content">
            <h2>About Our Webinar</h2>
            <p>
              Our 30-day Full Stack Development webinar is designed to take you from beginner to 
              job-ready developer. You'll learn:
            </p>
            <ul>
              <li>Frontend development with React</li>
              <li>Backend development with Node.js and Express</li>
              <li>Database management with MongoDB</li>
              <li>Deployment strategies</li>
              <li>Real-world project experience</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="webinar-register-btn"
              onClick={handleWebinarAction}
            >
              Register Now
            </motion.button>
          </div>
          <div className="webinar-image">
            <img src={webinar} alt="Webinar" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
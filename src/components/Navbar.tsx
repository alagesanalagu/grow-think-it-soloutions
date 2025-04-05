import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import '../styles/Navbar.css';
import logoImage from '../assets/grow.jpg';

interface User {
  email: string;
  // Add other user properties as needed
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowDropdown(false);
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || 
          (path === '/' && location.pathname === '/home');
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="logo-container"
        >
          <Link to="/" className="logo-link">
            <img 
              src={logoImage} 
              alt="Grow Think IT Solutions" 
              className="logo-image"
            />
            <motion.span 
              className="logo-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              GROW THINK IT SOLUTIONS
            </motion.span>
          </Link>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
                <motion.span
                  className="link-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: isActive(item.path) ? 1 : 0,
                    backgroundColor: isActive(item.path) ? 'orange' : 'green'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
          
          {user ? (
            <motion.li
              className="user-menu-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="user-menu">
                <motion.div
                  className="user-avatar"
                  onClick={toggleDropdown}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {user.email?.charAt(0).toUpperCase()}
                </motion.div>

                {showDropdown && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="dropdown-item user-email">
                      {user.email}
                    </div>
                    <Link 
                      to="/account" 
                      className="dropdown-item"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Account
                    </Link>
                    <button 
                      className="dropdown-item logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to="/login"
                className={`nav-link ${isActive('/login') ? 'active' : ''}`}
              >
                Login
                <motion.span
                  className="link-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: isActive('/login') ? 1 : 0,
                    backgroundColor: isActive('/login') ? 'orange' : 'green'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
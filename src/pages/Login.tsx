import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      if (isLogin) {
        // Handle login
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        
        setSuccessMessage('Login successful! Redirecting...');
        
        // Get the redirect path from location state or default to home
        const from = location.state?.from || '/';
        
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      } else {
        // Handle registration
        const { error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/login`
          }
        });

        if (error) throw error;
        setSuccessMessage('Registration successful! Please check your email for confirmation.');
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email first');
      return;
    }
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      setSuccessMessage('Password reset link sent to your email!');
    } catch (error: any) {
      setError(error.message || 'Failed to send reset email');
    }
  };

  return (
    <div className="form-container">
      <div className={`form-card ${isLogin ? 'login' : 'register'}`}>
        <div className="form-header">
          <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <div className="form-toggle">
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setSuccessMessage('');
              }}
              className={`toggle-btn ${isLogin ? '' : 'active'}`}
            >
              {isLogin ? 'Need an account?' : 'Already registered?'}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          {error && (
            <div className="alert error">
              <span className="close-btn" onClick={() => setError('')}>&times;</span>
              {error}
            </div>
          )}
          
          {successMessage && (
            <div className="alert success">
              <span className="close-btn" onClick={() => setSuccessMessage('')}>&times;</span>
              {successMessage}
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label>Email Address</label>
            <span className="input-highlight"></span>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              minLength={6}
            />
            <label>Password</label>
            <span className="input-highlight"></span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
          >
            <span className="btn-text">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </span>
            <span className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {isLogin && (
            <div className="forgot-password">
              <button 
                type="button" 
                className="text-link"
                onClick={handlePasswordReset}
              >
                Forgot password?
              </button>
            </div>
          )}
        </form>

        <div className="form-footer">
          <div className="social-login">
            <p>Or continue with</p>
            <div className="social-icons">
              <button 
                type="button" 
                className="social-btn google"
                onClick={async () => {
                  await supabase.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                      redirectTo: `${window.location.origin}/`
                    }
                  });
                }}
              >
                <i className="fab fa-google"></i>
              </button>
              <button 
                type="button" 
                className="social-btn github"
                onClick={async () => {
                  await supabase.auth.signInWithOAuth({
                    provider: 'github',
                    options: {
                      redirectTo: `${window.location.origin}/`
                    }
                  });
                }}
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">PocoPiko</Link>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Sign in</Link>
          <Link to="/register" className="btn btn-primary">Get started</Link>
        </div>
      </div>
    </nav>
  );
}

// Homepage Component
function HomePage() {
  return (
    <div className="page">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Networking for the Latinx Community</h1>
          <p className="hero-subtitle">
            Juntos si se peude!
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary btn-large">
              Start for free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link to="/login" className="btn btn-secondary btn-large">Sign in</Link>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Active professionals</div>
          </div>
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Connections made</div>
          </div>
          <div className="stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Companies</div>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Everything you need to network</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Professional Profiles</h3>
            <p>Showcase your experience, skills, and achievements in a beautiful profile.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Build Your Network</h3>
            <p>Connect with professionals in your industry and expand your opportunities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Share & Engage</h3>
            <p>Post updates, share insights, and engage with your professional community.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>pikopoco</h3>
              <p>Professional networking, for the latinx community by the latinx community.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Security</a>
                <a href="#">Enterprise</a>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
              </div>
              
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Help Center</a>
                <a href="#">Community</a>
                <a href="#">API Docs</a>
                <a href="#">Status</a>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Licenses</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Pikopoco. All rights reserved.</p>
            <div className="footer-social">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Login Page
function LoginPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Sign in to Pikopoco</h2>
          <form className="auth-form">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
          </form>
          <div className="auth-footer">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register Page
function RegisterPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Create your account</h2>
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Create account</button>
          </form>
          <div className="auth-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
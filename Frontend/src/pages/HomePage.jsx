import { Link } from 'react-router-dom';
import Navbar from '../components/auth/Navbar';

function HomePage() {
  return (
    <div className="page homepage">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Networking for the Latinx Community</h1>
          <p className="hero-subtitle">
            For Our People By Our People
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
      </div>
        
      <div className="flags-carousel">
        <div className="flags-track">
          {/* First set of flags */}
          <div className="flag">🇲🇽</div>
          <div className="flag">🇨🇴</div>
          <div className="flag">🇦🇷</div>
          <div className="flag">🇵🇪</div>
          <div className="flag">🇻🇪</div>
          <div className="flag">🇨🇱</div>
          <div className="flag">🇪🇨</div>
          <div className="flag">🇬🇹</div>
          <div className="flag">🇨🇺</div>
          <div className="flag">🇧🇴</div>
          <div className="flag">🇩🇴</div>
          <div className="flag">🇭🇳</div>
          <div className="flag">🇵🇾</div>
          <div className="flag">🇸🇻</div>
          <div className="flag">🇳🇮</div>
          <div className="flag">🇨🇷</div>
          <div className="flag">🇵🇦</div>
          <div className="flag">🇺🇾</div>
          <div className="flag">🇵🇷</div>
          <div className="flag">🇪🇸</div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flag">🇲🇽</div>
          <div className="flag">🇨🇴</div>
          <div className="flag">🇦🇷</div>
          <div className="flag">🇵🇪</div>
          <div className="flag">🇻🇪</div>
          <div className="flag">🇨🇱</div>
          <div className="flag">🇪🇨</div>
          <div className="flag">🇬🇹</div>
          <div className="flag">🇨🇺</div>
          <div className="flag">🇧🇴</div>
          <div className="flag">🇩🇴</div>
          <div className="flag">🇭🇳</div>
          <div className="flag">🇵🇾</div>
          <div className="flag">🇸🇻</div>
          <div className="flag">🇳🇮</div>
          <div className="flag">🇨🇷</div>
          <div className="flag">🇵🇦</div>
          <div className="flag">🇺🇾</div>
          <div className="flag">🇵🇷</div>
          <div className="flag">🇪🇸</div>
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
              <h3>PocoPiko</h3>
              <p>Professional Networking - For The Latinx Community By The Latinx Community</p>
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
            <p>© 2025 PocoPiko. All rights reserved.</p>
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

export default HomePage;
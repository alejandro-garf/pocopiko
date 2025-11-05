import { Link } from 'react-router-dom';
import Navbar from '../components/auth/Navbar';

function LoginPage() {
  return (
    <div className="page auth-page">
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Sign in to PocoPiko</h2>
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

export default LoginPage;
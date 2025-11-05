import { Link } from 'react-router-dom';
import Navbar from '../components/auth/Navbar';

function RegisterPage() {
  return (
    <div className="page auth-page">
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

export default RegisterPage;
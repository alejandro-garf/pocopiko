import { Link } from 'react-router-dom';

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

export default Navbar;
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        {/* Logo - serves as feed button */}
        <Link to="/feed" className="top-nav-logo">
          PocoPiko
        </Link>

        {/* Search Bar */}
        <div className="top-nav-search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search" />
        </div>

        {/* Profile */}
        <Link to="/profile" className="top-nav-profile">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
          <span className="profile-name">Me</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default TopNav;
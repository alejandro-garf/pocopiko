import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      {/* Profile Quick View Card */}
      <div className="sidebar-card profile-card">
        <div className="profile-card-banner"></div>
        <div className="profile-card-content">
          <div className="profile-card-avatar">
            <img src="https://via.placeholder.com/70" alt="Profile" />
          </div>
          <Link to="/profile" className="profile-card-name">
            John Doe
          </Link>
          <p className="profile-card-title">Software Engineer</p>
          <div className="profile-card-stats">
            <div className="stat">
              <span className="stat-label">Bros</span>
              <span className="stat-value">342</span>
            </div>
            <div className="stat">
              <span className="stat-label">Profile views</span>
              <span className="stat-value">89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="sidebar-card nav-menu">
        <Link to="/feed" className="nav-menu-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Feed</span>
        </Link>

        <Link to="/profile" className="nav-menu-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Profile</span>
        </Link>
      </div>
    </aside>
  );
}

export default LeftSidebar;
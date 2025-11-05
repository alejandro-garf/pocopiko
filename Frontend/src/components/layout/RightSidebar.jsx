import { Link } from 'react-router-dom';

function RightSidebar() {
  // Mock data - will be replaced with real data later
  const suggestions = [
    { id: 1, name: 'Maria Garcia', title: 'Product Designer', image: 'https://via.placeholder.com/48' },
    { id: 2, name: 'Carlos Rodriguez', title: 'Software Engineer', image: 'https://via.placeholder.com/48' },
    { id: 3, name: 'Ana Martinez', title: 'Marketing Manager', image: 'https://via.placeholder.com/48' },
    { id: 4, name: 'Luis Hernandez', title: 'Data Analyst', image: 'https://via.placeholder.com/48' },
    { id: 5, name: 'Sofia Lopez', title: 'UX Researcher', image: 'https://via.placeholder.com/48' },
  ];

  return (
    <aside className="right-sidebar">
      {/* Bros You May Know */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">
          <h3>Bros you may know</h3>
        </div>
        <div className="suggestions-list">
          {suggestions.map((person) => (
            <div key={person.id} className="suggestion-item">
              <Link to={`/profile/${person.id}`} className="suggestion-info">
                <img src={person.image} alt={person.name} className="suggestion-avatar" />
                <div className="suggestion-details">
                  <h4>{person.name}</h4>
                  <p>{person.title}</p>
                </div>
              </Link>
              <button className="btn-add-bro">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <Link to="/network" className="sidebar-card-footer">
          View all suggestions
        </Link>
      </div>

      {/* Trending/Featured Section (Optional) */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">
          <h3>Trending in Latinx community</h3>
        </div>
        <div className="trending-list">
          <div className="trending-item">
            <h4>#LatinxInTech</h4>
            <p>1,234 posts this week</p>
          </div>
          <div className="trending-item">
            <h4>#RemoteJobs</h4>
            <p>892 posts this week</p>
          </div>
          <div className="trending-item">
            <h4>#StartupLife</h4>
            <p>567 posts this week</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
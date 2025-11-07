import { useState } from 'react';
import { Link } from 'react-router-dom';

function BrosListSection() {
  const [friends] = useState([
    {
      id: 1,
      name: 'Maria Garcia',
      title: 'Product Designer at Tech Startup',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 12
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      title: 'Software Engineer at Big Tech',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 8
    },
    {
      id: 3,
      name: 'Ana Martinez',
      title: 'Marketing Manager at Agency',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 15
    },
    {
      id: 4,
      name: 'Luis Hernandez',
      title: 'Data Analyst at Finance Corp',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 5
    },
    {
      id: 5,
      name: 'Sofia Lopez',
      title: 'UX Researcher at Design Studio',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 20
    },
    {
      id: 6,
      name: 'Diego Ramirez',
      title: 'Full Stack Developer',
      avatar: 'https://via.placeholder.com/48',
      mutualFriends: 3
    }
  ]);

  return (
    <div className="profile-section friends-list-section">
      <div className="section-header">
        <h3>Friends</h3>
        <p className="section-subtitle">{friends.length} connections</p>
      </div>

      <div className="friends-grid">
        {friends.length === 0 ? (
          <p className="empty-state">No friends yet.</p>
        ) : (
          friends.map((friend) => (
            <Link key={friend.id} to={`/profile/${friend.id}`} className="friend-card">
              <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
              <div className="friend-info">
                <h4 className="friend-name">{friend.name}</h4>
                <p className="friend-title">{friend.title}</p>
                <p className="friend-mutual">{friend.mutualFriends} mutual friends</p>
              </div>
              <button className="friend-message-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Message
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BrosListSection;
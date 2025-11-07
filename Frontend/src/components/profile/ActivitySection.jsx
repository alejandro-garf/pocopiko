import { useState } from 'react';

function ActivitySection() {
  const [activities] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Maria Garcia',
      action: 'liked your post',
      content: 'Excited to share that I just completed my latest project...',
      timestamp: '2h ago'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Carlos Rodriguez',
      action: 'commented on your post',
      content: 'Just got my AWS certification!',
      timestamp: '5h ago'
    },
    {
      id: 3,
      type: 'connection',
      user: 'Ana Martinez',
      action: 'accepted your bro request',
      content: null,
      timestamp: '1d ago'
    },
    {
      id: 4,
      type: 'like',
      user: 'Luis Hernandez',
      action: 'liked your comment',
      content: 'Great point about cloud architecture patterns!',
      timestamp: '2d ago'
    },
    {
      id: 5,
      type: 'repost',
      user: 'Sofia Lopez',
      action: 'reposted your post',
      content: 'Volunteering at the local food bank this weekend...',
      timestamp: '3d ago'
    }
  ]);

  const getActivityIcon = (type) => {
    switch(type) {
      case 'like':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.99872 7.05 2.99872C5.59096 2.99872 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" fill="#ff6b35" stroke="none"/>
          </svg>
        );
      case 'comment':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#9b59b6" strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'repost':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 1L21 5L17 9" stroke="#ff7832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="#ff7832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'connection':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#ff7832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="7" r="4" stroke="#ff7832" strokeWidth="2" fill="none"/>
            <path d="M20 8V14M23 11H17" stroke="#ff7832" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-section activity-section">
      <div className="section-header">
        <h3>Activity</h3>
        <p className="section-subtitle">{activities.length} recent activities</p>
      </div>

      <div className="activity-list">
        {activities.length === 0 ? (
          <p className="empty-state">No recent activity.</p>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                {getActivityIcon(activity.type)}
              </div>
              <div className="activity-content">
                <p className="activity-text">
                  <strong>{activity.user}</strong> {activity.action}
                </p>
                {activity.content && (
                  <p className="activity-snippet">{activity.content}</p>
                )}
                <p className="activity-timestamp">{activity.timestamp}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActivitySection;
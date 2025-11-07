import { useState } from 'react';
import PostCard from '../feed/PostCard';

function UserPostsSection() {
  // Mock user posts - in real app, this would come from API filtered by user
  const [userPosts] = useState([
    {
      id: 1,
      author: {
        name: 'John Doe',
        title: 'Software Engineer at Tech Corp',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Excited to share that I just completed my latest project! Check it out in my projects section. Building with React has been an amazing journey. 🚀',
      timestamp: '2d ago',
      likes: 45,
      reposts: 5,
      commentsData: []
    },
    {
      id: 2,
      author: {
        name: 'John Doe',
        title: 'Software Engineer at Tech Corp',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Just got my AWS certification! Grateful for all the support from my team and community. Next up: learning more about cloud architecture patterns.',
      timestamp: '5d ago',
      likes: 89,
      reposts: 12,
      commentsData: []
    },
    {
      id: 3,
      author: {
        name: 'John Doe',
        title: 'Software Engineer at Tech Corp',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Volunteering at the local food bank this weekend was incredibly rewarding. If you have some time, I highly recommend getting involved in your community!',
      timestamp: '1w ago',
      likes: 124,
      reposts: 8,
      commentsData: [],
      image: 'https://via.placeholder.com/600x400'
    }
  ]);

  return (
    <div className="profile-section user-posts-section">
      <div className="section-header">
        <h3>Posts</h3>
        <p className="section-subtitle">{userPosts.length} post{userPosts.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="user-posts-list">
        {userPosts.length === 0 ? (
          <p className="empty-state">No posts yet.</p>
        ) : (
          userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default UserPostsSection;
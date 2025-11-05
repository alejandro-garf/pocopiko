import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';

function FeedPage() {
  // Mock posts data with some existing comments
  const mockPosts = [
    {
      id: 1,
      author: {
        name: 'Maria Garcia',
        title: 'Product Designer at Tech Corp',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Just launched our new feature! Really excited to see how the community responds. What do you all think about the new design? 🚀',
      timestamp: '2h ago',
      likes: 24,
      reposts: 2,
      commentsData: [
        {
          id: 101,
          author: {
            name: 'Luis Hernandez',
            title: 'UX Researcher',
            avatar: 'https://via.placeholder.com/32'
          },
          text: 'This looks amazing! Love the color scheme 🎨',
          timestamp: '1h ago',
          likes: 3,
          replies: [
            {
              id: 102,
              author: {
                name: 'Maria Garcia',
                title: 'Product Designer at Tech Corp',
                avatar: 'https://via.placeholder.com/32'
              },
              text: 'Thank you! We spent a lot of time on the colors',
              timestamp: '45m ago',
              likes: 1,
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Carlos Rodriguez',
        title: 'Software Engineer',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Learning React has been an amazing journey. Here are 5 tips that helped me:\n\n1. Start with the basics\n2. Build projects\n3. Read the docs\n4. Join communities\n5. Never stop learning!\n\nWhat helped you the most?',
      timestamp: '5h ago',
      likes: 42,
      reposts: 8,
      commentsData: [
        {
          id: 201,
          author: {
            name: 'Ana Martinez',
            title: 'Frontend Developer',
            avatar: 'https://via.placeholder.com/32'
          },
          text: 'Great tips! Building projects was the game changer for me',
          timestamp: '4h ago',
          likes: 5,
          replies: []
        },
        {
          id: 202,
          author: {
            name: 'Sofia Lopez',
            title: 'Full Stack Developer',
            avatar: 'https://via.placeholder.com/32'
          },
          text: 'The React docs are so good! Best documentation I\'ve seen',
          timestamp: '3h ago',
          likes: 2,
          replies: []
        }
      ]
    },
    {
      id: 3,
      author: {
        name: 'Ana Martinez',
        title: 'Marketing Manager',
        avatar: 'https://via.placeholder.com/48'
      },
      content: 'Proud to announce that we just hit 10K followers! Thank you all for the support. This is just the beginning! 💪',
      timestamp: '1d ago',
      likes: 156,
      reposts: 15,
      commentsData: [],
      image: 'https://via.placeholder.com/600x400'
    }
  ];

  return (
    <div className="feed-page">
      {/* Create Post Component */}
      <CreatePost />

      {/* Posts Feed */}
      <div className="posts-feed">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default FeedPage;
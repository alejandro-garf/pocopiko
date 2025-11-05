import { useState } from 'react';
import Comment from './Comment';

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.commentsData || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: {
          name: 'John Doe', // This will come from logged-in user
          title: 'Software Engineer',
          avatar: 'https://via.placeholder.com/32'
        },
        text: newComment,
        timestamp: 'Just now',
        likes: 0,
        replies: []
      };
      
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleReply = (commentId, replyText) => {
    const reply = {
      id: Date.now(),
      author: {
        name: 'John Doe',
        title: 'Software Engineer',
        avatar: 'https://via.placeholder.com/32'
      },
      text: replyText,
      timestamp: 'Just now',
      likes: 0,
      replies: []
    };

    const addReplyToComment = (commentsList) => {
      return commentsList.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply]
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies)
          };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
  };

  const handleRepost = () => {
    // TODO: Implement repost functionality
    console.log('Repost:', post.id);
  };

  const handleSend = () => {
    // TODO: Implement send functionality
    console.log('Send:', post.id);
  };

  return (
    <div className="post-card">
      {/* Post Header */}
      <div className="post-header">
        <img 
          src={post.author.avatar || 'https://via.placeholder.com/48'} 
          alt={post.author.name}
          className="post-author-avatar"
        />
        <div className="post-author-info">
          <h4>{post.author.name}</h4>
          <p>{post.author.title}</p>
          <span className="post-timestamp">{post.timestamp}</span>
        </div>
        <button className="post-menu-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p>{post.content}</p>
        
        {/* Post Media (if exists) */}
        {post.image && (
          <div className="post-media">
            <img src={post.image} alt="Post content" />
          </div>
        )}
        
        {post.video && (
          <div className="post-media">
            <video controls>
              <source src={post.video} type="video/mp4" />
            </video>
          </div>
        )}

        {post.link && (
          <a href={post.link.url} target="_blank" rel="noopener noreferrer" className="post-link-preview">
            {post.link.image && <img src={post.link.image} alt={post.link.title} />}
            <div className="link-preview-content">
              <h5>{post.link.title}</h5>
              <p>{post.link.description}</p>
              <span>{post.link.domain}</span>
            </div>
          </a>
        )}
      </div>

      {/* Post Stats */}
      <div className="post-stats">
        <span className="post-stat-item">
          {likeCount > 0 && `${likeCount} ${likeCount === 1 ? 'like' : 'likes'}`}
        </span>
        <span className="post-stat-item">
          {comments.length > 0 && `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
        </span>
        <span className="post-stat-item">
          {post.reposts > 0 && `${post.reposts} ${post.reposts === 1 ? 'repost' : 'reposts'}`}
        </span>
      </div>

      {/* Post Actions */}
      <div className="post-actions">
        <button 
          className={`post-action-btn ${liked ? 'active' : ''}`}
          onClick={handleLike}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"}>
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.99872 7.05 2.99872C5.59096 2.99872 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Like</span>
        </button>

        <button className="post-action-btn" onClick={handleComment}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Comment</span>
        </button>

        <button className="post-action-btn" onClick={handleRepost}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 1L21 5L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 23L3 19L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Repost</span>
        </button>

        <button className="post-action-btn" onClick={handleSend}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Send</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="post-comments">
          <div className="comment-input-wrapper">
            <img src="https://via.placeholder.com/32" alt="You" className="comment-avatar" />
            <input 
              type="text" 
              placeholder="Add a comment..." 
              className="comment-input"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePostComment()}
            />
            <button 
              className="reply-send-btn"
              onClick={handlePostComment}
              disabled={!newComment.trim()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Comments list */}
          <div className="comments-list">
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment) => (
                <Comment key={comment.id} comment={comment} onReply={handleReply} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
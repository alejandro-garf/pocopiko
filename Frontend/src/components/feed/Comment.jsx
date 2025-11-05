import { useState } from 'react';

function Comment({ comment, onReply }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes || 0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  return (
    <div className="comment">
      <img 
        src={comment.author.avatar || 'https://via.placeholder.com/32'} 
        alt={comment.author.name}
        className="comment-avatar"
      />
      <div className="comment-content-wrapper">
        <div className="comment-bubble">
          <h5>{comment.author.name}</h5>
          <p className="comment-author-title">{comment.author.title}</p>
          <p className="comment-text">{comment.text}</p>
        </div>
        
        <div className="comment-actions">
          <button 
            className={`comment-action ${liked ? 'active' : ''}`}
            onClick={handleLike}
          >
            Like {likeCount > 0 && `(${likeCount})`}
          </button>
          <button 
            className="comment-action"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            Reply
          </button>
          <span className="comment-timestamp">{comment.timestamp}</span>
        </div>

        {/* Reply Input */}
        {showReplyInput && (
          <div className="reply-input-wrapper">
            <img src="https://via.placeholder.com/32" alt="You" className="comment-avatar" />
            <input 
              type="text"
              placeholder={`Reply to ${comment.author.name}...`}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleReply()}
              className="comment-input"
            />
            <button 
              className="reply-send-btn"
              onClick={handleReply}
              disabled={!replyText.trim()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="nested-comments">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} onReply={onReply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
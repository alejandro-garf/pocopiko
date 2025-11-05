import { useState } from 'react';

function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postType, setPostType] = useState('text'); // text, photo, video, link, article

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent('');
    setPostType('text');
  };

  const handlePost = (e) => {
    e.preventDefault();
    // TODO: Send post to backend
    console.log('Posting:', { content: postContent, type: postType });
    closeModal();
  };

  return (
    <>
      {/* Create Post Button/Card */}
      <div className="create-post-trigger" onClick={openModal}>
        <div className="create-post-avatar">
          <img src="https://via.placeholder.com/48" alt="Your avatar" />
        </div>
        <div className="create-post-input-fake">
          What's on your mind?
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content create-post-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Create a post</h2>
              <button className="modal-close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* User Info */}
              <div className="post-author-info">
                <img src="https://via.placeholder.com/48" alt="Your avatar" className="post-author-avatar" />
                <div>
                  <h4>John Doe</h4>
                  <p>Software Engineer</p>
                </div>
              </div>

              {/* Post Content Input */}
              <textarea
                className="post-textarea"
                placeholder="What do you want to talk about?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                autoFocus
              />

              {/* Post Type Selector */}
              <div className="post-type-buttons">
                <button 
                  className={`post-type-btn ${postType === 'photo' ? 'active' : ''}`}
                  onClick={() => setPostType('photo')}
                  type="button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Photo
                </button>

                <button 
                  className={`post-type-btn ${postType === 'video' ? 'active' : ''}`}
                  onClick={() => setPostType('video')}
                  type="button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Video
                </button>

                <button 
                  className={`post-type-btn ${postType === 'link' ? 'active' : ''}`}
                  onClick={() => setPostType('link')}
                  type="button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3934 9.60704C11.7642 9.26328 11.0685 9.05886 10.3533 9.00765C9.63816 8.95643 8.92037 9.05961 8.24861 9.31018C7.57685 9.56076 6.96684 9.9529 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32393 21.9448 9.58694 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Link
                </button>

                <button 
                  className={`post-type-btn ${postType === 'article' ? 'active' : ''}`}
                  onClick={() => setPostType('article')}
                  type="button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Article
                </button>
              </div>

              {/* File upload note (for photo/video) */}
              {(postType === 'photo' || postType === 'video') && (
                <div className="upload-note">
                  <p>📷 Camera-only uploads will be enabled when backend is connected</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={closeModal}
                type="button"
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handlePost}
                disabled={!postContent.trim()}
                type="button"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
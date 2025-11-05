function FeedPage() {
  return (
    <div className="feed-page">
      <h1>Welcome to PocoPiko Feed</h1>
      <p>This is where posts will appear after you log in.</p>
      
      {/* Placeholder for now */}
      <div style={{ 
        padding: '20px', 
        background: 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '12px',
        marginTop: '20px'
      }}>
        <h2>Feed coming soon!</h2>
        <p>We'll build the post creation and feed components next.</p>
      </div>
    </div>
  );
}

export default FeedPage;
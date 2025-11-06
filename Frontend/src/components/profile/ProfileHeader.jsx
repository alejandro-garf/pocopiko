import { useState } from 'react';

function ProfileHeader({ userData, isEditMode, onEditToggle }) {
  const [bannerHover, setBannerHover] = useState(false);
  const [profilePicHover, setProfilePicHover] = useState(false);

  const handleBannerUpload = () => {
    // TODO: Implement image upload
    console.log('Upload banner');
  };

  const handleProfilePicUpload = () => {
    // TODO: Implement image upload
    console.log('Upload profile picture');
  };

  return (
    <div className="profile-header">
      {/* Banner */}
      <div 
        className="profile-banner"
        onMouseEnter={() => setBannerHover(true)}
        onMouseLeave={() => setBannerHover(false)}
      >
        {userData.bannerImage ? (
          <img src={userData.bannerImage} alt="Profile banner" />
        ) : (
          <div className="profile-banner-gradient" />
        )}
        
        {isEditMode && bannerHover && (
          <button className="banner-upload-btn" onClick={handleBannerUpload}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Change banner</span>
          </button>
        )}
      </div>

      {/* Profile Content */}
      <div className="profile-header-content">
        <div className="profile-header-main">
          {/* Profile Picture */}
          <div 
            className="profile-picture-wrapper"
            onMouseEnter={() => setProfilePicHover(true)}
            onMouseLeave={() => setProfilePicHover(false)}
          >
            <img 
              src={userData.profilePicture} 
              alt={userData.name}
              className="profile-picture"
            />
            {isEditMode && profilePicHover && (
              <button className="profile-pic-upload-btn" onClick={handleProfilePicUpload}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <div className="profile-name-row">
              <h1>{userData.name}</h1>
              {userData.verified && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="verified-badge">
                  <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FF6B35"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span className="profile-flag">{userData.flag}</span>
            </div>
            
            <p className="profile-headline">{userData.title}</p>
            
            <div className="profile-meta">
              <span className="profile-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {userData.company}
              </span>
              <span className="profile-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {userData.location}
              </span>
            </div>

            {/* Bros and Profile Views */}
            <div className="profile-stats">
              <button className="profile-stat-btn">
                <span className="stat-value">{userData.bros}</span>
                <span className="stat-label">Bros</span>
              </button>
              <button className="profile-stat-btn">
                <span className="stat-value">{userData.profileViews}</span>
                <span className="stat-label">Profile views</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Song */}
        {userData.profileSong && (
          <div className="profile-song">
            <div className="profile-song-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Profile Song</span>
            </div>
            <div className="song-info">
              <img src={userData.profileSong.albumArt} alt="Album art" className="song-album-art" />
              <div className="song-details">
                <h4>{userData.profileSong.title}</h4>
                <p>{userData.profileSong.artist}</p>
              </div>
              <button className="song-play-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Edit Profile Button */}
        <div className="profile-header-actions">
          <button className="btn btn-primary" onClick={onEditToggle}>
            {isEditMode ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 11L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Save Profile
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
import { useState } from 'react';

function ProfessionalBio({ userData, isEditMode }) {
  const [bio, setBio] = useState(userData.professionalBio || '');
  const maxLength = 300;

  const handleSave = () => {
    // TODO: Save to backend
    console.log('Saving professional bio:', bio);
  };

  return (
    <div className="profile-section professional-bio-section">
      <div className="section-header">
        <h3>Professional Summary</h3>
        {isEditMode && (
          <span className="char-counter">
            {bio.length}/{maxLength}
          </span>
        )}
      </div>

      {isEditMode ? (
        <div className="bio-edit">
          <textarea
            className="bio-textarea"
            placeholder="Write a brief professional summary... Keep it concise and focused on your expertise, achievements, and career goals."
            value={bio}
            onChange={(e) => setBio(e.target.value.slice(0, maxLength))}
            maxLength={maxLength}
          />
          <p className="bio-hint">
            💼 Keep it professional and resume-style. Focus on your current role, key skills, and career highlights.
          </p>
        </div>
      ) : (
        <div className="bio-display">
          {bio ? (
            <p>{bio}</p>
          ) : (
            <p className="bio-empty">Add a professional summary to tell people about your career and expertise.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfessionalBio;
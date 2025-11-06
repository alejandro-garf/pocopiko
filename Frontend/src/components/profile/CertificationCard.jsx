function CertificationCard({ certification, isEditMode, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const isExpired = () => {
    if (!certification.expirationDate) return false;
    return new Date(certification.expirationDate) < new Date();
  };

  return (
    <div className="certification-card">
      <div className="certification-header">
        <div className="certification-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="certification-info">
          <h4 className="certification-name">{certification.name}</h4>
          <p className="certification-org">{certification.organization}</p>
          <p className="certification-date">
            Issued {formatDate(certification.issueDate)}
            {certification.expirationDate && (
              <>
                {' · '}
                {isExpired() ? (
                  <span className="expired">Expired {formatDate(certification.expirationDate)}</span>
                ) : (
                  <span>Expires {formatDate(certification.expirationDate)}</span>
                )}
              </>
            )}
            {!certification.expirationDate && certification.noExpiration && (
              <span> · No Expiration Date</span>
            )}
          </p>
          {certification.credentialId && (
            <p className="certification-credential">
              Credential ID: {certification.credentialId}
            </p>
          )}
          {certification.credentialUrl && (
            <a 
              href={certification.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-link"
            >
              Show credential →
            </a>
          )}
        </div>

        {isEditMode && (
          <div className="certification-actions">
            <button className="certification-action-btn" onClick={() => onEdit(certification)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="certification-action-btn delete" onClick={() => onDelete(certification.id)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificationCard;
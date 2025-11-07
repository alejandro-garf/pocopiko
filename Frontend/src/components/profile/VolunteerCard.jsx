function VolunteerCard({ volunteer, isEditMode, onEdit, onDelete }) {
  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === 'Present' ? new Date() : new Date(end);
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
  };

  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="volunteer-card">
      <div className="volunteer-header">
        <div className="volunteer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.99872 7.05 2.99872C5.59096 2.99872 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="volunteer-info">
          <h4 className="volunteer-role">{volunteer.role}</h4>
          <p className="volunteer-organization">{volunteer.organization}</p>
          <p className="volunteer-meta">
            {formatDate(volunteer.startDate)} - {formatDate(volunteer.endDate)}
            <span className="volunteer-duration"> · {calculateDuration(volunteer.startDate, volunteer.endDate)}</span>
            {volunteer.cause && (
              <span className="volunteer-cause">{volunteer.cause}</span>
            )}
          </p>
        </div>

        {isEditMode && (
          <div className="volunteer-actions">
            <button className="volunteer-action-btn" onClick={() => onEdit(volunteer)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="volunteer-action-btn delete" onClick={() => onDelete(volunteer.id)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {volunteer.description && (
        <div className="volunteer-description">
          <p>{volunteer.description}</p>
        </div>
      )}
    </div>
  );
}

export default VolunteerCard;
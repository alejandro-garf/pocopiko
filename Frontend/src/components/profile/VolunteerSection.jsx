import { useState } from 'react';
import { createPortal } from 'react-dom';
import VolunteerCard from './VolunteerCard';

function VolunteerSection({ userData, isEditMode }) {
  const [volunteers, setVolunteers] = useState(userData.volunteers || []);
  const [showModal, setShowModal] = useState(false);
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [formData, setFormData] = useState({
    organization: '',
    role: '',
    cause: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  const [isCurrentlyVolunteering, setIsCurrentlyVolunteering] = useState(false);

  const causeOptions = [
    'Animal Welfare',
    'Arts and Culture',
    'Children and Youth',
    'Community Development',
    'Disaster Relief',
    'Economic Empowerment',
    'Education',
    'Environment',
    'Health',
    'Human Rights',
    'Poverty Alleviation',
    'Social Services',
    'Other'
  ];

  const handleAdd = () => {
    setEditingVolunteer(null);
    setFormData({
      organization: '',
      role: '',
      cause: '',
      startDate: '',
      endDate: '',
      description: ''
    });
    setIsCurrentlyVolunteering(false);
    setShowModal(true);
  };

  const handleEdit = (volunteer) => {
    setEditingVolunteer(volunteer);
    setFormData({
      organization: volunteer.organization,
      role: volunteer.role,
      cause: volunteer.cause || '',
      startDate: volunteer.startDate,
      endDate: volunteer.endDate === 'Present' ? '' : volunteer.endDate,
      description: volunteer.description || ''
    });
    setIsCurrentlyVolunteering(volunteer.endDate === 'Present');
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this volunteer experience?')) {
      setVolunteers(volunteers.filter(vol => vol.id !== id));
    }
  };

  const handleSave = () => {
    const newVolunteer = {
      id: editingVolunteer ? editingVolunteer.id : Date.now(),
      ...formData,
      endDate: isCurrentlyVolunteering ? 'Present' : formData.endDate
    };

    if (editingVolunteer) {
      setVolunteers(volunteers.map(vol => 
        vol.id === editingVolunteer.id ? newVolunteer : vol
      ));
    } else {
      setVolunteers([newVolunteer, ...volunteers]);
    }

    setShowModal(false);
  };

  const modalContent = showModal && (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingVolunteer ? 'Edit Volunteer Experience' : 'Add Volunteer Experience'}</h2>
          <button className="modal-close" onClick={() => setShowModal(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Role *</label>
            <input
              type="text"
              placeholder="e.g. Volunteer Coordinator"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Organization *</label>
            <input
              type="text"
              placeholder="e.g. Local Food Bank"
              value={formData.organization}
              onChange={(e) => setFormData({...formData, organization: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Cause</label>
            <select
              value={formData.cause}
              onChange={(e) => setFormData({...formData, cause: e.target.value})}
            >
              <option value="">Select a cause</option>
              {causeOptions.map(cause => (
                <option key={cause} value={cause}>{cause}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>End Date {!isCurrentlyVolunteering && '*'}</label>
              <input
                type="month"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                disabled={isCurrentlyVolunteering}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={isCurrentlyVolunteering}
                onChange={(e) => setIsCurrentlyVolunteering(e.target.checked)}
              />
              <span>I currently volunteer here</span>
            </label>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Describe your volunteer work and impact..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="5"
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleSave}
            disabled={!formData.role || !formData.organization || !formData.startDate || (!isCurrentlyVolunteering && !formData.endDate)}
          >
            {editingVolunteer ? 'Save Changes' : 'Add Volunteer Experience'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-section volunteer-section">
      <div className="section-header">
        <h3>Volunteer Experience</h3>
        {isEditMode && (
          <button className="add-section-btn" onClick={handleAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Add Volunteer Experience</span>
          </button>
        )}
      </div>

      <div className="volunteer-list">
        {volunteers.length === 0 ? (
          <p className="empty-state">No volunteer experience added yet.</p>
        ) : (
          volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer.id}
              volunteer={volunteer}
              isEditMode={isEditMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {modalContent && createPortal(modalContent, document.body)}
    </div>
  );
}

export default VolunteerSection;
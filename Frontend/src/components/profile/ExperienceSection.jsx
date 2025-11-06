import { useState } from 'react';
import { createPortal } from 'react-dom';
import ExperienceCard from './ExperienceCard';

function ExperienceSection({ userData, isEditMode }) {
  const [experiences, setExperiences] = useState(userData.experiences || [
    {
      id: 1,
      company: 'Tech Corp',
      title: 'Senior Software Engineer',
      startDate: '2022-01',
      endDate: 'Present',
      location: 'San Francisco, CA',
      description: 'Leading the development of scalable web applications. Mentoring junior developers and driving technical decisions for the team.',
      logo: 'https://via.placeholder.com/48'
    },
    {
      id: 2,
      company: 'StartupXYZ',
      title: 'Software Engineer',
      startDate: '2020-06',
      endDate: '2021-12',
      location: 'Remote',
      description: 'Built and maintained React applications. Collaborated with cross-functional teams to deliver features on time.',
      logo: null
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    logo: ''
  });
  const [isCurrentRole, setIsCurrentRole] = useState(false);

  const handleAdd = () => {
    setEditingExperience(null);
    setFormData({
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      logo: ''
    });
    setIsCurrentRole(false);
    setShowModal(true);
  };

  const handleEdit = (experience) => {
    setEditingExperience(experience);
    setFormData({
      company: experience.company,
      title: experience.title,
      startDate: experience.startDate,
      endDate: experience.endDate === 'Present' ? '' : experience.endDate,
      location: experience.location || '',
      description: experience.description || '',
      logo: experience.logo || ''
    });
    setIsCurrentRole(experience.endDate === 'Present');
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const handleSave = () => {
    const newExperience = {
      id: editingExperience ? editingExperience.id : Date.now(),
      ...formData,
      endDate: isCurrentRole ? 'Present' : formData.endDate
    };

    if (editingExperience) {
      setExperiences(experiences.map(exp => 
        exp.id === editingExperience.id ? newExperience : exp
      ));
    } else {
      setExperiences([newExperience, ...experiences]);
    }

    setShowModal(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Modal content
  const modalContent = showModal && (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content experience-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingExperience ? 'Edit Experience' : 'Add Experience'}</h2>
          <button className="modal-close" onClick={() => setShowModal(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Company *</label>
            <input
              type="text"
              placeholder="e.g. Tech Corp"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. San Francisco, CA"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>End Date {!isCurrentRole && '*'}</label>
              <input
                type="month"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                disabled={isCurrentRole}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={isCurrentRole}
                onChange={(e) => setIsCurrentRole(e.target.checked)}
              />
              <span>I currently work here</span>
            </label>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Describe your responsibilities and achievements..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
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
            disabled={!formData.title || !formData.company || !formData.startDate || (!isCurrentRole && !formData.endDate)}
          >
            {editingExperience ? 'Save Changes' : 'Add Experience'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-section experience-section">
      <div className="section-header">
        <h3>Experience</h3>
        {isEditMode && (
          <button className="add-section-btn" onClick={handleAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Add Experience</span>
          </button>
        )}
      </div>

      <div className="experience-list">
        {experiences.length === 0 ? (
          <p className="empty-state">No work experience added yet.</p>
        ) : (
          experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isEditMode={isEditMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Render modal using Portal to attach it to document.body */}
      {modalContent && createPortal(modalContent, document.body)}
    </div>
  );
}

export default ExperienceSection;
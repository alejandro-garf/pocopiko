import { useState } from 'react';
import { createPortal } from 'react-dom';
import EducationCard from './EducationCard';

function EducationSection({ userData, isEditMode }) {
  const [educations, setEducations] = useState(userData.educations || [
    {
      id: 1,
      school: 'Stanford University',
      degree: "Bachelor's Degree",
      fieldOfStudy: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-06',
      grade: '3.8 GPA',
      activities: 'Computer Science Club, Hackathon Organizer',
      logo: 'https://via.placeholder.com/48'
    },
    {
      id: 2,
      school: 'San Francisco High School',
      degree: 'High School Diploma',
      fieldOfStudy: '',
      startDate: '2012-09',
      endDate: '2016-06',
      grade: '',
      activities: 'Robotics Team, Debate Club',
      logo: null
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null);
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    grade: '',
    activities: '',
    logo: ''
  });
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);

  const degreeOptions = [
    "High School Diploma",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "MBA",
    "PhD",
    "Certificate",
    "Bootcamp",
    "Other"
  ];

  const handleAdd = () => {
    setEditingEducation(null);
    setFormData({
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      grade: '',
      activities: '',
      logo: ''
    });
    setIsCurrentlyStudying(false);
    setShowModal(true);
  };

  const handleEdit = (education) => {
    setEditingEducation(education);
    setFormData({
      school: education.school,
      degree: education.degree,
      fieldOfStudy: education.fieldOfStudy || '',
      startDate: education.startDate,
      endDate: education.endDate === 'Present' ? '' : education.endDate,
      grade: education.grade || '',
      activities: education.activities || '',
      logo: education.logo || ''
    });
    setIsCurrentlyStudying(education.endDate === 'Present');
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this education?')) {
      setEducations(educations.filter(edu => edu.id !== id));
    }
  };

  const handleSave = () => {
    const newEducation = {
      id: editingEducation ? editingEducation.id : Date.now(),
      ...formData,
      endDate: isCurrentlyStudying ? 'Present' : formData.endDate
    };

    if (editingEducation) {
      setEducations(educations.map(edu => 
        edu.id === editingEducation.id ? newEducation : edu
      ));
    } else {
      setEducations([newEducation, ...educations]);
    }

    setShowModal(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const modalContent = showModal && (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content education-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingEducation ? 'Edit Education' : 'Add Education'}</h2>
          <button className="modal-close" onClick={() => setShowModal(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>School *</label>
            <input
              type="text"
              placeholder="e.g. Stanford University"
              value={formData.school}
              onChange={(e) => handleChange('school', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Degree *</label>
            <select
              value={formData.degree}
              onChange={(e) => handleChange('degree', e.target.value)}
            >
              <option value="">Select degree</option>
              {degreeOptions.map(degree => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Field of Study</label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              value={formData.fieldOfStudy}
              onChange={(e) => handleChange('fieldOfStudy', e.target.value)}
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
              <label>End Date {!isCurrentlyStudying && '*'}</label>
              <input
                type="month"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                disabled={isCurrentlyStudying}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={isCurrentlyStudying}
                onChange={(e) => setIsCurrentlyStudying(e.target.checked)}
              />
              <span>I currently study here</span>
            </label>
          </div>

          <div className="form-group">
            <label>Grade</label>
            <input
              type="text"
              placeholder="e.g. 3.8 GPA or First Class Honours"
              value={formData.grade}
              onChange={(e) => handleChange('grade', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Activities and Societies</label>
            <textarea
              placeholder="e.g. Computer Science Club, Student Government"
              value={formData.activities}
              onChange={(e) => handleChange('activities', e.target.value)}
              rows="3"
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
            disabled={!formData.school || !formData.degree || !formData.startDate || (!isCurrentlyStudying && !formData.endDate)}
          >
            {editingEducation ? 'Save Changes' : 'Add Education'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-section education-section">
      <div className="section-header">
        <h3>Education</h3>
        {isEditMode && (
          <button className="add-section-btn" onClick={handleAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Add Education</span>
          </button>
        )}
      </div>

      <div className="education-list">
        {educations.length === 0 ? (
          <p className="empty-state">No education added yet.</p>
        ) : (
          educations.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
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

export default EducationSection;
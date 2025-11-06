import { useState } from 'react';
import { createPortal } from 'react-dom';
import CertificationCard from './CertificationCard';

function CertificationsSection({ userData, isEditMode }) {
  const [certifications, setCertifications] = useState(userData.certifications || [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      issueDate: '2023-03',
      expirationDate: '2026-03',
      credentialId: 'AWS-1234567',
      credentialUrl: 'https://aws.amazon.com/verification',
      noExpiration: false
    },
    {
      id: 2,
      name: 'Professional Scrum Master I',
      organization: 'Scrum.org',
      issueDate: '2022-06',
      expirationDate: null,
      credentialId: 'PSM-9876543',
      credentialUrl: 'https://scrum.org/verify',
      noExpiration: true
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCertification, setEditingCertification] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    issueDate: '',
    expirationDate: '',
    credentialId: '',
    credentialUrl: '',
    noExpiration: false
  });

  const handleAdd = () => {
    setEditingCertification(null);
    setFormData({
      name: '',
      organization: '',
      issueDate: '',
      expirationDate: '',
      credentialId: '',
      credentialUrl: '',
      noExpiration: false
    });
    setShowModal(true);
  };

  const handleEdit = (certification) => {
    setEditingCertification(certification);
    setFormData({
      name: certification.name,
      organization: certification.organization,
      issueDate: certification.issueDate,
      expirationDate: certification.expirationDate || '',
      credentialId: certification.credentialId || '',
      credentialUrl: certification.credentialUrl || '',
      noExpiration: certification.noExpiration || false
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this certification?')) {
      setCertifications(certifications.filter(cert => cert.id !== id));
    }
  };

  const handleSave = () => {
    const newCertification = {
      id: editingCertification ? editingCertification.id : Date.now(),
      ...formData
    };

    if (editingCertification) {
      setCertifications(certifications.map(cert => 
        cert.id === editingCertification.id ? newCertification : cert
      ));
    } else {
      setCertifications([newCertification, ...certifications]);
    }

    setShowModal(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const modalContent = showModal && (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content certification-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingCertification ? 'Edit Certification' : 'Add Certification'}</h2>
          <button className="modal-close" onClick={() => setShowModal(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              placeholder="e.g. AWS Certified Solutions Architect"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Issuing Organization *</label>
            <input
              type="text"
              placeholder="e.g. Amazon Web Services"
              value={formData.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Issue Date *</label>
              <input
                type="month"
                value={formData.issueDate}
                onChange={(e) => handleChange('issueDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Expiration Date</label>
              <input
                type="month"
                value={formData.expirationDate}
                onChange={(e) => handleChange('expirationDate', e.target.value)}
                disabled={formData.noExpiration}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.noExpiration}
                onChange={(e) => {
                  handleChange('noExpiration', e.target.checked);
                  if (e.target.checked) {
                    handleChange('expirationDate', '');
                  }
                }}
              />
              <span>This credential does not expire</span>
            </label>
          </div>

          <div className="form-group">
            <label>Credential ID</label>
            <input
              type="text"
              placeholder="e.g. AWS-1234567"
              value={formData.credentialId}
              onChange={(e) => handleChange('credentialId', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Credential URL</label>
            <input
              type="url"
              placeholder="e.g. https://www.credential.net/..."
              value={formData.credentialUrl}
              onChange={(e) => handleChange('credentialUrl', e.target.value)}
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
            disabled={!formData.name || !formData.organization || !formData.issueDate}
          >
            {editingCertification ? 'Save Changes' : 'Add Certification'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-section certifications-section">
      <div className="section-header">
        <h3>Licenses & Certifications</h3>
        {isEditMode && (
          <button className="add-section-btn" onClick={handleAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Add Certification</span>
          </button>
        )}
      </div>

      <div className="certifications-list">
        {certifications.length === 0 ? (
          <p className="empty-state">No certifications added yet.</p>
        ) : (
          certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
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

export default CertificationsSection;
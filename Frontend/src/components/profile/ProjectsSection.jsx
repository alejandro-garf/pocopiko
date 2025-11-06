import React, { useState } from 'react';
import { Plus, X, ExternalLink, Github } from 'lucide-react';
import { createPortal } from 'react-dom';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'PocoPiko - Professional Network',
      description: 'A cultural-first professional networking platform designed specifically for the Latinx community, featuring unique connection terminology and personalized profiles.',
      image: null,
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      projectUrl: 'https://pocopiko.com',
      githubUrl: 'https://github.com/yourusername/pocopiko',
      startDate: '2024-01',
      endDate: '2024-12',
      status: 'ongoing'
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    imagePreview: null,
    technologies: '',
    projectUrl: '',
    githubUrl: '',
    startDate: '',
    endDate: '',
    status: 'completed'
  });

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData({
      name: '',
      description: '',
      image: null,
      imagePreview: null,
      technologies: '',
      projectUrl: '',
      githubUrl: '',
      startDate: '',
      endDate: '',
      status: 'completed'
    });
    setShowModal(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      image: project.image,
      imagePreview: project.image,
      technologies: project.technologies.join(', '),
      projectUrl: project.projectUrl || '',
      githubUrl: project.githubUrl || '',
      startDate: project.startDate,
      endDate: project.endDate || '',
      status: project.status
    });
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const projectData = {
      id: editingProject?.id || Date.now(),
      name: formData.name,
      description: formData.description,
      image: formData.imagePreview,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      projectUrl: formData.projectUrl,
      githubUrl: formData.githubUrl,
      startDate: formData.startDate,
      endDate: formData.status === 'ongoing' ? null : formData.endDate,
      status: formData.status
    };

    if (editingProject) {
      setProjects(projects.map(proj => 
        proj.id === editingProject.id ? projectData : proj
      ));
    } else {
      setProjects([...projects, projectData]);
    }

    setShowModal(false);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(proj => proj.id !== id));
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="profile-section">
      <div className="section-header">
        <div>
          <h2>Projects</h2>
          <p className="section-subtitle">{projects.length} project{projects.length !== 1 ? 's' : ''}</p>
        </div>
        <button className="icon-button" onClick={handleAddProject} title="Add project">
          <Plus size={20} />
        </button>
      </div>

      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-card-content">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
              )}
              
              <div className="project-info">
                <div className="project-header">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-date">
                      {formatDate(project.startDate)} - {project.status === 'ongoing' ? 'Present' : formatDate(project.endDate)}
                      {project.status === 'ongoing' && (
                        <span className="status-badge status-ongoing">Ongoing</span>
                      )}
                    </p>
                  </div>
                  
                  <div className="project-actions">
                    <button 
                      className="icon-button" 
                      onClick={() => handleEditProject(project)}
                      title="Edit project"
                    >
                      Edit
                    </button>
                    <button 
                      className="icon-button" 
                      onClick={() => handleDeleteProject(project.id)}
                      title="Delete project"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {project.technologies.length > 0 && (
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.projectUrl && (
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && createPortal(
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingProject ? 'Edit Project' : 'Add Project'}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Project Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="My Awesome Project"
                />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe what you built and what problem it solves..."
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Project Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                {formData.imagePreview && (
                  <div className="image-preview">
                    <img src={formData.imagePreview} alt="Preview" />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Technologies Used</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                  placeholder="React, Node.js, PostgreSQL (comma-separated)"
                />
                <small>Separate multiple technologies with commas</small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Project URL</label>
                  <input
                    type="url"
                    value={formData.projectUrl}
                    onChange={(e) => setFormData({...formData, projectUrl: e.target.value})}
                    placeholder="https://myproject.com"
                  />
                </div>

                <div className="form-group">
                  <label>GitHub URL</label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                    placeholder="https://github.com/username/repo"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Project Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
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
                  <label>End Date {formData.status === 'ongoing' && '(Optional)'}</label>
                  <input
                    type="month"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    disabled={formData.status === 'ongoing'}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleSubmit}
                disabled={!formData.name || !formData.description || !formData.startDate || (formData.status === 'completed' && !formData.endDate)}
              >
                {editingProject ? 'Save Changes' : 'Add Project'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
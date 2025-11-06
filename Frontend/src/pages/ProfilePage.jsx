import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/profile/ProfileHeader';
import HumanBio from '../components/profile/HumanBio';
import ProfessionalBio from '../components/profile/ProfessionalBio';
import ExperienceSection from '../components/profile/ExperienceSection';
import EducationSection from '../components/profile/EducationSection';

function ProfilePage() {
  // Mock user data - will come from backend/props later
  const [userData] = useState({
    name: 'John Doe',
    title: 'Software Engineer | Building the Future',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    flag: '🇲🇽',
    verified: true,
    profilePicture: 'https://via.placeholder.com/150',
    bannerImage: null,
    bros: 342,
    profileViews: 89,
    profileSong: {
      title: 'Vivir Mi Vida',
      artist: 'Marc Anthony',
      albumArt: 'https://via.placeholder.com/60'
    },
    professionalBio: 'Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture. Led multiple teams to deliver high-impact products. Always learning and pushing boundaries.',
    humanBioPrompts: [
      { id: 1, question: "My perfect Sunday looks like...", answer: "Brunch with friends, working on side projects, and ending with a good movie" },
      { id: 2, question: "I geek out on...", answer: "New programming languages and mechanical keyboards" },
      { id: 3, question: "My guilty pleasure is...", answer: "Binging reality TV shows while pretending I don't watch them" }
    ],
    interests: ['Coding', 'Coffee', 'Hiking', 'Music', 'Travel', 'Photography', 'Gaming'],
    experiences: [
      {
        id: 1,
        company: 'Tech Corp',
        title: 'Senior Software Engineer',
        startDate: '2022-01',
        endDate: 'Present',
        location: 'San Francisco, CA',
        description: 'Leading the development of scalable web applications. Mentoring junior developers and driving technical decisions for the team. Successfully delivered 5+ major features impacting 1M+ users.',
        logo: 'https://via.placeholder.com/48'
      },
      {
        id: 2,
        company: 'StartupXYZ',
        title: 'Software Engineer',
        startDate: '2020-06',
        endDate: '2021-12',
        location: 'Remote',
        description: 'Built and maintained React applications. Collaborated with cross-functional teams to deliver features on time. Improved app performance by 40%.',
        logo: null
      }
    ],
    educations: [
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
      }
    ]
  });

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="profile-page-wrapper">
      {/* Simple Top Navigation */}
      <nav className="profile-top-nav">
        <div className="profile-nav-container">
          <Link to="/feed" className="profile-nav-logo">
            PocoPiko
          </Link>
          
          <div className="profile-nav-links">
            <Link to="/feed" className="profile-nav-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Feed</span>
            </Link>
            <Link to="/profile" className="profile-nav-link active">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="profile-page-content">
        <ProfileHeader 
          userData={userData}
          isEditMode={isEditMode}
          onEditToggle={() => setIsEditMode(!isEditMode)}
        />

        {/* Profile Sections */}
        <div className="profile-sections">
          <HumanBio 
            userData={userData}
            isEditMode={isEditMode}
          />

          <ProfessionalBio 
            userData={userData}
            isEditMode={isEditMode}
          />

          <ExperienceSection 
            userData={userData}
            isEditMode={isEditMode}
          />

          <EducationSection 
            userData={userData}
            isEditMode={isEditMode}
          />

          {/* Placeholder sections for next steps */}
          <div className="profile-section">
            <h3>Certifications</h3>
            <p>Certifications coming next...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
# Phase 3: Profile Page - To-Do List

## Overview
Build a comprehensive profile page with personal and professional information, following the unique "human-first" approach with Hinge-style prompts for the personal bio.

---

## 3.1 Profile Header

### Header Container & Layout
- [ ] Create `ProfilePage.jsx` component in `/src/pages/`
- [ ] Set up profile header layout structure
- [ ] Add responsive grid/flexbox for header sections

### Banner & Profile Picture
- [ ] Create banner image upload/display section
  - [ ] Full-width banner (similar to LinkedIn)
  - [ ] Upload button (hover overlay)
  - [ ] Default gradient if no banner uploaded
- [ ] Create profile picture section
  - [ ] Circular profile picture overlapping banner
  - [ ] Upload/change picture button
  - [ ] Border styling with orange/purple theme

### Basic Info Display
- [ ] Display user name (large, bold)
- [ ] Display headline/title
- [ ] Add verified badge component (conditional)
- [ ] Display current company/school affiliation
- [ ] Add flag selector/display for country/identity
  - [ ] Flag emoji or image
  - [ ] Dropdown to change flag

### Profile Song Feature
- [ ] Create song selector component
  - [ ] Search for songs (will need music API later)
  - [ ] Display selected song with play preview
  - [ ] Album art thumbnail
- [ ] Display current profile song
  - [ ] Song title and artist
  - [ ] Mini player UI

### Bros Count & Stats
- [ ] Display "Bros" count (instead of connections)
- [ ] Make count clickable to view bros list
- [ ] Add profile views counter (optional)

### Edit Profile Button
- [ ] Add "Edit Profile" button (only visible on own profile)
- [ ] Style button with orange/purple gradient
- [ ] Connect to edit mode toggle

---

## 3.2 Bio Section #1 - Human Bio (Hinge-Style Prompts)

### Prompts System
- [ ] Create `HumanBio.jsx` component
- [ ] Design prompt card layout
- [ ] Create list of available prompts (examples):
  - [ ] "My perfect Sunday looks like..."
  - [ ] "I'm weirdly passionate about..."
  - [ ] "My simple pleasures..."
  - [ ] "I geek out on..."
  - [ ] "My guilty pleasure is..."
  - [ ] "You should NOT go out with me if..."
  - [ ] "I'm looking for someone who..."
  - [ ] "My ideal first date..."
  - [ ] "I spend too much time..."
  - [ ] "A random fact I love is..."

### Prompt Display
- [ ] Create prompt card component
  - [ ] Prompt question (header)
  - [ ] User's response (text area)
  - [ ] Character limit indicator
- [ ] Display 3-5 filled prompts
- [ ] Add visual separation between prompts
- [ ] Style with card backgrounds

### Prompt Selection/Editing
- [ ] Create prompt selector dropdown
- [ ] Add "Add Prompt" button in edit mode
- [ ] Implement prompt removal in edit mode
- [ ] Add drag-to-reorder functionality (optional)
- [ ] Character limit per response (e.g., 150-200 chars)

### Interests, Hobbies, Fun Activities
- [ ] Create interests section
- [ ] Tag-based display for interests
- [ ] Add interest tags in edit mode
- [ ] Category chips (colored, rounded)

---

## 3.3 Bio Section #2 - Professional Bio

### Professional Summary
- [ ] Create `ProfessionalBio.jsx` component
- [ ] Text area for professional summary
- [ ] Character limit (shorter than Bio #1, ~300 chars)
- [ ] Resume-style formatting
- [ ] Edit mode toggle

### Display Styling
- [ ] Smaller, more compact design than Bio #1
- [ ] Professional, clean layout
- [ ] Clear visual separation from Human Bio

---

## 3.4 Experience Section

### Experience List Display
- [ ] Create `ExperienceSection.jsx` component
- [ ] Create `ExperienceCard.jsx` for individual entries
- [ ] Display experience entries in chronological order
- [ ] Each entry shows:
  - [ ] Company logo (optional)
  - [ ] Company name
  - [ ] Job title
  - [ ] Employment dates (start - end or "Present")
  - [ ] Duration (calculated automatically)
  - [ ] Location (optional)
  - [ ] Description/responsibilities

### Add Experience Modal
- [ ] Create "Add Experience" button
- [ ] Create modal/form for adding experience
- [ ] Form fields:
  - [ ] Company name (text input)
  - [ ] Title (text input)
  - [ ] Start date (month/year picker)
  - [ ] End date (month/year picker or "Present" checkbox)
  - [ ] Description (textarea)
  - [ ] Location (text input, optional)
  - [ ] Company logo upload (optional)

### Experience Management
- [ ] Edit existing experience entries
- [ ] Delete experience entries (with confirmation)
- [ ] Drag-to-reorder functionality
- [ ] Validation (start date before end date, etc.)

---

## 3.5 Education Section

### Education List Display
- [ ] Create `EducationSection.jsx` component
- [ ] Create `EducationCard.jsx` for individual entries
- [ ] Display education entries in chronological order
- [ ] Each entry shows:
  - [ ] School logo (optional)
  - [ ] School name
  - [ ] Degree and field of study
  - [ ] Dates attended (start - end)
  - [ ] Activities and societies (optional)
  - [ ] Grade/GPA (optional)

### Add Education Modal
- [ ] Create "Add Education" button
- [ ] Create modal/form for adding education
- [ ] Form fields:
  - [ ] School name (text input)
  - [ ] Degree (dropdown: Bachelor's, Master's, PhD, etc.)
  - [ ] Field of study (text input)
  - [ ] Start date (month/year picker)
  - [ ] End date (month/year picker or "Present" checkbox)
  - [ ] Grade (text input, optional)
  - [ ] Activities/societies (textarea, optional)
  - [ ] School logo upload (optional)

### Education Management
- [ ] Edit existing education entries
- [ ] Delete education entries
- [ ] Reorder entries

---

## 3.6 Certifications Section

### Certifications List Display
- [ ] Create `CertificationsSection.jsx` component
- [ ] Create `CertificationCard.jsx` for individual entries
- [ ] Display certifications in grid or list layout
- [ ] Each entry shows:
  - [ ] Certification name
  - [ ] Issuing organization
  - [ ] Issue date
  - [ ] Expiration date (optional)
  - [ ] Credential ID (optional)
  - [ ] Credential URL (optional, clickable)

### Add Certification Modal
- [ ] Create "Add Certification" button
- [ ] Create modal/form for adding certification
- [ ] Form fields:
  - [ ] Certification name (text input)
  - [ ] Issuing organization (text input)
  - [ ] Issue date (month/year picker)
  - [ ] Expiration date (month/year picker, optional)
  - [ ] Credential ID (text input, optional)
  - [ ] Credential URL (text input, optional)

### Certification Management
- [ ] Edit existing certifications
- [ ] Delete certifications
- [ ] Show expiration warnings (if expired)
- [ ] "Does not expire" checkbox option

---

## 3.7 Projects Section

### Projects List Display
- [ ] Create `ProjectsSection.jsx` component
- [ ] Create `ProjectCard.jsx` for individual entries
- [ ] Display projects in grid layout
- [ ] Each entry shows:
  - [ ] Project name
  - [ ] Description
  - [ ] Start and end dates
  - [ ] Associated with (company/school, optional)
  - [ ] Project URL (optional, clickable)
  - [ ] Project media/images (optional)
  - [ ] Skills/technologies used (tags)

### Add Project Modal
- [ ] Create "Add Project" button
- [ ] Create modal/form for adding project
- [ ] Form fields:
  - [ ] Project name (text input)
  - [ ] Description (textarea)
  - [ ] Start date (month/year picker)
  - [ ] End date (month/year picker or "Ongoing" checkbox)
  - [ ] Associated with (dropdown of companies/schools)
  - [ ] Project URL (text input, optional)
  - [ ] Media upload (images, optional)
  - [ ] Skills/tech tags (multi-select or tag input)

### Project Management
- [ ] Edit existing projects
- [ ] Delete projects
- [ ] Reorder projects
- [ ] Image gallery for project media

---

## 3.8 Volunteer Section

### Volunteer List Display
- [ ] Create `VolunteerSection.jsx` component
- [ ] Create `VolunteerCard.jsx` for individual entries
- [ ] Display volunteer experiences
- [ ] Each entry shows:
  - [ ] Organization name
  - [ ] Role/position
  - [ ] Cause (e.g., Education, Environment, Social Services)
  - [ ] Start and end dates
  - [ ] Description

### Add Volunteer Experience Modal
- [ ] Create "Add Volunteer Experience" button
- [ ] Create modal/form for adding volunteer work
- [ ] Form fields:
  - [ ] Organization (text input)
  - [ ] Role (text input)
  - [ ] Cause (dropdown with predefined causes)
  - [ ] Start date (month/year picker)
  - [ ] End date (month/year picker or "Present" checkbox)
  - [ ] Description (textarea)

### Volunteer Management
- [ ] Edit existing volunteer entries
- [ ] Delete volunteer entries
- [ ] Reorder entries

---

## 3.9 Profile Additional Features

### Posts by User Tab
- [ ] Create tab/section showing user's posts
- [ ] Reuse PostCard component
- [ ] Filter posts by this user
- [ ] Pagination or infinite scroll

### Activity Tab
- [ ] Show user's recent activity
  - [ ] Posts they've liked
  - [ ] Comments they've made
  - [ ] Reposts
- [ ] Activity feed component
- [ ] Timeline view

### Bros List Viewer
- [ ] Create modal/page to view all bros
- [ ] Grid of bros with photos and names
- [ ] Search/filter bros
- [ ] Link to each bro's profile

### Add/Remove Bro Buttons
- [ ] "Add Bro" button when viewing others' profiles
- [ ] "Remove Bro" button (with confirmation)
- [ ] "Pending" state for sent requests
- [ ] Bros count updates in real-time

### Profile URL/Sharing
- [ ] Custom profile URL (e.g., /profile/username)
- [ ] Share profile button
- [ ] Copy link functionality

---

## 3.10 Edit Mode

### Edit Mode Toggle
- [ ] Toggle between view and edit mode
- [ ] Save/Cancel buttons in edit mode
- [ ] Unsaved changes warning

### Sections in Edit Mode
- [ ] All sections show edit controls when in edit mode
- [ ] Inline editing where possible
- [ ] Clear visual indication of editable fields
- [ ] Form validation throughout

---

## 3.11 Styling & Polish

### Consistent Design System
- [ ] Apply orange/purple gradient theme throughout
- [ ] Use glassmorphism cards like feed
- [ ] Maintain spacing and padding consistency
- [ ] Typography hierarchy

### Animations & Transitions
- [ ] Smooth transitions between view/edit modes
- [ ] Hover effects on interactive elements
- [ ] Loading states for image uploads
- [ ] Success/error notifications

### Responsive Design
- [ ] Mobile layout for profile
- [ ] Tablet breakpoints
- [ ] Stack sections vertically on small screens
- [ ] Adjust banner and profile picture sizing

### Icons & Visual Elements
- [ ] Icons for each section (experience, education, etc.)
- [ ] Flag emojis/images
- [ ] Verified badge icon
- [ ] Edit/delete/reorder icons

---

## 3.12 Reusable Components

### Form Components
- [ ] Create reusable modal wrapper
- [ ] Date picker component
- [ ] File upload component (images)
- [ ] Tag input component
- [ ] Character counter component
- [ ] Dropdown selector component

### Section Components
- [ ] Section header component (with add button)
- [ ] Empty state component (when no entries exist)
- [ ] Card wrapper component
- [ ] Timeline component (for chronological entries)

---

## Notes

- All data is mock/local for now (will connect to backend later)
- Focus on UI/UX first, functionality second
- Use the same starry background as feed
- Keep the orange/purple gradient theme consistent
- Profile pictures use placeholder images for now
- Remember: Bio #1 is the fun, human, Hinge-style section
- Remember: Bio #2 is the shorter, professional, resume-style section
- "Bros" replaces "connections" throughout the app

---

## Priority Order (Recommended Build Sequence)

1. **Profile Header** (3.1) - Foundation of the profile
2. **Professional Bio** (3.3) - Quick win, simpler than Human Bio
3. **Human Bio with Prompts** (3.2) - Most unique feature
4. **Experience Section** (3.4) - Most important professional section
5. **Education Section** (3.5) - Similar to Experience
6. **Projects Section** (3.7) - Portfolio showcase
7. **Certifications Section** (3.6) - Quick addition
8. **Volunteer Section** (3.8) - Community involvement
9. **Additional Features** (3.9) - Posts, Activity, Bros list
10. **Polish & Responsive** (3.11) - Final touches

---

## Testing Checklist

- [ ] Profile loads without errors
- [ ] All sections display correctly
- [ ] Edit mode works for all sections
- [ ] Forms validate properly
- [ ] Images upload successfully (mock)
- [ ] Dates calculate correctly (duration, etc.)
- [ ] Character limits enforce properly
- [ ] Hinge-style prompts system works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Smooth animations and transitions
- [ ] "Add Bro" button shows correct state
- [ ] Profile URL routing works

---

**Estimated Completion Time:** 8-12 hours of development work

**Files to Create:**
- `/src/pages/ProfilePage.jsx`
- `/src/components/profile/ProfileHeader.jsx`
- `/src/components/profile/HumanBio.jsx`
- `/src/components/profile/ProfessionalBio.jsx`
- `/src/components/profile/ExperienceSection.jsx`
- `/src/components/profile/EducationSection.jsx`
- `/src/components/profile/CertificationsSection.jsx`
- `/src/components/profile/ProjectsSection.jsx`
- `/src/components/profile/VolunteerSection.jsx`
- Plus various card and modal components
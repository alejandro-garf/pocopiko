# Phase 1: Post-Authentication Layout & Navigation

## 1.1 Main App Shell

### Authenticated Layout Component
- [ ] Create `AuthenticatedLayout.jsx` component
- [ ] Implement wrapper structure (header, left sidebar, main content, right sidebar)
- [ ] Add responsive grid/flexbox layout
- [ ] Set up proper spacing and padding
- [ ] Add background styling consistent with landing page theme

### Top Navigation Bar
- [ ] Create `TopNav.jsx` component
- [ ] Add PocoPiko logo (left side)
- [ ] Add search bar (center)
  - [ ] Search icon
  - [ ] Input field with placeholder
  - [ ] Dropdown for search results (UI only for now)
- [ ] Add navigation icons (right side)
  - [ ] Home icon
  - [ ] My Network/Bros icon
  - [ ] Messaging icon
  - [ ] Notifications icon
  - [ ] Profile dropdown icon
- [ ] Style with orange/purple gradient theme
- [ ] Add hover effects on icons
- [ ] Make responsive (collapse to hamburger on mobile)

### Left Sidebar
- [ ] Create `LeftSidebar.jsx` component
- [ ] Add profile quick view card
  - [ ] Profile picture placeholder
  - [ ] User name
  - [ ] User title/headline
  - [ ] "Bros" count
  - [ ] Profile views count (optional)
- [ ] Add navigation menu
  - [ ] Home/Feed link
  - [ ] Profile link
  - [ ] Bros/Network link
  - [ ] Messaging link
  - [ ] Notifications link
- [ ] Style links with icons
- [ ] Add active state styling
- [ ] Make sticky on scroll

### Right Sidebar
- [ ] Create `RightSidebar.jsx` component
- [ ] Add "Bros you may know" section
  - [ ] Section title
  - [ ] User card list (3-5 users)
  - [ ] Each card: photo, name, title, "Add Bro" button
- [ ] Add "Trending" or "Featured" section (optional)
- [ ] Style with card backgrounds (glass morphism effect)
- [ ] Make sticky on scroll

### Protected Routes
- [ ] Create `ProtectedRoute.jsx` wrapper component
- [ ] Check authentication state (mock for now)
- [ ] Redirect to `/login` if not authenticated
- [ ] Redirect to `/feed` if authenticated and on landing page
- [ ] Wrap authenticated routes in React Router

### Logout Functionality
- [ ] Add logout button to profile dropdown in TopNav
- [ ] Create logout handler function (clear mock auth state)
- [ ] Redirect to landing page on logout
- [ ] Add confirmation modal (optional)

### Routing Setup
- [ ] Update `App.jsx` with authenticated routes
- [ ] Add route for `/feed` (placeholder for now)
- [ ] Add route for `/profile` (placeholder for now)
- [ ] Add route for `/profile/:userId` for viewing others
- [ ] Test navigation between routes

### Testing & Polish
- [ ] Test layout on different screen sizes
- [ ] Verify navigation works between all pages
- [ ] Check that sidebar stays sticky
- [ ] Ensure consistent spacing and alignment
- [ ] Test logout redirects correctly
- [ ] Verify protected routes work as expected
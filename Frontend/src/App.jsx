import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';

// Import authenticated layout
import AuthenticatedLayout from './components/layout/AuthenticatedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Authenticated routes with feed layout (sidebars) */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/feed" element={<FeedPage />} />
        </Route>

        {/* Profile route - FULL SCREEN (no sidebars) */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
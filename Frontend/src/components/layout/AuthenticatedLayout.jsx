import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

function AuthenticatedLayout() {
  return (
    <div className="authenticated-layout">
      <TopNav />
      <div className="layout-container">
        <LeftSidebar />
        <main className="main-content">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}

export default AuthenticatedLayout;
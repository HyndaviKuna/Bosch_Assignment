import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import xyzLogo from './assests/xyz_Logo.png';
import Home from './pages/Home';
import SalesDashboard from './pages/SalesDashboard';
import QualityDashboard from './pages/QualityDashboard';
import Info from './pages/Info';
import './App.css';

function Sidebar({ isMobileOpen, toggleSidebar, isMobile }) {
  const location = useLocation();
  return (
    <>
      {isMobile && isMobileOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
      
      <div className={`sidebar ${isMobile && isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          {/* {isMobile && (
            <button className="close-btn" onClick={toggleSidebar} aria-label="Close menu">
              ×
            </button>
          )} */}
          <img src={xyzLogo} alt="XYZ Logo" className="logo" />
        </div>
        <nav>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => isMobile && toggleSidebar()}
          >
            🏠 Home
          </Link>
          <Link 
            to="/sales" 
            className={location.pathname === '/sales' ? 'active' : ''}
            onClick={() => isMobile && toggleSidebar()}
          >
            📈 Sales Dashboard
          </Link>
          <Link 
            to="/quality" 
            className={location.pathname === '/quality' ? 'active' : ''}
            onClick={() => isMobile && toggleSidebar()}
          >
            ⚡ Quality Dashboard
          </Link>
          <Link 
            to="/info" 
            className={location.pathname === '/info' ? 'active' : ''}
            onClick={() => isMobile && toggleSidebar()}
          >
            ℹ️ Info
          </Link>
        </nav>
      </div>
    </>
  );
}

function AppContent() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setIsMobileOpen(false); // Auto close on desktop
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="app">
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        toggleSidebar={toggleSidebar} 
        isMobile={isMobile}
      />
      
    
      {isMobile && (
        <button 
          className="mobile-toggle" 
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}
      
      <main className={`main-content ${isMobile && isMobileOpen ? 'menu-open' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/quality" element={<QualityDashboard />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

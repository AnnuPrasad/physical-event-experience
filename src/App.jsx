import React, { useState } from 'react';
import UserDashboard from './components/UserDashboard';
import OrganizerDashboard from './components/OrganizerDashboard';
import AuthPortal from './components/AuthPortal';

function App() {
  const [session, setSession] = useState(null); // { email, role, id, seat, gate }

  const handleAuthSuccess = (profileData) => {
    setSession(profileData);
  };

  const handleLogout = () => {
    setSession(null);
  };

  if (!session) {
    return (
      <div className="auth-wrapper">
        <div style={{ position: 'absolute', top: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.05em', color: 'var(--text-main)' }}>
            AEGIS<span style={{ color: 'var(--accent)' }}>.01</span>
          </h1>
          <p style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Smart Stadium Intelligence
          </p>
        </div>

        <AuthPortal onAuthSuccess={handleAuthSuccess} />

        <footer style={{ position: 'absolute', bottom: '30px', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>
          Protocol v2.5.0-STABLE | Cloud Sync: <span style={{ color: 'var(--success)' }}>Active</span>
        </footer>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'var(--bg-main)' }}>
      <button 
        className="secondary-btn" 
        style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          zIndex: 1000, 
          padding: '8px 16px', 
          borderRadius: 'var(--radius-md)',
          fontSize: '0.75rem',
          fontWeight: '600'
        }} 
        onClick={handleLogout}
      >
        ← Log Out
      </button>
      {session.role === 'user' ? (
        <UserDashboard profile={session} />
      ) : (
        <OrganizerDashboard profile={session} />
      )}
    </div>
  );
}

export default App;

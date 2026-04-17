import React from 'react';
import VisitorAssistant from './VisitorAssistant';
import IdentityQR from './IdentityQR';

const UserDashboard = ({ profile }) => {
  return (
    <div className="app-container fade-in" style={{ gridTemplateColumns: '1fr 400px', gridTemplateRows: '70px 1fr' }}>
      {/* HUD Header */}
      <header className="hud-header glass-panel">
        <div>
          <h1>AEGIS<span style={{ color: 'var(--text-main)' }}>.USER</span></h1>
        </div>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Digital ID</div>
            <div style={{ fontSize: '0.875rem', fontWeight: '800' }}>{profile.id}</div>
          </div>
          <div className="status-pill" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
            <div className="status-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></div>
            CONNECTED
          </div>
        </div>
      </header>

      {/* Main Info Area */}
      <main className="main-stage" style={{ gridColumn: '1' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 className="panel-title">Your Assignment</h3>
            <div style={{ marginTop: '20px' }}>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>ASSIGNED SEATING</div>
               <div style={{ fontSize: '1.5rem', fontWeight: '900', margin: '8px 0' }}>{profile.seat}</div>
               <div style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '700' }}>FOLLOW THE BLUE LINE ON FLOOR</div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: 'var(--radius-md)' }}>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>OPTIMAL ENTRY GATE</div>
               <div style={{ fontSize: '1.125rem', fontWeight: '800', marginTop: '4px' }}>{profile.gate}</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IdentityQR profile={profile} />
            <p style={{ marginTop: '20px', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Present this QR at any Smart-Gate for frictionless entry.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ flex: 1, padding: '30px' }}>
          <h3 className="panel-title">Safety & Crowd Notifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <div className="modern-card" style={{ padding: '16px', borderLeft: '4px solid var(--success)' }}>
               <div style={{ fontWeight: '800', fontSize: '1rem' }}>Food Concourse A - Low Density</div>
               <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Optimal time to visit food stalls. Wait times under 3 minutes.</p>
            </div>
            <div className="modern-card" style={{ padding: '16px', borderLeft: '4px solid var(--warning)' }}>
               <div style={{ fontWeight: '800', fontSize: '1rem' }}>Gate 4 Bottleneck Warning</div>
               <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>High traffic detected. Please use Gate 1 (North) for faster exit.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Right Column: AI Assistant */}
      <aside className="side-panel">
        <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <VisitorAssistant />
        </div>
      </aside>
    </div>
  );
};

export default UserDashboard;

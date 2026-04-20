import React from 'react';
import VisitorAssistant from './VisitorAssistant';
import IdentityQR from './IdentityQR';
import StadiumMap from './StadiumMap';
import ReportLostPerson from './ReportLostPerson';

const UserDashboard = ({ profile, onLogout }) => {
  return (
    <div className="app-container fade-in" style={{ gridTemplateColumns: '1fr 380px', gridTemplateRows: '70px 1fr' }}>
      {/* HUD Header */}
      <header className="hud-header glass-panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1>AEGIS<span style={{ color: 'var(--text-main)' }}>.USER</span></h1>
          <button className="logout-btn" onClick={onLogout}>← Log Out</button>
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

      {/* Main Content Area */}
      <main className="main-stage" style={{ gridColumn: '1' }}>
        {/* Top Row: Your Assignment + QR */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="panel-title">Your Assignment</h3>
            <div style={{ marginTop: '16px' }}>
               <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>ASSIGNED SEATING</div>
               <div style={{ fontSize: '1.25rem', fontWeight: '900', margin: '6px 0' }}>{profile.seat}</div>
               <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '700' }}>FOLLOW THE BLUE LINE ON FLOOR</div>
            </div>
            <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: 'var(--radius-md)' }}>
               <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>OPTIMAL ENTRY GATE</div>
               <div style={{ fontSize: '1rem', fontWeight: '800', marginTop: '4px' }}>{profile.gate}</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IdentityQR profile={profile} />
            <p style={{ marginTop: '20px', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Present this QR at any Smart-Gate for frictionless entry.
            </p>
          </div>
        </div>

        {/* Interactive Stadium Map */}
        <div className="glass-panel" style={{ flex: 1, overflow: 'hidden', minHeight: '300px' }}>
          <StadiumMap 
            showScenarios={false} 
            defaultLayers={{
              toilets: true,
              food: true,
              stage: true,
              parking: true,
              medical: false,
              gates: true,
            }}
          />
        </div>
      </main>

      {/* Right Column: SOS + Notifications + AI Assistant */}
      <aside className="side-panel">
        {/* Emergency: Report Lost Person */}
        <ReportLostPerson />

        {/* Safety Notifications */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h3 className="panel-title">Live Notifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <div className="modern-card" style={{ padding: '14px', borderLeft: '4px solid var(--success)' }}>
               <div style={{ fontWeight: '800', fontSize: '0.875rem' }}>Food Concourse A - Low Density</div>
               <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Wait times under 3 minutes. Good time to eat!</p>
            </div>
            <div className="modern-card" style={{ padding: '14px', borderLeft: '4px solid var(--warning)' }}>
               <div style={{ fontWeight: '800', fontSize: '0.875rem' }}>Gate 4 Bottleneck</div>
               <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Use Gate 1 (North) for faster exit.</p>
            </div>
          </div>
        </div>

        {/* AI Chat */}
        <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <VisitorAssistant />
        </div>
      </aside>
    </div>
  );
};

export default UserDashboard;

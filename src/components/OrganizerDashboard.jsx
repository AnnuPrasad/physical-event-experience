import React, { useState } from 'react';
import StadiumMap from './StadiumMap';
import MasterCommandHub from './MasterCommandHub';
import HealthRiskHUB from './HealthRiskHUB';
import ReunificationHUB from './ReunificationHUB';

const OrganizerDashboard = ({ profile, onLogout }) => {
  const [activeScenarios, setActiveScenarios] = useState({
    emergency: false,
    congestion: false,
    medical: false,
    demographics: false
  });

  const toggleScenario = (type) => {
    setActiveScenarios(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="app-container fade-in">
      {/* HUD Header */}
      <header className="hud-header glass-panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1>AEGIS<span style={{ color: 'var(--text-main)' }}>.COMMAND</span></h1>
          <button className="logout-btn" onClick={onLogout}>← Log Out</button>
        </div>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Command Officer</div>
            <div style={{ fontSize: '0.875rem', fontWeight: '800' }}>{profile.email.split('@')[0].toUpperCase()}</div>
          </div>
          <div className="status-pill">
            <div className="status-dot"></div>
            SYSTEM OPERATIONAL
          </div>
        </div>
      </header>

      {/* Left Column: Tools & Scenarios */}
      <aside className="side-panel">
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h3 className="panel-title">Tactical Scenarios</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              className={`modern-btn ${activeScenarios.emergency ? '' : 'secondary-btn'}`}
              style={{ background: activeScenarios.emergency ? 'var(--danger)' : '', color: activeScenarios.emergency ? 'white' : '' }}
              onClick={() => toggleScenario('emergency')}
            >
              {activeScenarios.emergency ? 'ABORT EMERGENCY' : 'TRIGGER EVACUATION'}
            </button>
            <button 
              className={`modern-btn ${activeScenarios.congestion ? '' : 'secondary-btn'}`}
              style={{ background: activeScenarios.congestion ? 'var(--warning)' : '', color: activeScenarios.congestion ? 'white' : '' }}
              onClick={() => toggleScenario('congestion')}
            >
              SIMULATE CONGESTION
            </button>
            <button 
              className={`modern-btn ${activeScenarios.demographics ? '' : 'secondary-btn'}`}
              style={{ background: activeScenarios.demographics ? 'var(--accent)' : '', color: activeScenarios.demographics ? 'white' : '' }}
              onClick={() => toggleScenario('demographics')}
            >
              {activeScenarios.demographics ? 'HIDE DEMOGRAPHICS' : 'DEMOGRAPHIC MAP'}
            </button>
            <button 
              className={`modern-btn ${activeScenarios.medical ? '' : 'secondary-btn'}`}
              style={{ background: activeScenarios.medical ? 'var(--accent)' : '', color: activeScenarios.medical ? 'white' : '' }}
              onClick={() => toggleScenario('medical')}
            >
              MEDICAL EMERGENCY
            </button>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
          <h3 className="panel-title">Live Sensor Feed</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
             <HealthRiskHUB />
             <ReunificationHUB />
          </div>
        </div>
      </aside>

      {/* Central Map: Main Stage */}
      <main className="main-stage">
        <div className="map-viewport glass-panel">
          <StadiumMap activeScenarios={activeScenarios} />
        </div>
        
        <div className="glass-panel" style={{ height: '140px', padding: '20px' }}>
          <h3 className="panel-title">Throughput Analytics</h3>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>
             <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent)' }}>42,891</div>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>TOTAL ATTENDEES</div>
             </div>
             <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--success)' }}>12.4s</div>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>AVG GATE LATENCY</div>
             </div>
             <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--warning)' }}>86%</div>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>STALL SATURATION</div>
             </div>
          </div>
        </div>
      </main>

      {/* Right Column: Master Hub */}
      <aside className="side-panel">
        <MasterCommandHub activeScenarios={activeScenarios} />
      </aside>
    </div>
  );
};

export default OrganizerDashboard;

import React from 'react';

const MasterCommandHub = ({ activeScenarios }) => {
  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
          Global Command Hub
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Live Operations</h2>
          <div className="status-pill">
            <div className="status-dot"></div>
            SYNCED
          </div>
        </div>
      </div>
      
      <div style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
        <h3 className="panel-title">Active Incidents</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="modern-card" style={{ padding: '16px', borderLeft: '4px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="badge badge-danger">Medical SOS</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>42s ago</span>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Section 202, Row 12</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Medic Team Delta-4 En Route</div>
          </div>

          <div className="modern-card" style={{ padding: '16px', borderLeft: '4px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="badge badge-info">Reunification</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>3m ago</span>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Subject: Mila (Age 5)</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Safe at Gate 4. Parent notified.</div>
          </div>

          <div className="modern-card" style={{ padding: '16px', borderLeft: '4px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="badge badge-warning">Thermal Anomaly</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Current</span>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>Concourse S4-T3</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Density offset active: -12%</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', background: 'rgba(59, 130, 246, 0.03)', borderTop: '1px solid var(--border)' }}>
        <h3 className="panel-title">Strategic Actions</h3>
        <ul style={{ fontSize: '0.8125rem', color: 'var(--text-main)', listStyle: 'none' }}>
          <li style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>•</span> Redeploy 15 stewards to North Gate
          </li>
          <li style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>•</span> Open overflow Gate B in 120s
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>•</span> Initiate East Stand hydration dispatch
          </li>
        </ul>
      </div>

      <div style={{ padding: '12px', textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>
        AI PREDICTIVE MODEL: 98.4% CONFIDENCE
      </div>
    </div>
  );
};

export default MasterCommandHub;

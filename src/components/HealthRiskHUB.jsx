import React from 'react';

const HealthRiskHUB = () => {
  return (
    <div className="modern-card" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-main)' }}>BIOMETRIC SCAN</h4>
        <span className="badge badge-info">Active</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{ flex: 1, height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--success)' }}>98.2%</div>
        </div>
        <div style={{ flex: 1, height: '40px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--accent)' }}>0.02%</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '700' }}>
        <span>STORM-NORMAL</span>
        <span>PATHOGEN-RISK</span>
      </div>
    </div>
  );
};

export default HealthRiskHUB;

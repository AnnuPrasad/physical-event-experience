import React from 'react';

const ReunificationHUB = () => {
  return (
    <div className="modern-card" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-main)' }}>REUNIFICATION QUEUE</h4>
        <span className="badge badge-warning">2 Active</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '0.75rem', padding: '10px', background: 'rgba(245, 158, 11, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
           <div style={{ fontWeight: '800' }}>Subject: Mila (Age 5)</div>
           <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Gate 4 | ETA Parent: 4m</div>
        </div>
        <div style={{ fontSize: '0.75rem', padding: '10px', background: 'white', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
           <div style={{ fontWeight: '800' }}>Subject: Leo (Age 7)</div>
           <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Sec 102 | Staff Assigned: Sarah</div>
        </div>
      </div>
    </div>
  );
};

export default ReunificationHUB;

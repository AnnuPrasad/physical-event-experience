import React, { useState, useEffect } from 'react';

const ReunificationHUB = () => {
  const [reports, setReports] = useState([]);

  // Poll localStorage for new reports (simulates real-time backend)
  useEffect(() => {
    const loadReports = () => {
      const stored = JSON.parse(localStorage.getItem('reunification_reports') || '[]');
      // Sort newest first
      stored.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setReports(stored);
    };

    loadReports();
    const interval = setInterval(loadReports, 2000); // poll every 2s
    return () => clearInterval(interval);
  }, []);

  const resolveReport = (id) => {
    const updated = reports.map(r =>
      r.id === id ? { ...r, status: 'resolved' } : r
    );
    setReports(updated);
    localStorage.setItem('reunification_reports', JSON.stringify(updated));
  };

  const activeReports = reports.filter(r => r.status === 'active');
  const resolvedReports = reports.filter(r => r.status === 'resolved');

  const formatTime = (timestamp) => {
    const diff = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <div className="modern-card" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-main)' }}>REUNIFICATION QUEUE</h4>
        <span className={`badge ${activeReports.length > 0 ? 'badge-danger' : 'badge-info'}`}>
          {activeReports.length} Active
        </span>
      </div>

      {activeReports.length === 0 && resolvedReports.length === 0 && (
        <div style={{ textAlign: 'center', padding: '16px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          No reports yet. Queue is clear ✅
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {/* Active Reports */}
        {activeReports.map((report) => (
          <div
            key={report.id}
            className="fade-in"
            style={{
              fontSize: '0.75rem',
              padding: '12px',
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div style={{ fontWeight: '800', color: 'var(--danger)' }}>
                🚨 {report.name} (Age {report.age})
              </div>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{formatTime(report.timestamp)}</span>
            </div>
            {report.lastSeen && (
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                📍 Last seen: {report.lastSeen}
              </div>
            )}
            {report.description && (
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                {report.description}
              </div>
            )}
            <button
              onClick={() => resolveReport(report.id)}
              style={{
                background: 'var(--success)',
                color: 'white',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.65rem',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                fontFamily: 'inherit',
              }}
            >
              ✓ MARK AS REUNIFIED
            </button>
          </div>
        ))}

        {/* Resolved Reports */}
        {resolvedReports.slice(0, 3).map((report) => (
          <div
            key={report.id}
            style={{
              fontSize: '0.75rem',
              padding: '10px',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              opacity: 0.7,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: 'var(--success)' }}>
                ✅ {report.name} (Age {report.age})
              </div>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Resolved</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReunificationHUB;

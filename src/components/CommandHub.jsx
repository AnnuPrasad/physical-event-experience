import React from 'react';

const CommandHub = ({ logs }) => {
  return (
    <div className="panel" style={{ gridRow: '2 / 4' }}>
      <div className="panel-header">
        <span>AI Analysis & Dispatch</span>
        <span className="emergency-blink">ACTIVE SOS</span>
      </div>
      <div style={{ padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 style={{ color: 'var(--neon-red)', fontSize: '0.9rem', marginBottom: '10px' }}>IDENTIFICATION</h3>
        <div style={{ fontSize: '0.8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>HEART RATE:</span>
          <span style={{ color: 'var(--neon-red)' }}>145 BPM</span>
          <span style={{ color: 'var(--text-secondary)' }}>O2 SAT:</span>
          <span>88%</span>
          <span style={{ color: 'var(--text-secondary)' }}>LOCATION:</span>
          <span>SEC 202, R12</span>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="panel-header" style={{ fontSize: '0.65rem' }}>Resource Movement Log</div>
        {logs.map((log, i) => (
          <div key={i} className="log-entry">
            <span className="log-time">[{log.time}]</span>
            <span className={`log-type-${log.type}`}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandHub;

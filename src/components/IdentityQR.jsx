import React from 'react';

const IdentityQR = ({ profile }) => {
  const color = 'var(--accent)';
  return (
    <div style={{ 
      width: '180px', 
      height: '180px', 
      padding: '20px', 
      background: 'white', 
      borderRadius: '24px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      border: '1px solid var(--border)'
    }}>
      {/* Stylized QR using SVG */}
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect x="0" y="0" width="25" height="25" fill="var(--text-main)" />
        <rect x="5" y="5" width="15" height="15" fill="#fff" />
        <rect x="9" y="9" width="7" height="7" fill="var(--text-main)" />

        <rect x="75" y="0" width="25" height="25" fill="var(--text-main)" />
        <rect x="80" y="5" width="15" height="15" fill="#fff" />
        <rect x="84" y="9" width="7" height="7" fill="var(--text-main)" />

        <rect x="0" y="75" width="25" height="25" fill="var(--text-main)" />
        <rect x="5" y="80" width="15" height="15" fill="#fff" />
        <rect x="9" y="84" width="7" height="7" fill="var(--text-main)" />

        <g fill="var(--text-main)">
          <rect x="30" y="5" width="5" height="5" />
          <rect x="40" y="10" width="10" height="5" />
          <rect x="55" y="5" width="5" height="15" />
          <rect x="10" y="30" width="15" height="5" />
          <rect x="30" y="35" width="5" height="10" />
          <rect x="45" y="30" width="20" height="5" />
          <rect x="50" y="50" width="10" height="10" />
          <rect x="75" y="55" width="5" height="15" />
          <rect x="40" y="70" width="25" height="5" />
        </g>
      </svg>
      
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        background: `linear-gradient(to bottom, transparent, ${color}11, transparent)`,
        animation: 'pulse 3s ease-in-out infinite',
        pointerEvents: 'none'
      }}></div>

      <div style={{ 
        position: 'absolute', 
        bottom: '-35px', 
        fontSize: '0.7rem', 
        color: 'var(--text-muted)',
        fontWeight: '700'
      }}>
        AEGIS-TOKEN: {profile.id.split('-')[1]}
      </div>
    </div>
  );
};

export default IdentityQR;

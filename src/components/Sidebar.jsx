import React from 'react';

const Sidebar = ({ activeView, onViewChange, role }) => {
  const menuItems = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'profile', label: 'PROFILE', icon: '👤' },
  ];

  return (
    <div className="glass-panel" style={{ 
      width: '80px', 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 0',
      gap: '30px',
      borderRadius: 'var(--radius-lg)'
    }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        background: 'var(--accent-gradient)', 
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '900',
        fontSize: '1.25rem',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-md)'
      }}>
        A
      </div>

      {menuItems.map((item) => (
        <div 
          key={item.id}
          onClick={() => onViewChange(item.id)}
          style={{ 
            cursor: 'pointer',
            textAlign: 'center',
            padding: '12px 0',
            width: '100%',
            transition: '0.3s',
            position: 'relative'
          }}
        >
          {activeView === item.id && (
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              top: '20%', 
              height: '60%', 
              width: '4px', 
              background: 'var(--accent)', 
              borderRadius: '4px 0 0 4px' 
            }}></div>
          )}
          <div style={{ fontSize: '1.5rem', opacity: activeView === item.id ? 1 : 0.4 }}>{item.icon}</div>
          <div style={{ 
            fontSize: '0.6rem', 
            fontWeight: '700',
            color: activeView === item.id ? 'var(--accent)' : 'var(--text-muted)',
            marginTop: '4px'
          }}>
            {item.label}
          </div>
        </div>
      ))}
      
      <div style={{ marginTop: 'auto', opacity: 0.2, fontSize: '0.5rem', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontWeight: '800' }}>
         AUTH: {role.toUpperCase()}
      </div>
    </div>
  );
};

export default Sidebar;

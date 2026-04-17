import React from 'react';

const StadiumMap = ({ activeScenarios }) => {
  return (
    <div className="stadium-map-root" style={{ 
      height: '100%',
      width: '100%',
      background: '#e2e8f0', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Stadium Oval Shield */}
      <div style={{ 
        width: '80%', 
        height: '70%', 
        background: 'white', 
        borderRadius: '50%', 
        border: '10px solid #cbd5e1',
        boxShadow: '0 0 40px rgba(0,0,0,0.05)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Pitch Area */}
        <div style={{ 
          width: '60%', 
          height: '60%', 
          background: '#f1f5f9', 
          border: '2px dashed #cbd5e1', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
           <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '800' }}>FIELD OP AREA</div>
        </div>

        {/* Heatmap Overlays (Simulated) */}
        {activeScenarios.congestion && (
          <div className="fade-in" style={{ 
            position: 'absolute', 
            top: '10%', 
            left: '10%', 
            width: '30%', 
            height: '30%', 
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
        )}

        {/* Demographic Map Layer */}
        {activeScenarios.demographics && (
           <>
            <div className="fade-in" style={{ 
              position: 'absolute', 
              top: '15%', 
              right: '15%', 
              width: '25%', 
              height: '25%', 
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
              borderRadius: '50%'
            }}></div>
            <div className="fade-in" style={{ 
              position: 'absolute', 
              bottom: '15%', 
              left: '20%', 
              width: '20%', 
              height: '20%', 
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
              borderRadius: '50%'
            }}></div>
           </>
        )}

        {activeScenarios.medical && (
           <div className="fade-in" style={{ 
            position: 'absolute', 
            bottom: '20%', 
            right: '25%', 
            width: '15%', 
            height: '15%', 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 1.5s infinite'
          }}></div>
        )}

        {/* Labels */}
        <div style={{ position: 'absolute', top: '15px', color: '#64748b', fontSize: '0.6rem', fontWeight: '800' }}>NORTH GATE (GATE 1)</div>
        <div style={{ position: 'absolute', bottom: '15px', color: '#64748b', fontSize: '0.6rem', fontWeight: '800' }}>SOUTH STANDS</div>
      </div>

      {/* Emergency Overlay */}
      {activeScenarios.emergency && (
        <div className="fade-in" style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'rgba(239, 68, 68, 0.1)', 
          border: '4px solid var(--danger)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}>
          <div className="glass-panel" style={{ padding: '20px 40px', background: 'white', textAlign: 'center' }}>
             <h2 style={{ color: 'var(--danger)', fontWeight: '900', letterSpacing: '4px' }}>EVACUATION PROTOCOL</h2>
             <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>PLEASE FOLLOW GUIDED SIGNAGE</p>
          </div>
        </div>
      )}

      {/* UI Elements */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
         <div className="badge badge-info" style={{ background: 'white', border: '1px solid var(--border)' }}>LIVE FEED ACTIVE</div>
      </div>
    </div>
  );
};

export default StadiumMap;

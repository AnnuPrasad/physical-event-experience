import React, { useState } from 'react';

const AuthPortal = ({ onAuthSuccess }) => {
  const [step, setStep] = useState('email'); // 'email', 'otp'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1200);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      const role = email.toLowerCase().includes('staff') ? 'organizer' : 'user';
      
      const profileData = {
        email,
        role,
        id: role === 'user' ? 'AG-V402-99-SECURE' : 'CMD-X-001',
        seat: role === 'user' ? 'Section 105, Row 4, Seat 12' : 'COMMAND-POST',
        gate: role === 'user' ? 'North Gate (Gate 1)' : 'VIP/STAFF ENTRANCE',
        assistantStatus: 'ACTIVE'
      };
      
      onAuthSuccess(profileData);
    }, 1200);
  };

  return (
    <div className="glass-panel auth-card fade-in">
      <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px', textTransform: 'uppercase' }}>
        Secure Gateway
      </div>
      <h2>
        {step === 'email' ? 'Welcome Back' : 'Verify Identity'}
      </h2>
      <p style={{ marginBottom: '24px' }}>
        {step === 'email' 
          ? 'Enter your registered email to access the Smart Stadium platform.' 
          : `We've sent a 4-digit code to ${email}`}
      </p>

      <form onSubmit={step === 'email' ? handleEmailSubmit : handleOtpSubmit}>
        {step === 'email' ? (
          <input 
            type="email" 
            placeholder="name@example.com" 
            className="input-modern"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        ) : (
          <div style={{ marginBottom: '24px' }}>
            <input 
              type="text" 
              placeholder="· · · ·" 
              maxLength="4"
              className="input-modern"
              style={{ width: '160px', textAlign: 'center', fontSize: '1.5rem', letterSpacing: '8px' }}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="modern-btn"
          style={{ width: '100%' }}
        >
          {loading ? 'Processing...' : step === 'email' ? 'Continue' : 'Enter Stadium'}
        </button>
      </form>

      <div style={{ marginTop: '32px', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>
        UNIFIED IDENTITY PROTOCOL v2.5.0
      </div>
    </div>
  );
};

export default AuthPortal;

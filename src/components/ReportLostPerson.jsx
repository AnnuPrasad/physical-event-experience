import React, { useState } from 'react';

const ReportLostPerson = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', age: '', description: '', lastSeen: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age) return;

    const report = {
      ...form,
      id: `REUNI-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'active',
      reportedBy: 'Attendee',
    };

    // Save to localStorage (simulates backend)
    const existing = JSON.parse(localStorage.getItem('reunification_reports') || '[]');
    existing.push(report);
    localStorage.setItem('reunification_reports', JSON.stringify(existing));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setForm({ name: '', age: '', description: '', lastSeen: '' });
    }, 3000);
  };

  if (!isOpen) {
    return (
      <button
        className="modern-btn"
        onClick={() => setIsOpen(true)}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          fontSize: '0.8rem',
          letterSpacing: '0.05em',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>🆘</span>
        REPORT LOST PERSON
      </button>
    );
  }

  if (submitted) {
    return (
      <div className="glass-panel fade-in" style={{ padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--success)', marginBottom: '6px' }}>
          Report Submitted
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Stadium staff have been notified and are actively searching. You will receive updates here.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel fade-in" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 className="panel-title" style={{ marginBottom: 0 }}>Report Lost Person</h3>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: '4px',
          }}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Person's Name"
          className="input-modern"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginBottom: '10px' }}
        />
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="input-modern"
            value={form.age}
            onChange={handleChange}
            required
            style={{ width: '80px', marginBottom: 0 }}
          />
          <input
            type="text"
            name="lastSeen"
            placeholder="Last seen location (e.g. Gate 2)"
            className="input-modern"
            value={form.lastSeen}
            onChange={handleChange}
            style={{ flex: 1, marginBottom: 0 }}
          />
        </div>
        <input
          type="text"
          name="description"
          placeholder="Description (clothing, appearance...)"
          className="input-modern"
          value={form.description}
          onChange={handleChange}
          style={{ marginBottom: '14px' }}
        />
        <button
          type="submit"
          className="modern-btn"
          style={{
            width: '100%',
            background: 'var(--danger)',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
          }}
        >
          🚨 Submit Emergency Report
        </button>
      </form>
    </div>
  );
};

export default ReportLostPerson;

import React, { useState, useEffect, useRef } from 'react';

const VisitorAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Agentic Intelligence Online. How can I assist your stadium experience today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI thinking
    setTimeout(() => {
      let response = "I'm analyzing your request...";
      if (input.toLowerCase().includes('food')) response = "The fastest stall currently is Eagle Eye Tacos in the East Concourse (4 min wait). Should I route you there?";
      if (input.toLowerCase().includes('exit')) response = "Gate 1 (North) is currently the most efficient exit route with 15% density. Avoid West Gate 4.";
      if (input.toLowerCase().includes('emergency')) response = "EMERGENCY PROTOCOL ACTIVE. A medic has been dispatched to your location. Stay where you are.";

      setMessages(prev => [...prev, { role: 'system', content: response }]);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
        <h3 className="panel-title">Smart Assistant</h3>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className="fade-in"
            style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              background: msg.role === 'user' ? 'var(--accent)' : 'white',
              color: msg.role === 'user' ? 'white' : 'var(--text-main)',
              padding: '12px 16px',
              borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
              fontSize: '0.875rem',
              boxShadow: 'var(--shadow-sm)',
              border: msg.role === 'system' ? '1px solid var(--border)' : 'none'
            }}
          >
            {msg.content}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSend} style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
        <input 
          type="text" 
          placeholder="Ask anything..." 
          className="input-modern"
          style={{ marginBottom: '10px' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="modern-btn" style={{ width: '100%', padding: '10px' }}>
          Query System
        </button>
      </form>
    </div>
  );
};

export default VisitorAssistant;

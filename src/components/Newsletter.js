import React, { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xgolalpn';

function Newsletter({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (email.trim() === '') {
      setError('Email address is required');
      return;
    }

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        onSuccess('Thank you for subscribing! Check your email for exclusive offers.');
        setEmail('');
      } else {
        setStatus('error');
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="newsletter-title">Sign Up For Our Newsletter</h2>
        <p className="newsletter-subtitle">Get latest updates on new products, offers & more!</p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;

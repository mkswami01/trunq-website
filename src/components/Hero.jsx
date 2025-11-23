import React from 'react';
import { ArrowRight, Mic } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <div className="animate-float" style={{ marginBottom: '2rem', display: 'inline-block' }}>
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
        }}>
          <Mic color="white" size={32} />
        </div>
      </div>

      <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
        Capture your thoughts anywhere.<br />
        <span className="gradient-text">Get them back when they matter.</span>
      </h1>
      <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Capture everything on your mind. Get it back when it matters—whether you're driving, cooking, or at the store.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
        <button className="cta-button" style={{
          background: '#fff',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          Join Waitlist <ArrowRight size={20} />
        </button>
        <button style={{
          background: 'transparent',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)',
          padding: '1rem 2rem',
          fontSize: '1.1rem'
        }}>
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;

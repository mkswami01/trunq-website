import React from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      {/* Fixed Nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'rgba(2, 6, 23, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>trunq.</div>
        <button className="cta-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>Get Early Access</button>
      </nav>

      <main>
        <PageOne />
        <PageTwo />
        <PageThree />
      </main>
    </div>
  );
}

export default App;

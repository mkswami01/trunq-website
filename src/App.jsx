import React from 'react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import PatternRecognition from './components/PatternRecognition';
import UseCases from './components/UseCases';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>trunq.</div>
        <button className="cta-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>Get Early Access</button>
      </nav>

      <main>
        <Hero />
        <Demo />
        <HowItWorks />
        <PatternRecognition />
        <UseCases />
        <Features />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;

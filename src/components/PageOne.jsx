import React from 'react';
import { ArrowRight, Mic, ChevronDown } from 'lucide-react';

const PageOne = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '6rem 2rem 4rem',
            position: 'relative'
        }}>
            {/* Floating Mic Icon */}
            <div className="animate-float" style={{ marginBottom: '2rem' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    width: '72px',
                    height: '72px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)'
                }}>
                    <Mic color="white" size={36} />
                </div>
            </div>

            {/* Headline */}
            <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                lineHeight: '1.1'
            }}>
                Capture your thoughts anywhere.<br />
                <span className="gradient-text">Get them back when they matter.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
                lineHeight: '1.6'
            }}>
                In the shower. Walking to your car. Cooking dinner.<br />
                Trunq catches them alland brings them back when you need them.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="cta-button" style={{
                    background: '#fff',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                    Join Waitlist <ArrowRight size={20} />
                </button>
            </div>

            {/* Social proof */}
            <p style={{
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
            }}>
                Join 847 others on the waitlist
            </p>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                animation: 'bounce 2s infinite'
            }}>
                <span style={{ fontSize: '0.8rem' }}>See how it works</span>
                <ChevronDown size={24} />
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(8px); }
                }
            `}</style>
        </section>
    );
};

export default PageOne;

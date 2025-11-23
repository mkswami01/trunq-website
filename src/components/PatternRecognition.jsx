import React from 'react';
import { BrainCircuit, Clock, Repeat, AlertTriangle, Dumbbell } from 'lucide-react';

const PatternRecognition = () => {
    const patterns = [
        {
            icon: <AlertTriangle size={24} color="#f59e0b" />,
            title: "Avoidance Detection",
            example: '"You\'ve mentioned the garage 4 times but never did it"',
            action: "Surfaces procrastination"
        },
        {
            icon: <Dumbbell size={24} color="#22c55e" />,
            title: "Workout Tracking",
            example: '"You\'ve done squats every Thursday for 6 weeks. Today is Thursday—time for squats?"',
            action: "Streak awareness + nudges"
        },
        {
            icon: <Repeat size={24} color="#3b82f6" />,
            title: "Routine Learning",
            example: '"You do pull-ups Tue/Thu. Missed last Thursday—want to make it up today?"',
            action: "Catches exceptions"
        },
        {
            icon: <Clock size={24} color="#ec4899" />,
            title: "Time Patterns",
            example: '"You usually plan meals on Friday evenings"',
            action: "Predicts needs"
        }
    ];

    return (
        <section className="container" style={{ padding: '6rem 2rem', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)',
                    padding: '8px 16px', borderRadius: '100px', marginBottom: '1.5rem',
                    color: '#d8b4fe', fontWeight: '600', fontSize: '0.9rem'
                }}>
                    <BrainCircuit size={16} /> TRUNQ LEARNS YOU
                </div>
                <h2 className="section-title">The more you use it, <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>the smarter it gets.</span></h2>
                <p className="section-subtitle">Trunq connects the dots between your scattered thoughts.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                maxWidth: '1100px',
                margin: '0 auto'
            }}>
                {patterns.map((item, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{item.title}</h3>
                        </div>

                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '16px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
                            <div style={{ fontSize: '1rem', color: '#e2e8f0', fontStyle: 'italic', marginBottom: '8px' }}>{item.example}</div>
                            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>→ {item.action}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PatternRecognition;

import React from 'react';
import { Mic, BrainCircuit, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Mic size={32} color="#ec4899" />,
            title: "1. Capture",
            desc: "Just talk. Say anything on your mind.",
            sub: '"Remind me to call mom about the party"'
        },
        {
            icon: <BrainCircuit size={32} color="#a855f7" />,
            title: "2. Trunq Understands",
            desc: "AI extracts tasks, people, and context.",
            sub: 'Extracts: Task, Person, Context, Urgency'
        },
        {
            icon: <MessageSquare size={32} color="#3b82f6" />,
            title: "3. Retrieve",
            desc: "Ask 'I'm driving' and get exactly what you need.",
            sub: '"You have 3 calls. Mom is overdue..."'
        }
    ];

    return (
        <section className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">How it works</h2>
                <p className="section-subtitle">From thought to action in three steps.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {steps.map((step, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            {step.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{step.desc}</p>
                        <div style={{
                            background: 'rgba(0,0,0,0.3)',
                            padding: '1rem',
                            borderRadius: '12px',
                            fontSize: '0.9rem',
                            color: '#cbd5e1',
                            fontFamily: 'monospace',
                            width: '100%'
                        }}>
                            {step.sub}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;

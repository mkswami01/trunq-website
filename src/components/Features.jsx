import React from 'react';
import { Mic, Car, Monitor, Zap, ShoppingCart, Footprints, Calendar, BrainCircuit, Search, Clock } from 'lucide-react';

const Features = () => {
    const primaryFeatures = [
        {
            icon: <Mic size={32} color="#ec4899" />,
            title: "Voice Capture",
            desc: "Just talk. AI extracts tasks, people, and deadlines automatically."
        },
        {
            icon: <BrainCircuit size={32} color="#a855f7" />,
            title: "Contextual Retrieval",
            desc: "Say 'I'm driving' and get calls/podcasts. Say 'I'm at desk' and get emails."
        },
        {
            icon: <Search size={32} color="#3b82f6" />,
            title: "Pattern Recognition",
            desc: "Ask 'What am I avoiding?' or 'Who do I need to call?'"
        }
    ];

    const secondaryFeatures = [
        { icon: <Car size={24} />, title: "Driving Mode" },
        { icon: <Monitor size={24} />, title: "Desk Mode" },
        { icon: <Clock size={24} />, title: "Smart Urgency" },
        { icon: <Calendar size={24} />, title: "Temporal Search" }
    ];

    return (
        <section className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">Everything you need. Nothing you don't.</h2>
            </div>

            {/* Primary Features */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
            }}>
                {primaryFeatures.map((feature, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '16px',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            {feature.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{feature.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Secondary Features */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {secondaryFeatures.map((feature, i) => (
                    <div key={i} className="glass-panel" style={{
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'rgba(255,255,255,0.02)'
                    }}>
                        <div style={{ color: '#94a3b8' }}>{feature.icon}</div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{feature.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;

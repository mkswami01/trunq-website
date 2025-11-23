import React from 'react';

const UseCases = () => {
    const scenarios = [
        {
            emoji: "🚗",
            situation: "I'm driving and I KNOW there was something I needed to do",
            response: "Call mom - 3 days overdue. Want me to call?"
        },
        {
            emoji: "🛒",
            situation: "I'm at Target... what did I need again?",
            response: "You mentioned batteries, gift for Sarah, returns"
        },
        {
            emoji: "💻",
            situation: "I have 10 minutes before my next meeting",
            response: "Quick wins: Reply to 2 emails, pay a bill"
        },
        {
            emoji: "🏋️",
            situation: "Have I been consistent with my workouts?",
            response: "You've done squats every Thursday for 6 weeks. Today is Thursday—time for squats?"
        },
        {
            emoji: "😰",
            situation: "Why do I feel like I'm forgetting something?",
            response: "You've mentioned the garage 3 times but never scheduled it"
        }
    ];

    return (
        <section className="container" style={{ padding: '6rem 2rem', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">You know that moment...</h2>
                <p className="section-subtitle">Trunq is there when your brain blanks.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {scenarios.map((item, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
                            <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '500', lineHeight: '1.5' }}>"{item.situation}"</div>
                        </div>
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            borderRadius: '16px',
                            padding: '1.25rem',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute', top: '-10px', left: '20px',
                                background: '#0f172a', padding: '0 8px',
                                fontSize: '12px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase'
                            }}>Trunq Says</div>
                            <div style={{ color: '#bfdbfe', fontSize: '1rem' }}>"{item.response}"</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCases;

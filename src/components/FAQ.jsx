import React from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            q: "How is this different from Apple Reminders?",
            a: "Reminders store tasks. Trunq understands context. Say 'I'm driving' and it knows to surface calls, not emails."
        },
        {
            q: "Does it work offline?",
            a: "Voice capture works offline. Sync happens when you're back online."
        },
        {
            q: "Is my data private?",
            a: "Your data is encrypted and never sold. You own your thoughts."
        },
        {
            q: "What happens to voice recordings?",
            a: "Transcribed instantly, then deleted. We only store the text."
        }
    ];

    return (
        <section className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">Common Questions</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((item, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fff' }}>{item.q}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.a}</p>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>
                    Stop forgetting the things that matter.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <button className="cta-button" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        Join the Waitlist
                    </button>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Join 847 others on the waitlist</p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

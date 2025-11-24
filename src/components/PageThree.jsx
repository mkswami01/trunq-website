import React, { useState } from 'react';
import { Car, ShoppingCart, Clock, HelpCircle, Dumbbell, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const PageThree = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const cases = [
        { icon: <Clock size={20} color="#f59e0b" />, scenario: "I have 10 minutes. What can I take care of?", response: "Reply to 2 emails, pay phone bill, text Sarah back" },
        { icon: <Car size={20} color="#3b82f6" />, scenario: "I'm driving and I KNOW there was something...", response: "Call mom - 3 days overdue" },
        { icon: <ShoppingCart size={20} color="#ec4899" />, scenario: "I'm at Target... what did I need?", response: "Batteries, gift for Sarah, returns" },
        { icon: <HelpCircle size={20} color="#a855f7" />, scenario: "Why do I feel like I'm forgetting something?", response: "You mentioned the garage 3 times" },
        { icon: <Dumbbell size={20} color="#22c55e" />, scenario: "Am I consistent with my workouts?", response: "Squats every Thursday for 6 weeks" }
    ];

    const faqs = [
        { q: "How is this different from Apple Reminders?", a: "Reminders store tasks. Trunq understands context. Say 'I'm driving' and it knows to surface calls, not emails." },
        { q: "Is my data private?", a: "Your data is encrypted and never sold. You own your thoughts." },
        { q: "What happens to voice recordings?", a: "Transcribed instantly, then deleted. We only store the text." }
    ];

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6rem 2rem 4rem',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>

                {/* Use Cases - Compact Grid */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center', marginBottom: '0.5rem' }}>
                        You know that moment...
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
                        Trunq is there when your brain draws a blank.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem'
                    }}>
                        {cases.map((item, i) => (
                            <div key={i} className="glass-panel" style={{
                                padding: '1.25rem',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                <div style={{
                                    padding: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '10px',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '6px' }}>
                                        "{item.scenario}"
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#a855f7' }}>
                                        � {item.response}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ - Collapsible */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1.5rem', color: '#94a3b8' }}>
                        Common Questions
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="glass-panel"
                                style={{
                                    padding: '1rem 1.25rem',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255,255,255,0.06)'
                                }}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#fff' }}>
                                        {faq.q}
                                    </span>
                                    {openFaq === i ? <ChevronUp size={18} color="#64748b" /> : <ChevronDown size={18} color="#64748b" />}
                                </div>
                                {openFaq === i && (
                                    <div style={{
                                        marginTop: '12px',
                                        paddingTop: '12px',
                                        borderTop: '1px solid rgba(255,255,255,0.1)',
                                        fontSize: '0.9rem',
                                        color: '#94a3b8',
                                        lineHeight: '1.6'
                                    }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div style={{
                    textAlign: 'center',
                    padding: '3rem 2rem',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
                    borderRadius: '24px',
                    border: '1px solid rgba(139,92,246,0.2)'
                }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Stop forgetting the things that matter.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Be the first to try Trunq.
                    </p>
                    <button className="cta-button" style={{
                        background: '#fff',
                        color: '#000',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Join the Waitlist <ArrowRight size={20} />
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        Join 847 others on the waitlist
                    </p>
                </div>

                {/* Footer */}
                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{ fontSize: '1rem', fontWeight: '700' }}>trunq.</div>
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        � {new Date().getFullYear()} Trunq
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageThree;

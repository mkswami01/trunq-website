import React, { useState, useEffect, useRef } from 'react';
import { Mic, Car, Monitor, Zap, ShoppingCart, Dumbbell, Sun, Home, Search, CheckSquare, Phone, Mail, Clock, AlertTriangle, CheckCircle2, ArrowLeft, MoreHorizontal, Play, Volume2, PauseCircle, BrainCircuit } from 'lucide-react';

const Demo = () => {
    const [screen, setScreen] = useState("home"); // home | listening | response | action | confirmation
    const [transcript, setTranscript] = useState("");
    const [time, setTime] = useState("9:41");
    const [cycle, setCycle] = useState(0); // 0 = Retrieval (Driving), 1 = Capture (Flowers), 2 = Pattern (Avoidance)
    const [isPaused, setIsPaused] = useState(false);

    // Refs for loop control
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        const runLoop = async () => {
            while (isMounted.current) {
                if (isPaused) {
                    await wait(500);
                    continue;
                }

                // --- STATE 1: Home Screen ---
                setScreen("home");
                setTranscript("");
                // Time varies by scenario
                if (cycle === 0) setTime("9:41");
                else if (cycle === 1) setTime("6:15");
                else setTime("8:30");

                await wait(4000);

                // --- STATE 2: Listening (User Taps Mic) ---
                setScreen("listening");
                await wait(1500);

                if (cycle === 0) {
                    // --- SCENARIO A: RETRIEVAL (Driving) ---
                    const text1 = "I'm driving to work";
                    await typeText(text1, setTranscript);
                    await wait(1500);

                    // Conversational Response
                    setScreen("response");
                    await wait(7000);

                    // User Action (Voice)
                    setScreen("listening_action");
                    setTranscript("");
                    await wait(800);

                    const text2 = "Call mom";
                    await typeText(text2, setTranscript);
                    await wait(1500);

                    // Execution
                    setScreen("execution");
                    await wait(4000);

                } else if (cycle === 1) {
                    // --- SCENARIO B: CAPTURE (Flowers) ---
                    const text1 = "Remind me to pick up flowers for anniversary";
                    await typeText(text1, setTranscript);
                    await wait(1500);

                    // Processing/Confirmation
                    setScreen("confirmation");
                    await wait(6000);

                } else {
                    // --- SCENARIO C: PATTERN (Avoidance) ---
                    const text1 = "What am I avoiding?";
                    await typeText(text1, setTranscript);
                    await wait(1500);

                    // Pattern Response
                    setScreen("pattern_response");
                    await wait(8000);
                }

                // Back to Home & Toggle Cycle (0 -> 1 -> 2 -> 0)
                setScreen("home");
                setCycle(prev => (prev + 1) % 3);
                await wait(1000);
            }
        }

        runLoop();

        return () => { isMounted.current = false; };
    }, [cycle, isPaused]);

    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    // Organic Typing Helper
    const typeText = async (text, setFn) => {
        for (let i = 0; i <= text.length; i++) {
            if (!isMounted.current) return;
            setFn(text.slice(0, i));
            // Random delay between 30ms and 80ms for human-like typing
            await wait(Math.random() * 50 + 30);
        }
    };

    return (
        <section className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <div className="glass-panel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '4rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    position: 'relative'
                }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
                    <span className="gradient-text">Capture thoughts. Ask context.</span>
                </h2>

                {/* Pause Indicator */}
                <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    opacity: isPaused ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: 'none'
                }}>
                    <PauseCircle size={16} color="#fff" />
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Demo Paused</span>
                </div>

                {/* Phone Frame */}
                <div style={{
                    width: '370px',
                    height: '760px',
                    background: '#000',
                    borderRadius: '56px',
                    boxShadow: '0 0 0 12px #0f172a, 0 30px 60px -15px rgba(0,0,0,0.8)',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                    {/* Screen Content */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #020617, #1e1b4b)', // Deep Blue/Indigo
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>

                        {/* Aurora Effect (Animated) */}
                        <div style={{
                            position: 'absolute', top: '-20%', left: '-20%', width: '140%', height: '60%',
                            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                            filter: 'blur(50px)', zIndex: 0,
                            animation: 'aurora-move 10s infinite alternate ease-in-out'
                        }}></div>
                        <div style={{
                            position: 'absolute', bottom: '-10%', right: '-20%', width: '140%', height: '50%',
                            background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)',
                            filter: 'blur(50px)', zIndex: 0,
                            animation: 'aurora-move 8s infinite alternate-reverse ease-in-out'
                        }}></div>

                        {/* Notch */}
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '34px', background: '#0f172a', borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px', zIndex: 20 }}></div>

                        {/* Status Bar */}
                        <div style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '600', color: '#fff', paddingTop: '18px', position: 'relative', zIndex: 10 }}>
                            <span>{time}</span>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '18px', height: '11px', border: '1.5px solid #fff', borderRadius: '3px' }}></div>
                            </div>
                        </div>

                        {/* --- SCREEN: HOME --- */}
                        {screen === 'home' && (
                            <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', animation: 'fadeEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative', zIndex: 10 }}>
                                <div style={{ marginTop: '20px', marginBottom: '32px' }}>
                                    <div style={{ fontSize: '15px', color: '#94a3b8', fontWeight: '500', letterSpacing: '-0.01em' }}>{cycle === 0 ? "Good Morning," : "Good Evening,"}</div>
                                    <div style={{ fontSize: '34px', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em' }}>Manoj</div>
                                </div>

                                {/* Context Grid (Shortcuts) */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: 'auto' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                        <Car size={28} color="#3b82f6" />
                                        <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Driving</div>
                                        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '-4px' }}>Calls, podcasts</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                        <Monitor size={28} color="#22c55e" />
                                        <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Desk</div>
                                        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '-4px' }}>Tasks, emails</div>
                                    </div>
                                </div>

                                {/* Prominent Mic Button - AI Gradient */}
                                <div style={{
                                    position: 'absolute', bottom: '120px', left: '50%', transform: 'translateX(-50%)',
                                    width: '96px', height: '96px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #3b82f6, #ec4899)', // Blue to Pink
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 12px 50px rgba(236, 72, 153, 0.4)',
                                    zIndex: 40, cursor: 'pointer',
                                    border: '4px solid rgba(255,255,255,0.1)',
                                    transition: 'transform 0.2s',
                                }}
                                    onMouseDown={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(0.95)'}
                                    onMouseUp={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1)'}
                                >
                                    <Mic size={44} color="#fff" />
                                </div>
                                <div style={{ position: 'absolute', bottom: '80px', left: '0', right: '0', textAlign: 'center', color: '#94a3b8', fontSize: '15px', fontWeight: '500' }}>Capture thought or Ask context</div>
                            </div>
                        )}

                        {/* --- SCREEN: LISTENING --- */}
                        {(screen === 'listening' || screen === 'listening_action') && (
                            <div style={{
                                position: 'absolute', inset: 0, background: 'rgba(2, 6, 23, 0.95)', backdropFilter: 'blur(20px)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px',
                                animation: 'fadeEnter 0.4s', zIndex: 50
                            }}>
                                {/* Active Listening Orb - Glowing AI Feel */}
                                <div style={{
                                    width: '120px', height: '120px', borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(236,72,153,0.8) 100%)',
                                    filter: 'blur(20px)', opacity: 0.6,
                                    animation: 'pulse-orb 2s infinite ease-in-out',
                                    marginBottom: '40px'
                                }}></div>

                                <div style={{ fontSize: '32px', fontWeight: '700', color: '#fff', textAlign: 'center', lineHeight: '1.3', letterSpacing: '-0.02em', position: 'relative', zIndex: 10, marginTop: '-160px' }}>
                                    "{transcript}"
                                </div>

                                <div style={{ marginTop: '60px', color: '#64748b', fontSize: '16px', fontWeight: '500' }}>Listening...</div>
                            </div>
                        )}

                        {/* --- SCREEN: CONFIRMATION (CAPTURE FLOW) --- */}
                        {screen === 'confirmation' && (
                            <div style={{
                                position: 'absolute', inset: 0, background: '#020617',
                                display: 'flex', flexDirection: 'column', padding: '30px',
                                animation: 'fadeEnter 0.4s', zIndex: 50
                            }}>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{
                                        width: '88px', height: '88px', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #22c55e, #10b981)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px',
                                        boxShadow: '0 0 50px rgba(34, 197, 94, 0.5)',
                                        animation: 'scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}>
                                        <CheckCircle2 size={44} color="#fff" />
                                    </div>
                                    <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '32px', letterSpacing: '-0.02em', animation: 'slideUp 0.5s 0.1s backwards' }}>Got it! Saved to Errand.</div>

                                    <div style={{ width: '100%', background: 'rgba(255,255,255,0.04)', borderRadius: '36px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)', animation: 'slideUp 0.5s 0.2s backwards' }}>
                                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Pick up flowers</div>

                                        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
                                            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', padding: '8px 14px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}>📂 Errand</span>
                                            <span style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '8px 14px', borderRadius: '12px', fontSize: '13px', fontWeight: '600' }}>⏱️ ~10 min</span>
                                        </div>

                                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                                            <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>📍 Why here?</div>
                                            <div style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.6' }}>Best context: On your way home</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px', animation: 'fadeIn 0.5s 0.4s backwards' }}>
                                    <button style={{ flex: 1, padding: '20px', borderRadius: '24px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', fontSize: '17px', fontWeight: '600' }}>Edit</button>
                                    <button style={{ flex: 1, padding: '20px', borderRadius: '24px', background: '#fff', color: '#000', border: 'none', fontSize: '17px', fontWeight: '700' }}>Done</button>
                                </div>
                            </div>
                        )}

                        {/* --- SCREEN: PATTERN RESPONSE (NEW) --- */}
                        {screen === 'pattern_response' && (
                            <div style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column', animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative', zIndex: 10 }}>
                                {/* Header */}
                                <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <BrainCircuit size={20} color="#a855f7" />
                                    <div style={{ fontSize: '15px', fontWeight: '600', color: '#94a3b8' }}>Pattern Analysis</div>
                                </div>

                                {/* Conversational Card */}
                                <div style={{ padding: '0 24px', marginBottom: '24px' }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))',
                                        padding: '24px', borderRadius: '28px', border: '1px solid rgba(168,85,247,0.3)',
                                        display: 'flex', gap: '16px', alignItems: 'flex-start',
                                        boxShadow: '0 10px 30px -10px rgba(168, 85, 247, 0.2)'
                                    }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(168,85,247,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Volume2 size={22} color="#d8b4fe" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '18px', color: '#fff', lineHeight: '1.5', marginBottom: '8px', fontWeight: '500' }}>
                                                "I noticed a few things you've been putting off. Want to tackle one?"
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Avoidance List */}
                                <div style={{ flex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px',
                                        fontSize: '12px', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px', letterSpacing: '0.5px',
                                        animation: 'fadeIn 0.5s 0.2s backwards'
                                    }}>
                                        <AlertTriangle size={12} color="#fca5a5" /> AVOIDANCE DETECTED
                                    </div>

                                    <div style={{
                                        background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                                        animation: 'slideUp 0.5s 0.3s backwards'
                                    }}>
                                        <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Garage cleanup</div>
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                            <span style={{ fontSize: '12px', color: '#fca5a5', background: 'rgba(239, 68, 68, 0.15)', padding: '4px 10px', borderRadius: '8px' }}>Mentioned 4x</span>
                                            <span style={{ fontSize: '12px', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '8px' }}>Since Oct 1</span>
                                        </div>
                                    </div>

                                    <div style={{
                                        background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                                        animation: 'slideUp 0.5s 0.4s backwards'
                                    }}>
                                        <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Dentist appointment</div>
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                            <span style={{ fontSize: '12px', color: '#fca5a5', background: 'rgba(239, 68, 68, 0.15)', padding: '4px 10px', borderRadius: '8px' }}>Rescheduled 2x</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- SCREEN: RESPONSE (RETRIEVAL FLOW) --- */}
                        {screen === 'response' && (
                            <div style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column', animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative', zIndex: 10 }}>
                                {/* Header */}
                                <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Car size={20} color="#3b82f6" />
                                    <div style={{ fontSize: '15px', fontWeight: '600', color: '#94a3b8' }}>You said: "I'm driving"</div>
                                </div>

                                {/* Conversational Card */}
                                <div style={{ padding: '0 24px', marginBottom: '28px' }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                                        padding: '28px', borderRadius: '28px', border: '1px solid rgba(139,92,246,0.3)',
                                        display: 'flex', gap: '16px', alignItems: 'flex-start',
                                        boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.2)'
                                    }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Volume2 size={22} color="#c4b5fd" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '18px', color: '#fff', lineHeight: '1.5', marginBottom: '8px', fontWeight: '500' }}>
                                                "Good morning! You have 3 calls to make. Mom is overdue 3 days - it's about her birthday party. Want me to call her?"
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sectioned Results */}
                                <div style={{ flex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '28px', overflowY: 'auto' }}>

                                    {/* CALLS Section */}
                                    <div>
                                        <div style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px',
                                            fontSize: '12px', fontWeight: '700', color: '#cbd5e1', marginBottom: '16px', letterSpacing: '0.5px',
                                            animation: 'fadeIn 0.5s 0.2s backwards'
                                        }}>
                                            <Phone size={12} /> CALLS
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            <div style={{
                                                background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                animation: 'slideUp 0.5s 0.3s backwards'
                                            }}>
                                                <div>
                                                    <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Call mom</div>
                                                    <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Birthday party planning</div>
                                                </div>
                                                <div style={{ fontSize: '13px', color: '#fca5a5', fontWeight: '700', background: 'rgba(239, 68, 68, 0.2)', padding: '6px 12px', borderRadius: '12px' }}>3 days</div>
                                            </div>
                                            <div style={{
                                                background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                animation: 'slideUp 0.5s 0.4s backwards'
                                            }}>
                                                <div>
                                                    <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>Call plumber</div>
                                                    <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Kitchen leak</div>
                                                </div>
                                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={16} color="#fff" /></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* LISTEN Section */}
                                    <div>
                                        <div style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px',
                                            fontSize: '12px', fontWeight: '700', color: '#cbd5e1', marginBottom: '16px', letterSpacing: '0.5px',
                                            animation: 'fadeIn 0.5s 0.5s backwards'
                                        }}>
                                            <Play size={12} /> LISTEN
                                        </div>
                                        <div style={{
                                            background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            animation: 'slideUp 0.5s 0.6s backwards'
                                        }}>
                                            <div>
                                                <div style={{ fontSize: '17px', fontWeight: '600', color: '#fff' }}>How I Built This</div>
                                                <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Mike recommended</div>
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#cbd5e1', background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '12px' }}>45min</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mic for Follow-up */}
                                <div style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '12px', animation: 'fadeIn 0.5s 0.8s backwards' }}>
                                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(239, 68, 68, 0.5)' }}>
                                        <Mic size={32} color="#fff" />
                                    </div>
                                    <div style={{ fontSize: '15px', color: '#94a3b8', fontWeight: '500' }}>"Call mom" or ask more</div>
                                </div>
                            </div>
                        )}

                        {/* --- SCREEN: EXECUTION --- */}
                        {screen === 'execution' && (
                            <div style={{
                                position: 'absolute', inset: 0, background: '#020617',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px',
                                animation: 'fadeEnter 0.4s', zIndex: 50
                            }}>
                                <div style={{
                                    width: '140px', height: '140px', borderRadius: '50%',
                                    background: 'rgba(34, 197, 94, 0.1)', border: '2px solid #22c55e',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px',
                                    boxShadow: '0 0 60px rgba(34, 197, 94, 0.2)',
                                    animation: 'scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}>
                                    <Phone size={56} color="#22c55e" />
                                </div>
                                <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '16px', animation: 'slideUp 0.5s 0.1s backwards' }}>Calling Mom...</div>
                                <div style={{ fontSize: '18px', color: '#94a3b8', animation: 'slideUp 0.5s 0.2s backwards' }}>Mobile • 00:00</div>
                            </div>
                        )}

                        {/* Bottom Navigation (Only on Home) */}
                        {screen === 'home' && (
                            <div style={{
                                height: '100px',
                                background: 'rgba(2, 6, 23, 0.9)',
                                backdropFilter: 'blur(30px)',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                paddingBottom: '24px',
                                zIndex: 40,
                                position: 'absolute', bottom: 0, left: 0, right: 0
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#fff' }}>
                                    <Home size={28} strokeWidth={3} />
                                    <span style={{ fontSize: '11px', fontWeight: '600' }}>Home</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                                    <Search size={28} />
                                    <span style={{ fontSize: '11px', fontWeight: '600' }}>Ask</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                                    <CheckSquare size={28} />
                                    <span style={{ fontSize: '11px', fontWeight: '600' }}>Tasks</span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <style>{`
            @keyframes fadeEnter { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
            @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            @keyframes scaleUp { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            @keyframes pulse-orb {
                0% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.2); opacity: 0.8; }
                100% { transform: scale(1); opacity: 0.6; }
            }
            @keyframes aurora-move {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(20px, -20px) scale(1.1); }
            }
        `}</style>
            </div>
        </section>
    );
};

export default Demo;

import React, { useState, useEffect, useRef } from 'react';
import {
    Mic, Car, Home, Search, CheckSquare, Phone, Play, Volume2,
    PauseCircle, AlertTriangle, CheckCircle2, BrainCircuit,
    ShowerHead, Footprints, ChefHat, Sofa, ArrowRight, Activity
} from 'lucide-react';

const PageTwo = () => {
    const [activeScenario, setActiveScenario] = useState(0); // 0=capture, 1=retrieval, 2=patterns, 3=habits
    const [phase, setPhase] = useState(0);
    const [screen, setScreen] = useState("idle");
    const [transcript, setTranscript] = useState("");
    const [isPaused, setIsPaused] = useState(false);
    const scenarioRef = useRef(0); // Track current scenario for async checks

    const scenarios = [
        { id: 0, label: "Capture", icon: <Mic size={16} />, color: "#3b82f6" },
        { id: 1, label: "Retrieve", icon: <Car size={16} />, color: "#22c55e" },
        { id: 2, label: "Patterns", icon: <BrainCircuit size={16} />, color: "#a855f7" },
        { id: 3, label: "Habits", icon: <Activity size={16} />, color: "#f59e0b" }
    ];

    const captureEvents = [
        { time: "7am", icon: <ShowerHead size={20} />, context: "Shower", thought: "Call mom about her birthday", color: "#3b82f6" },
        { time: "8am", icon: <Footprints size={20} />, context: "Walking", thought: "Sarah's podcast - How I Built This", color: "#22c55e" },
        { time: "6pm", icon: <ChefHat size={20} />, context: "Cooking", thought: "Clean the garage this weekend", color: "#f59e0b" },
        { time: "9pm", icon: <Sofa size={20} />, context: "Couch", thought: "Gift for Mike's birthday", color: "#ec4899" }
    ];

    // Update ref when scenario changes
    useEffect(() => {
        scenarioRef.current = activeScenario;
    }, [activeScenario]);

    useEffect(() => {
        let cancelled = false;
        const currentScenario = activeScenario;

        const wait = (ms) => new Promise(r => setTimeout(r, ms));

        const typeText = async (text, setFn) => {
            for (let i = 0; i <= text.length; i++) {
                if (cancelled || scenarioRef.current !== currentScenario) return;
                setFn(text.slice(0, i));
                await wait(40);
            }
        };

        const runScenario = async () => {
            setPhase(0);
            setScreen("idle");
            setTranscript("");

            await wait(500);
            if (cancelled || scenarioRef.current !== currentScenario) return;

            if (currentScenario === 0) {
                // CAPTURE FLOW
                for (let i = 0; i < captureEvents.length; i++) {
                    if (cancelled || scenarioRef.current !== currentScenario) return;

                    setPhase(i);
                    setScreen("listening");
                    await wait(800);
                    if (cancelled || scenarioRef.current !== currentScenario) return;

                    await typeText(captureEvents[i].thought, setTranscript);
                    await wait(800);
                    if (cancelled || scenarioRef.current !== currentScenario) return;

                    setScreen("confirmed");
                    await wait(1500);
                }
                if (cancelled || scenarioRef.current !== currentScenario) return;
                setScreen("done");
                await wait(2000);
                if (!cancelled && scenarioRef.current === currentScenario) runScenario();

            } else if (currentScenario === 1) {
                // RETRIEVAL FLOW
                setScreen("home");
                await wait(1500);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("listening");
                await wait(600);
                await typeText("I'm driving to work", setTranscript);
                await wait(1200);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("response");
                await wait(4000);
                if (!cancelled && scenarioRef.current === currentScenario) runScenario();

            } else if (currentScenario === 2) {
                // PATTERN/AVOIDANCE FLOW
                setScreen("home");
                await wait(1500);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("listening");
                await wait(600);
                await typeText("What am I avoiding?", setTranscript);
                await wait(1200);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("avoidance");
                await wait(4000);
                if (!cancelled && scenarioRef.current === currentScenario) runScenario();

            } else if (currentScenario === 3) {
                // HABITS FLOW
                setScreen("home");
                await wait(1500);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("listening");
                await wait(600);
                await typeText("Am I consistent with workouts?", setTranscript);
                await wait(1200);
                if (cancelled || scenarioRef.current !== currentScenario) return;

                setScreen("habits");
                await wait(4000);
                if (!cancelled && scenarioRef.current === currentScenario) runScenario();
            }
        };

        runScenario();

        return () => { cancelled = true; };
    }, [activeScenario]);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6rem 2rem',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                        <span className="gradient-text">See it in action</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Click a scenario to explore
                    </p>
                </div>

                {/* Scenario Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {scenarios.map(s => (
                        <button
                            key={s.id}
                            onClick={() => setActiveScenario(s.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 20px',
                                borderRadius: '100px',
                                border: activeScenario === s.id ? `2px solid ${s.color}` : '2px solid rgba(255,255,255,0.1)',
                                background: activeScenario === s.id ? `${s.color}20` : 'rgba(255,255,255,0.05)',
                                color: activeScenario === s.id ? '#fff' : '#94a3b8',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {s.icon} {s.label}
                        </button>
                    ))}
                </div>

                {/* Demo Container */}
                <div
                    className="glass-panel"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                        padding: '2rem',
                        display: 'flex',
                        gap: '3rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        position: 'relative'
                    }}
                >
                    {isPaused && (
                        <div style={{
                            position: 'absolute', top: '12px', right: '12px',
                            background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '20px',
                            display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#fff'
                        }}>
                            <PauseCircle size={12} /> Paused
                        </div>
                    )}

                    {/* Left: Context Panel */}
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '350px' }}>
                        {activeScenario === 0 && <CaptureContext events={captureEvents} phase={phase} />}
                        {activeScenario === 1 && <RetrievalContext />}
                        {activeScenario === 2 && <PatternContext />}
                        {activeScenario === 3 && <HabitContext />}
                    </div>

                    {/* Right: Phone */}
                    <div style={{ flexShrink: 0 }}>
                        <PhoneFrame
                            screen={screen}
                            transcript={transcript}
                            scenario={activeScenario}
                            phase={phase}
                            events={captureEvents}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Context Panels
const CaptureContext = ({ events, phase }) => (
    <div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
            =� Throughout Your Day
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {events.map((e, i) => (
                <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    opacity: i <= phase ? 1 : 0.3,
                    transform: i === phase ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.3s'
                }}>
                    <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: i === phase ? `${e.color}30` : 'rgba(255,255,255,0.05)',
                        border: `2px solid ${i <= phase ? e.color : 'rgba(255,255,255,0.1)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: e.color
                    }}>
                        {e.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{e.time} � {e.context}</div>
                        <div style={{ fontSize: '0.9rem', color: i <= phase ? '#fff' : '#64748b' }}>"{e.thought}"</div>
                    </div>
                    {i < phase && <span style={{ color: '#22c55e', fontSize: '0.8rem' }}></span>}
                </div>
            ))}
        </div>
    </div>
);

const RetrievalContext = () => (
    <div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
            =� Context-Based Retrieval
        </div>
        <div style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Say your context, get exactly what you need.
        </div>
        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '1rem', borderRadius: '12px', borderLeft: '3px solid #22c55e' }}>
            <div style={{ fontSize: '0.85rem', color: '#22c55e', fontWeight: '600', marginBottom: '4px' }}>Example:</div>
            <div style={{ color: '#fff' }}>"I'm driving" � Calls, podcasts</div>
            <div style={{ color: '#fff' }}>"At my desk" � Emails, tasks</div>
            <div style={{ color: '#fff' }}>"At Target" � Shopping list</div>
        </div>
    </div>
);

const PatternContext = () => (
    <div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
            >� Pattern Recognition
        </div>
        <div style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Trunq notices what you've been putting off.
        </div>
        <div style={{ background: 'rgba(168,85,247,0.1)', padding: '1rem', borderRadius: '12px', borderLeft: '3px solid #a855f7' }}>
            <div style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: '600', marginBottom: '4px' }}>Ask:</div>
            <div style={{ color: '#fff' }}>"What am I avoiding?"</div>
            <div style={{ color: '#fff' }}>"What have I mentioned but never done?"</div>
        </div>
    </div>
);

const HabitContext = () => (
    <div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
            =� Habit Tracking
        </div>
        <div style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Trunq learns your routines and keeps you accountable.
        </div>
        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '1rem', borderRadius: '12px', borderLeft: '3px solid #f59e0b' }}>
            <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: '600', marginBottom: '4px' }}>Ask:</div>
            <div style={{ color: '#fff' }}>"Am I consistent with my workouts?"</div>
            <div style={{ color: '#fff' }}>"Do I have any patterns?"</div>
        </div>
    </div>
);

// Phone Component
const PhoneFrame = ({ screen, transcript, scenario, phase, events }) => (
    <div style={{
        width: '260px',
        height: '520px',
        background: '#000',
        borderRadius: '40px',
        boxShadow: '0 0 0 6px #1a1a2e, 0 20px 40px -10px rgba(0,0,0,0.8)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
        <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, #020617, #1e1b4b)',
            position: 'relative'
        }}>
            {/* Notch */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '90px', height: '24px', background: '#0f172a',
                borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 20
            }} />

            {/* Status Bar */}
            <div style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', color: '#fff', paddingTop: '12px' }}>
                <span>9:41</span>
                <div style={{ width: '14px', height: '8px', border: '1px solid #fff', borderRadius: '2px' }} />
            </div>

            {/* Screens */}
            {screen === "idle" && <PhoneIdle />}
            {screen === "home" && <PhoneHome />}
            {screen === "listening" && <PhoneListening transcript={transcript} />}
            {screen === "confirmed" && scenario === 0 && <PhoneConfirmed event={events[phase]} />}
            {screen === "done" && <PhoneDone />}
            {screen === "response" && <PhoneResponse />}
            {screen === "avoidance" && <PhoneAvoidance />}
            {screen === "habits" && <PhoneHabits />}
        </div>
    </div>
);

const PhoneIdle = () => (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
        <Mic size={32} />
    </div>
);

const PhoneHome = () => (
    <div style={{ padding: '16px', animation: 'fadeIn 0.3s' }}>
        <div style={{ marginTop: '12px', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Good Morning,</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>Manoj</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Car size={18} color="#3b82f6" />
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff', marginTop: '6px' }}>Driving</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Search size={18} color="#22c55e" />
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff', marginTop: '6px' }}>Ask</div>
            </div>
        </div>
        <div style={{
            position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
            width: '60px', height: '60px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(236,72,153,0.4)'
        }}>
            <Mic size={28} color="#fff" />
        </div>
    </div>
);

const PhoneListening = ({ transcript }) => (
    <div style={{
        position: 'absolute', inset: 0, background: 'rgba(2,6,23,0.95)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '20px', zIndex: 50, animation: 'fadeIn 0.3s'
    }}>
        <div style={{
            width: '60px', height: '60px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(236,72,153,0.8) 100%)',
            filter: 'blur(12px)', opacity: 0.6, animation: 'pulse 2s infinite', marginBottom: '24px'
        }} />
        <div style={{ fontSize: '16px', fontWeight: '600', color: '#fff', textAlign: 'center', marginTop: '-80px', minHeight: '48px' }}>
            "{transcript}"
        </div>
        <div style={{ marginTop: '32px', color: '#64748b', fontSize: '12px' }}>Listening...</div>
    </div>
);

const PhoneConfirmed = ({ event }) => (
    <div style={{
        position: 'absolute', inset: 0, background: '#020617',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '20px', zIndex: 50, animation: 'scaleIn 0.3s'
    }}>
        <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #22c55e, #10b981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
            boxShadow: '0 0 30px rgba(34,197,94,0.4)'
        }}>
            <CheckCircle2 size={28} color="#fff" />
        </div>
        <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Got it!</div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px', width: '90%', textAlign: 'center' }}>
            <div style={{ color: '#fff', fontSize: '12px' }}>{event?.thought}</div>
            <div style={{ display: 'inline-block', background: event?.color, padding: '3px 8px', borderRadius: '6px', fontSize: '10px', color: '#fff', fontWeight: '600', marginTop: '8px' }}>
                {event?.context}
            </div>
        </div>
    </div>
);

const PhoneDone = () => (
    <div style={{
        position: 'absolute', inset: 0, background: '#020617',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '20px', zIndex: 50, animation: 'fadeIn 0.3s'
    }}>
        <div style={{ color: '#22c55e', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}> All captured!</div>
        <div style={{ color: '#64748b', fontSize: '12px' }}>4 thoughts saved</div>
    </div>
);

const PhoneResponse = () => (
    <div style={{ padding: '14px', animation: 'fadeIn 0.3s', overflowY: 'auto', height: 'calc(100% - 40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <Car size={14} color="#3b82f6" />
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>You said: "I'm driving"</span>
        </div>
        <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
            padding: '12px', borderRadius: '16px', marginBottom: '12px'
        }}>
            <div style={{ fontSize: '12px', color: '#fff', lineHeight: '1.5' }}>
                "You have 3 calls. <span style={{ color: '#fca5a5' }}>Mom is overdue 3 days</span>  birthday party."
            </div>
        </div>
        <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
            <Phone size={9} /> Calls
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', marginBottom: '6px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Call mom</div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Birthday party</div>
        </div>
        <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginTop: '10px', marginBottom: '6px' }}>
            <Play size={9} /> Listen
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>How I Built This</div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Sarah recommended</div>
        </div>
    </div>
);

const PhoneAvoidance = () => (
    <div style={{ padding: '14px', animation: 'fadeIn 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <BrainCircuit size={14} color="#a855f7" />
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>Pattern Analysis</span>
        </div>
        <div style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))',
            padding: '12px', borderRadius: '16px', marginBottom: '12px'
        }}>
            <div style={{ fontSize: '12px', color: '#fff', lineHeight: '1.5' }}>
                "I noticed a few things you've been putting off."
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', color: '#fca5a5', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
            <AlertTriangle size={10} /> Avoidance Detected
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', marginBottom: '6px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Garage cleanup</div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                <span style={{ fontSize: '9px', color: '#fca5a5', background: 'rgba(239,68,68,0.15)', padding: '2px 6px', borderRadius: '4px' }}>Mentioned 4x</span>
            </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Dentist appointment</div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                <span style={{ fontSize: '9px', color: '#fca5a5', background: 'rgba(239,68,68,0.15)', padding: '2px 6px', borderRadius: '4px' }}>Rescheduled 2x</span>
            </div>
        </div>
    </div>
);

const PhoneHabits = () => (
    <div style={{ padding: '14px', animation: 'fadeIn 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <Activity size={14} color="#f59e0b" />
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>Habit Analysis</span>
        </div>
        <div style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,179,8,0.15))',
            padding: '12px', borderRadius: '16px', marginBottom: '12px'
        }}>
            <div style={{ fontSize: '12px', color: '#fff', lineHeight: '1.5' }}>
                "You've been pretty consistent! Here's what I found."
            </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', marginBottom: '6px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Pull-ups</div>
            <div style={{ fontSize: '10px', color: '#22c55e', marginTop: '4px' }}>Every Tue & Thu for 6 weeks </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff' }}>Squats</div>
            <div style={{ fontSize: '10px', color: '#f59e0b', marginTop: '4px' }}>Every Thursday � Last: 3 days ago</div>
        </div>
    </div>
);

export default PageTwo;

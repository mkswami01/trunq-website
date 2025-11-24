# Trunq Marketing Website - UX/Copy Feedback

**Date:** November 2024
**Reviewed by:** Claude Code
**Status:** Post-implementation review (Updated)

---

## Executive Summary

**Great progress!** The website has been significantly improved with all major sections now implemented. The value proposition is now clear and the page flow makes sense.

### What's Been Implemented ✅

| Section | Status | Notes |
|---------|--------|-------|
| Hero headline | ✅ Done | "Capture your thoughts anywhere. Get them back when they matter." |
| Subheadline | ✅ Done | Removed "dump", now clear and conversational |
| Demo (3 scenarios) | ✅ Done | Driving, Capture, Pattern Recognition flows |
| Demo pause on hover | ✅ Done | Shows "Demo Paused" indicator |
| How It Works | ✅ Done | 3-step: Capture → Understand → Retrieve |
| Pattern Recognition | ✅ Done | "Trunq Learns You" with avoidance, habits, timing |
| Use Cases | ✅ Done | "You know that moment..." with 4 scenarios |
| Features (hierarchy) | ✅ Done | 3 primary, 4 secondary |
| FAQ | ✅ Done | 4 questions |
| Waitlist counter | ✅ Done | "Join 847 others on the waitlist" |
| Final CTA | ✅ Done | "Stop forgetting the things that matter." |

---

## Remaining Improvements

### 1. Pattern Recognition - Add More Examples (High Value)

**Current:** 3 pattern types (Avoidance, Recurring Habits, Time Patterns)

**Missing the powerful habit examples you mentioned:**

| Pattern Type | Example to Add |
|--------------|----------------|
| **Workout Patterns** | "You do squats every Thursday" → Auto-remind on Thursdays |
| **Weekly Routines** | "You do pull-ups every Tuesday and Thursday" → Shows consistency tracking |
| **Streak Tracking** | "You've done pull-ups 8 weeks in a row" → Motivation |
| **People Patterns** | "You call mom every Sunday" → Relationship maintenance |

**Recommendation:** Add a 4th card for "Workout/Habit Tracking" or expand the existing "Recurring Habits" card with fitness-specific examples.

### 2. Demo - Add Habit/Fitness Example (Medium Value)

The demo shows:
1. Context retrieval ("I'm driving")
2. Capture ("Remind me to pick up flowers")
3. Pattern query ("What am I avoiding?")

**Consider adding a 4th scenario:**
4. Habit insight ("Am I consistent with my workouts?")
   → "You've done pull-ups every Tuesday and Thursday for 6 weeks. Keep going!"

### 3. Use Cases - Add Fitness Scenario (Low Effort)

**Current scenarios:** Driving, Target, 10-minute break, Forgetting something

**Add a 5th scenario:**
```
🏋️ "Have I been consistent with my workouts?"
   → "You do squats every Thursday. Last session was 3 days ago. Today is Thursday—time for squats?"
```

### 4. Pattern Recognition - Show Intelligence Depth

The current examples are good but could show MORE intelligence:

**Current:**
> "You do pull-ups every Tuesday and Thursday"

**Could be:**
> "You do pull-ups every Tuesday and Thursday. You've maintained this for 6 weeks. Last week you missed Thursday—want to make it up today?"

This shows:
- Pattern detection ✓
- Streak tracking ✓
- Exception awareness ✓
- Proactive suggestion ✓

### 5. THE BIG PICTURE IS MISSING (Critical)

**Problem:** The demo shows individual interactions but NOT how Trunq fits into someone's life. Users don't understand:
- Where did all this data COME FROM?
- When did I tell Trunq about mom's birthday?
- How does it know Mike recommended a podcast?
- When do I actually USE this throughout my day?

**The demo shows HOW Trunq works, but not WHY someone would need it.**

#### The Missing Narrative: "A Day With Trunq"

```
┌─────────────────────────────────────────────────────────────────┐
│                     A DAY WITH TRUNQ                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🚿 SHOWER (7am)                                                │
│     "Oh! I need to call mom about her birthday"                 │
│     → Trunq captures it                                         │
│                                                                 │
│  🚶 WALKING TO CAR (8am)                                        │
│     "Sarah mentioned a good podcast... How I Built This"        │
│     → Trunq captures it                                         │
│                                                                 │
│  🍳 COOKING DINNER (6pm)                                        │
│     "I should clean the garage this weekend"                    │
│     → Trunq captures it (again... 4th time)                     │
│                                                                 │
│  ════════════════════════════════════════════════════════════   │
│                                                                 │
│  🚗 DRIVING NEXT DAY (9am)                                      │
│     "Hey Trunq, I'm driving"                                    │
│     → "You have 3 calls. Mom is overdue 3 days.                 │
│        Also, Mike's podcast recommendation - 45 min."           │
│                                                                 │
│  😰 SUNDAY EVENING                                              │
│     "What am I avoiding?"                                       │
│     → "You've mentioned the garage 4 times but never did it"    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Recommended: Add "Life Timeline" Section

Show the **journey** before or instead of the phone demo:

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   Your thoughts happen everywhere.                               │
│   Trunq catches them all.                                        │
│                                                                  │
│   ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐      │
│   │ 🚿  │ ──→ │ 🚶  │ ──→ │ 🍳  │ ──→ │ 🛋️  │ ──→ │ 🚗  │      │
│   │     │     │     │     │     │     │     │     │     │      │
│   │Shower│     │Walk │     │Cook │     │Couch│     │Drive│      │
│   └─────┘     └─────┘     └─────┘     └─────┘     └─────┘      │
│   "call mom"  "podcast"   "garage"    "gift"     "I'm driving" │
│                                                                  │
│                              ↓                                   │
│                                                                  │
│                    ┌─────────────────┐                          │
│                    │   TRUNQ KNOWS   │                          │
│                    │   EVERYTHING    │                          │
│                    └─────────────────┘                          │
│                              ↓                                   │
│                                                                  │
│    "You have 3 calls. Mom is overdue. Here's that podcast."     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Implementation Options:**

| Option | Description | Effort |
|--------|-------------|--------|
| **A) LifeTimeline component** | New section showing capture-throughout-day story BEFORE the phone demo | Medium |
| **B) Redesign Demo** | Show accumulation + retrieval in one narrative inside the phone | High |
| **C) Both** | Timeline section + improved demo | High |

**Recommended copy for this section:**

```
Headline: "Your thoughts happen everywhere."
Subhead: "In the shower. Walking to your car. Cooking dinner.
          Trunq catches them all—and brings them back when you need them."
```

---

### 6. Minor Polish Items

| Item | Suggestion |
|------|------------|
| **Demo step indicator** | Add visible progress dots (1/3, 2/3, 3/3) below the phone |
| **Pattern section CTA** | Add "Ask 'What am I avoiding?' to try it" micro-CTA |
| **Mobile responsiveness** | Test on mobile - min-width on UseCases might break |
| **Waitlist count** | Make dynamic (or remove if static feels fake) |

---

## Updated Priority Matrix

| Priority | Item | Status |
|----------|------|--------|
| ✅ Done | Hero headline/subheadline | Implemented |
| ✅ Done | How It Works section | Implemented |
| ✅ Done | Pattern Recognition section | Implemented |
| ✅ Done | Use Cases section | Implemented |
| ✅ Done | Demo 3 scenarios | Implemented |
| ✅ Done | FAQ | Implemented |
| ✅ Done | Waitlist counter | Implemented |
| ✅ Done | Add workout/habit pattern examples | Implemented |
| ✅ Done | Add fitness use case scenario | Implemented |
| 🔴 **P0** | **Add "Life Timeline" section - THE BIG PICTURE** | **CRITICAL - Not implemented** |
| 🟡 P1 | Demo progress indicator | Nice to have |
| 🟢 P2 | Mobile responsiveness check | Nice to have |

### Why "Life Timeline" is P0

The current website shows **what Trunq does** but not **how it fits into your life**.

Users see:
- "I'm driving" → calls

Users DON'T understand:
- That you capture thoughts in the shower, while walking, while cooking
- That Trunq ACCUMULATES your random thoughts over time
- That the magic is in the RETRIEVAL of scattered thoughts

**Without this, users think Trunq is just another voice-to-task app.**

---

## Current Site Structure

| Section | Current Content |
|---------|-----------------|
| **Hero** | "Tell me where you are. I'll tell you what to do." |
| **Demo** | Interactive phone mockup (Capture + Retrieval flows) |
| **Bridge** | "From Task Manager to Life Assistant" |
| **Features** | 7 feature cards (Driving, Desk, Voice, etc.) |
| **CTA** | "Ready to regain your focus?" + email signup |
| **Footer** | Basic links |

---

## Critical Issues (Must Fix)

### 1. Hero Headline Doesn't Explain What Trunq IS

**Current:**
```
"Tell me where you are. I'll tell you what to do."
```

**Problem:** This is poetic but confusing. A first-time visitor doesn't know:
- Is this a GPS app?
- A fitness tracker?
- A task manager?
- An AI assistant?

**Recommended alternatives:**

**Option A (Feature-focused):**
```
Capture your thoughts anywhere.
Get them back when they matter.
```

**Option B (Context-focused):**
```
Your second brain that knows when you're driving,
at your desk, or running errands.
```

**Option C (Most direct):**
```
Voice notes that surface at the right moment.
```

**Option D (Problem-focused):**
```
Stop forgetting the things that matter.
```

---

### 2. Missing "How It Works" Section

Users don't understand the flow. The demo is animated but fast — users may miss it.

**Recommended 3-step section:**

```
┌─────────────────────────────────────────────────────────────┐
│                       HOW IT WORKS                          │
├───────────────┬───────────────┬──────────────────────────────┤
│      1️⃣       │      2️⃣       │              3️⃣              │
│   CAPTURE     │    TRUNQ      │           RETRIEVE           │
│   (You talk)  │  (Understands)│        (You ask)             │
├───────────────┼───────────────┼──────────────────────────────┤
│ "Remind me to │  Extracts:    │ "I'm driving"                │
│  call mom     │  - Task       │      ↓                       │
│  about the    │  - Person     │ "You have 3 calls.           │
│  birthday     │  - Context    │  Mom is overdue 3 days..."   │
│  party"       │  - Urgency    │                              │
└───────────────┴───────────────┴──────────────────────────────┘
```

**Copy for each step:**

1. **Capture** — "Just talk. Say anything on your mind."
2. **Trunq Understands** — "AI extracts tasks, people, deadlines, and context automatically."
3. **Retrieve** — "Ask 'I'm driving' or 'What am I avoiding?' and get exactly what you need."

---

### 3. Missing Use Cases / Relatable Scenarios

Users need to see themselves in the product.

**Recommended "You Know That Moment..." section:**

```
┌────────────────────────────────────────────────────────────────┐
│                    YOU KNOW THAT MOMENT...                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ 🚗 "I'm driving and I KNOW there was something I needed to do" │
│    → Trunq: "Call mom - 3 days overdue. Want me to call?"     │
│                                                                │
│ 🛒 "I'm at Target... what did I need again?"                   │
│    → Trunq: "You mentioned batteries, gift for Sarah, returns" │
│                                                                │
│ 💻 "I have 10 minutes before my next meeting"                  │
│    → Trunq: "Quick wins: Reply to 2 emails, pay a bill"       │
│                                                                │
│ 😰 "Why do I feel like I'm forgetting something important?"    │
│    → Trunq: "You've mentioned the garage 3 times this month"  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 4. Features Section Lacks Hierarchy

**Problem:** All 7 cards have the same visual weight. Users get overwhelmed.

**Current features (all equal):**
1. Driving Mode
2. Desk Mode
3. Voice Capture
4. Smart Urgency
5. Contextual Retrieval
6. Temporal Search
7. Pattern Recognition

**Recommended hierarchy:**

**PRIMARY (larger, hero features):**
- **Voice Capture** → "Just talk. AI extracts everything."
- **Contextual Retrieval** → "Say 'I'm driving' → get calls/podcasts"
- **Pattern Recognition** → "What am I avoiding?"

**SECONDARY (smaller, supporting features):**
- Driving Mode
- Desk Mode
- Smart Urgency
- Temporal Search

---

### 5. Subheadline Uses Negative Language

**Current:**
```
"The place to dump all your thoughts. We'll fetch them when you need them—
whether you're running, driving, or at the grocery store."
```

**Problems:**
- "Dump" sounds messy/negative
- "Fetch" is too technical (sounds like a dog command)

**Recommended:**
```
"Capture everything on your mind. Get it back when it matters—
whether you're driving, cooking, or at the store."
```

Or more conversational:
```
"Talk to Trunq like you'd talk to a friend. It remembers everything
and reminds you at the perfect moment."
```

---

## Medium Priority Issues

### 6. Demo Animation Moves Too Fast

**Current timing:**
- Home screen: 3 seconds
- Listening: ~2 seconds
- Response: 5 seconds
- Execution: 3 seconds

**Problems:**
- Users can't absorb what's happening
- Easy to miss the key moments
- No way to pause or replay

**Recommendations:**
- Add "pause on hover" functionality
- Add step indicators (1/4, 2/4, etc.)
- Slow down the response screen to 7-8 seconds
- Add a "Replay Demo" button

---

### 7. Context Buttons Not Explained

The demo shows "Driving" and "Desk" buttons, but it's unclear what these do.

**Recommendation:** Add subtle explanatory text:

```
🚗 Driving
   Calls, podcasts, things to think about

💻 Desk
   Quick tasks, emails, focused work
```

---

### 8. CTA Section Could Be Stronger

**Current:**
```
"Ready to regain your focus?"
```

**Alternatives:**

```
Option A: "Stop forgetting the things that matter."

Option B: "Be the first to try Trunq."

Option C: "Join the waitlist. Never forget again."

Option D: "Your brain, upgraded. Join the waitlist."
```

---

### 9. No Social Proof

**Missing elements:**
- Testimonials
- Waitlist counter ("Join 847 others")
- Logos/endorsements
- Founder story

**Minimum viable addition:**
```
"Join 847 others on the waitlist"
```

(Update this number dynamically as signups grow)

---

### 10. Missing FAQ Section

**Common questions users will have:**

| Question | Suggested Answer |
|----------|------------------|
| "How is this different from Apple Reminders?" | "Reminders store tasks. Trunq understands context. Say 'I'm driving' and it knows to surface calls, not emails." |
| "Does it work offline?" | "Voice capture works offline. Sync happens when you're back online." |
| "Is my data private?" | "Your data is encrypted and never sold. You own your thoughts." |
| "What happens to voice recordings?" | "Transcribed instantly, then deleted. We only store the text." |

---

## Critical Issue: Pattern Recognition is BURIED

### The Hidden Killer Feature

Pattern Recognition is mentioned as just another feature card, but it's actually **Trunq's biggest differentiator**. No other app does this.

**What Pattern Recognition can do:**

| Pattern Type | Example | User Value |
|--------------|---------|------------|
| **Avoidance Detection** | "You've mentioned cleaning the garage 4 times but never did it" | Surfaces procrastination |
| **Recurring Habits** | "You do pull-ups every Tuesday and Thursday" | Learns your routine |
| **Time Patterns** | "You usually think about work stuff on Sunday evenings" | Predicts needs |
| **People Patterns** | "You call mom every weekend" | Relationship maintenance |
| **Seasonal Patterns** | "Every November you mention holiday shopping" | Anticipates annual tasks |

**This should be a HERO feature, not buried in a grid.**

### Recommended: Dedicated "Trunq Learns You" Section

```
┌────────────────────────────────────────────────────────────────┐
│                      TRUNQ LEARNS YOU                          │
│                                                                │
│  The more you use it, the smarter it gets.                    │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  📊 PATTERN: "You do pull-ups every Tuesday and Thursday"     │
│     → Trunq reminds you on those days automatically           │
│                                                                │
│  😰 AVOIDANCE: "You've mentioned the garage 4 times"          │
│     → Ask "What am I avoiding?" to surface buried tasks       │
│                                                                │
│  🔄 HABITS: "You call mom every Sunday"                       │
│     → "It's Sunday - want to call mom?"                       │
│                                                                │
│  ⏰ TIMING: "You usually plan meals on Friday evenings"       │
│     → Surfaces meal-related notes on Friday                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Demo Should Show Pattern Recognition

**Current demo scenarios:**
1. Retrieval (Driving) → "I'm driving" → Shows calls
2. Capture (Flowers) → "Remind me..." → Confirms save

**Missing scenario (add as 3rd cycle):**
3. Pattern Query → "What am I avoiding?" → Shows procrastinated items

**Example flow:**
```
User: "What have I been putting off?"

Trunq: "I noticed a few things:

        🏠 Garage cleanup
           Mentioned 4 times (Oct 1, 15, Nov 1, 10)
           Never scheduled

        🦷 Dentist appointment
           Rescheduled twice

        📝 Blog post idea
           Captured 3 weeks ago, untouched

        Want to tackle one now?"
```

### Voice Queries That Show Intelligence

**Add these to the demo or use cases:**

| Query | What It Shows |
|-------|---------------|
| "What am I avoiding?" | Procrastination detection |
| "Do I have any patterns?" | Self-awareness |
| "What do I usually do on Thursdays?" | Routine learning |
| "When did I last call mom?" | Memory tracking |
| "What have I mentioned but never done?" | Commitment tracking |
| "Am I consistent with my workouts?" | Habit analysis |

---

## What's Working Well

| Element | Why It Works |
|---------|--------------|
| **Interactive demo** | Shows the product in action, not just screenshots |
| **Dark theme + gradients** | Premium, modern feel |
| **Voice-first iconography** | Mic button is prominent and clear |
| **Conversational AI response** | Shows personality, not just a list |
| **"Capture thought or Ask context"** | Explains the dual-mode nature |
| **Phone mockup design** | Feels like a real app, builds trust |
| **Smooth animations** | Professional, polished feel |

---

## Recommended Page Structure (Revised)

```
1. HERO
   - Clear headline (what it does)
   - Subheadline (who it's for)
   - CTA buttons (Join Waitlist, Watch Demo)

2. DEMO (Interactive)
   - Slower animation with 3 scenarios:
     a) Context retrieval ("I'm driving")
     b) Capture ("Remind me to...")
     c) Pattern query ("What am I avoiding?")  ← NEW
   - Pause on hover
   - Step indicators

3. HOW IT WORKS (NEW)
   - 3 steps: Capture → Understand → Retrieve
   - Simple icons and copy

4. TRUNQ LEARNS YOU (NEW - Pattern Recognition)
   - "The more you use it, the smarter it gets"
   - Avoidance detection examples
   - Habit/routine learning examples
   - This is the WOW section

5. USE CASES (NEW)
   - "You know that moment..."
   - 4 relatable scenarios with Trunq responses

6. FEATURES
   - 3 primary features (large)
   - 4 secondary features (smaller grid)

7. SOCIAL PROOF (NEW)
   - Waitlist counter
   - Optional: early testimonials

8. FAQ (NEW)
   - 4-6 common questions

9. FINAL CTA
   - Strong headline
   - Email signup
   - Waitlist counter

10. FOOTER
    - Links, copyright
```

---

## Priority Matrix

| Priority | Change | Impact | Effort |
|----------|--------|--------|--------|
| 🔴 P0 | Rewrite hero headline | High | Low |
| 🔴 P0 | Rewrite subheadline | High | Low |
| 🔴 P0 | Add "Trunq Learns You" section (Pattern Recognition) | **Very High** | Medium |
| 🔴 P0 | Add "How It Works" section | High | Medium |
| 🟡 P1 | Add 3rd demo scenario ("What am I avoiding?") | High | Medium |
| 🟡 P1 | Add "Use Cases" section | High | Medium |
| 🟡 P1 | Slow down demo animation | Medium | Low |
| 🟡 P1 | Add waitlist counter | Medium | Low |
| 🟡 P1 | Reorganize features (hierarchy) | Medium | Medium |
| 🟢 P2 | Add FAQ section | Low | Low |
| 🟢 P2 | Add pause/replay to demo | Low | Medium |
| 🟢 P2 | Add founder story | Low | Low |

---

## Quick Wins (< 1 hour each)

1. **Change hero headline** to one of the recommended options
2. **Rewrite subheadline** to remove "dump" and "fetch"
3. **Add waitlist counter** below signup form
4. **Slow down demo** (increase timeouts by 50%)

---

## Copy Bank (Ready to Use)

### Headlines
- "Capture your thoughts anywhere. Get them back when they matter."
- "Your second brain that knows when you're driving, at your desk, or running errands."
- "Voice notes that surface at the right moment."
- "Stop forgetting the things that matter."
- "Talk to remember. Ask to recall."

### Subheadlines
- "Capture everything on your mind. Get it back when it matters."
- "Talk to Trunq like a friend. It remembers everything and reminds you at the perfect moment."
- "The AI assistant that knows what you can do right now—based on where you are and how much time you have."

### CTAs
- "Join the Waitlist"
- "Be the First to Try Trunq"
- "Get Early Access"
- "Never Forget Again →"

### Social Proof
- "Join X others on the waitlist"
- "Trusted by busy people who hate forgetting things"

---

## Files to Modify

| File | Changes Needed |
|------|----------------|
| `src/components/Hero.jsx` | Update headline, subheadline |
| `src/components/Features.jsx` | Add hierarchy, reorder |
| `src/components/Demo.jsx` | Slow down timing, add 3rd scenario (pattern query), add pause |
| `src/App.jsx` | Add HowItWorks, PatternRecognition, UseCases, FAQ sections |
| (new) `src/components/HowItWorks.jsx` | Create 3-step section |
| (new) `src/components/PatternRecognition.jsx` | **"Trunq Learns You" section - the WOW moment** |
| (new) `src/components/UseCases.jsx` | Create scenarios section |
| (new) `src/components/FAQ.jsx` | Create FAQ section |

---

## Next Steps

1. Review and approve headline/subheadline changes
2. Implement quick wins (copy changes)
3. Build new sections (HowItWorks, UseCases)
4. Test with 3-5 users for comprehension
5. Iterate based on feedback

---

*Feedback generated by Claude Code based on UX best practices and the Trunq product vision.*

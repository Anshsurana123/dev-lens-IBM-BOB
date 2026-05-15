# DevLens Demo Guide - IBM Bob Hackathon 2026

## Overview
This guide provides a complete script for demonstrating DevLens in your hackathon submission video. Follow this step-by-step to create a compelling 3-5 minute demo that showcases both features effectively.

**Target Time**: 3-5 minutes  
**Goal**: Show judges that DevLens is a real, useful tool they'd want to use

---

## Pre-Demo Setup Checklist

Before recording, ensure:
- [ ] DevLens is installed in a sample project
- [ ] You have staged git changes ready for `/review-pr` demo
- [ ] You have a sample repository ready for `/explain-repo` demo
- [ ] Your screen recording software is ready
- [ ] Your microphone is working and clear
- [ ] You've practiced the demo at least once
- [ ] Bob IDE is open and ready

---

## Demo Script

### Opening (15 seconds)

**[Screen: Show your face or DevLens logo]**

**Say:**
> "Hi! I'm [Your Name], and I built DevLens for the IBM Bob Hackathon 2026. DevLens turns code review and onboarding from hours into minutes using IBM Bob's powerful repository context awareness. Let me show you how it works."

**[Transition to screen recording]**

---

### Part 1: The Problem (20 seconds)

**[Screen: Show a typical code review scenario - maybe a GitHub PR with comments]**

**Say:**
> "Every developer faces these problems: waiting hours for code reviews, worrying about bugs they missed, and spending weeks understanding new codebases. DevLens solves all three with two simple slash commands."

**[Transition to Bob IDE]**

---

### Part 2: Feature 1 - /review-pr Demo (90 seconds)

#### Setup (10 seconds)

**[Screen: Show Bob IDE with a project open]**

**Say:**
> "Let's say I just added user authentication to this Express app. I've staged my changes, and now I want a senior-level code review before creating my PR."

**[Show terminal with `git status` showing staged files]**

#### Run the Command (5 seconds)

**[Screen: Type in Bob chat]**

**Type:** `/review-pr`

**Say:**
> "I just type slash review-pr, and watch what happens."

#### Show Bob Working (10 seconds)

**[Screen: Show Bob analyzing - you can speed this up in editing]**

**Say:**
> "Bob is now reading my git diff, analyzing the full repository context, understanding my code architecture, and generating a comprehensive review."

#### Show the Output (45 seconds)

**[Screen: Show the generated report in output/pr-review-report.md]**

**Say:**
> "And here's what I get: A complete PR review that includes..."

**[Scroll through the report, highlighting key sections]**

**Point out:**
1. **Suggested PR Title**: 
   > "A suggested PR title in conventional commits format"

2. **Risk Score**:
   > "A risk score of 6 out of 10 with detailed justification"

3. **Critical Issues**:
   > "It found a SQL injection vulnerability I completely missed - look at this specific line number and the exact fix"

4. **Missing Tests**:
   > "It identified 4 functions that need tests and even wrote the actual test cases I can copy and paste"

5. **Pre-Merge Checklist**:
   > "And a customized checklist based on my specific changes"

**Say:**
> "This is not generic AI feedback - Bob read my entire codebase, understood my architecture, and gave me specific, actionable advice with real file names and line numbers."

#### Transition (5 seconds)

**Say:**
> "But DevLens doesn't just review code - it also helps you understand any codebase instantly."

---

### Part 3: Feature 2 - /explain-repo Demo (90 seconds)

#### Setup (10 seconds)

**[Screen: Navigate to a different project or folder]**

**Say:**
> "Let's say I just joined a new team and need to understand this codebase. Normally, this would take days or weeks. With DevLens, it takes 30 seconds."

#### Run the Command (5 seconds)

**[Screen: Type in Bob chat]**

**Type:** `/explain-repo`

**Say:**
> "I type slash explain-repo."

#### Show Bob Working (10 seconds)

**[Screen: Show Bob analyzing]**

**Say:**
> "Bob is now scanning the entire repository, reading the most important files, detecting the tech stack, and mapping out the architecture."

#### Show the Output (55 seconds)

**[Screen: Show the generated Repo Bible in output/repo-explainer.md]**

**Say:**
> "And here's the Repo Bible - a complete guide to this codebase."

**[Scroll through, highlighting key sections]**

**Point out:**

1. **Plain English Summary**:
   > "First, a plain English summary of what this project does - no jargon, just clear explanation"

2. **Tech Stack**:
   > "Complete tech stack detection - it found Node.js, Express, React, PostgreSQL, and Redis"

3. **Architecture Diagram**:
   > "An ASCII architecture diagram showing how all the pieces connect"

4. **Directory Structure**:
   > "Every folder and file explained - what it does and why it matters"

5. **Top 5 Files**:
   > "The top 5 most important files with explanations of why they're critical"

6. **Complexity Warnings**:
   > "Complexity warnings for tricky areas - it's telling me the authentication middleware is complex and here's why"

7. **Getting Started Guide**:
   > "A complete getting started guide with exact commands to run"

8. **Suggested First Issues**:
   > "And even suggested first issues a new contributor could work on"

**Say:**
> "A new developer could read this in 30 minutes and be productive immediately. No more weeks of onboarding."

#### Transition (5 seconds)

**Say:**
> "So that's DevLens - instant code reviews and instant documentation."

---

### Part 4: Why It Works (30 seconds)

**[Screen: Show the .bob folder structure or a diagram]**

**Say:**
> "DevLens works because it leverages IBM Bob's unique capabilities. Unlike ChatGPT or Copilot, Bob has full access to your entire repository. DevLens uses custom slash commands and a Senior Reviewer mode to guide Bob to think like a senior developer with 10 years of experience."

**[Show a quick glimpse of the Senior Reviewer mode file or command file]**

**Say:**
> "Every review is specific to YOUR codebase, not generic advice. Bob understands your architecture, your patterns, and your dependencies."

---

### Part 5: Impact & Closing (20 seconds)

**[Screen: Show DevLens logo or your face]**

**Say:**
> "DevLens embodies the hackathon theme: Turn idea into impact faster. It turns the idea of better code into the impact of shipped code - by giving you instant reviews, catching bugs early, and onboarding developers in minutes instead of weeks."

**[Pause]**

**Say:**
> "DevLens is built entirely on IBM Bob with no external dependencies. It's ready to use today. Thank you!"

**[End screen with DevLens logo and GitHub link]**

---

## Alternative Demo Flows

### If You Have More Time (5-7 minutes)

Add these sections:

1. **Show the Senior Reviewer Mode** (30 seconds)
   - Open `.bob/modes/senior-reviewer.md`
   - Explain how it transforms Bob's personality
   - Show examples of the review standards

2. **Compare with Generic AI** (30 seconds)
   - Show what ChatGPT would say (generic)
   - Show what DevLens says (specific)
   - Highlight the difference

3. **Show Real-World Use Case** (60 seconds)
   - Use DevLens on a real open-source project
   - Show how it finds actual issues
   - Demonstrate the value

### If You Have Less Time (2-3 minutes)

Focus on one feature:

**Option A: Just /review-pr**
- Show the problem (slow reviews, missed bugs)
- Demo /review-pr
- Show the specific, actionable output
- Explain why it works (Bob's context awareness)

**Option B: Just /explain-repo**
- Show the problem (slow onboarding)
- Demo /explain-repo
- Show the comprehensive documentation
- Explain the impact (30-minute onboarding)

---

## Recording Tips

### Technical Setup

1. **Screen Resolution**: 1920x1080 (Full HD)
2. **Frame Rate**: 30 fps minimum
3. **Audio**: Use a good microphone, minimize background noise
4. **Lighting**: If showing your face, ensure good lighting
5. **Screen Recording Software**: OBS Studio, Loom, or similar

### Presentation Tips

1. **Speak Clearly**: Enunciate, don't rush
2. **Show Enthusiasm**: You're excited about this tool!
3. **Use Pauses**: Give judges time to read important parts
4. **Highlight Key Points**: Use cursor or annotations to draw attention
5. **Practice**: Run through at least 2-3 times before final recording

### Editing Tips

1. **Speed Up Waiting**: When Bob is analyzing, speed up the video 2-4x
2. **Add Captions**: Helps judges who watch without sound
3. **Highlight Text**: Use zoom or highlights for important sections
4. **Add Transitions**: Smooth transitions between sections
5. **Background Music**: Subtle, non-distracting music (optional)

---

## What to Emphasize

### Key Selling Points

1. **Specific, Not Generic**
   - "Real file names, line numbers, function names"
   - "Not generic AI advice"

2. **Full Context**
   - "Bob reads your entire repository"
   - "Understands your architecture and patterns"

3. **Actionable**
   - "Copy-paste test cases"
   - "Exact fixes with code examples"

4. **Fast**
   - "Seconds, not hours"
   - "30-minute onboarding, not weeks"

5. **Built on Bob**
   - "No external dependencies"
   - "Leverages Bob's unique capabilities"

### What Judges Care About

1. **Does it work?** → Show it working live
2. **Is it useful?** → Explain real-world problems it solves
3. **Is it innovative?** → Highlight Bob's unique capabilities
4. **Can I use it?** → Show it's ready to use today
5. **Does it fit the theme?** → Emphasize "faster" throughout

---

## Common Mistakes to Avoid

1. ❌ **Don't spend too long on setup** - Jump right into the demo
2. ❌ **Don't read the entire output** - Highlight key sections
3. ❌ **Don't use technical jargon** - Keep it accessible
4. ❌ **Don't forget to show the problem** - Context matters
5. ❌ **Don't rush** - Speak clearly and give judges time to absorb
6. ❌ **Don't forget the impact** - Always tie back to real-world value

---

## Sample Opening Lines

Choose one that fits your style:

**Option 1 (Problem-Focused):**
> "Code reviews take hours. Onboarding takes weeks. DevLens makes both instant."

**Option 2 (Solution-Focused):**
> "DevLens gives you a senior developer on your team, available 24/7, powered by IBM Bob."

**Option 3 (Impact-Focused):**
> "What if you could ship code faster, with more confidence, and onboard developers in 30 minutes? That's DevLens."

**Option 4 (Direct):**
> "I built DevLens to solve three problems every developer faces: slow code reviews, missed bugs, and painful onboarding."

---

## Sample Closing Lines

**Option 1 (Call to Action):**
> "DevLens is open source and ready to use today. Check it out on GitHub and start shipping better code faster."

**Option 2 (Impact):**
> "DevLens turns the idea of better code into the impact of shipped code. Thank you."

**Option 3 (Vision):**
> "Imagine every developer having instant access to senior-level reviews and comprehensive documentation. That's the future DevLens is building."

**Option 4 (Simple):**
> "DevLens: Turn code review and onboarding from hours to minutes. Built on IBM Bob. Thank you."

---

## Post-Demo Checklist

After recording:

- [ ] Watch the entire video
- [ ] Check audio quality (no background noise, clear speech)
- [ ] Verify all key points were covered
- [ ] Ensure demo flows smoothly
- [ ] Add captions if needed
- [ ] Export in high quality (1080p, 30fps minimum)
- [ ] Test the video file plays correctly
- [ ] Upload to required platform
- [ ] Include GitHub link in description

---

## Backup Plans

### If Something Goes Wrong During Recording

**Plan A: Bob is slow**
- Speed up the video in editing
- Or pre-record Bob's analysis and show the result

**Plan B: Command doesn't work**
- Have a backup recording ready
- Or show the pre-generated output files

**Plan C: Technical issues**
- Have screenshots of key outputs ready
- Walk through the screenshots instead

---

## Questions Judges Might Ask

Be prepared to answer:

1. **"How is this different from ChatGPT?"**
   - Bob has full repository context
   - Specific, not generic feedback
   - Structured commands ensure consistency

2. **"Does it work with all languages?"**
   - Best with JavaScript, Python, Java, Go
   - Expanding to more languages

3. **"Can teams customize it?"**
   - Yes! Custom modes and commands
   - Can create company-specific review standards

4. **"What about large codebases?"**
   - Smart file filtering (top 30-40 files)
   - Hierarchical analysis for scale

5. **"Is it production-ready?"**
   - Yes! Works today with no setup
   - Just copy .bob folder to your project

---

## Final Tips

1. **Be Confident**: You built something awesome!
2. **Be Enthusiastic**: Your excitement is contagious
3. **Be Clear**: Judges should understand in 30 seconds
4. **Be Specific**: Show real examples, not hypotheticals
5. **Be Memorable**: Make them remember DevLens

**Good luck! You've got this! 🚀**

---

*Last Updated: 2026-05-15*
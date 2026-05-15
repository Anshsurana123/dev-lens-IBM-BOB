# 🎯 DevLens Demo Quick Reference Card

## ⏱️ 5-Minute Demo Timeline

| Time | Section | What to Show |
|------|---------|--------------|
| 0:00-0:30 | Intro | Landing page, features, problem statement |
| 0:30-1:30 | Code Analyzer | Security audit on buggy auth code |
| 1:30-2:30 | Repo Scanner | Scan Next.js repo, show Repo Bible |
| 2:30-3:30 | /review-pr | PR review with staged changes |
| 3:30-4:30 | /explain-repo | Generate onboarding docs |
| 4:30-5:00 | Bonus + Close | Quick showcase other commands |

---

## 🎬 Opening Line

> "DevLens is an AI-powered developer tool that turns ideas into impact faster. It gives you instant code reviews, security audits, and complete repository documentation - like having a senior developer on your team 24/7."

---

## 💻 Web Interface Demo

### Code to Paste (Security Audit)
```javascript
function loginUser(username, password) {
  const user = database.query("SELECT * FROM users WHERE username = '" + username + "'");
  if (user && user.password == password) {
    return { success: true, token: generateToken() };
  }
  return { success: false };
}
```

### GitHub Repo URL
```
https://github.com/vercel/next.js
```

### Key Points to Mention
- ✅ 6 analysis types (review, security, explain, test, performance, refactor)
- ✅ 10+ programming languages supported
- ✅ Real-time AI analysis with Google Gemini Pro
- ✅ Copy & download results as markdown
- ✅ 10 free daily uses

---

## 🤖 Slash Commands Demo

### Commands to Run
```bash
/review-pr          # PR review with risk score
/explain-repo       # Generate Repo Bible
/security-audit     # OWASP Top 10 scan
/test-coverage      # Find untested code
/generate-commit    # Auto-generate commit message
```

### Key Points to Mention
- ✅ Works in 8+ AI editors (Bob, Cursor, Copilot, Windsurf, etc.)
- ✅ Reads full repository context, not just snippets
- ✅ Gives specific file names, function names, line numbers
- ✅ Production-ready code examples you can copy-paste
- ✅ Saves hours of manual work

---

## 🎯 What Makes DevLens Different

| Feature | DevLens | Generic AI Tools |
|---------|---------|------------------|
| Context | Full repo context | Single file only |
| Output | Specific (file:line) | Generic suggestions |
| Code | Copy-paste ready | Pseudo-code |
| Integration | 8+ editors | Limited |
| Focus | Developer workflow | General purpose |

---

## 💡 Key Phrases to Use

### Problem Statement
- "Code reviews take hours"
- "New developers take weeks to onboard"
- "Security vulnerabilities slip through"
- "Documentation gets outdated"

### Solution Statement
- "DevLens automates all of this"
- "Instant, senior-level code reviews"
- "30-minute onboarding instead of 30 days"
- "Catches security issues before they ship"

### Impact Statement
- "Turns ideas into impact faster"
- "Like having a senior developer 24/7"
- "Production-ready, not generic AI fluff"
- "Built by developers, for developers"

---

## 🚨 Common Demo Mistakes to Avoid

❌ Don't say "AI" too much - focus on **developer productivity**
❌ Don't show generic examples - use **real, buggy code**
❌ Don't rush through results - **highlight specific insights**
❌ Don't forget to mention **cross-editor compatibility**
❌ Don't skip the **copy/download features**

✅ Do emphasize **time saved** (hours → seconds)
✅ Do show **before/after** comparisons
✅ Do mention **specific file names** in output
✅ Do highlight **production-ready code examples**
✅ Do showcase **multiple use cases**

---

## 📊 Stats to Mention

- **12 slash commands** for different workflows
- **6 analysis types** for code snippets
- **8+ AI editors** supported
- **10+ programming languages**
- **10 free daily uses** on web interface
- **Seconds** to analyze vs **hours** manually

---

## 🎥 Camera & Screen Tips

### Screen Layout
```
┌─────────────────────────────────┐
│  Browser (Web Interface)        │
│  - localhost:3000               │
│  - Full screen, no distractions │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  Bob IDE (Slash Commands)       │
│  - Clean workspace              │
│  - Command palette visible      │
└─────────────────────────────────┘
```

### What to Show
- ✅ Cursor movements (smooth, deliberate)
- ✅ Typing (not too fast)
- ✅ Results (scroll slowly, highlight key parts)
- ✅ Features (copy, download buttons)

### What to Hide
- ❌ Personal information
- ❌ API keys
- ❌ Unrelated browser tabs
- ❌ Desktop clutter

---

## 🎤 Voice Script Snippets

### Intro (10 seconds)
"Hi! I'm demoing DevLens - an AI-powered developer tool for the IBM Bob Hackathon. It helps developers write better code faster by automating code reviews, security audits, and documentation."

### Web Interface (30 seconds)
"Let me show you the web interface. I'll paste some buggy authentication code and run a security audit. [Paste code] Notice how DevLens catches the SQL injection, weak password comparison, and provides secure code examples you can copy-paste immediately."

### Repo Scanner (30 seconds)
"Now let's analyze an entire GitHub repository. [Paste URL] DevLens generates a complete 'Repo Bible' - perfect for onboarding new developers. Look at this - tech stack, architecture, data flow, top 5 files, and even suggested first issues. This would take hours to document manually."

### Slash Commands (60 seconds)
"Now in Bob IDE, I've staged some changes. Let me run /review-pr. [Run command] See how specific this is? Actual file names, function names, risk score, missing tests, and even test code I can use. Now /explain-repo. [Run command] A new developer can read this in 30 minutes and understand the entire codebase."

### Closing (10 seconds)
"DevLens has 12 commands total, works in 8+ AI editors, and turns ideas into impact faster. Built for IBM Bob Hackathon 2026. Thank you!"

---

## 🔥 Backup Plans

### If Web Interface Fails
- Switch to slash commands only
- Show pre-recorded screenshots
- Explain features verbally with slides

### If Bob IDE Fails
- Use web interface only
- Show command documentation
- Demo with VS Code extension instead

### If Internet Fails
- Use localhost (Next.js app works offline)
- Show pre-generated results
- Walk through documentation

---

## ✅ Pre-Demo Checklist

**5 Minutes Before:**
- [ ] Close all unnecessary apps
- [ ] Clear browser cache/cookies
- [ ] Test screen recording
- [ ] Check audio levels
- [ ] Open all necessary tabs
- [ ] Stage git changes for /review-pr
- [ ] Copy sample code snippets
- [ ] Set timer for 5 minutes

**1 Minute Before:**
- [ ] Deep breath
- [ ] Smile
- [ ] Check camera angle
- [ ] Start recording
- [ ] Begin with confidence!

---

## 🎯 Judging Criteria Alignment

| Criteria | How DevLens Addresses It |
|----------|--------------------------|
| **Innovation** | First tool to combine PR reviews + repo docs + security in one |
| **Impact** | Saves hours daily, improves code quality, speeds onboarding |
| **Technical** | Next.js 14, TypeScript, Google AI, GitHub API, 8+ editor support |
| **Usability** | Simple slash commands, beautiful web UI, instant results |
| **Completeness** | 12 commands, 6 analysis types, full documentation, production-ready |

---

## 💪 Confidence Boosters

- ✅ You built something **actually useful**
- ✅ It **works** (build passed!)
- ✅ It's **production-ready** (not a prototype)
- ✅ It solves **real problems** (code reviews, onboarding, security)
- ✅ It's **well-documented** (README, guides, examples)

**You've got this! 🚀**

---

## 📞 Emergency Contacts

- **Technical Issues**: Check SETUP.md
- **Demo Questions**: Read DEMO-SCRIPT.md
- **Feature List**: See README.md
- **Installation**: Follow nextjs-app/README.md

---

## 🎊 Post-Demo Actions

- [ ] Upload video to submission platform
- [ ] Share GitHub repo link
- [ ] Include live demo URL (if deployed)
- [ ] Add screenshots to README
- [ ] Write submission description
- [ ] Submit before deadline!

**Good luck! Make it count! 🏆**
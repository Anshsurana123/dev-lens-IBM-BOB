# 🎬 DevLens Complete Demo Script
## IBM Bob Hackathon 2026 - "Turn Idea Into Impact Faster"

This script covers **EVERYTHING** - Web Interface + All Slash Commands

---

## 🎯 Demo Overview (5 minutes total)

### Part 1: Web Interface Demo (2 minutes)
- Code Snippet Analysis (6 types)
- GitHub Repository Scanner
- Real-time AI analysis

### Part 2: Slash Commands Demo (3 minutes)
- /review-pr - PR review automation
- /explain-repo - Repository documentation
- Bonus commands showcase

---

## 📱 PART 1: WEB INTERFACE DEMO

### Setup (Before Demo)
```bash
cd devlens/nextjs-app
npm run dev
# Open http://localhost:3000
```

### Demo Flow

#### 1️⃣ Landing Page (10 seconds)
**Say:** "DevLens is an AI-powered developer tool that helps you write better code faster. It has two main interfaces - a web app and Bob IDE slash commands."

**Show:**
- Hero section with stats (6 analysis types, 10+ languages, 10 free daily uses)
- Feature cards grid
- Tab navigation (Code Analyzer / Repo Scanner)

---

#### 2️⃣ Code Analyzer Demo (60 seconds)

**Say:** "Let's start with code analysis. I'll paste a buggy authentication function."

**Paste this code:**
```javascript
function loginUser(username, password) {
  const user = database.query("SELECT * FROM users WHERE username = '" + username + "'");
  if (user && user.password == password) {
    return { success: true, token: generateToken() };
  }
  return { success: false };
}
```

**Demo Steps:**
1. Select **"Security Audit"** analysis type
2. Choose **"JavaScript"** language
3. Click **"🚀 Analyze Code"**

**Say while analyzing:** "DevLens uses Google's Gemini Pro AI to analyze the code in real-time."

**Point out in results:**
- ❌ SQL Injection vulnerability detected
- ❌ Weak password comparison (== instead of hash)
- ❌ No input validation
- ✅ Secure code examples provided
- ✅ Specific remediation steps

**Quick showcase other analysis types:**
- Click **"Code Review"** - Shows best practices, code quality issues
- Click **"Performance"** - Shows optimization opportunities
- Click **"Generate Tests"** - Writes actual unit tests
- Click **"Refactor"** - Suggests cleaner code structure

**Say:** "All 6 analysis types give you production-ready insights, not generic AI fluff."

---

#### 3️⃣ GitHub Repository Scanner Demo (50 seconds)

**Say:** "Now let's analyze an entire GitHub repository."

**Click:** "🔍 Scan GitHub Repo" tab

**Paste this URL:**
```
https://github.com/vercel/next.js
```

**Demo Steps:**
1. Paste the URL
2. Click **"🔍 Scan Repository"**

**Say while scanning:** "DevLens fetches the repo structure, reads key files, and generates a complete 'Repository Bible' - perfect for onboarding new developers."

**Point out in results:**
- 📊 Repository stats (stars, forks, language)
- 🎯 Plain English project summary
- 🛠️ Complete tech stack detected
- 🏗️ Architecture breakdown
- 📁 Directory structure explained
- 🔄 Data flow visualization
- ⭐ Top 5 most important files
- ⚠️ Complexity warnings
- 🚀 Getting started guide
- 💡 Suggested first issues for new contributors

**Say:** "This would take hours to document manually. DevLens does it in seconds."

**Show features:**
- Click **"📋 Copy"** - Copies markdown to clipboard
- Click **"💾 Download"** - Downloads as .md file

---

## 💻 PART 2: SLASH COMMANDS DEMO (Bob IDE)

### Setup (Before Demo)
```bash
# Open Bob IDE
# Open a project with git changes staged
```

---

#### 4️⃣ /review-pr Command (90 seconds)

**Say:** "Now let's see DevLens in Bob IDE. I've made some changes to add user authentication."

**Show:** Git diff with staged changes

**Type in Bob:**
```
/review-pr
```

**Say while running:** "The /review-pr command reads your staged git changes AND the full repository context to give you a senior-level code review."

**Point out in output:**
```markdown
# 🔍 DevLens PR Review

## 📋 Suggested PR Title
feat(auth): add JWT-based user authentication system

## 📝 PR Description
Implements JWT authentication with bcrypt password hashing,
middleware for protected routes, and token refresh mechanism.

## ⚠️ Risk Score: 6/10
Medium risk due to security-critical changes. Requires thorough
testing of authentication flows and token validation.

## 📁 Files Changed
- src/auth/jwt.js - JWT token generation and validation
- src/middleware/auth.js - Authentication middleware
- src/routes/user.js - User login/register endpoints
- package.json - Added jsonwebtoken and bcrypt dependencies

## 🐛 Potential Issues
1. ❌ No rate limiting on login endpoint (brute force risk)
2. ❌ JWT secret hardcoded in code (should use env variable)
3. ⚠️ Token expiry set to 24h (consider shorter duration)
4. ⚠️ No refresh token mechanism for long sessions

## 🧪 Missing Tests
- authenticateUser() - needs tests for valid/invalid tokens
- hashPassword() - needs tests for bcrypt salt rounds
- loginEndpoint() - needs tests for failed login attempts

## ✅ Suggested Test Cases
[Shows actual test code you can copy-paste]

## 📋 Pre-Merge Checklist
- [ ] All tests passing
- [ ] JWT secret moved to environment variable
- [ ] Rate limiting added to auth endpoints
- [ ] Token refresh mechanism implemented
- [ ] Security audit completed
- [ ] Documentation updated
```

**Say:** "Notice how specific this is - actual file names, function names, and even test code you can use immediately."

---

#### 5️⃣ /explain-repo Command (90 seconds)

**Say:** "Let's say a new developer joins your team. Instead of spending days reading code, they can run /explain-repo."

**Type in Bob:**
```
/explain-repo
```

**Say while running:** "This scans your entire codebase and generates a comprehensive onboarding document."

**Point out in output:**
```markdown
# 📖 DevLens Repo Bible

## 🎯 What This Project Does
This is a REST API for a task management application built with
Node.js and Express. It provides endpoints for user authentication,
task CRUD operations, team collaboration, and real-time notifications
via WebSockets.

## 🛠️ Tech Stack
- **Backend**: Node.js 18, Express.js 4.18
- **Database**: PostgreSQL 15 with Prisma ORM
- **Authentication**: JWT with bcrypt
- **Real-time**: Socket.io for WebSocket connections
- **Testing**: Jest + Supertest
- **Deployment**: Docker + Docker Compose

## 🏗️ Architecture Overview
[ASCII diagram showing how components connect]

## 📁 Directory Structure Explained
- src/
  - routes/ - API endpoint definitions
  - controllers/ - Business logic handlers
  - models/ - Prisma database models
  - middleware/ - Auth, validation, error handling
  - services/ - External service integrations
  - utils/ - Helper functions
  - config/ - Configuration files

## 🔄 Data Flow
1. Client sends HTTP request to Express route
2. Middleware validates JWT token and request body
3. Controller calls service layer for business logic
4. Service interacts with Prisma ORM for database operations
5. Response formatted and sent back to client
6. WebSocket events emitted for real-time updates

## ⭐ Top 5 Most Important Files
1. src/server.js - Application entry point, sets up Express
2. src/routes/index.js - Main router, defines all API endpoints
3. prisma/schema.prisma - Database schema and relationships
4. src/middleware/auth.js - JWT authentication logic
5. src/services/taskService.js - Core task management logic

## ⚠️ Complexity Warnings
- WebSocket connection handling in src/socket/index.js is complex
- Database migrations in prisma/migrations/ need careful review
- Error handling middleware has nested try-catch blocks

## 🚀 Getting Started (New Contributor Guide)
[Step-by-step setup instructions]

## 💡 Suggested First Issues
1. Add input validation for task description length
2. Implement pagination for task list endpoint
3. Add unit tests for taskService.js
4. Create API documentation with Swagger
5. Add rate limiting to prevent API abuse
```

**Say:** "A new developer can read this in 30 minutes and understand the entire codebase. That's the power of AI-assisted documentation."

---

#### 6️⃣ Bonus Commands Showcase (30 seconds)

**Say:** "DevLens has 12 total slash commands. Let me quickly show you a few more."

**Type and show output:**

```
/security-audit
```
**Output:** Full security scan of your codebase with OWASP Top 10 checks

```
/test-coverage
```
**Output:** Identifies untested functions and generates test cases

```
/suggest-refactor
```
**Output:** Finds code smells and suggests SOLID principle improvements

```
/generate-commit
```
**Output:** Analyzes your staged changes and writes a perfect conventional commit message

```
/scan-dependencies
```
**Output:** Checks for outdated packages, security vulnerabilities, and license issues

**Say:** "All commands work across 8+ AI editors - Bob, Cursor, Copilot, Windsurf, Claude, and more."

---

## 🎯 CLOSING (10 seconds)

**Say:** "DevLens turns ideas into impact faster by automating code reviews, documentation, and security audits. It's like having a senior developer on your team 24/7."

**Show final screen:**
- Web interface with both tabs
- Bob IDE with command palette showing all /commands
- GitHub repo with README

**Say:** "Built for IBM Bob Hackathon 2026. Thank you!"

---

## 📊 Demo Checklist

### Before Demo
- [ ] Next.js app running on localhost:3000
- [ ] Bob IDE open with a project
- [ ] Git changes staged for /review-pr
- [ ] Sample code snippets ready to paste
- [ ] GitHub repo URL ready (vercel/next.js)
- [ ] Browser tabs organized
- [ ] Screen recording software ready

### During Demo
- [ ] Show landing page and features
- [ ] Demo code analyzer (security audit)
- [ ] Demo repo scanner (Next.js repo)
- [ ] Switch to Bob IDE
- [ ] Run /review-pr command
- [ ] Run /explain-repo command
- [ ] Quick showcase other commands
- [ ] Show cross-editor compatibility

### Key Points to Emphasize
- ✅ **Specific, not generic** - Real file names, function names, line numbers
- ✅ **Production-ready** - Copy-paste code examples, not just suggestions
- ✅ **Context-aware** - Understands your entire codebase, not just snippets
- ✅ **Multi-platform** - Works in 8+ AI editors
- ✅ **Time-saving** - Hours of work done in seconds
- ✅ **Developer-focused** - Built by developers, for developers

---

## 🎥 Recording Tips

### Camera Setup
- Record screen at 1920x1080
- Use picture-in-picture for face cam
- Keep cursor movements smooth
- Zoom in on important text

### Audio Tips
- Use external microphone
- Speak clearly and enthusiastically
- Pause between sections
- Add background music (low volume)

### Editing Tips
- Add text overlays for key features
- Speed up waiting times (2x)
- Add transitions between sections
- Include captions for accessibility

### Video Structure
```
0:00 - Intro + Problem Statement
0:30 - Web Interface Demo
2:30 - Slash Commands Demo
4:30 - Closing + Call to Action
5:00 - End Screen
```

---

## 🚀 Alternative Demo Scenarios

### Scenario A: Security Focus
1. Show vulnerable code (SQL injection, XSS)
2. Run /security-audit
3. Show how DevLens catches all issues
4. Run /review-pr with security fixes
5. Emphasize OWASP Top 10 coverage

### Scenario B: Onboarding Focus
1. Open unfamiliar open-source repo
2. Run /explain-repo
3. Show how quickly you understand the codebase
4. Run /suggest-refactor to find improvement areas
5. Emphasize time saved for new developers

### Scenario C: Code Quality Focus
1. Show messy, complex code
2. Run /review-pr
3. Run /suggest-refactor
4. Run /test-coverage
5. Show before/after comparison
6. Emphasize maintainability improvements

---

## 📝 Sample Code Snippets for Demo

### Buggy Authentication (Security Audit)
```javascript
function loginUser(username, password) {
  const user = database.query("SELECT * FROM users WHERE username = '" + username + "'");
  if (user && user.password == password) {
    return { success: true, token: generateToken() };
  }
  return { success: false };
}
```

### Complex Function (Refactor)
```javascript
function processOrder(order) {
  if (order.items.length > 0) {
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
      if (order.items[i].price > 0) {
        if (order.items[i].discount) {
          total += order.items[i].price - (order.items[i].price * order.items[i].discount);
        } else {
          total += order.items[i].price;
        }
      }
    }
    if (order.shippingCost) {
      total += order.shippingCost;
    }
    return total;
  }
  return 0;
}
```

### Performance Issue (Performance Analysis)
```javascript
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}
```

---

## 🎬 Final Checklist

- [ ] Demo script printed/accessible
- [ ] All code snippets ready
- [ ] Environment variables set
- [ ] Apps running and tested
- [ ] Screen recording tested
- [ ] Backup plan if internet fails
- [ ] Timer set for 5 minutes
- [ ] Enthusiasm level: 100%

**Good luck! You've got this! 🚀**
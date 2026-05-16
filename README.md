<div align="center">
  <img src="devlens_cover.png" alt="DevLens Cover Image" width="100%" style="border-radius: 10px;" />
  <br/><br/>
  
  <h1>🔍 DevLens</h1>
  <h3>Turn Code Review & Onboarding from Hours to Seconds</h3>

  <p>
    An AI-powered developer tool that provides instant, senior-level code reviews and comprehensive repository documentation. Built for the <strong>IBM Bob Hackathon 2026</strong>.
  </p>

  [![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-blue)](https://ibm.com/bob)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black)](https://nextjs.org/)
  [![Gemini 2.5 Flash](https://img.shields.io/badge/Powered%20by-Gemini%202.5%20Flash-orange)](https://ai.google.dev/)
  
  <br/>
  
  <strong>[🔴 Live Demo](https://dev-lens-ibm-d0yv1tbg0-anshsurana123s-projects.vercel.app/)</strong> •
  <strong>[📖 Documentation](https://github.com/Anshsurana123/dev-lens-IBM-BOB)</strong> •
  <strong>[🐛 Report Bug](https://github.com/Anshsurana123/dev-lens-IBM-BOB/issues)</strong>

</div>

---

## 🚀 Overview

**DevLens** is a multi-platform AI developer tool suite designed to completely eliminate code review bottlenecks and onboarding friction. By leveraging the blistering speed of **Gemini 2.5 Flash**, DevLens scans code snippets or entire GitHub repositories to provide actionable insights, security audits, and performance reviews in seconds.

Whether you prefer a **No-Install Web Application**, integrated **IDE Slash Commands**, or a **VS Code Extension**, DevLens meets you where you work.

---

## 🎯 The Problem

Modern software development teams face significant friction points:
- **😰 Pre-PR Anxiety**: Developers are unsure if their code meets standards before submitting.
- **⏰ Slow Reviews**: Waiting hours or days for a senior engineer to review a Pull Request.
- **📚 Onboarding Hell**: Spending weeks trying to understand a legacy or complex codebase.
- **🔍 Missing Edge Cases**: Shipping security vulnerabilities or performance bottlenecks due to human oversight.

**The result?** Slower shipping cycles, increased technical debt, and developer burnout.

---

## 💡 The Solution

DevLens acts as an automated, infinitely scalable Senior Engineer. It offers **6 core analysis modes** directly from a beautiful Next.js web interface:

1. 🔍 **Code Review**: Get senior-level PR reviews with risk scores, bug detection, and actionable feedback.
2. 🔒 **Security Audit**: OWASP Top 10 vulnerability scanning with specific fixes and severity ratings.
3. 📖 **Code Explanation**: Understand complex algorithms with plain English explanations.
4. 🧪 **Test Coverage**: Identify untested code and generate ready-to-use Jest/Pytest/JUnit templates.
5. ⚡ **Performance Check**: Find bottlenecks via Big O analysis and optimization suggestions.
6. 🔧 **Refactoring**: Detect code smells and apply SOLID design pattern improvements.

### 📦 Full Repository Scanning
DevLens isn't limited to snippets. Paste **ANY public GitHub repository URL**, and DevLens will automatically fetch the codebase tree, read the files, and generate a comprehensive "Repo Bible" to help you onboard in minutes.

---

## 🛠️ Tech Stack & Architecture

We built DevLens for maximum speed and scalability:

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend API**: Next.js Serverless Route Handlers
- **AI Engine**: Google Gemini 2.5 Flash (Optimized for low-latency reasoning)
- **Integrations**: GitHub REST API (for full repository tree parsing)
- **Deployment**: Vercel Edge Network
- **UI/UX**: Custom glassmorphism design system, React Markdown for rich formatting

---

## 🎬 How It Works (Web App)

1. **Visit the Live Site**: Head over to our Vercel deployment.
2. **Choose Your Mode**: Select either "Code Snippet" or "GitHub Repository".
3. **Paste & Analyze**: Paste your code or a GitHub URL (e.g., `https://github.com/vercel/next.js`).
4. **Get Insights**: Within seconds, Gemini 2.5 Flash processes the context and streams back a rich, markdown-formatted report.
5. **No Limits**: We've removed all daily caps—enjoy **Unlimited Analysis**.

---

## ⚡ Option 2: Slash Commands (AI Editors & IDEs)

Beyond the Web App, DevLens provides **12 powerful slash commands** that work natively inside your favorite AI editors (IBM Bob, Cursor, Copilot, Cody, Windsurf). Just type and go—no copy-pasting required!

### 🎯 12 Powerful Slash Commands

#### 1️⃣ `/review-pr` - Instant Senior-Level Code Review
Get a comprehensive PR review in seconds. Analyzes your staged changes with full context and delivers:
- ✅ Suggested PR title & description
- ⚠️ Risk score with detailed justification
- 🐛 Potential bugs and edge cases you missed
- 🧪 Missing test coverage

#### 2️⃣ `/explain-repo` - Instant Repository Documentation
Understand any codebase in under 30 minutes. Generates a "Repo Bible" containing:
- 🎯 Plain English summary and tech stack detection
- 🏗️ Architecture breakdown and Data flow visualization
- ⭐ Top 5 most important files and complexity warnings

#### 3️⃣ `/security-audit` - OWASP Security Scanner
Comprehensive security vulnerability detection covering OWASP Top 10:
- 🔒 SQL injection, XSS, CSRF detection
- 🔑 Hardcoded credentials and secrets scanning
- 🛡️ Authentication and authorization flaws

#### 4️⃣ `/test-coverage` - Test Coverage Analyzer
Identify untested code and generate test templates:
- 🎯 Critical paths that need testing
- ✍️ Ready-to-use test templates (Jest, Pytest, JUnit)
- 🧪 Edge cases and test scenarios

#### 5️⃣ `/performance-check` - Performance Analyzer
Find bottlenecks and optimization opportunities:
- ⚡ Algorithm complexity analysis (O(n²) detection)
- 🗄️ N+1 query problems and Memory leaks
- 🚀 Optimized code examples with benchmarks

#### 6️⃣ `/suggest-refactor` - AI-Powered Refactoring
Intelligent code quality improvements:
- 🔧 Code smell detection (long methods, god classes)
- 🎨 Design pattern suggestions and SOLID principle violations
- ♻️ Before/after refactoring examples

#### 7️⃣ `/explain-code` - Plain English Code Explainer
Translate complex code into simple explanations:
- 📖 Step-by-step logic breakdown
- 🎯 Real-world analogies
- 🔍 Algorithm and pattern identification

#### 8️⃣ `/generate-commit` - Smart Commit Messages
Generate meaningful conventional commit messages:
- 📝 Conventional commits format
- 🎯 Multiple message options
- 📊 Change analysis and impact assessment

#### 9️⃣ `/scan-dependencies` - Dependency Scanner
Detects outdated, vulnerable, or unused packages in your project manifest files to keep your repository secure.

#### 🔟 `/api-design` - API Architecture Review
Evaluates REST/GraphQL endpoints for best practices, RESTful standards, caching strategies, and security vulnerabilities.

#### 1️⃣1️⃣ `/database-review` - Database Schema Analysis
Analyzes SQL/NoSQL schemas to suggest proper indexing, normalize relations, and prevent performance bottlenecks.

#### 1️⃣2️⃣ `/error-handling` - Robust Error Handling Review
Scans your code to ensure failures gracefully fallback, errors are properly logged, and try/catch blocks are structured robustly.

### 🚀 Quick IDE Setup

To enable slash commands in your project, simply run our one-line setup:

```bash
cd your-project
curl -fsSL https://raw.githubusercontent.com/Anshsurana123/dev-lens-IBM-BOB/main/setup-slash-commands.sh | bash
```

**That's it!** Now you can type `/review-pr` or `/explain-repo` directly in your IDE's AI chat window.

### 📝 Manual IDE Setup (If Preferred)

#### 🤖 IBM Bob IDE (Native)
```bash
cd your-project
git clone https://github.com/Anshsurana123/dev-lens-IBM-BOB.git .devlens
cp -r .devlens/.bob .
# Use: /review-pr, /explain-repo, etc.
```

#### 🎨 Cursor / Windsurf
```bash
cd your-project
git clone https://github.com/Anshsurana123/dev-lens-IBM-BOB.git .devlens
cp .devlens/.cursorrules .
cp -r .devlens/prompts .devlens/
# Use: /review-pr, /explain-repo, etc.
```

#### 🐙 GitHub Copilot / Cody
```bash
cd your-project
git clone https://github.com/Anshsurana123/dev-lens-IBM-BOB.git .devlens
cp -r .devlens/.vscode .
cp -r .devlens/prompts .devlens/
# Use: /review-pr or /devlens-review-pr
```

#### 📦 VS Code Extension
DevLens also ships as a native VS Code Extension for one-click analysis.
```bash
code --install-extension devlens.devlens
# Use Command Palette: "DevLens: Review PR"
```

---

## 💻 Local Development Setup

Want to run DevLens locally? It takes less than 2 minutes.

### 1. Clone the repository
```bash
git clone https://github.com/Anshsurana123/dev-lens-IBM-BOB.git
cd dev-lens-IBM-BOB
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Get your key from: https://aistudio.google.com/app/apikey
GOOGLE_AI_API_KEY=your_gemini_key_here

# (Optional) For higher rate limits when scanning Repositories
# Get from: https://github.com/settings/tokens
GITHUB_TOKEN=your_github_token_here
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🏆 IBM Bob Hackathon 2026 Impact

DevLens was purpose-built for the **IBM Bob Hackathon 2026** under the theme:
> *"Turn idea into impact faster"*

### How we deliver impact:
1. **Faster Shipping**: Instant code reviews eliminate human waiting time.
2. **Faster Onboarding**: "Repo Bible" generation makes new developers productive in minutes.
3. **Faster Debugging**: Proactive security and performance audits catch bugs before they merge.

DevLens literally turns the idea of "better code" into the impact of "shipped code"—faster.

---

## 🤝 Contributing

We welcome contributions! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <strong>Built with ❤️ by Ansh Surana for the IBM Bob Hackathon 2026</strong>
</div>

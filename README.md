# 🔍 DevLens

### Turn Code Review & Onboarding from Hours to Minutes

**DevLens** is an AI-powered developer tool that gives you instant, senior-level code reviews and comprehensive repository documentation. Built for the IBM Bob Hackathon 2026.

[![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-blue)](https://ibm.com/bob)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Powered by IBM Bob](https://img.shields.io/badge/Powered%20by-IBM%20Bob-purple)](https://ibm.com/bob)
[![Works with Cursor](https://img.shields.io/badge/Works%20with-Cursor-00ADD8)](https://cursor.sh)
[![Works with Copilot](https://img.shields.io/badge/Works%20with-Copilot-000000)](https://github.com/features/copilot)
[![Works with Claude](https://img.shields.io/badge/Works%20with-Claude-8B5CF6)](https://claude.ai)

**🚀 3 Ways to Use DevLens:**
1. **🌐 Web App** - No installation, paste code and analyze instantly
2. **⚡ Slash Commands** - Type `/review-pr` in your AI editor
3. **📦 VS Code Extension** - One-click analysis in VS Code

**Works with:** IBM Bob • Cursor • GitHub Copilot • Cody • Claude • Windsurf • Tabnine • Antigravity

---

## 🎯 The Problem

Every developer faces these daily frustrations:

- **😰 Pre-PR Anxiety**: "Did I miss something? Will my code get torn apart in review?"
- **⏰ Slow Reviews**: Waiting hours or days for a senior dev to review your PR
- **📚 Onboarding Hell**: Spending weeks understanding a new codebase
- **🤔 Context Switching**: Forgetting what your own code does after a few months
- **🔍 Missing Edge Cases**: Shipping bugs because you didn't think of that one scenario

**The cost?** Slower shipping, more bugs, frustrated developers, and wasted time.

---

## 💡 The Solution

DevLens gives you **12 powerful slash commands** that work in **ANY AI editor** - just type and go!

### ⚡ Slash Commands (No Copy-Paste Required!)

```bash
# Just type these in your AI chat:
/review-pr          # Instant PR review
/explain-repo       # Instant documentation
/security-audit     # Instant security scan
/test-coverage      # Test analysis
/performance-check  # Performance review
/suggest-refactor   # Refactoring suggestions
/explain-code       # Code explanation
/generate-commit    # Commit messages
/scan-dependencies  # Dependency scan
/api-design         # API review
/database-review    # Database analysis
/error-handling     # Error handling review
```

**Works in**: Cursor • Copilot • Cody • Windsurf • Bob • and more!

**Setup**: One line → `curl -fsSL https://devlens.dev/setup.sh | bash`

---

### Core Commands

#### 1️⃣ `/review-pr` - Instant Senior-Level Code Review
Get a comprehensive PR review in seconds, not hours. DevLens analyzes your staged changes with full repository context and delivers:

- ✅ Suggested PR title & description (conventional commits format)
- ⚠️ Risk score with detailed justification
- 🐛 Potential bugs and edge cases you missed
- 🧪 Missing test coverage with specific function names
- ✍️ Actual test cases you can copy-paste
- 📋 Pre-merge checklist customized to your changes
- 🔒 Security vulnerabilities flagged
- 🚀 Performance implications analyzed

**Result**: Ship with confidence, learn from every review, catch bugs before production.

#### 2️⃣ `/explain-repo` - Instant Repository Documentation
Understand any codebase in under 30 minutes. DevLens scans your entire repository and generates a "Repo Bible" containing:

- 🎯 Plain English summary of what the project does
- 🛠️ Complete tech stack detection
- 🏗️ Architecture breakdown with ASCII diagrams
- 📁 Every directory and file explained
- 🔄 Data flow visualization
- ⭐ Top 5 most important files and why
- ⚠️ Complexity warnings for tricky areas
- 🚀 Step-by-step getting started guide
- 💡 Suggested first issues for new contributors

**Result**: Onboard new developers in minutes, not weeks. Understand legacy code instantly.

### Advanced Commands

#### 3️⃣ `/security-audit` - OWASP Security Scanner
Comprehensive security vulnerability detection covering OWASP Top 10:
- 🔒 SQL injection, XSS, CSRF detection
- 🔑 Hardcoded credentials and secrets scanning
- 🛡️ Authentication and authorization flaws
- 📊 Security score with severity ratings
- 🔧 Specific fixes with secure code examples

#### 4️⃣ `/test-coverage` - Test Coverage Analyzer
Identify untested code and generate test templates:
- 📊 Coverage analysis by file and function
- 🎯 Critical paths that need testing
- ✍️ Ready-to-use test templates (Jest, Pytest, JUnit)
- 🧪 Edge cases and test scenarios
- 📈 Coverage improvement roadmap

#### 5️⃣ `/performance-check` - Performance Analyzer
Find bottlenecks and optimization opportunities:
- ⚡ Algorithm complexity analysis (O(n²) detection)
- 🗄️ N+1 query problems
- 💾 Memory leaks and resource issues
- 🚀 Optimized code examples with benchmarks
- 📊 Performance improvement estimates

#### 6️⃣ `/suggest-refactor` - AI-Powered Refactoring
Intelligent code quality improvements:
- 🔧 Code smell detection (long methods, god classes)
- 🎨 Design pattern suggestions
- 📐 SOLID principle violations
- ♻️ Before/after refactoring examples
- 📋 Prioritized refactoring roadmap

#### 7️⃣ `/explain-code` - Plain English Code Explainer
Translate complex code into simple explanations:
- 📖 Step-by-step logic breakdown
- 🎯 Real-world analogies
- 🔍 Algorithm and pattern identification
- 💡 Learning resources and best practices
- 🎓 Perfect for onboarding and documentation

#### 8️⃣ `/generate-commit` - Smart Commit Messages
Generate meaningful conventional commit messages:
- 📝 Conventional commits format
- 🎯 Multiple message options
- 📊 Change analysis and impact assessment
- ✅ Pre-commit checklist
- 🔄 Consistent commit history

---

## 🎬 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  Developer Working in IBM Bob IDE                           │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ Types /review-pr or /explain-repo
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  DevLens Slash Commands (Powered by IBM Bob)                │
│  ┌──────────────┐              ┌──────────────┐            │
│  │ /review-pr   │              │ /explain-repo│            │
│  └──────┬───────┘              └──────┬───────┘            │
│         │                              │                     │
│         │ Activates                    │ Activates          │
│         ▼                              ▼                     │
│  ┌──────────────────────────────────────────────┐          │
│  │   Senior Reviewer Mode                       │          │
│  │   (10+ years experience persona)             │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ Bob's Repository Context Awareness
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Full Repository Analysis                                   │
│  • Reads git diff (for /review-pr)                         │
│  • Scans all files and structure                           │
│  • Understands dependencies & imports                       │
│  • Analyzes code patterns & architecture                    │
│  • Detects tech stack & frameworks                          │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ AI-Powered Analysis
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Intelligent Output Generation                              │
│  • Specific file names, line numbers, function names        │
│  • Actionable feedback with code examples                   │
│  • Risk assessment & security analysis                      │
│  • Test cases & documentation suggestions                   │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ Auto-saves to output/ folder
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  📄 Markdown Reports                                        │
│  • output/pr-review-report.md                              │
│  • output/repo-explainer.md                                │
│  • bob_sessions/ (session history)                         │
└─────────────────────────────────────────────────────────────┘
```

---

### 🌐 Option 1: Web App (No Installation!)

**Try DevLens instantly in your browser:**

1. Visit the web app (or run locally)
2. Paste your code
3. Choose analysis type (Review, Security, Explain, etc.)
4. Get instant results

**Run Locally:**
```bash
cd devlens/web
python -m http.server 8000
# Open http://localhost:8000
```

**Features:**
- ✅ No installation required
- ✅ 6 analysis types
- ✅ Powered by Google AI Studio (Gemini Pro)
- ✅ 10 free analyses per day
- ✅ Copy/download results
- ✅ Works on any device

📖 **Setup guide**: [web/README.md](web/README.md)

---

### ⚡ Option 2: Slash Commands (AI Editors)

## 🚀 Quick Start

### ⚡ One-Line Setup (Slash Commands Enabled!)

```bash
cd your-project
curl -fsSL https://raw.githubusercontent.com/yourusername/devlens/main/setup-slash-commands.sh | bash
```

**That's it!** Now you can use slash commands in ANY AI editor:

```
/review-pr          → Instant PR review
/explain-repo       → Instant documentation
/security-audit     → Instant security scan
```

### 🎯 How It Works

After setup, just type slash commands directly in your AI chat:

**Cursor**:
```
You: /review-pr
Cursor: [Automatically executes full PR review]
```

**Copilot**:
```
You: /explain-repo
Copilot: [Automatically generates repo documentation]
```

**Cody**:
```
You: /devlens-security-audit
Cody: [Automatically runs security scan]
```

### 📝 Manual Setup (If Preferred)

#### 🤖 IBM Bob IDE (Native)

```bash
cd your-project
git clone https://github.com/yourusername/devlens.git .devlens
cp -r .devlens/.bob .
# Use: /review-pr, /explain-repo, etc.
```

#### 🎨 Cursor / Windsurf

```bash
cd your-project
git clone https://github.com/yourusername/devlens.git .devlens
cp .devlens/.cursorrules .
cp -r .devlens/prompts .devlens/
# Use: /review-pr, /explain-repo, etc.
```

#### 🐙 GitHub Copilot / Cody

```bash
cd your-project
git clone https://github.com/yourusername/devlens.git .devlens
cp -r .devlens/.vscode .
cp -r .devlens/prompts .devlens/
# Use: /review-pr or /devlens-review-pr
```

#### 📦 VS Code Extension

```bash
code --install-extension devlens.devlens
# Use Command Palette: "DevLens: Review PR"
```

### 🎯 Supported Editors with Slash Commands

| Editor | Slash Command | Setup Time |
|--------|---------------|------------|
| **IBM Bob** | `/review-pr` | 30 seconds |
| **Cursor** | `/review-pr` | 30 seconds |
| **Windsurf** | `/review-pr` | 30 seconds |
| **Copilot** | `/review-pr` | 30 seconds |
| **Cody** | `/devlens-review-pr` | 30 seconds |
| **Claude** | Manual | 1 minute |

📖 **Complete slash commands guide**: [SLASH-COMMANDS-GUIDE.md](SLASH-COMMANDS-GUIDE.md)

📖 **Detailed setup for each editor**: [Installation Guide](docs/INSTALLATION.md)

### Usage

#### Review Your Code Before Creating a PR

```bash
# 1. Stage your changes
git add src/auth/login.js src/middleware/auth.js

# 2. Run the review
/review-pr

# 3. Bob analyzes your changes and generates a comprehensive review
# 4. Review saved to output/pr-review-report.md
```

**Example Output**:
```
✅ PR Review Complete!

📊 Risk Score: 6/10
🔴 Critical Issues: 1 (SQL injection vulnerability)
⚠️ Warnings: 3 (missing error handling, no input validation)
🧪 Missing Tests: 4 functions

📄 Full report saved to: output/pr-review-report.md

🚨 Action Required:
1. Fix SQL injection in user-service.js line 45
2. Add input validation for userId parameter
3. Write tests for authenticateUser() function
```

#### Understand Any Codebase Instantly

```bash
# 1. Navigate to any project
cd /path/to/unfamiliar-project

# 2. Run the explainer
/explain-repo

# 3. Bob scans the entire codebase and generates documentation
# 4. Repo Bible saved to output/repo-explainer.md
```

**Example Output**:
```
✅ Repo Bible Generated!

📊 Project Analysis:
- 127 files analyzed
- ~15,000 lines of code
- 3 complexity warnings

🎯 Project Type: REST API with React Frontend
🛠️ Tech Stack: Node.js, Express, React, PostgreSQL, Redis

⚠️ Complexity Warnings: 3 areas flagged
💡 Good First Issues: 5 suggested

📄 Full documentation saved to: output/repo-explainer.md

⭐ Most Important Files:
1. src/server.js - Main entry point
2. src/routes/api.js - API route definitions
3. src/db/schema.sql - Database schema
```

### All Commands Quick Reference

| Command | Purpose | Output File |
|---------|---------|-------------|
| `/review-pr` | PR code review | `output/pr-review-report.md` |
| `/explain-repo` | Repository documentation | `output/repo-explainer.md` |
| `/security-audit` | Security vulnerability scan | `output/security-audit-report.md` |
| `/test-coverage` | Test coverage analysis | `output/test-coverage-report.md` |
| `/performance-check` | Performance bottleneck detection | `output/performance-report.md` |
| `/suggest-refactor` | Code refactoring suggestions | `output/refactoring-suggestions.md` |
| `/explain-code [file]` | Plain English code explanation | `output/code-explanation.md` |
| `/generate-commit` | Smart commit message generation | `output/commit-message.txt` |
| `/scan-dependencies` | Dependency vulnerability scan | `output/dependency-scan.md` |

### Language-Specific Modes

DevLens includes expert modes for popular languages:

- **Python Expert Mode** (`.bob/modes/python-expert.md`): Pythonic code review, PEP standards, Django/Flask patterns
- **TypeScript Expert Mode** (`.bob/modes/typescript-expert.md`): Type safety, React patterns, modern JS features
- **Java Expert Mode** (`.bob/modes/java-expert.md`): Spring Boot, JPA/Hibernate, enterprise patterns

Activate a mode by referencing it in your commands for language-specific expertise.


---

## 🎯 Why DevLens?

### For Individual Developers
- ✅ **Ship Faster**: Get instant feedback instead of waiting for reviews
- 🧠 **Learn Continuously**: Every review teaches you something new
- 🐛 **Catch Bugs Early**: Find issues before they reach production
- 💪 **Build Confidence**: Know your code is solid before submitting

### For Teams
- ⚡ **Faster Onboarding**: New devs productive in hours, not weeks
- 📚 **Living Documentation**: Auto-generated docs that stay up-to-date
- 🎯 **Consistent Reviews**: Same high standards for every PR
- 🔄 **Knowledge Sharing**: Senior dev insights available 24/7

### For Open Source Projects
- 🌟 **Better First Contributions**: Clear guidance for new contributors
- 📖 **Comprehensive Docs**: Make your project approachable
- 🚀 **Faster PR Turnaround**: Pre-reviewed PRs are easier to merge
- 💡 **Suggested Issues**: Auto-generated good first issues

---

## 🛠️ Tech Stack

DevLens is built entirely on **IBM Bob's** powerful capabilities:

- **IBM Bob IDE**: The foundation that makes everything possible
- **Bob Slash Commands**: 9 custom commands for comprehensive code analysis
- **Bob Custom Modes**: 4 expert modes (Senior Reviewer, Python, TypeScript, Java)
- **Bob Repository Context**: Deep understanding of your entire codebase
- **Bob AI Engine**: Intelligent analysis and natural language generation
- **GitHub Actions**: CI/CD integration for automated quality checks
- **Markdown**: Simple, readable output format

**No external dependencies. No API keys. No setup complexity.**

Just Bob + DevLens = Superpowers.

### Features Overview

✅ **9 Slash Commands** covering all aspects of development
✅ **4 Language-Specific Modes** for expert-level reviews
✅ **CI/CD Integration** with GitHub Actions
✅ **Zero Configuration** - works out of the box
✅ **Offline Capable** - no external API calls
✅ **Privacy First** - your code never leaves your machine
✅ **Extensible** - easy to add new commands and modes

---

## 📸 Screenshots & Demo

### PR Review in Action
```
[Screenshot placeholder: Show the /review-pr command being run and the output]
```

### Repo Bible Generation
```
[Screenshot placeholder: Show the /explain-repo command and the generated documentation]
```

### Senior Reviewer Mode
```
[Screenshot placeholder: Show the detailed, specific feedback with line numbers]
```

**🎥 Watch the Demo Video**: [Link to demo video]

---

## 🎓 How It Works Under the Hood

DevLens leverages IBM Bob's unique capabilities that make it superior to generic AI coding assistants:

### 1. Repository Context Awareness
Unlike ChatGPT or Copilot, Bob has **full access to your entire repository**. DevLens uses this to:
- Understand how files relate to each other
- Detect architectural patterns
- Identify dependencies and imports
- Trace data flow across the codebase

### 2. Custom Slash Commands
DevLens defines structured commands in `.bob/commands/` that:
- Provide clear instructions to Bob
- Define exact output formats
- Specify which files to analyze
- Control the analysis depth and focus

### 3. Senior Reviewer Mode
The custom mode in `.bob/modes/senior-reviewer.md`:
- Transforms Bob's personality and expertise level
- Enforces specific review standards
- Ensures consistent, actionable feedback
- Balances thoroughness with pragmatism

### 4. Intelligent File Filtering
DevLens doesn't just read everything blindly:
- Prioritizes critical files (entry points, configs, core logic)
- Skips irrelevant files (node_modules, build artifacts)
- Reads up to 30-40 most important files for optimal analysis
- Uses smart heuristics to identify what matters

### 5. Structured Output
Every report follows a consistent format:
- Markdown for readability and version control
- Emoji indicators for quick scanning
- Specific file names, line numbers, function names
- Actionable recommendations with code examples
- Auto-saved to `output/` folder for reference

**Read more**: [docs/how-it-works.md](docs/how-it-works.md)

---

## 📂 Project Structure

```
devlens/
├── .bob/
│   ├── commands/
│   │   ├── review-pr.md          # /review-pr - PR code review
│   │   ├── explain-repo.md       # /explain-repo - Repository documentation
│   │   ├── security-audit.md     # /security-audit - OWASP security scanner
│   │   ├── test-coverage.md      # /test-coverage - Test coverage analyzer
│   │   ├── performance-check.md  # /performance-check - Performance analyzer
│   │   ├── suggest-refactor.md   # /suggest-refactor - Refactoring suggestions
│   │   ├── explain-code.md       # /explain-code - Code explainer
│   │   ├── generate-commit.md    # /generate-commit - Commit message generator
│   │   └── scan-dependencies.md  # /scan-dependencies - Dependency scanner
│   └── modes/
│       ├── senior-reviewer.md    # Senior Reviewer mode (10+ years experience)
│       ├── python-expert.md      # Python expert mode
│       ├── typescript-expert.md  # TypeScript expert mode
│       └── java-expert.md        # Java expert mode
├── .github/
│   └── workflows/
│       └── devlens-ci.yml        # CI/CD pipeline for DevLens
├── output/
│   ├── pr-review-report.md       # Generated PR reviews (auto-created)
│   ├── repo-explainer.md         # Generated repo documentation (auto-created)
│   ├── security-audit-report.md  # Security scan results (auto-created)
│   ├── test-coverage-report.md   # Test coverage analysis (auto-created)
│   ├── performance-report.md     # Performance analysis (auto-created)
│   ├── refactoring-suggestions.md # Refactoring suggestions (auto-created)
│   ├── code-explanation.md       # Code explanations (auto-created)
│   ├── commit-message.txt        # Generated commit messages (auto-created)
│   └── dependency-scan.md        # Dependency scan results (auto-created)
├── bob_sessions/
│   └── [session logs]            # Conversation history for reference
├── examples/
│   ├── sample-diff.txt           # Example git diff for demo
│   └── sample-repo-structure.txt # Example repository structure
├── docs/
│   ├── how-it-works.md           # Technical deep dive
│   └── demo-guide.md             # Presentation script for demos
├── LICENSE                        # MIT License
├── README.md                      # You are here!
└── .gitignore                     # Git ignore rules
```

---

## 🤝 Contributing

DevLens is built for developers, by developers. Contributions are welcome!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test with `/review-pr`**: Use DevLens on itself! 🎯
5. **Commit**: `git commit -m "feat: add amazing feature"`
6. **Push**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Ideas for Contributions

- 🌐 Add support for more languages and frameworks
- 📊 Create visualization tools for architecture diagrams
- 🧪 Enhance test case generation with more patterns
- 📝 Improve documentation templates
- 🎨 Add custom output themes
- 🔌 Create integrations with GitHub/GitLab
- 🌍 Add internationalization support

---

## 🏆 IBM Bob Hackathon 2026

DevLens was built for the **IBM Bob Hackathon 2026** with the theme:

> **"Turn idea into impact faster"**

### How DevLens Embodies the Theme

1. **Faster Shipping**: Instant code reviews eliminate waiting time
2. **Faster Onboarding**: New developers productive in minutes
3. **Faster Learning**: Every review is a learning opportunity
4. **Faster Debugging**: Catch issues before they become problems
5. **Faster Collaboration**: Clear documentation reduces confusion

**DevLens turns the idea of "better code" into the impact of "shipped code"—faster.**

---

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **IBM Bob Team**: For creating an AI IDE that makes tools like DevLens possible
- **The Developer Community**: For inspiring the features that matter most
- **Open Source Contributors**: For the patterns and practices we learn from

---

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/devlens/issues)
- **Discussions**: [Ask questions or share ideas](https://github.com/yourusername/devlens/discussions)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)
- **Email**: your.email@example.com

---

## 🌟 Star History

If DevLens helps you ship better code faster, give it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ by developers, for developers**

**Powered by IBM Bob**

[⬆ Back to Top](#-devlens)

</div>
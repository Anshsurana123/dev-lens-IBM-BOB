# 🔍 DevLens

### Turn Code Review & Onboarding from Hours to Minutes

**DevLens** is an AI-powered developer tool that gives you instant, senior-level code reviews and comprehensive repository documentation—right inside IBM Bob IDE. Built for the IBM Bob Hackathon 2026.

[![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-blue)](https://ibm.com/bob)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Powered by IBM Bob](https://img.shields.io/badge/Powered%20by-IBM%20Bob-purple)](https://ibm.com/bob)

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

DevLens gives you **two superpowers** via simple slash commands:

### 1️⃣ `/review-pr` - Instant Senior-Level Code Review
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

### 2️⃣ `/explain-repo` - Instant Repository Documentation
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

## 🚀 Quick Start

### Installation

1. **Clone DevLens into your project**:
   ```bash
   cd your-project
   git clone https://github.com/yourusername/devlens.git .devlens
   ```

2. **Copy the `.bob` folder to your project root**:
   ```bash
   cp -r .devlens/.bob .
   ```

3. **Open your project in IBM Bob IDE**

4. **You're ready!** The slash commands are now available.

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
- **Bob Slash Commands**: Custom commands for `/review-pr` and `/explain-repo`
- **Bob Custom Modes**: Senior Reviewer mode for enhanced analysis
- **Bob Repository Context**: Deep understanding of your entire codebase
- **Bob AI Engine**: Intelligent analysis and natural language generation
- **Markdown**: Simple, readable output format

**No external dependencies. No API keys. No setup complexity.**

Just Bob + DevLens = Superpowers.

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
│   │   ├── review-pr.md          # /review-pr slash command definition
│   │   └── explain-repo.md       # /explain-repo slash command definition
│   └── modes/
│       └── senior-reviewer.md    # Senior Reviewer mode configuration
├── output/
│   ├── pr-review-report.md       # Generated PR reviews (auto-created)
│   └── repo-explainer.md         # Generated repo documentation (auto-created)
├── bob_sessions/
│   └── [session logs]            # Conversation history for reference
├── examples/
│   ├── sample-diff.txt           # Example git diff for demo
│   └── sample-repo-structure.txt # Example repository structure
├── docs/
│   ├── how-it-works.md           # Technical deep dive
│   └── demo-guide.md             # Presentation script for demos
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
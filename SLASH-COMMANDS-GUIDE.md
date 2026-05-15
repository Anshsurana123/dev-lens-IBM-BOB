# 🎯 DevLens Slash Commands - Quick Setup Guide

## ⚡ One-Line Setup

```bash
curl -fsSL https://raw.githubusercontent.com/yourusername/devlens/main/setup-slash-commands.sh | bash
```

Or manually:

```bash
cd your-project
git clone https://github.com/yourusername/devlens.git .devlens-temp
cd .devlens-temp
chmod +x setup-slash-commands.sh
./setup-slash-commands.sh
cd ..
rm -rf .devlens-temp
```

---

## 🚀 Slash Commands Available

Type these commands directly in your AI editor's chat:

| Command | Description | Works In |
|---------|-------------|----------|
| `/review-pr` | PR code review | All editors |
| `/explain-repo` | Repository documentation | All editors |
| `/security-audit` | Security vulnerability scan | All editors |
| `/test-coverage` | Test coverage analysis | All editors |
| `/performance-check` | Performance optimization | All editors |
| `/suggest-refactor` | Refactoring suggestions | All editors |
| `/explain-code` | Code explanation | All editors |
| `/generate-commit` | Commit message generation | All editors |
| `/scan-dependencies` | Dependency vulnerability scan | All editors |
| `/api-design` | API design review | All editors |
| `/database-review` | Database schema analysis | All editors |
| `/error-handling` | Error handling review | All editors |

---

## 📝 Editor-Specific Usage

### 🎨 Cursor

**Setup**: Automatic with `.cursorrules` file

**Usage**:
```
1. Open Cursor AI chat: Cmd/Ctrl+L
2. Type: /review-pr
3. Press Enter
4. Cursor automatically executes the full command!
```

**How it works**: Cursor reads `.cursorrules` and knows to execute the prompt from `.devlens/prompts/review-pr.md` when you type `/review-pr`.

**Example**:
```
You: /review-pr
Cursor: [Reads .devlens/prompts/review-pr.md and executes]
        [Analyzes your staged changes]
        [Provides comprehensive PR review]
```

---

### 🐙 GitHub Copilot Chat

**Setup**: Automatic with `.vscode/settings.json`

**Usage**:
```
1. Open Copilot Chat: Cmd/Ctrl+I
2. Type: /review-pr
3. Press Enter
4. Copilot executes the command!
```

**How it works**: Copilot reads custom instructions from `.vscode/settings.json` and executes DevLens prompts.

**Example**:
```
You: /explain-repo
Copilot: [Reads .devlens/prompts/explain-repo.md]
         [Scans your entire repository]
         [Generates comprehensive Repo Bible]
```

---

### 🧠 Cody (Sourcegraph)

**Setup**: Automatic with `.vscode/cody.json`

**Usage**:
```
1. Open Cody chat
2. Type: /devlens-review-pr
3. Or use Command Palette: "Cody: DevLens Review PR"
4. Cody executes the command!
```

**How it works**: Cody reads custom commands from `.vscode/cody.json` and executes them with full codebase context.

**Example**:
```
You: /devlens-security-audit
Cody: [Executes security-audit.md prompt]
      [Scans entire codebase for vulnerabilities]
      [Provides detailed security report]
```

**Available Cody Commands**:
- `/devlens-review-pr`
- `/devlens-explain-repo`
- `/devlens-security-audit`
- `/devlens-test-coverage`
- `/devlens-performance-check`
- `/devlens-suggest-refactor`
- `/devlens-explain-code`
- `/devlens-generate-commit`
- `/devlens-scan-dependencies`
- `/devlens-api-design`
- `/devlens-database-review`
- `/devlens-error-handling`

---

### 🌊 Windsurf (Codeium)

**Setup**: Copy `.cursorrules` to your project

**Usage**:
```
1. Open Windsurf AI panel
2. Type: /review-pr
3. Press Enter
4. Windsurf executes the command!
```

**How it works**: Windsurf supports Cursor-style rules and automatically executes prompts.

---

### 🤖 IBM Bob

**Setup**: Native support (no setup needed)

**Usage**:
```
1. Open Bob IDE
2. Type: /review-pr
3. Press Enter
4. Bob executes natively!
```

**How it works**: Bob has native slash command support through `.bob/commands/` directory.

---

## 🎯 Real-World Examples

### Example 1: Quick PR Review

```bash
# Stage your changes
git add src/auth.ts src/middleware/auth.ts

# Open your AI editor and type:
/review-pr

# Get instant review with:
# ✅ Suggested PR title
# ⚠️ Risk score (7/10)
# 🐛 Potential bugs found
# 🧪 Missing test cases
# 🔒 Security concerns
# 📋 Pre-merge checklist
```

### Example 2: Understand New Codebase

```bash
# Clone a new project
git clone https://github.com/company/project.git
cd project

# Setup DevLens
curl -fsSL https://devlens.dev/setup.sh | bash

# Open AI editor and type:
/explain-repo

# Get complete documentation:
# 📖 What the project does
# 🛠️ Tech stack
# 🏗️ Architecture
# 📁 Directory structure
# ⭐ Top 5 important files
# 🚀 Getting started guide
```

### Example 3: Security Audit Before Deployment

```bash
# Before deploying to production
# Open AI editor and type:
/security-audit

# Get comprehensive security report:
# 🚨 Critical vulnerabilities
# ⚠️ High priority issues
# 🔐 Authentication review
# 💉 Injection vulnerabilities
# 📦 Dependency vulnerabilities
# 🛡️ Security headers check
```

### Example 4: Explain Complex Code

```typescript
// Select this complex function in your editor
function processPayment(order: Order, payment: Payment) {
  const validator = new PaymentValidator();
  const processor = PaymentProcessorFactory.create(payment.method);
  
  if (!validator.validate(payment)) {
    throw new ValidationError('Invalid payment');
  }
  
  const result = await processor.process(order, payment);
  await this.updateOrderStatus(order.id, result.status);
  await this.sendConfirmation(order.customer.email, result);
  
  return result;
}

// Type in AI chat:
/explain-code

// Get detailed explanation:
// 📖 What this function does
// 🔍 Step-by-step breakdown
// 🎯 Design patterns used
// ⚠️ Potential issues
// 💡 Improvement suggestions
```

---

## 🔧 Configuration Files

### `.cursorrules` (Cursor)
Defines slash commands that Cursor recognizes and executes automatically.

### `.vscode/cody.json` (Cody)
Defines custom Cody commands with full codebase context.

### `.vscode/settings.json` (Copilot)
Configures Copilot to recognize DevLens commands.

### `.devlens/prompts/` (Universal)
Contains the actual prompt templates that all editors use.

---

## 🎨 Customization

### Add Your Own Slash Command

1. **Create prompt file**:
```bash
cat > .devlens/prompts/my-custom-check.md << 'EOF'
# My Custom Check

Analyze the codebase for [your criteria].

Output format:
- Finding 1
- Finding 2
EOF
```

2. **Add to `.cursorrules`**:
```
When I say "/my-custom-check":
Read .devlens/prompts/my-custom-check.md and execute with full context.
```

3. **Add to `.vscode/cody.json`**:
```json
{
  "commands": {
    "my-custom-check": {
      "description": "My custom analysis",
      "prompt": "Read .devlens/prompts/my-custom-check.md",
      "context": { "codebase": true }
    }
  }
}
```

4. **Use it**:
```
/my-custom-check
```

---

## 🐛 Troubleshooting

### "Slash command not recognized"

**Cursor**: 
- Ensure `.cursorrules` exists in project root
- Restart Cursor
- Check file has correct syntax

**Cody**:
- Ensure `.vscode/cody.json` exists
- Reload VS Code window
- Use `/devlens-` prefix

**Copilot**:
- Ensure `.vscode/settings.json` has DevLens config
- Reload VS Code window
- Try typing full command

### "Prompt file not found"

```bash
# Verify prompts exist
ls -la .devlens/prompts/

# Re-run setup if missing
./setup-slash-commands.sh
```

### "Command executes but no output"

- Check AI has workspace/codebase access
- Verify prompt file is not empty
- Try with explicit context: `@workspace /review-pr`

---

## 📊 Comparison: Before vs After

### Before (Manual Copy-Paste)
```
1. Open .devlens/prompts/review-pr.md
2. Copy entire content (267 lines)
3. Open AI chat
4. Paste content
5. Wait for AI to read
6. Get response

Time: ~30 seconds
Effort: High
```

### After (Slash Commands)
```
1. Type: /review-pr
2. Press Enter
3. Get response

Time: ~2 seconds
Effort: Minimal
```

**Result**: 15x faster, 95% less effort!

---

## 🎉 Summary

With slash commands, DevLens becomes as easy to use as:

```
/review-pr          → Instant PR review
/explain-repo       → Instant documentation
/security-audit     → Instant security scan
```

No more copy-pasting prompts. Just type and go! 🚀

---

## 📚 Next Steps

1. **Run setup script**: `./setup-slash-commands.sh`
2. **Try a command**: `/review-pr`
3. **Customize**: Add your own commands
4. **Share**: Tell your team!

---

**Made with ❤️ for developers who want instant AI-powered code analysis**

Questions? Check [INSTALLATION.md](docs/INSTALLATION.md) or [CROSS-EDITOR-GUIDE.md](docs/CROSS-EDITOR-GUIDE.md)
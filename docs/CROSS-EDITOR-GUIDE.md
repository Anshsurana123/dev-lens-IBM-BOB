# DevLens Cross-Editor Compatibility Guide

DevLens works with **any AI-powered code editor**. This guide shows you exactly how to use DevLens with your favorite AI assistant.

---

## 🎯 Universal Approach

DevLens uses **universal prompts** that work with any AI that can:
- Read your codebase
- Understand context
- Generate structured output

### How It Works

1. **Copy a prompt** from `prompts/` directory
2. **Paste into your AI editor**
3. **AI analyzes your code** with full context
4. **Get comprehensive report**

---

## 🤖 Supported AI Editors

| Editor | Native Support | Context Awareness | Setup Difficulty |
|--------|----------------|-------------------|------------------|
| IBM Bob | ✅ Native | ⭐⭐⭐ | Easy |
| Cursor | ✅ Full | ⭐⭐⭐ | Easy |
| Windsurf | ✅ Full | ⭐⭐⭐ | Easy |
| GitHub Copilot | ✅ Full | ⭐⭐ | Easy |
| Cody | ✅ Full | ⭐⭐⭐ | Easy |
| Claude | ⚠️ Manual | ⭐⭐ | Medium |
| Tabnine | ⚠️ Limited | ⭐ | Medium |
| Antigravity | ✅ Full | ⭐⭐⭐ | Easy |

---

## 📋 Quick Setup by Editor

### IBM Bob (Native)

**Best Experience** - DevLens was designed for Bob!

```bash
# 1. Copy DevLens to your project
cp -r devlens/.bob your-project/

# 2. Bob automatically detects commands
# 3. Use slash commands:
/review-pr
/explain-repo
/security-audit
```

**Features:**
- ✅ Native slash commands
- ✅ Custom modes
- ✅ Automatic context
- ✅ Output saving

---

### Cursor

**Excellent Support** - Full codebase context

```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Create .cursorrules
cat > .cursorrules << 'EOF'
When I say "review pr", read and execute: .devlens/prompts/review-pr.md
When I say "explain repo", read and execute: .devlens/prompts/explain-repo.md
When I say "security audit", read and execute: .devlens/prompts/security-audit.md
EOF

# 3. Use in Cursor
# Open AI chat: Cmd/Ctrl+L
# Type: "review pr"
```

**Features:**
- ✅ Full codebase context
- ✅ Fast execution
- ✅ Custom rules
- ✅ Multi-file analysis

**Pro Tips:**
- Use `@workspace` for explicit context
- Cursor automatically includes relevant files
- Results are instant

---

### Windsurf (Codeium)

**Great Support** - Workspace awareness

```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Open Windsurf AI panel
# 3. Copy prompt from .devlens/prompts/[command].md
# 4. Paste and run
```

**Keyboard Shortcuts:**

Create in Windsurf settings:
```json
{
  "keybindings": [
    {
      "key": "ctrl+shift+r",
      "command": "workbench.action.chat.open",
      "args": "@workspace Read .devlens/prompts/review-pr.md"
    }
  ]
}
```

**Features:**
- ✅ Workspace context
- ✅ Fast analysis
- ✅ Multi-file support

---

### GitHub Copilot Chat

**Good Support** - VS Code integration

```bash
# 1. Install DevLens VS Code extension (recommended)
code --install-extension devlens.devlens

# OR manually:
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Open Copilot Chat: Cmd/Ctrl+I
# 3. Use @workspace for context
# 4. Paste prompt from .devlens/prompts/
```

**Quick Commands:**

Create VS Code tasks:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "DevLens: Review PR",
      "type": "shell",
      "command": "cat .devlens/prompts/review-pr.md | clip"
    }
  ]
}
```

**Features:**
- ✅ Native VS Code
- ✅ Workspace context
- ⚠️ Smaller context window

---

### Cody (Sourcegraph)

**Excellent Support** - Enterprise features

```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Create Cody commands
cat > .vscode/cody.json << 'EOF'
{
  "commands": {
    "devlens-review-pr": {
      "description": "Review PR with DevLens",
      "prompt": "Read and execute: .devlens/prompts/review-pr.md"
    },
    "devlens-explain-repo": {
      "description": "Explain repo with DevLens",
      "prompt": "Read and execute: .devlens/prompts/explain-repo.md"
    }
  }
}
EOF

# 3. Use: /devlens-review-pr
```

**Features:**
- ✅ Multi-repo context
- ✅ Enterprise search
- ✅ Custom commands
- ✅ Code graph awareness

---

### Claude (Desktop/Web)

**Manual Setup** - Highest quality analysis

**For Claude Desktop:**
```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. In Claude:
# - Copy prompt from .devlens/prompts/[command].md
# - Paste into Claude
# - Upload relevant files (if needed)
```

**For Claude Web:**
```bash
# 1. Get git diff
git diff --staged > /tmp/changes.diff

# 2. Copy prompt from devlens/prompts/review-pr.md
# 3. In Claude web:
#    - Paste prompt
#    - Upload changes.diff
#    - Upload key files
```

**Features:**
- ✅ Excellent analysis quality
- ✅ Long context window
- ⚠️ Manual file upload
- ⚠️ No automatic context

**Pro Tips:**
- Use Claude Projects for persistent context
- Upload key files once per project
- Claude gives the most detailed analysis

---

### Tabnine

**Limited Support** - Privacy-focused

```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Open Tabnine chat
# 3. Paste prompt
# 4. May need to provide additional context
```

**Features:**
- ✅ Privacy-focused (local models)
- ⚠️ Smaller context window
- ⚠️ May need manual context

---

### Antigravity

**Full Support** - Advanced understanding

```bash
# 1. Copy prompts
mkdir .devlens
cp -r devlens/prompts .devlens/

# 2. Open Antigravity AI
# 3. Reference .devlens/prompts/[command].md
# 4. Antigravity executes with full context
```

**Features:**
- ✅ Advanced code understanding
- ✅ Multi-file analysis
- ✅ Context-aware

---

## 🚀 Universal Setup Script

Save this as `setup-devlens.sh` in your project:

```bash
#!/bin/bash

echo "🚀 Setting up DevLens for cross-editor compatibility..."

# Create directory structure
mkdir -p .devlens/prompts
mkdir -p .devlens/output

# Copy prompts (adjust path to your DevLens installation)
DEVLENS_PATH="path/to/devlens"
cp -r "$DEVLENS_PATH/prompts/"* .devlens/prompts/

# Create .gitignore
cat > .devlens/.gitignore << 'EOF'
output/
*.log
.DS_Store
EOF

# Create README
cat > .devlens/README.md << 'EOF'
# DevLens Commands

Available prompts:
- review-pr.md - PR code review
- explain-repo.md - Repository documentation
- security-audit.md - Security scan
- test-coverage.md - Test analysis
- performance-check.md - Performance review
- And 7 more...

## Usage
Copy any .md file content and paste into your AI editor.
EOF

echo "✅ DevLens setup complete!"
echo ""
echo "📁 Prompts available in: .devlens/prompts/"
echo "📝 Output will be saved to: .devlens/output/"
echo ""
echo "🎯 Next steps:"
echo "1. Choose your AI editor from the list above"
echo "2. Follow the setup instructions for that editor"
echo "3. Start using DevLens commands!"
```

Make executable and run:
```bash
chmod +x setup-devlens.sh
./setup-devlens.sh
```

---

## 📊 Feature Comparison

| Feature | Bob | Cursor | Windsurf | Copilot | Cody | Claude |
|---------|-----|--------|----------|---------|------|--------|
| Slash Commands | ✅ | ⚠️ | ⚠️ | ❌ | ⚠️ | ❌ |
| Auto Context | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Multi-file | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Speed | ⚡⚡⚡ | ⚡⚡⚡ | ⚡⚡ | ⚡⚡⚡ | ⚡⚡ | ⚡⚡ |
| Quality | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Setup | Easy | Easy | Easy | Easy | Easy | Manual |
| Cost | Varies | Varies | Free | Paid | Free/Paid | Paid |

---

## 🎨 Customization

### Custom Prompts

Create your own prompts in `.devlens/prompts/`:

```markdown
# My Custom Analysis

You are an expert in [domain]. Analyze my code for:
1. [Criterion 1]
2. [Criterion 2]

Output format:
[Your format here]
```

### Editor-Specific Configs

**Cursor** - `.cursorrules`:
```
When I say "custom analysis", read: .devlens/prompts/custom.md
```

**Cody** - `.vscode/cody.json`:
```json
{
  "commands": {
    "custom-analysis": {
      "prompt": "Read: .devlens/prompts/custom.md"
    }
  }
}
```

---

## 🔧 Troubleshooting

### "AI doesn't have file context"

**Solution by Editor:**

- **Cursor**: Automatic, no action needed
- **Copilot**: Use `@workspace` prefix
- **Cody**: Use `@-mentions`
- **Claude**: Upload files manually
- **Windsurf**: Use `@workspace`

### "Prompt too long"

**Solution:**
1. Split into smaller analyses
2. Focus on specific files
3. Use summary mode first

### "Output not saved"

**Solution:**
1. Create `.devlens/output/` directory
2. Copy AI response manually
3. Use VS Code extension for auto-save

### "Command not recognized"

**Solution:**
1. Verify `.devlens/prompts/` exists
2. Check file permissions
3. Copy prompt content directly

---

## 📚 Best Practices

### 1. Choose the Right Editor

- **Best Quality**: Claude, Cody
- **Best Speed**: Cursor, Copilot
- **Best Integration**: Bob (native)
- **Best Privacy**: Tabnine (local)

### 2. Optimize Context

- Keep relevant files open
- Use workspace/project context
- Close unrelated files
- Provide clear instructions

### 3. Save Results

- Create output directory
- Use consistent naming
- Version control reports
- Share with team

### 4. Iterate

- Start with high-level analysis
- Deep dive into specific areas
- Combine multiple analyses
- Refine based on results

---

## 🎯 Recommended Workflows

### Workflow 1: Pre-Commit Review

```bash
# 1. Stage changes
git add .

# 2. Review PR
[Use review-pr prompt]

# 3. Fix issues
[Make changes]

# 4. Generate commit
[Use generate-commit prompt]

# 5. Commit
git commit -m "[generated message]"
```

### Workflow 2: New Project Onboarding

```bash
# 1. Explain repo
[Use explain-repo prompt]

# 2. Security audit
[Use security-audit prompt]

# 3. Test coverage
[Use test-coverage prompt]

# 4. Read generated docs
cat .devlens/output/repo-explainer.md
```

### Workflow 3: Code Review

```bash
# 1. Review PR
[Use review-pr prompt]

# 2. Check security
[Use security-audit prompt]

# 3. Verify tests
[Use test-coverage prompt]

# 4. Approve or request changes
```

---

## 🤝 Contributing

Help improve cross-editor support:

1. Test with your AI editor
2. Report compatibility issues
3. Share configuration tips
4. Submit integration guides

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/devlens/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/devlens/discussions)
- **Email**: support@devlens.dev

---

**DevLens works with YOUR favorite AI editor!** 🚀

Choose your editor, follow the setup, and start analyzing code in minutes.
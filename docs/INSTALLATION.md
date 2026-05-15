# DevLens Installation Guide

DevLens works with any AI-powered code editor. Choose your editor below for specific installation instructions.

---

## 🎯 Quick Start (Universal)

### Option 1: Copy Prompts Directly
1. Navigate to the `prompts/` directory
2. Copy any `.md` file content
3. Paste into your AI editor's chat
4. The AI will analyze your code and generate the report

### Option 2: Use as Project Template
1. Copy the `prompts/` folder to your project root
2. Rename it to `.devlens/` (optional)
3. Reference prompts when needed

---

## 🤖 IBM Bob IDE

### Installation

DevLens is natively designed for IBM Bob with slash commands.

1. **Clone DevLens:**
```bash
cd your-project
git clone https://github.com/yourusername/devlens.git .devlens
```

2. **Bob will automatically detect** the `.bob/` directory and load:
   - Custom slash commands (`/review-pr`, `/explain-repo`, etc.)
   - Custom modes (Senior Reviewer, Python Expert, etc.)

3. **Start using:**
```
/review-pr
/explain-repo
/security-audit
```

### Features in Bob
- ✅ Native slash commands
- ✅ Custom modes
- ✅ Automatic file context
- ✅ Multi-file analysis
- ✅ Output saving

---

## 🎨 Cursor

### Installation

1. **Copy prompts to your project:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

2. **Use in Cursor:**
   - Open Cursor AI chat: `Cmd/Ctrl + L`
   - Copy content from `.devlens/prompts/[command].md`
   - Paste into chat
   - Cursor will analyze with full codebase context

### Quick Access Setup

Create a `.cursorrules` file in your project root:

```markdown
# DevLens Commands

When I say "review pr", read and execute: .devlens/prompts/review-pr.md
When I say "explain repo", read and execute: .devlens/prompts/explain-repo.md
When I say "security audit", read and execute: .devlens/prompts/security-audit.md
When I say "test coverage", read and execute: .devlens/prompts/test-coverage.md
When I say "performance check", read and execute: .devlens/prompts/performance-check.md
```

Now you can just type: "review pr" and Cursor will execute the full prompt!

### Features in Cursor
- ✅ Full codebase context
- ✅ Multi-file analysis
- ✅ Fast execution
- ✅ Custom rules support

---

## 🌊 Windsurf (Codeium)

### Installation

1. **Copy prompts to your project:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

2. **Use in Windsurf:**
   - Open Windsurf AI panel
   - Copy content from `.devlens/prompts/[command].md`
   - Paste into AI chat
   - Windsurf will analyze your code

### Quick Access Setup

Create keyboard shortcuts in Windsurf settings:

```json
{
  "keybindings": [
    {
      "key": "ctrl+shift+r",
      "command": "workbench.action.chat.open",
      "args": "@workspace Read and execute .devlens/prompts/review-pr.md"
    },
    {
      "key": "ctrl+shift+e",
      "command": "workbench.action.chat.open",
      "args": "@workspace Read and execute .devlens/prompts/explain-repo.md"
    }
  ]
}
```

### Features in Windsurf
- ✅ Workspace awareness
- ✅ Fast analysis
- ✅ Multi-file support

---

## 🧠 Claude / Claude Code Editor

### Installation

1. **For Claude Desktop/Web:**
   - Copy prompt content from `prompts/[command].md`
   - Paste into Claude chat
   - Upload relevant files or provide context
   - Claude will analyze and generate report

2. **For Claude Code Editor (when available):**
   - Copy prompts to project: `.devlens/prompts/`
   - Reference prompts in chat
   - Claude will have full codebase context

### Best Practices with Claude

**For PR Reviews:**
```
I need you to review my code changes.

[Paste content from prompts/review-pr.md]

Here's my git diff:
[Paste git diff output]
```

**For Repo Explanation:**
```
I need you to explain my codebase.

[Paste content from prompts/explain-repo.md]

Here's my project structure:
[Paste tree output or key files]
```

### Features with Claude
- ✅ Excellent analysis quality
- ✅ Detailed explanations
- ✅ Long context window
- ⚠️ Manual file upload needed (web version)

---

## 🐙 GitHub Copilot Chat (VS Code)

### Installation

1. **Install DevLens VS Code Extension** (recommended):
```bash
# Coming soon - VS Code extension
code --install-extension devlens.devlens
```

2. **Or use prompts manually:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

3. **Use in Copilot Chat:**
   - Open Copilot Chat: `Cmd/Ctrl + I`
   - Type: `@workspace` to give context
   - Copy and paste prompt from `.devlens/prompts/[command].md`

### Quick Access with Copilot

Create VS Code tasks (`.vscode/tasks.json`):

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "DevLens: Review PR",
      "type": "shell",
      "command": "code --command 'workbench.action.chat.open' && cat .devlens/prompts/review-pr.md | clip"
    },
    {
      "label": "DevLens: Explain Repo",
      "type": "shell",
      "command": "code --command 'workbench.action.chat.open' && cat .devlens/prompts/explain-repo.md | clip"
    }
  ]
}
```

### Features with Copilot
- ✅ Native VS Code integration
- ✅ Workspace context
- ✅ Fast responses
- ⚠️ Context window smaller than Claude

---

## 🚀 Cody (Sourcegraph)

### Installation

1. **Copy prompts to your project:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

2. **Use in Cody:**
   - Open Cody chat
   - Use `@-mention` for context
   - Paste prompt from `.devlens/prompts/[command].md`

### Quick Access

Create Cody commands (`.vscode/cody.json`):

```json
{
  "commands": {
    "devlens-review-pr": {
      "description": "Review PR with DevLens",
      "prompt": "Read and execute the prompt in .devlens/prompts/review-pr.md"
    },
    "devlens-explain-repo": {
      "description": "Explain repository with DevLens",
      "prompt": "Read and execute the prompt in .devlens/prompts/explain-repo.md"
    }
  }
}
```

### Features with Cody
- ✅ Enterprise codebase search
- ✅ Multi-repo context
- ✅ Custom commands

---

## 🎯 Tabnine

### Installation

1. **Copy prompts to your project:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

2. **Use in Tabnine Chat:**
   - Open Tabnine chat panel
   - Copy prompt from `.devlens/prompts/[command].md`
   - Paste and execute

### Features with Tabnine
- ✅ Privacy-focused (local models available)
- ✅ Fast completions
- ⚠️ Smaller context window

---

## 🔮 Antigravity (if available)

### Installation

1. **Copy prompts to your project:**
```bash
cd your-project
mkdir .devlens
cp -r path/to/devlens/prompts .devlens/
```

2. **Use in Antigravity:**
   - Open Antigravity AI interface
   - Reference `.devlens/prompts/[command].md`
   - Antigravity will execute with full context

### Features with Antigravity
- ✅ Advanced code understanding
- ✅ Multi-file analysis
- ✅ Context-aware suggestions

---

## 📦 VS Code Extension (Coming Soon)

### Features
- One-click command execution
- Sidebar integration
- Keyboard shortcuts
- Output panel
- History tracking
- Custom configurations

### Installation (when available)
```bash
code --install-extension devlens.devlens
```

### Usage
- Open Command Palette: `Cmd/Ctrl + Shift + P`
- Type: "DevLens"
- Select command
- View results in output panel

---

## 🛠️ Universal Setup Script

Create this script in your project root as `setup-devlens.sh`:

```bash
#!/bin/bash

echo "🚀 Setting up DevLens..."

# Create .devlens directory
mkdir -p .devlens/prompts

# Copy prompts
cp -r path/to/devlens/prompts/* .devlens/prompts/

# Create output directory
mkdir -p .devlens/output

# Create .gitignore
cat > .devlens/.gitignore << EOF
output/
*.log
EOF

echo "✅ DevLens setup complete!"
echo ""
echo "Available prompts:"
ls -1 .devlens/prompts/
echo ""
echo "Usage: Copy any prompt from .devlens/prompts/ and paste into your AI editor"
```

Make it executable:
```bash
chmod +x setup-devlens.sh
./setup-devlens.sh
```

---

## 🎨 Editor Comparison

| Feature | Bob | Cursor | Windsurf | Claude | Copilot | Cody |
|---------|-----|--------|----------|--------|---------|------|
| Native Commands | ✅ | ⚠️ | ⚠️ | ❌ | ⚠️ | ⚠️ |
| Full Context | ✅ | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Multi-file | ✅ | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Speed | ⚡⚡⚡ | ⚡⚡⚡ | ⚡⚡ | ⚡⚡ | ⚡⚡⚡ | ⚡⚡ |
| Quality | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Setup | Easy | Easy | Easy | Manual | Easy | Easy |

✅ = Full Support | ⚠️ = Partial Support | ❌ = Not Supported

---

## 🔧 Troubleshooting

### "AI doesn't have file context"
**Solution:** Use workspace/project context commands:
- Cursor: Automatic
- Copilot: Use `@workspace`
- Claude: Upload files manually
- Cody: Use `@-mentions`

### "Prompt too long"
**Solution:** Use shorter prompts or split analysis:
1. Start with high-level analysis
2. Deep dive into specific areas
3. Combine results manually

### "Output not saved"
**Solution:** 
- Copy output manually
- Create `output/` directory
- Save as markdown file

### "Commands not working"
**Solution:**
- Verify `.devlens/prompts/` exists
- Check file permissions
- Ensure AI has file access
- Try copying prompt content directly

---

## 📚 Next Steps

1. **Choose your editor** from the list above
2. **Follow installation steps** for that editor
3. **Try a simple command** like `/explain-repo` or "review pr"
4. **Customize prompts** for your needs
5. **Share with your team**

---

## 🤝 Contributing

Found a better way to integrate with your editor? 

1. Fork DevLens
2. Add your integration guide
3. Submit a PR
4. Help other developers!

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/devlens/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/devlens/discussions)
- **Email:** support@devlens.dev

---

**Made with ❤️ for developers using AI coding assistants**
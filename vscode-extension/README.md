# DevLens VS Code Extension

AI-powered code analysis directly in VS Code. Get instant PR reviews, security audits, test coverage analysis, and more.

## Features

### 🔍 12 Powerful Commands

1. **Review PR** - Comprehensive code review of staged changes
2. **Explain Repository** - Generate complete repo documentation
3. **Security Audit** - Scan for vulnerabilities and security issues
4. **Test Coverage** - Analyze test coverage and suggest tests
5. **Performance Check** - Identify performance bottlenecks
6. **Suggest Refactor** - Get refactoring recommendations
7. **Explain Code** - Understand selected code snippets
8. **Generate Commit** - Create conventional commit messages
9. **Scan Dependencies** - Check for vulnerable dependencies
10. **API Design Review** - Review API design and best practices
11. **Database Review** - Analyze database schema and queries
12. **Error Handling** - Review error handling patterns

### ✨ Key Features

- **One-Click Analysis** - Run any command from Command Palette or sidebar
- **AI Provider Support** - Works with GitHub Copilot, Cursor, Cody, Claude, and more
- **Keyboard Shortcuts** - Fast access to common commands
- **Output Management** - Automatic saving of analysis reports
- **Context Aware** - Understands your entire codebase
- **Customizable** - Configure AI provider and output preferences

## Installation

### From VS Code Marketplace (Coming Soon)

1. Open VS Code
2. Go to Extensions (Cmd/Ctrl+Shift+X)
3. Search for "DevLens"
4. Click Install

### From VSIX File

1. Download the `.vsix` file from releases
2. Open VS Code
3. Go to Extensions
4. Click "..." menu → "Install from VSIX"
5. Select the downloaded file

### From Source

```bash
cd vscode-extension
npm install
npm run compile
code --install-extension devlens-1.0.0.vsix
```

## Quick Start

### 1. Open Command Palette
Press `Cmd/Ctrl+Shift+P`

### 2. Type "DevLens"
You'll see all available commands

### 3. Select a Command
For example: "DevLens: Review PR"

### 4. View Results
The prompt will be copied to your clipboard and your AI assistant will open

## Usage

### Review PR

1. Stage your changes: `git add .`
2. Run: `Cmd/Ctrl+Shift+R` or "DevLens: Review PR"
3. Paste the prompt into your AI assistant
4. Get comprehensive PR review

### Explain Repository

1. Open any project in VS Code
2. Run: `Cmd/Ctrl+Shift+E` or "DevLens: Explain Repository"
3. Paste the prompt into your AI assistant
4. Get complete repo documentation

### Explain Code

1. Select code in editor
2. Run: `Cmd/Ctrl+Shift+X` or "DevLens: Explain Code"
3. Paste the prompt into your AI assistant
4. Get detailed explanation

### Other Commands

Access all commands via:
- **Command Palette**: `Cmd/Ctrl+Shift+P` → "DevLens"
- **Sidebar**: Click DevLens icon in Activity Bar
- **Context Menu**: Right-click selected code

## Keyboard Shortcuts

| Command | Windows/Linux | macOS |
|---------|---------------|-------|
| Review PR | `Ctrl+Shift+R` | `Cmd+Shift+R` |
| Explain Repo | `Ctrl+Shift+E` | `Cmd+Shift+E` |
| Explain Code | `Ctrl+Shift+X` | `Cmd+Shift+X` |

## Configuration

Open Settings (Cmd/Ctrl+,) and search for "DevLens":

### AI Provider
Choose your AI assistant:
- GitHub Copilot (default)
- Cursor
- Cody
- Claude
- Custom

```json
{
  "devlens.aiProvider": "copilot"
}
```

### Output Directory
Where to save analysis reports:

```json
{
  "devlens.outputDirectory": "devlens-output"
}
```

### Auto Save
Automatically save reports:

```json
{
  "devlens.autoSave": true
}
```

### Notifications
Show completion notifications:

```json
{
  "devlens.showNotifications": true
}
```

## AI Provider Setup

### GitHub Copilot
1. Install GitHub Copilot extension
2. Sign in to GitHub
3. DevLens will open Copilot Chat automatically

### Cursor
1. Open Cursor
2. DevLens will copy prompt to clipboard
3. Paste into Cursor AI chat (Cmd/Ctrl+L)

### Cody
1. Install Cody extension
2. Sign in to Sourcegraph
3. DevLens will open Cody chat automatically

### Claude
1. DevLens copies prompt to clipboard
2. Open Claude (web or desktop)
3. Paste and run

### Custom
1. Set `devlens.aiProvider` to "custom"
2. DevLens copies prompt to clipboard
3. Use with any AI assistant

## Examples

### Example 1: PR Review

```bash
# Make changes
git add src/auth.ts

# Run DevLens
Cmd/Ctrl+Shift+R

# Get review with:
# - Suggested PR title
# - Risk score
# - Potential bugs
# - Missing tests
# - Security concerns
```

### Example 2: Security Audit

```bash
# Open Command Palette
Cmd/Ctrl+Shift+P

# Type: DevLens: Security Audit

# Get report with:
# - Vulnerabilities found
# - Security score
# - Fix recommendations
# - Dependency issues
```

### Example 3: Explain Code

```typescript
// Select this function
function processPayment(amount: number) {
  // complex logic here
}

// Right-click → DevLens: Explain Code

// Get explanation of:
// - What it does
// - How it works
// - Potential issues
// - Improvements
```

## Output

All analysis reports are saved to:
```
your-project/
└── devlens-output/
    ├── pr-review-2024-01-15.md
    ├── security-audit-2024-01-15.md
    └── repo-explainer-2024-01-15.md
```

Open output folder: "DevLens: Open Output Folder"

## Sidebar

Click the DevLens icon in the Activity Bar to see:

### Commands Panel
- Quick access to all 12 commands
- Click any command to run it

### History Panel (Coming Soon)
- View past analyses
- Re-run previous commands
- Export reports

## Troubleshooting

### "No workspace folder found"
**Solution:** Open a project folder in VS Code

### "No staged changes found"
**Solution:** Stage your changes with `git add`

### "AI provider not responding"
**Solution:** 
1. Check AI extension is installed
2. Verify you're signed in
3. Try copying prompt manually

### "Prompt not working"
**Solution:**
1. Ensure prompt files exist in `prompts/` directory
2. Check file permissions
3. Reinstall extension

## Requirements

- VS Code 1.80.0 or higher
- Git (for PR review and commit generation)
- One of:
  - GitHub Copilot extension
  - Cursor IDE
  - Cody extension
  - Claude access
  - Any AI coding assistant

## Extension Settings

This extension contributes the following settings:

* `devlens.aiProvider`: AI provider to use
* `devlens.outputDirectory`: Output directory for reports
* `devlens.autoSave`: Auto-save analysis reports
* `devlens.showNotifications`: Show completion notifications
* `devlens.customPromptPath`: Path to custom prompts

## Known Issues

- Some AI providers may have context window limitations
- Large repositories may take longer to analyze
- Manual file upload needed for Claude web version

## Release Notes

### 1.0.0

Initial release:
- 12 analysis commands
- Multi-AI provider support
- Keyboard shortcuts
- Sidebar integration
- Output management
- Customizable settings

## Contributing

Found a bug or have a feature request?

1. Visit [GitHub Issues](https://github.com/yourusername/devlens/issues)
2. Search existing issues
3. Create new issue with details

Want to contribute code?

1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## Support

- **Documentation**: [DevLens Docs](https://github.com/yourusername/devlens)
- **Issues**: [GitHub Issues](https://github.com/yourusername/devlens/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/devlens/discussions)

## License

MIT License - see [LICENSE](LICENSE) file

## Credits

Built with ❤️ for developers using AI coding assistants.

Powered by:
- IBM Bob IDE concepts
- VS Code Extension API
- TypeScript
- Simple Git

---

**Enjoy using DevLens!** 🚀

If you find it useful, please:
- ⭐ Star the repo
- 📢 Share with your team
- 🐛 Report bugs
- 💡 Suggest features
# DevLens Universal Prompts

This directory contains universal prompt templates that work with any AI coding assistant (Claude, Cursor, Windsurf, Cody, GitHub Copilot Chat, etc.).

## How to Use

### In Claude / Claude Code Editor
1. Copy the content from any `.md` file in this directory
2. Paste it into Claude's chat
3. Claude will analyze your codebase and generate the report

### In Cursor
1. Open Cursor's AI chat (Cmd/Ctrl + L)
2. Copy and paste the prompt from any `.md` file
3. Cursor will analyze your code with full context

### In Windsurf (Codeium)
1. Open Windsurf's AI panel
2. Paste the prompt from any `.md` file
3. Windsurf will generate the analysis

### In VS Code with Copilot Chat
1. Open GitHub Copilot Chat
2. Paste the prompt
3. Copilot will analyze your code

### In Any AI Editor
These prompts are designed to work with any AI that has:
- Access to your codebase
- Ability to read multiple files
- Context awareness

## Available Prompts

1. `review-pr.md` - PR Code Review
2. `explain-repo.md` - Repository Documentation
3. `security-audit.md` - Security Vulnerability Scan
4. `test-coverage.md` - Test Coverage Analysis
5. `performance-check.md` - Performance Analysis
6. `suggest-refactor.md` - Refactoring Suggestions
7. `explain-code.md` - Code Explanation
8. `generate-commit.md` - Commit Message Generation
9. `scan-dependencies.md` - Dependency Vulnerability Scan
10. `api-design.md` - API Design Review
11. `database-review.md` - Database Schema Analysis
12. `error-handling.md` - Error Handling Analysis

## Quick Start

```bash
# 1. Navigate to your project
cd your-project

# 2. Copy DevLens prompts
cp -r path/to/devlens/prompts .devlens

# 3. Open your AI editor and use any prompt!
```

## Format

Each prompt file contains:
- Clear instructions for the AI
- Expected output format
- Examples and best practices
- Specific analysis criteria

The AI will:
1. Read your codebase
2. Analyze according to the prompt
3. Generate a comprehensive report
4. Save it to `output/` directory (if supported)
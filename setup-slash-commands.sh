#!/bin/bash

# DevLens Slash Commands Setup Script
# This script sets up slash commands for your AI editor

echo "🚀 DevLens Slash Commands Setup"
echo "================================"
echo ""

# Detect current directory
if [ ! -d ".git" ]; then
    echo "⚠️  Warning: Not in a git repository root"
    echo "   Run this script from your project root directory"
    echo ""
fi

# Create .devlens directory if it doesn't exist
if [ ! -d ".devlens" ]; then
    echo "📁 Creating .devlens directory..."
    mkdir -p .devlens/prompts
    mkdir -p .devlens/output
fi

# Copy DevLens files
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "📋 Copying DevLens configuration files..."

# Copy prompts
if [ -d "$SCRIPT_DIR/prompts" ]; then
    cp -r "$SCRIPT_DIR/prompts/"* .devlens/prompts/ 2>/dev/null || true
    echo "   ✅ Prompts copied to .devlens/prompts/"
fi

# Copy .cursorrules for Cursor
if [ -f "$SCRIPT_DIR/.cursorrules" ]; then
    cp "$SCRIPT_DIR/.cursorrules" .cursorrules
    echo "   ✅ Cursor rules copied to .cursorrules"
fi

# Copy Cody configuration
if [ -f "$SCRIPT_DIR/.vscode/cody.json" ]; then
    mkdir -p .vscode
    cp "$SCRIPT_DIR/.vscode/cody.json" .vscode/cody.json
    echo "   ✅ Cody commands copied to .vscode/cody.json"
fi

# Copy VS Code settings
if [ -f "$SCRIPT_DIR/.vscode/settings.json" ]; then
    mkdir -p .vscode
    if [ -f ".vscode/settings.json" ]; then
        echo "   ⚠️  .vscode/settings.json already exists"
        echo "   📝 Merge DevLens settings manually from:"
        echo "      $SCRIPT_DIR/.vscode/settings.json"
    else
        cp "$SCRIPT_DIR/.vscode/settings.json" .vscode/settings.json
        echo "   ✅ VS Code settings copied to .vscode/settings.json"
    fi
fi

# Create .gitignore for .devlens
cat > .devlens/.gitignore << 'EOF'
output/
*.log
.DS_Store
EOF
echo "   ✅ Created .devlens/.gitignore"

echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 Available Slash Commands:"
echo "   /review-pr          - PR code review"
echo "   /explain-repo       - Repository documentation"
echo "   /security-audit     - Security vulnerability scan"
echo "   /test-coverage      - Test coverage analysis"
echo "   /performance-check  - Performance optimization"
echo "   /suggest-refactor   - Refactoring suggestions"
echo "   /explain-code       - Code explanation"
echo "   /generate-commit    - Commit message generation"
echo "   /scan-dependencies  - Dependency vulnerability scan"
echo "   /api-design         - API design review"
echo "   /database-review    - Database schema analysis"
echo "   /error-handling     - Error handling review"
echo ""
echo "🎯 How to Use:"
echo ""
echo "   Cursor:"
echo "   1. Open Cursor AI chat (Cmd/Ctrl+L)"
echo "   2. Type: /review-pr"
echo "   3. Cursor will automatically execute the command!"
echo ""
echo "   Cody (VS Code):"
echo "   1. Open Cody chat"
echo "   2. Type: /devlens-review-pr"
echo "   3. Or use Command Palette: 'Cody: DevLens Review PR'"
echo ""
echo "   GitHub Copilot:"
echo "   1. Open Copilot Chat (Cmd/Ctrl+I)"
echo "   2. Type: /review-pr"
echo "   3. Copilot will use DevLens instructions"
echo ""
echo "   Windsurf:"
echo "   1. Open Windsurf AI panel"
echo "   2. Type: /review-pr"
echo "   3. Windsurf will execute the command"
echo ""
echo "📖 Full documentation: .devlens/prompts/README.md"
echo ""
echo "🎉 Happy coding with DevLens!"

# Made with Bob

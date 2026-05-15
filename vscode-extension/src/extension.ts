import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import simpleGit, { SimpleGit } from 'simple-git';

let outputChannel: vscode.OutputChannel;
let git: SimpleGit;

export function activate(context: vscode.ExtensionContext) {
    console.log('DevLens extension is now active!');

    // Initialize output channel
    outputChannel = vscode.window.createOutputChannel('DevLens');
    
    // Initialize git
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (workspaceFolder) {
        git = simpleGit(workspaceFolder.uri.fsPath);
    }

    // Register all commands
    const commands = [
        { id: 'devlens.reviewPR', handler: reviewPR, name: 'Review PR' },
        { id: 'devlens.explainRepo', handler: explainRepo, name: 'Explain Repository' },
        { id: 'devlens.securityAudit', handler: securityAudit, name: 'Security Audit' },
        { id: 'devlens.testCoverage', handler: testCoverage, name: 'Test Coverage' },
        { id: 'devlens.performanceCheck', handler: performanceCheck, name: 'Performance Check' },
        { id: 'devlens.suggestRefactor', handler: suggestRefactor, name: 'Suggest Refactor' },
        { id: 'devlens.explainCode', handler: explainCode, name: 'Explain Code' },
        { id: 'devlens.generateCommit', handler: generateCommit, name: 'Generate Commit' },
        { id: 'devlens.scanDependencies', handler: scanDependencies, name: 'Scan Dependencies' },
        { id: 'devlens.apiDesign', handler: apiDesign, name: 'API Design Review' },
        { id: 'devlens.databaseReview', handler: databaseReview, name: 'Database Review' },
        { id: 'devlens.errorHandling', handler: errorHandling, name: 'Error Handling' },
        { id: 'devlens.openOutput', handler: openOutput, name: 'Open Output' },
        { id: 'devlens.configure', handler: configure, name: 'Configure' }
    ];

    commands.forEach(cmd => {
        const disposable = vscode.commands.registerCommand(cmd.id, () => cmd.handler(cmd.name));
        context.subscriptions.push(disposable);
    });

    // Register tree view provider
    const treeDataProvider = new DevLensTreeDataProvider();
    vscode.window.registerTreeDataProvider('devlensExplorer', treeDataProvider);

    // Show welcome message
    vscode.window.showInformationMessage('DevLens is ready! Use Cmd/Ctrl+Shift+P and type "DevLens" to get started.');
}

export function deactivate() {
    if (outputChannel) {
        outputChannel.dispose();
    }
}

// Command Handlers

async function reviewPR(commandName: string) {
    await executeDevLensCommand(commandName, 'review-pr', async () => {
        // Get git diff
        const diff = await git.diff(['--staged']);
        if (!diff) {
            vscode.window.showWarningMessage('No staged changes found. Stage your changes first with git add.');
            return null;
        }
        return { diff };
    });
}

async function explainRepo(commandName: string) {
    await executeDevLensCommand(commandName, 'explain-repo', async () => {
        // Get repository structure
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            return null;
        }
        return { workspacePath: workspaceFolder.uri.fsPath };
    });
}

async function securityAudit(commandName: string) {
    await executeDevLensCommand(commandName, 'security-audit');
}

async function testCoverage(commandName: string) {
    await executeDevLensCommand(commandName, 'test-coverage');
}

async function performanceCheck(commandName: string) {
    await executeDevLensCommand(commandName, 'performance-check');
}

async function suggestRefactor(commandName: string) {
    await executeDevLensCommand(commandName, 'suggest-refactor');
}

async function explainCode(commandName: string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found.');
        return;
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    
    if (!selectedText) {
        vscode.window.showWarningMessage('Please select some code first.');
        return;
    }

    await executeDevLensCommand(commandName, 'explain-code', async () => {
        return {
            code: selectedText,
            fileName: path.basename(editor.document.fileName),
            language: editor.document.languageId
        };
    });
}

async function generateCommit(commandName: string) {
    await executeDevLensCommand(commandName, 'generate-commit', async () => {
        const diff = await git.diff(['--staged']);
        if (!diff) {
            vscode.window.showWarningMessage('No staged changes found.');
            return null;
        }
        return { diff };
    });
}

async function scanDependencies(commandName: string) {
    await executeDevLensCommand(commandName, 'scan-dependencies');
}

async function apiDesign(commandName: string) {
    await executeDevLensCommand(commandName, 'api-design');
}

async function databaseReview(commandName: string) {
    await executeDevLensCommand(commandName, 'database-review');
}

async function errorHandling(commandName: string) {
    await executeDevLensCommand(commandName, 'error-handling');
}

async function openOutput() {
    const config = vscode.workspace.getConfiguration('devlens');
    const outputDir = config.get<string>('outputDirectory', 'devlens-output');
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    
    if (!workspaceFolder) {
        vscode.window.showWarningMessage('No workspace folder found.');
        return;
    }

    const outputPath = path.join(workspaceFolder.uri.fsPath, outputDir);
    
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    const uri = vscode.Uri.file(outputPath);
    await vscode.commands.executeCommand('revealFileInOS', uri);
}

async function configure() {
    await vscode.commands.executeCommand('workbench.action.openSettings', 'devlens');
}

// Core execution function
async function executeDevLensCommand(
    commandName: string,
    promptFile: string,
    contextProvider?: () => Promise<any>
) {
    try {
        outputChannel.show();
        outputChannel.appendLine(`\n${'='.repeat(60)}`);
        outputChannel.appendLine(`DevLens: ${commandName}`);
        outputChannel.appendLine(`Started: ${new Date().toLocaleString()}`);
        outputChannel.appendLine('='.repeat(60));

        // Get workspace folder
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder found. Please open a project first.');
            return;
        }

        // Get additional context if provider exists
        let context = {};
        if (contextProvider) {
            const result = await contextProvider();
            if (result === null) {
                return; // Context provider indicated we should abort
            }
            context = result;
        }

        // Load prompt template
        const promptPath = path.join(__dirname, '..', '..', 'prompts', `${promptFile}.md`);
        let promptContent = '';
        
        if (fs.existsSync(promptPath)) {
            promptContent = fs.readFileSync(promptPath, 'utf-8');
        } else {
            vscode.window.showErrorMessage(`Prompt file not found: ${promptFile}.md`);
            return;
        }

        // Get AI provider configuration
        const config = vscode.workspace.getConfiguration('devlens');
        const aiProvider = config.get<string>('aiProvider', 'copilot');

        outputChannel.appendLine(`\nAI Provider: ${aiProvider}`);
        outputChannel.appendLine(`Prompt: ${promptFile}.md`);
        
        // Show prompt in output
        outputChannel.appendLine('\n--- PROMPT ---');
        outputChannel.appendLine(promptContent.substring(0, 500) + '...');
        outputChannel.appendLine('--- END PROMPT ---\n');

        // Open AI chat based on provider
        await openAIChat(aiProvider, promptContent, context);

        // Show completion message
        const autoSave = config.get<boolean>('autoSave', true);
        const showNotifications = config.get<boolean>('showNotifications', true);

        if (showNotifications) {
            const message = autoSave 
                ? `${commandName} prompt sent to AI. Results will be saved automatically.`
                : `${commandName} prompt sent to AI. Copy the results manually.`;
            
            vscode.window.showInformationMessage(message, 'View Output').then(selection => {
                if (selection === 'View Output') {
                    outputChannel.show();
                }
            });
        }

        outputChannel.appendLine(`\nCompleted: ${new Date().toLocaleString()}`);
        outputChannel.appendLine('='.repeat(60));

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        outputChannel.appendLine(`\nERROR: ${errorMessage}`);
        vscode.window.showErrorMessage(`DevLens error: ${errorMessage}`);
    }
}

async function openAIChat(provider: string, prompt: string, context: any) {
    switch (provider) {
        case 'copilot':
            // Open GitHub Copilot Chat
            await vscode.commands.executeCommand('workbench.action.chat.open');
            // Copy prompt to clipboard
            await vscode.env.clipboard.writeText(prompt);
            vscode.window.showInformationMessage('Prompt copied to clipboard. Paste it into Copilot Chat.');
            break;

        case 'cursor':
            // For Cursor, just copy to clipboard
            await vscode.env.clipboard.writeText(prompt);
            vscode.window.showInformationMessage('Prompt copied to clipboard. Paste it into Cursor AI chat (Cmd/Ctrl+L).');
            break;

        case 'cody':
            // Open Cody chat
            try {
                await vscode.commands.executeCommand('cody.chat.open');
                await vscode.env.clipboard.writeText(prompt);
                vscode.window.showInformationMessage('Prompt copied to clipboard. Paste it into Cody chat.');
            } catch {
                await vscode.env.clipboard.writeText(prompt);
                vscode.window.showInformationMessage('Cody not found. Prompt copied to clipboard.');
            }
            break;

        case 'claude':
        case 'custom':
        default:
            // Just copy to clipboard
            await vscode.env.clipboard.writeText(prompt);
            vscode.window.showInformationMessage('Prompt copied to clipboard. Paste it into your AI assistant.');
            break;
    }
}

// Tree View Provider
class DevLensTreeDataProvider implements vscode.TreeDataProvider<DevLensItem> {
    getTreeItem(element: DevLensItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: DevLensItem): Thenable<DevLensItem[]> {
        if (!element) {
            // Root level - show all commands
            return Promise.resolve([
                new DevLensItem('Review PR', 'devlens.reviewPR', 'git-pull-request', 'Review staged changes'),
                new DevLensItem('Explain Repository', 'devlens.explainRepo', 'book', 'Generate repo documentation'),
                new DevLensItem('Security Audit', 'devlens.securityAudit', 'shield', 'Scan for vulnerabilities'),
                new DevLensItem('Test Coverage', 'devlens.testCoverage', 'beaker', 'Analyze test coverage'),
                new DevLensItem('Performance Check', 'devlens.performanceCheck', 'dashboard', 'Check performance'),
                new DevLensItem('Suggest Refactor', 'devlens.suggestRefactor', 'wrench', 'Get refactoring suggestions'),
                new DevLensItem('Explain Code', 'devlens.explainCode', 'question', 'Explain selected code'),
                new DevLensItem('Generate Commit', 'devlens.generateCommit', 'git-commit', 'Generate commit message'),
                new DevLensItem('Scan Dependencies', 'devlens.scanDependencies', 'package', 'Check dependencies'),
                new DevLensItem('API Design Review', 'devlens.apiDesign', 'globe', 'Review API design'),
                new DevLensItem('Database Review', 'devlens.databaseReview', 'database', 'Review database schema'),
                new DevLensItem('Error Handling', 'devlens.errorHandling', 'warning', 'Analyze error handling')
            ]);
        }
        return Promise.resolve([]);
    }
}

class DevLensItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly command: string,
        public readonly icon: string,
        public readonly tooltip: string
    ) {
        super(label, vscode.TreeItemCollapsibleState.None);
        this.tooltip = tooltip;
        this.iconPath = new vscode.ThemeIcon(icon);
        this.command = {
            command: command,
            title: label
        };
    }
}

// Made with Bob

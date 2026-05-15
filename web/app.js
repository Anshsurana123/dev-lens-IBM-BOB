// DevLens Web App - Google AI Studio Integration

// Configuration
const CONFIG = {
    API_KEY: 'YOUR_GOOGLE_AI_STUDIO_API_KEY', // Replace with your API key
    API_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    MAX_CHARS: 50000,
    FREE_DAILY_LIMIT: 10
};

// State
let currentAnalysisType = 'review';
let analysisCount = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeAnalysisButtons();
    initializeCodeInput();
    loadAnalysisCount();

// Mode switching
function switchMode(mode) {
    const tabs = document.querySelectorAll('.mode-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    
    if (mode === 'code') {
        document.getElementById('codeMode').style.display = 'block';
        document.getElementById('repoMode').style.display = 'none';
    } else {
        document.getElementById('codeMode').style.display = 'none';
        document.getElementById('repoMode').style.display = 'block';
    }
}

// GitHub Repository Analysis
async function analyzeRepo() {
    const repoUrl = document.getElementById('repoInput').value.trim();
    
    // Validation
    if (!repoUrl) {
        showRepoError('Please enter a GitHub repository URL');
        return;
    }
    
    if (!isValidGitHubUrl(repoUrl)) {
        showRepoError('Please enter a valid GitHub repository URL (e.g., https://github.com/username/repo)');
        return;
    }
    
    // Check daily limit
    if (!checkDailyLimit()) {
        showRepoError('Daily limit reached (10 analyses). Upgrade to Pro for unlimited analyses.');
        return;
    }
    
    // Show loading state
    showRepoLoading();
    hideRepoError();
    hideRepoResults();
    
    try {
        // Parse GitHub URL
        const { owner, repo } = parseGitHubUrl(repoUrl);
        
        // Get repository data from GitHub API
        const repoData = await fetchGitHubRepo(owner, repo);
        
        // Get options
        const includeReadme = document.getElementById('includeReadme').checked;
        const includeStructure = document.getElementById('includeStructure').checked;
        const includeDependencies = document.getElementById('includeDependencies').checked;
        
        // Build analysis prompt
        const prompt = buildRepoAnalysisPrompt(repoData, {
            includeReadme,
            includeStructure,
            includeDependencies
        });
        
        // Call Google AI
        const result = await callGoogleAI(prompt);
        
        // Display results
        showRepoResults(result);
        
        // Increment analysis count
        incrementAnalysisCount();
        
    } catch (error) {
        console.error('Repository analysis error:', error);
        showRepoError(error.message || 'Failed to analyze repository. Please check the URL and try again.');
    } finally {
        hideRepoLoading();
    }
}

function isValidGitHubUrl(url) {
    const githubPattern = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/;
    return githubPattern.test(url);
}

function parseGitHubUrl(url) {
    const match = url.match(/github\.com\/([\w-]+)\/([\w.-]+)/);
    if (!match) throw new Error('Invalid GitHub URL');
    return {
        owner: match[1],
        repo: match[2].replace(/\.git$/, '')
    };
}

async function fetchGitHubRepo(owner, repo) {
    try {
        // Fetch repository info
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) {
            if (repoResponse.status === 404) {
                throw new Error('Repository not found. Make sure it\'s public.');
            }
            throw new Error(`GitHub API error: ${repoResponse.status}`);
        }
        const repoInfo = await repoResponse.json();
        
        // Fetch README
        let readme = null;
        try {
            const readmeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
            if (readmeResponse.ok) {
                const readmeData = await readmeResponse.json();
                readme = atob(readmeData.content);
            }
        } catch (e) {
            console.log('No README found');
        }
        
        // Fetch directory structure
        const contentsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);
        const contents = contentsResponse.ok ? await contentsResponse.json() : [];
        
        // Fetch languages
        const languagesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
        const languages = languagesResponse.ok ? await languagesResponse.json() : {};
        
        return {
            name: repoInfo.name,
            fullName: repoInfo.full_name,
            description: repoInfo.description,
            language: repoInfo.language,
            languages: languages,
            stars: repoInfo.stargazers_count,
            forks: repoInfo.forks_count,
            openIssues: repoInfo.open_issues_count,
            createdAt: repoInfo.created_at,
            updatedAt: repoInfo.updated_at,
            size: repoInfo.size,
            defaultBranch: repoInfo.default_branch,
            topics: repoInfo.topics || [],
            readme: readme,
            contents: contents,
            url: repoInfo.html_url
        };
    } catch (error) {
        throw new Error(`Failed to fetch repository: ${error.message}`);
    }
}

function buildRepoAnalysisPrompt(repoData, options) {
    let prompt = `You are a senior software architect. Analyze this GitHub repository and provide a comprehensive "Repo Bible":

# Repository: ${repoData.fullName}

## Basic Information
- **Description**: ${repoData.description || 'No description'}
- **Primary Language**: ${repoData.language || 'Not specified'}
- **Stars**: ${repoData.stars}
- **Forks**: ${repoData.forks}
- **Open Issues**: ${repoData.openIssues}
- **Created**: ${new Date(repoData.createdAt).toLocaleDateString()}
- **Last Updated**: ${new Date(repoData.updatedAt).toLocaleDateString()}
- **Topics**: ${repoData.topics.join(', ') || 'None'}

## Languages Used
${Object.entries(repoData.languages).map(([lang, bytes]) => `- ${lang}: ${(bytes / 1024).toFixed(2)} KB`).join('\n')}

`;

    if (options.includeReadme && repoData.readme) {
        prompt += `\n## README Content\n\`\`\`\n${repoData.readme.substring(0, 3000)}\n\`\`\`\n`;
    }

    if (options.includeStructure && repoData.contents.length > 0) {
        prompt += `\n## Directory Structure\n`;
        repoData.contents.forEach(item => {
            prompt += `- ${item.type === 'dir' ? '📁' : '📄'} ${item.name}\n`;
        });
    }

    prompt += `\n\nProvide a comprehensive analysis including:

1. **🎯 What This Project Does** (one paragraph plain English)
2. **🛠️ Tech Stack** (detected languages, frameworks, tools)
3. **🏗️ Architecture Overview** (how components connect)
4. **📁 Project Structure** (what each folder/file does)
5. **🔄 Data Flow** (how data moves through the app)
6. **⭐ Key Files** (top 5 most important files and why)
7. **⚠️ Complexity Warnings** (confusing or risky parts)
8. **🚀 Getting Started** (how to run and contribute)
9. **💡 Suggested Improvements** (what could be better)
10. **🎓 Learning Opportunities** (what developers can learn)

Format the output in markdown with clear sections and emoji indicators.`;

    return prompt;
}

// Show/hide functions for repo mode
function showRepoLoading() {
    document.getElementById('repoSpinner').style.display = 'inline-block';
    document.getElementById('analyzeRepoText').textContent = 'Analyzing Repository...';
    document.querySelector('#repoMode .btn-analyze').disabled = true;
    document.getElementById('repoStatus').textContent = 'Fetching repository data...';
}

function hideRepoLoading() {
    document.getElementById('repoSpinner').style.display = 'none';
    document.getElementById('analyzeRepoText').textContent = 'Analyze Repository';
    document.querySelector('#repoMode .btn-analyze').disabled = false;
    document.getElementById('repoStatus').textContent = 'Enter a GitHub repository URL';
}

function showRepoResults(content) {
    const resultsSection = document.getElementById('repoResultsSection');
    const resultsContent = document.getElementById('repoResultsContent');
    
    const htmlContent = formatMarkdown(content);
    resultsContent.innerHTML = htmlContent;
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideRepoResults() {
    document.getElementById('repoResultsSection').style.display = 'none';
}

function showRepoError(message) {
    const errorSection = document.getElementById('repoErrorSection');
    const errorMessage = document.getElementById('repoErrorMessage');
    
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
    errorSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideRepoError() {
    document.getElementById('repoErrorSection').style.display = 'none';
}

function copyRepoResults() {
    const resultsContent = document.getElementById('repoResultsContent');
    const text = resultsContent.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Repository analysis copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function downloadRepoResults() {
    const resultsContent = document.getElementById('repoResultsContent');
    const text = resultsContent.innerText;
    const repoUrl = document.getElementById('repoInput').value;
    const repoName = repoUrl.split('/').pop() || 'repository';
    
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devlens-${repoName}-analysis-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

});

// Analysis button handlers
function initializeAnalysisButtons() {
    const buttons = document.querySelectorAll('.analysis-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAnalysisType = btn.dataset.type;
        });
    });
}

// Code input handlers
function initializeCodeInput() {
    const textarea = document.getElementById('codeInput');
    const charCount = document.getElementById('charCount');
    
    textarea.addEventListener('input', () => {
        const count = textarea.value.length;
        charCount.textContent = `${count.toLocaleString()} characters`;
        
        if (count > CONFIG.MAX_CHARS) {
            charCount.style.color = 'var(--danger)';
        } else {
            charCount.style.color = 'var(--gray)';
        }
    });
}

// Scroll to analyzer
function scrollToAnalyzer() {
    document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' });
}

// Clear code
function clearCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('charCount').textContent = '0 characters';
    hideResults();
    hideError();
}

// Main analysis function
async function analyzeCode() {
    const code = document.getElementById('codeInput').value.trim();
    const language = document.getElementById('languageSelect').value;
    
    // Validation
    if (!code) {
        showError('Please paste some code to analyze');
        return;
    }
    
    if (code.length > CONFIG.MAX_CHARS) {
        showError(`Code is too long. Maximum ${CONFIG.MAX_CHARS.toLocaleString()} characters allowed.`);
        return;
    }
    
    // Check daily limit
    if (!checkDailyLimit()) {
        showError('Daily limit reached (10 analyses). Upgrade to Pro for unlimited analyses.');
        return;
    }
    
    // Show loading state
    showLoading();
    hideError();
    hideResults();
    
    try {
        // Get analysis prompt based on type
        const prompt = getAnalysisPrompt(currentAnalysisType, code, language);
        
        // Call Google AI Studio API
        const result = await callGoogleAI(prompt);
        
        // Display results
        showResults(result);
        
        // Increment analysis count
        incrementAnalysisCount();
        
    } catch (error) {
        console.error('Analysis error:', error);
        showError(error.message || 'An error occurred during analysis. Please try again.');
    } finally {
        hideLoading();
    }
}

// Get analysis prompt based on type
function getAnalysisPrompt(type, code, language) {
    const prompts = {
        review: `You are a senior software engineer conducting a code review. Analyze this ${language} code and provide:

1. **Code Quality Score**: Rate from 1-10 with justification
2. **Strengths**: What's done well
3. **Issues Found**: Bugs, code smells, anti-patterns
4. **Security Concerns**: Potential vulnerabilities
5. **Performance Issues**: Bottlenecks and optimizations
6. **Best Practices**: What could be improved
7. **Refactoring Suggestions**: Specific improvements with code examples

Code to review:
\`\`\`${language}
${code}
\`\`\`

Provide detailed, actionable feedback with specific line references where applicable.`,

        security: `You are a security expert. Perform a comprehensive security audit of this ${language} code:

1. **Security Score**: Rate from 1-10
2. **Critical Vulnerabilities**: OWASP Top 10 issues
3. **Authentication/Authorization**: Flaws and recommendations
4. **Input Validation**: Missing or weak validation
5. **Data Exposure**: Sensitive data handling issues
6. **Injection Risks**: SQL, XSS, Command injection
7. **Cryptography**: Weak algorithms or implementations
8. **Secure Code Examples**: How to fix each issue

Code to audit:
\`\`\`${language}
${code}
\`\`\`

Be specific about vulnerabilities and provide secure alternatives.`,

        explain: `You are a technical educator. Explain this ${language} code in plain English:

1. **Overview**: What does this code do in one sentence
2. **Step-by-Step Breakdown**: Explain each part
3. **Key Concepts**: Important programming concepts used
4. **Design Patterns**: Any patterns identified
5. **Algorithm Analysis**: Time and space complexity
6. **Real-World Analogy**: Explain using everyday examples
7. **Learning Resources**: Where to learn more

Code to explain:
\`\`\`${language}
${code}
\`\`\`

Make it understandable for developers at all levels.`,

        test: `You are a testing expert. Analyze test coverage for this ${language} code:

1. **Coverage Assessment**: What's tested vs untested
2. **Missing Test Cases**: Specific functions/methods that need tests
3. **Edge Cases**: Scenarios not covered
4. **Test Examples**: Write 3-5 actual test cases
5. **Testing Strategy**: Unit, integration, e2e recommendations
6. **Mocking Needs**: What should be mocked
7. **Test Quality**: How to improve existing tests

Code to analyze:
\`\`\`${language}
${code}
\`\`\`

Provide ready-to-use test code examples.`,

        performance: `You are a performance optimization expert. Analyze this ${language} code:

1. **Performance Score**: Rate from 1-10
2. **Algorithm Complexity**: Big O analysis
3. **Bottlenecks**: Specific performance issues
4. **Memory Usage**: Memory leaks or inefficiencies
5. **Database Queries**: N+1 queries, missing indexes
6. **Optimization Suggestions**: Specific improvements
7. **Optimized Code**: Rewrite critical sections

Code to optimize:
\`\`\`${language}
${code}
\`\`\`

Focus on measurable performance improvements.`,

        refactor: `You are a code quality expert. Suggest refactoring for this ${language} code:

1. **Refactoring Score**: Current code quality 1-10
2. **Code Smells**: Specific issues identified
3. **SOLID Principles**: Violations and fixes
4. **DRY Violations**: Duplicated code
5. **Complexity**: Functions that are too complex
6. **Naming**: Better variable/function names
7. **Refactored Code**: Show improved version

Code to refactor:
\`\`\`${language}
${code}
\`\`\`

Provide before/after code examples for each suggestion.`
    };
    
    return prompts[type] || prompts.review;
}

// Call Google AI Studio API
async function callGoogleAI(prompt) {
    // Check if API key is configured
    if (CONFIG.API_KEY === 'YOUR_GOOGLE_AI_STUDIO_API_KEY') {
        // Return mock response for demo
        return getMockResponse(currentAnalysisType);
    }
    
    const response = await fetch(`${CONFIG.API_ENDPOINT}?key=${CONFIG.API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
            }
        })
    });
    
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid API response');
    }
    
    return data.candidates[0].content.parts[0].text;
}

// Mock response for demo (when API key not configured)
function getMockResponse(type) {
    const responses = {
        review: `# 🔍 Code Review Results

## Code Quality Score: 7/10

### ✅ Strengths
- Clean and readable code structure
- Good variable naming conventions
- Proper use of modern JavaScript features

### ⚠️ Issues Found

#### 1. Missing Input Validation
**Severity:** High
**Location:** Function parameter
**Issue:** No validation for the \`items\` parameter
**Fix:**
\`\`\`javascript
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    // ... rest of code
}
\`\`\`

#### 2. No Error Handling
**Severity:** Medium
**Issue:** Function doesn't handle edge cases
**Fix:** Add try-catch and validate item properties

### 🔒 Security Concerns
- No input sanitization
- Potential for injection if items come from user input

### ⚡ Performance Issues
- Using traditional for loop instead of reduce
- Could be optimized for large arrays

### 💡 Refactoring Suggestions

**Current Code:**
\`\`\`javascript
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.quantity;
    }
    return total;
}
\`\`\`

**Improved Code:**
\`\`\`javascript
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    
    return items.reduce((total, item) => {
        if (!item.price || !item.quantity) {
            throw new Error('Invalid item: missing price or quantity');
        }
        return total + (item.price * item.quantity);
    }, 0);
}
\`\`\`

### 📋 Recommendations
1. Add input validation
2. Implement error handling
3. Add JSDoc comments
4. Write unit tests
5. Consider using TypeScript for type safety`,

        security: `# 🔒 Security Audit Results

## Security Score: 5/10

### 🚨 Critical Vulnerabilities

#### 1. No Input Validation
**Severity:** Critical
**OWASP:** A03:2021 - Injection
**Risk:** Malicious data could cause unexpected behavior
**Fix:**
\`\`\`javascript
function calculateTotal(items) {
    // Validate input
    if (!Array.isArray(items)) {
        throw new SecurityError('Invalid input type');
    }
    
    // Validate each item
    items.forEach(item => {
        if (typeof item.price !== 'number' || item.price < 0) {
            throw new SecurityError('Invalid price');
        }
        if (typeof item.quantity !== 'number' || item.quantity < 0) {
            throw new SecurityError('Invalid quantity');
        }
    });
    
    // ... rest of code
}
\`\`\`

#### 2. No Rate Limiting
**Severity:** High
**Risk:** Function could be called repeatedly causing DoS
**Recommendation:** Implement rate limiting at API level

### ✅ Security Checklist
- [ ] Input validation implemented
- [ ] Error messages don't expose sensitive info
- [ ] Rate limiting in place
- [ ] Logging for security events
- [ ] Unit tests for security scenarios

### 🛡️ Best Practices
1. Always validate and sanitize inputs
2. Use TypeScript for type safety
3. Implement proper error handling
4. Add security tests
5. Use linting tools (ESLint security plugins)`,

        explain: `# 📖 Code Explanation

## Overview
This function calculates the total cost of items in a shopping cart by multiplying each item's price by its quantity and summing the results.

## Step-by-Step Breakdown

### 1. Function Declaration
\`\`\`javascript
function calculateTotal(items)
\`\`\`
- Declares a function named \`calculateTotal\`
- Takes one parameter: \`items\` (expected to be an array)

### 2. Initialize Total
\`\`\`javascript
let total = 0;
\`\`\`
- Creates a variable to store the running total
- Starts at 0

### 3. Loop Through Items
\`\`\`javascript
for (let item of items)
\`\`\`
- Uses a for...of loop to iterate through each item
- More readable than traditional for loop

### 4. Calculate and Add
\`\`\`javascript
total += item.price * item.quantity;
\`\`\`
- Multiplies price × quantity for current item
- Adds result to running total

### 5. Return Result
\`\`\`javascript
return total;
\`\`\`
- Returns the final calculated total

## Real-World Analogy
Think of this like a cashier at a grocery store:
1. They start with $0 (total = 0)
2. For each item you're buying (for...of loop)
3. They multiply the price by how many you're buying
4. They add that to your running total
5. Finally, they tell you the total amount

## Algorithm Analysis
- **Time Complexity:** O(n) - loops through array once
- **Space Complexity:** O(1) - only uses one variable

## Key Concepts
- **Iteration:** Looping through arrays
- **Accumulation:** Building up a total
- **Object Properties:** Accessing item.price and item.quantity`,

        test: `# 🧪 Test Coverage Analysis

## Coverage Assessment
**Current Coverage:** 0% (No tests found)
**Recommended Coverage:** 90%+

## Missing Test Cases

### 1. Happy Path Tests
\`\`\`javascript
describe('calculateTotal', () => {
    it('should calculate total for valid items', () => {
        const items = [
            { price: 10, quantity: 2 },
            { price: 5, quantity: 3 }
        ];
        expect(calculateTotal(items)).toBe(35);
    });
    
    it('should return 0 for empty array', () => {
        expect(calculateTotal([])).toBe(0);
    });
});
\`\`\`

### 2. Edge Case Tests
\`\`\`javascript
it('should handle single item', () => {
    const items = [{ price: 10, quantity: 1 }];
    expect(calculateTotal(items)).toBe(10);
});

it('should handle zero quantity', () => {
    const items = [{ price: 10, quantity: 0 }];
    expect(calculateTotal(items)).toBe(0);
});

it('should handle decimal prices', () => {
    const items = [{ price: 10.99, quantity: 2 }];
    expect(calculateTotal(items)).toBe(21.98);
});
\`\`\`

### 3. Error Case Tests
\`\`\`javascript
it('should throw error for null input', () => {
    expect(() => calculateTotal(null)).toThrow();
});

it('should throw error for non-array input', () => {
    expect(() => calculateTotal('invalid')).toThrow();
});

it('should throw error for missing price', () => {
    const items = [{ quantity: 2 }];
    expect(() => calculateTotal(items)).toThrow();
});
\`\`\`

## Testing Strategy
1. **Unit Tests:** Test function in isolation
2. **Integration Tests:** Test with real data
3. **Property Tests:** Test with random inputs
4. **Performance Tests:** Test with large arrays

## Test Quality Improvements
- Add descriptive test names
- Test one thing per test
- Use arrange-act-assert pattern
- Mock external dependencies
- Aim for 100% code coverage`,

        performance: `# ⚡ Performance Analysis

## Performance Score: 6/10

## Algorithm Complexity
- **Time Complexity:** O(n) - Linear time
- **Space Complexity:** O(1) - Constant space
- **Overall:** Acceptable for small to medium arrays

## Bottlenecks Identified

### 1. Inefficient Loop
**Issue:** Using for...of with manual accumulation
**Impact:** Slower than native array methods
**Fix:**
\`\`\`javascript
// Current (slower)
let total = 0;
for (let item of items) {
    total += item.price * item.quantity;
}

// Optimized (faster)
const total = items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
);
\`\`\`

### 2. No Memoization
**Issue:** Recalculates every time
**Solution:** Cache results for repeated calls
\`\`\`javascript
const cache = new Map();

function calculateTotal(items) {
    const key = JSON.stringify(items);
    if (cache.has(key)) {
        return cache.get(key);
    }
    
    const total = items.reduce((sum, item) => 
        sum + item.price * item.quantity, 0
    );
    
    cache.set(key, total);
    return total;
}
\`\`\`

## Optimization Suggestions

### 1. Use Native Methods
\`\`\`javascript
// 30% faster
const total = items.reduce((sum, {price, quantity}) => 
    sum + price * quantity, 0
);
\`\`\`

### 2. Early Return for Empty Array
\`\`\`javascript
function calculateTotal(items) {
    if (!items.length) return 0; // Fast path
    return items.reduce((sum, item) => 
        sum + item.price * item.quantity, 0
    );
}
\`\`\`

### 3. Parallel Processing for Large Arrays
\`\`\`javascript
// For arrays > 10,000 items
function calculateTotalParallel(items) {
    const chunkSize = Math.ceil(items.length / 4);
    const chunks = [];
    
    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }
    
    return Promise.all(
        chunks.map(chunk => 
            Promise.resolve(calculateTotal(chunk))
        )
    ).then(totals => totals.reduce((a, b) => a + b, 0));
}
\`\`\`

## Performance Benchmarks
- Small arrays (< 100): ~0.01ms
- Medium arrays (< 10,000): ~1ms
- Large arrays (> 10,000): ~10ms

## Recommendations
1. Use reduce() instead of for loop
2. Add memoization for repeated calls
3. Consider parallel processing for large datasets
4. Profile with real data
5. Set performance budgets`,

        refactor: `# 🔧 Refactoring Suggestions

## Refactoring Score: 6/10

## Code Smells Identified

### 1. Lack of Type Safety
**Smell:** No type checking
**Fix:** Use TypeScript or JSDoc
\`\`\`typescript
interface CartItem {
    price: number;
    quantity: number;
}

function calculateTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => 
        sum + item.price * item.quantity, 0
    );
}
\`\`\`

### 2. No Error Handling
**Smell:** Silent failures possible
**Fix:** Add validation
\`\`\`javascript
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    
    return items.reduce((sum, item) => {
        if (!isValidItem(item)) {
            throw new Error(\`Invalid item: \${JSON.stringify(item)}\`);
        }
        return sum + item.price * item.quantity;
    }, 0);
}

function isValidItem(item) {
    return item 
        && typeof item.price === 'number' 
        && typeof item.quantity === 'number'
        && item.price >= 0 
        && item.quantity >= 0;
}
\`\`\`

### 3. Single Responsibility Violation
**Smell:** Function does calculation and validation
**Fix:** Separate concerns
\`\`\`javascript
// Validation
function validateItems(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    items.forEach(item => {
        if (!isValidItem(item)) {
            throw new Error('Invalid item');
        }
    });
}

// Calculation
function calculateTotal(items) {
    validateItems(items);
    return items.reduce((sum, item) => 
        sum + item.price * item.quantity, 0
    );
}
\`\`\`

## SOLID Principles

### Single Responsibility ✅
Each function does one thing

### Open/Closed ✅
Easy to extend with new validation rules

### Liskov Substitution ✅
Can substitute with different implementations

### Interface Segregation ✅
Simple, focused interface

### Dependency Inversion ⚠️
Could inject validator

## Final Refactored Code

\`\`\`javascript
/**
 * Calculates the total cost of items in a cart
 * @param {Array<{price: number, quantity: number}>} items - Cart items
 * @returns {number} Total cost
 * @throws {TypeError} If items is not an array
 * @throws {Error} If any item is invalid
 */
function calculateTotal(items) {
    validateItems(items);
    return sumItemCosts(items);
}

function validateItems(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    
    items.forEach((item, index) => {
        if (!isValidItem(item)) {
            throw new Error(\`Invalid item at index \${index}\`);
        }
    });
}

function isValidItem(item) {
    return item 
        && typeof item.price === 'number' 
        && typeof item.quantity === 'number'
        && item.price >= 0 
        && item.quantity >= 0
        && Number.isFinite(item.price)
        && Number.isFinite(item.quantity);
}

function sumItemCosts(items) {
    return items.reduce((sum, {price, quantity}) => 
        sum + price * quantity, 0
    );
}

// Export for testing
module.exports = { calculateTotal, validateItems, isValidItem };
\`\`\`

## Benefits of Refactoring
1. ✅ Type-safe with JSDoc
2. ✅ Proper error handling
3. ✅ Separated concerns
4. ✅ Testable functions
5. ✅ Better maintainability
6. ✅ Clear documentation`
    };
    
    return responses[type] || responses.review;
}

// Show/hide functions
function showLoading() {
    document.getElementById('spinner').style.display = 'inline-block';
    document.getElementById('analyzeText').textContent = 'Analyzing...';
    document.querySelector('.btn-analyze').disabled = true;
}

function hideLoading() {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('analyzeText').textContent = 'Analyze Code';
    document.querySelector('.btn-analyze').disabled = false;
}

function showResults(content) {
    const resultsSection = document.getElementById('resultsSection');
    const resultsContent = document.getElementById('resultsContent');
    
    // Convert markdown-like formatting to HTML
    const htmlContent = formatMarkdown(content);
    resultsContent.innerHTML = htmlContent;
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideResults() {
    document.getElementById('resultsSection').style.display = 'none';
}

function showError(message) {
    const errorSection = document.getElementById('errorSection');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
    errorSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideError() {
    document.getElementById('errorSection').style.display = 'none';
}

// Format markdown to HTML
function formatMarkdown(text) {
    return text
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Code blocks
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        // Line breaks
        .replace(/\n/g, '<br>');
}

// Copy results
function copyResults() {
    const resultsContent = document.getElementById('resultsContent');
    const text = resultsContent.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Results copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Download results
function downloadResults() {
    const resultsContent = document.getElementById('resultsContent');
    const text = resultsContent.innerText;
    
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devlens-${currentAnalysisType}-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Daily limit management
function loadAnalysisCount() {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('devlens_usage');
    
    if (stored) {
        const data = JSON.parse(stored);
        if (data.date === today) {
            analysisCount = data.count;
        } else {
            analysisCount = 0;
            saveAnalysisCount();
        }
    }
}

function incrementAnalysisCount() {
    analysisCount++;
    saveAnalysisCount();
}

function saveAnalysisCount() {
    const today = new Date().toDateString();
    localStorage.setItem('devlens_usage', JSON.stringify({
        date: today,
        count: analysisCount
    }));
}

function checkDailyLimit() {
    return analysisCount < CONFIG.FREE_DAILY_LIMIT;
}

// Made with Bob

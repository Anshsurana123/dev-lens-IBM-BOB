# 🔍 DevLens - Next.js Web Application

> AI-powered code analysis and repository scanner built with Next.js 14, TypeScript, and Google AI

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Google AI Studio API key ([Get one here](https://makersuite.google.com/app/apikey))
- (Optional) GitHub Personal Access Token for higher rate limits

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd devlens/nextjs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   GITHUB_TOKEN=your_github_token_here  # Optional
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✨ Features

### 📝 Code Snippet Analysis
Analyze code snippets with 6 different analysis types:
- **Code Review**: Comprehensive feedback on code quality
- **Security Audit**: Identify vulnerabilities and security issues
- **Explain Code**: Understand complex code in plain English
- **Generate Tests**: Create comprehensive unit tests
- **Performance Analysis**: Detect bottlenecks and optimization opportunities
- **Refactoring Suggestions**: Improve code quality and maintainability

### 🔍 GitHub Repository Scanner
Analyze entire GitHub repositories to generate a "Repository Bible" containing:
- Project overview and purpose
- Complete tech stack detection
- Architecture breakdown
- Directory structure explanation
- Data flow analysis
- Top 5 most important files
- Complexity warnings
- Getting started guide for new contributors
- Suggested first issues

### 🎯 Key Features
- **10 Free Daily Uses**: Track your usage with a visual counter
- **Multi-Language Support**: JavaScript, TypeScript, Python, Java, C++, Go, Rust, and more
- **Markdown Results**: Beautiful formatted output with syntax highlighting
- **Copy & Download**: Export results as markdown files
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Ready**: Automatic dark mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini Pro (via AI Studio API)
- **APIs**: GitHub REST API v3
- **Markdown**: react-markdown
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
nextjs-app/
├── app/
│   ├── api/
│   │   ├── analyze/
│   │   │   └── route.ts          # Code analysis API endpoint
│   │   └── analyze-repo/
│   │       └── route.ts          # Repository analysis API endpoint
│   ├── globals.css               # Global styles and Tailwind
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page
├── components/
│   ├── CodeAnalyzer.tsx          # Code snippet analyzer component
│   ├── Features.tsx              # Features showcase
│   ├── Footer.tsx                # Footer component
│   ├── Header.tsx                # Header/navigation
│   ├── Hero.tsx                  # Hero section
│   └── RepoScanner.tsx           # GitHub repo scanner component
├── lib/
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🌐 API Endpoints

### POST `/api/analyze`
Analyze a code snippet.

**Request Body:**
```json
{
  "code": "function example() { return 'hello'; }",
  "language": "javascript",
  "type": "review"
}
```

**Response:**
```json
{
  "success": true,
  "result": "# Code Review\n\n..."
}
```

### POST `/api/analyze-repo`
Analyze a GitHub repository.

**Request Body:**
```json
{
  "repoUrl": "https://github.com/owner/repo"
}
```

**Response:**
```json
{
  "success": true,
  "result": "# Repository Bible\n\n...",
  "repoData": {
    "name": "repo",
    "stars": 1234,
    ...
  }
}
```

## 🎨 Customization

### Changing Analysis Prompts
Edit the prompts in `app/api/analyze/route.ts`:
```typescript
const analysisPrompts = {
  review: `Your custom prompt here...`,
  // ... other prompts
};
```

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

### Daily Usage Limit
Change the limit in `lib/utils.ts`:
```typescript
const DAILY_LIMIT = 10; // Change this number
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Self-hosted with Docker

## 🔒 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_AI_API_KEY` | Yes | Google AI Studio API key for Gemini Pro |
| `GITHUB_TOKEN` | No | GitHub Personal Access Token (increases rate limits) |

## 📊 Rate Limits

- **Google AI API**: Check your [AI Studio quota](https://makersuite.google.com/app/apikey)
- **GitHub API**: 
  - Without token: 60 requests/hour
  - With token: 5,000 requests/hour
- **DevLens Daily Limit**: 10 analyses per day (client-side, can be reset)

## 🐛 Troubleshooting

### "API key not configured" error
- Make sure `.env` file exists in the root directory
- Verify `GOOGLE_AI_API_KEY` is set correctly
- Restart the development server after adding environment variables

### GitHub API rate limit exceeded
- Add a `GITHUB_TOKEN` to your `.env` file
- Wait for the rate limit to reset (check headers in browser DevTools)

### TypeScript errors
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` for correct configuration
- Run `npm run type-check` to see all type errors

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is part of DevLens and is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- Built for **IBM Bob Hackathon 2026**
- Powered by **Google Gemini Pro** AI
- Uses **GitHub REST API** for repository data
- Built with **Next.js 14** and **Tailwind CSS**

## 📧 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/devlens/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/devlens/discussions)
- **Email**: your.email@example.com

---

Made with ❤️ for developers by developers
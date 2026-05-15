# DevLens Web App

A modern web interface for DevLens - AI-powered code analysis without installation.

## 🚀 Features

- **6 Analysis Types**: Code Review, Security Audit, Code Explanation, Test Coverage, Performance Check, Refactoring
- **No Installation**: Works directly in your browser
- **Google AI Studio**: Powered by Gemini Pro
- **Free Tier**: 10 analyses per day
- **Instant Results**: Get feedback in seconds
- **Export Options**: Copy or download results

## 🛠️ Setup

### 1. Get Google AI Studio API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key

### 2. Configure the App

Edit `app.js` and replace the API key:

```javascript
const CONFIG = {
    API_KEY: 'YOUR_ACTUAL_API_KEY_HERE', // Replace this
    // ... rest of config
};
```

### 3. Run Locally

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Option 3: VS Code Live Server
# Install Live Server extension and click "Go Live"
```

Open `http://localhost:8000` in your browser.

### 4. Deploy

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd web
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd web
vercel --prod
```

#### GitHub Pages
```bash
# Push to GitHub
git add web/
git commit -m "Add web app"
git push

# Enable GitHub Pages in repository settings
# Set source to main branch /web folder
```

## 📁 File Structure

```
web/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── app.js          # JavaScript + API integration
└── README.md       # This file
```

## 🔧 Configuration

### API Settings

```javascript
const CONFIG = {
    API_KEY: 'your-key',              // Google AI Studio API key
    API_ENDPOINT: 'gemini-pro-url',   // API endpoint
    MAX_CHARS: 50000,                 // Max code length
    FREE_DAILY_LIMIT: 10              // Free analyses per day
};
```

### Customization

#### Change Colors

Edit `styles.css`:

```css
:root {
    --primary: #6366f1;      /* Primary color */
    --secondary: #8b5cf6;    /* Secondary color */
    /* ... more colors */
}
```

#### Add Analysis Types

Edit `app.js`:

```javascript
// Add to getAnalysisPrompt()
const prompts = {
    // ... existing prompts
    myCustomAnalysis: `Your custom prompt here...`
};
```

Add button in `index.html`:

```html
<button class="analysis-btn" data-type="myCustomAnalysis">
    <span class="btn-icon">🎯</span>
    <span class="btn-text">My Analysis</span>
</button>
```

## 🎨 Features

### Code Review
- Quality score (1-10)
- Strengths and issues
- Security concerns
- Performance analysis
- Refactoring suggestions

### Security Audit
- OWASP Top 10 scanning
- Vulnerability detection
- Secure code examples
- Security checklist

### Code Explanation
- Plain English breakdown
- Step-by-step guide
- Real-world analogies
- Algorithm analysis

### Test Coverage
- Coverage assessment
- Missing test cases
- Ready-to-use test code
- Testing strategy

### Performance Check
- Big O analysis
- Bottleneck identification
- Optimization suggestions
- Benchmarks

### Refactoring
- Code smell detection
- SOLID principles
- Before/after examples
- Best practices

## 🔒 Security

### API Key Protection

**Never commit your API key!**

Add to `.gitignore`:
```
web/app.js
```

Use environment variables:

```javascript
const CONFIG = {
    API_KEY: process.env.GOOGLE_AI_API_KEY || 'demo-key',
    // ...
};
```

### Rate Limiting

Free tier: 10 analyses/day (stored in localStorage)

To change:
```javascript
const CONFIG = {
    FREE_DAILY_LIMIT: 20, // Change this
    // ...
};
```

## 📊 Analytics (Optional)

Add Google Analytics:

```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### API Key Not Working

1. Check key is valid in Google AI Studio
2. Verify API endpoint is correct
3. Check browser console for errors
4. Ensure CORS is enabled

### Results Not Showing

1. Check browser console for errors
2. Verify API response format
3. Test with mock data first
4. Check network tab in DevTools

### Styling Issues

1. Clear browser cache
2. Check CSS file is loaded
3. Verify no CSS conflicts
4. Test in different browsers

## 🚀 Performance

### Optimization Tips

1. **Lazy Load**: Load CSS/JS only when needed
2. **Minify**: Minify CSS and JS for production
3. **CDN**: Use CDN for fonts and libraries
4. **Caching**: Enable browser caching
5. **Compression**: Enable gzip compression

### Build for Production

```bash
# Minify CSS
npx csso styles.css -o styles.min.css

# Minify JS
npx terser app.js -o app.min.js

# Update index.html to use minified files
```

## 📱 Mobile Support

The app is fully responsive and works on:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android tablets)
- ✅ Mobile (iPhone, Android phones)

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see [LICENSE](../LICENSE)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Anshsurana123/dev-lens-IBM-BOB/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Anshsurana123/dev-lens-IBM-BOB/discussions)

## 🎉 Demo

Try it live: [devlens.dev](https://devlens.dev) (coming soon)

---

**Built with ❤️ for developers**
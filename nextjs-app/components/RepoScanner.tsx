"use client";

import { useState } from "react";
import { checkDailyLimit, incrementUsage, isValidGitHubUrl, parseGitHubUrl, copyToClipboard, downloadAsFile } from "@/lib/utils";
import type { GitHubRepoData } from "@/lib/types";
import ReactMarkdown from "react-markdown";

export default function RepoScanner() {
  const [repoUrl, setRepoUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [repoData, setRepoData] = useState<GitHubRepoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleScan = async () => {
    // Check daily limit
    const { allowed, count, limit } = checkDailyLimit();
    if (!allowed) {
      setError(`Daily limit reached (${limit} analyses per day). Try again tomorrow!`);
      return;
    }

    if (!repoUrl.trim()) {
      setError("Please enter a GitHub repository URL");
      return;
    }

    if (!isValidGitHubUrl(repoUrl)) {
      setError("Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo)");
      return;
    }

    setIsScanning(true);
    setError(null);
    setResult(null);
    setRepoData(null);

    try {
      const response = await fetch("/api/analyze-repo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Repository scan failed");
      }

      setResult(data.result);
      setRepoData(data.repoData);
      incrementUsage();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsScanning(false);
    }
  };

  const handleCopy = async () => {
    if (result) {
      const success = await copyToClipboard(result);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleDownload = () => {
    if (result && repoData) {
      const filename = `devlens-repo-${repoData.name}-${Date.now()}.md`;
      downloadAsFile(result, filename);
    }
  };

  const { count, limit } = checkDailyLimit();
  const parsed = repoUrl ? parseGitHubUrl(repoUrl) : null;

  return (
    <div className="space-y-6">
      {/* Usage Counter */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Daily Usage: {count} / {limit}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {limit - count} analyses remaining today
              </p>
            </div>
          </div>
          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${(count / limit) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white mb-1">
              How it works
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter any public GitHub repository URL. DevLens will analyze the entire codebase and generate a comprehensive "Repo Bible" with architecture insights, tech stack detection, and onboarding guide.
            </p>
          </div>
        </div>
      </div>

      {/* URL Input */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          GitHub Repository URL
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/owner/repository"
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && handleScan()}
          />
        </div>
        {parsed && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            📦 Repository: <span className="font-mono font-semibold">{parsed.owner}/{parsed.repo}</span>
          </p>
        )}
      </div>

      {/* Example Repos */}
      <div>
        <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Try these examples:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "https://github.com/vercel/next.js",
            "https://github.com/facebook/react",
            "https://github.com/microsoft/vscode",
          ].map((url) => (
            <button
              key={url}
              onClick={() => setRepoUrl(url)}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {parseGitHubUrl(url)?.repo}
            </button>
          ))}
        </div>
      </div>

      {/* Scan Button */}
      <button
        onClick={handleScan}
        disabled={isScanning || !repoUrl.trim()}
        className="w-full px-6 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl btn-hover"
      >
        {isScanning ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Scanning Repository...
          </span>
        ) : (
          `🔍 Scan Repository`
        )}
      </button>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-2xl">❌</span>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-200">Error</p>
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Repository Info Card */}
      {repoData && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-6 animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {repoData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{repoData.description}</p>
            </div>
            <a
              href={`https://github.com/${repoData.fullName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">⭐ {repoData.stars.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">🔱 {repoData.forks.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Forks</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-2xl font-bold text-green-600">📝 {repoData.openIssues.toLocaleString()}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Issues</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">💻 {repoData.language}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Language</div>
            </div>
          </div>

          {repoData.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repoData.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              📖 Repository Analysis
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                💾 Download
              </button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-lg text-black">
            <div className="markdown-content prose prose-slate max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Made with Bob

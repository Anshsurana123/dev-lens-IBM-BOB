"use client";

import { useState } from "react";
import type { AnalysisType } from "@/lib/types";
import { checkDailyLimit, incrementUsage, detectLanguage, copyToClipboard, downloadAsFile } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const analysisOptions = [
  { id: "review" as AnalysisType, label: "Code Review", description: "Get comprehensive feedback", icon: "🔍" },
  { id: "security" as AnalysisType, label: "Security Audit", description: "Find vulnerabilities", icon: "🔒" },
  { id: "explain" as AnalysisType, label: "Explain Code", description: "Understand what it does", icon: "📖" },
  { id: "test" as AnalysisType, label: "Generate Tests", description: "Create unit tests", icon: "🧪" },
  { id: "performance" as AnalysisType, label: "Performance", description: "Optimize bottlenecks", icon: "⚡" },
  { id: "refactor" as AnalysisType, label: "Refactor", description: "Improve code quality", icon: "♻️" },
];

export default function CodeAnalyzer() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [analysisType, setAnalysisType] = useState<AnalysisType>("review");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = async () => {
    // Check daily limit
    const { allowed, count, limit } = checkDailyLimit();
    if (!allowed) {
      setError(`Daily limit reached (${limit} analyses per day). Try again tomorrow!`);
      return;
    }

    if (!code.trim()) {
      setError("Please enter some code to analyze");
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          language: language || detectLanguage(code),
          type: analysisType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data.result);
      incrementUsage();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsAnalyzing(false);
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
    if (result) {
      const filename = `devlens-${analysisType}-${Date.now()}.md`;
      downloadAsFile(result, filename);
    }
  };

  const { count, limit } = checkDailyLimit();

  return (
    <div id="analyzer" className="space-y-6">
      {/* Usage Counter */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
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
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(count / limit) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Analysis Type Selection */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
          Select Analysis Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {analysisOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setAnalysisType(option.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                analysisType === option.id
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">
                {option.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Programming Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
          <option value="swift">Swift</option>
          <option value="kotlin">Kotlin</option>
        </select>
      </div>

      {/* Code Input */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Paste Your Code
        </label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={isAnalyzing || !code.trim()}
        className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl btn-hover"
      >
        {isAnalyzing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Analyzing...
          </span>
        ) : (
          `🚀 Analyze Code`
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

      {/* Results Display */}
      {result && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Analysis Results
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
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="markdown-content prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Made with Bob

"use client";

import type { Feature } from "@/lib/types";

const features: Feature[] = [
  {
    icon: "🔍",
    title: "Code Review",
    description: "Get comprehensive code reviews with best practices, potential bugs, and improvement suggestions."
  },
  {
    icon: "🔒",
    title: "Security Audit",
    description: "Identify security vulnerabilities, injection risks, and authentication issues in your code."
  },
  {
    icon: "📖",
    title: "Code Explanation",
    description: "Understand complex code with clear, line-by-line explanations in plain English."
  },
  {
    icon: "🧪",
    title: "Test Generation",
    description: "Generate comprehensive unit tests with edge cases and mocking examples."
  },
  {
    icon: "⚡",
    title: "Performance Analysis",
    description: "Detect performance bottlenecks, memory leaks, and optimization opportunities."
  },
  {
    icon: "♻️",
    title: "Refactoring Suggestions",
    description: "Get actionable refactoring suggestions to improve code quality and maintainability."
  },
  {
    icon: "📦",
    title: "Repository Scanner",
    description: "Analyze entire GitHub repositories to understand architecture and tech stack."
  },
  {
    icon: "🌐",
    title: "Multi-Language Support",
    description: "Works with JavaScript, Python, Java, C++, Go, Rust, and 10+ more languages."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Powerful Features for Modern Developers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to write better code, faster. Powered by advanced AI models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Made with Bob

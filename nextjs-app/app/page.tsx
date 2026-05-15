"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeAnalyzer from "@/components/CodeAnalyzer";
import RepoScanner from "@/components/RepoScanner";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"code" | "repo">("code");

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      <Features />
      
      {/* Tab Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("code")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "code"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              📝 Analyze Code Snippet
            </button>
            <button
              onClick={() => setActiveTab("repo")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "repo"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              🔍 Scan GitHub Repo
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="animate-fade-in">
            {activeTab === "code" ? <CodeAnalyzer /> : <RepoScanner />}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

// Made with Bob

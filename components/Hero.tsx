"use client";

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">
            🚀 Powered by IBM Bob & Google AI
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Turn Code Into Insights
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          AI-powered code analysis that helps developers write better code faster. 
          Get instant reviews, security audits, and deep explanations for any codebase.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#analyzer"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl btn-hover"
          >
            Start Analyzing →
          </a>
          <a
            href="https://github.com/Anshsurana123/dev-lens-IBM-BOB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl btn-hover"
          >
            View on GitHub
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Analysis Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Repos Scanned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Unlimited Analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob

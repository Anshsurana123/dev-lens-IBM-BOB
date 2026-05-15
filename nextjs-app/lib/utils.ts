import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Format date to relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

/**
 * Extract owner and repo name from GitHub URL
 */
export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    const patterns = [
      /github\.com\/([^\/]+)\/([^\/]+)/,
      /^([^\/]+)\/([^\/]+)$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return {
          owner: match[1],
          repo: match[2].replace(/\.git$/, '')
        };
      }
    }
    
    return null;
  } catch {
    return null;
  }
}

/**
 * Check if daily usage limit is reached
 */
export function checkDailyLimit(): { allowed: boolean; count: number; limit: number } {
  const DAILY_LIMIT = 10;
  
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    return { allowed: true, count: 0, limit: DAILY_LIMIT };
  }
  
  const today = new Date().toDateString();
  const stored = localStorage.getItem('devlens_usage');
  const usage = stored ? JSON.parse(stored) : { date: today, count: 0 };
  
  // Reset count if it's a new day
  if (usage.date !== today) {
    usage.date = today;
    usage.count = 0;
    localStorage.setItem('devlens_usage', JSON.stringify(usage));
  }
  
  return {
    allowed: usage.count < DAILY_LIMIT,
    count: usage.count,
    limit: DAILY_LIMIT
  };
}

/**
 * Increment daily usage count
 */
export function incrementUsage(): void {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    return;
  }
  
  const today = new Date().toDateString();
  const stored = localStorage.getItem('devlens_usage');
  const usage = stored ? JSON.parse(stored) : { date: today, count: 0 };
  
  if (usage.date !== today) {
    usage.date = today;
    usage.count = 1;
  } else {
    usage.count += 1;
  }
  
  localStorage.setItem('devlens_usage', JSON.stringify(usage));
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  }
}

/**
 * Download text as file
 */
export function downloadAsFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Detect programming language from code content
 */
export function detectLanguage(code: string): string {
  const patterns: Record<string, RegExp[]> = {
    javascript: [/\bfunction\b/, /\bconst\b/, /\blet\b/, /\bvar\b/, /=>/, /console\.log/],
    typescript: [/\binterface\b/, /\btype\b/, /:\s*(string|number|boolean)/, /<.*>/],
    python: [/\bdef\b/, /\bimport\b/, /\bfrom\b.*\bimport\b/, /\bclass\b.*:/, /print\(/],
    java: [/\bpublic\s+class\b/, /\bprivate\b/, /\bprotected\b/, /System\.out\.println/],
    cpp: [/#include/, /\bstd::/, /\bcout\b/, /\bcin\b/],
    csharp: [/\busing\s+System/, /\bnamespace\b/, /\bpublic\s+class\b/],
    go: [/\bfunc\b/, /\bpackage\b/, /\bimport\b/, /:=/],
    rust: [/\bfn\b/, /\blet\s+mut\b/, /\bimpl\b/, /\bpub\b/],
    ruby: [/\bdef\b/, /\bend\b/, /\brequire\b/, /@\w+/],
    php: [/<\?php/, /\$\w+/, /\bfunction\b/, /\becho\b/],
    swift: [/\bfunc\b/, /\bvar\b/, /\blet\b/, /\bimport\s+Foundation/],
    kotlin: [/\bfun\b/, /\bval\b/, /\bvar\b/, /\bdata\s+class\b/],
  };
  
  for (const [lang, regexes] of Object.entries(patterns)) {
    const matches = regexes.filter(regex => regex.test(code)).length;
    if (matches >= 2) return lang;
  }
  
  return 'plaintext';
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Validate GitHub repository URL
 */
export function isValidGitHubUrl(url: string): boolean {
  const parsed = parseGitHubUrl(url);
  return parsed !== null && parsed.owner.length > 0 && parsed.repo.length > 0;
}

// Made with Bob

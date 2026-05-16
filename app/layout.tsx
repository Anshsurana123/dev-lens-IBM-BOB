import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dev-lens-ibm.vercel.app"),
  title: "DevLens - AI-Powered Code Analysis",
  description: "Analyze code snippets and GitHub repositories with AI. Get instant code reviews, security audits, explanations, and more.",
  keywords: ["code analysis", "AI", "code review", "GitHub", "developer tools", "DevLens"],
  authors: [{ name: "DevLens Team" }],
  openGraph: {
    title: "DevLens - AI-Powered Code Analysis",
    description: "Analyze code snippets and GitHub repositories with AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevLens - AI-Powered Code Analysis",
    description: "Analyze code snippets and GitHub repositories with AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
          {children}
        </div>
      </body>
    </html>
  );
}

// Made with Bob

import { NextRequest, NextResponse } from "next/server";
import type { RepoAnalysisRequest, RepoAnalysisResponse, GitHubRepoData, GitHubTree } from "@/lib/types";
import { parseGitHubUrl } from "@/lib/utils";

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const AI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

async function fetchGitHubRepo(owner: string, repo: string): Promise<GitHubRepoData> {
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  };
  
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Repository not found");
    }
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();
  
  return {
    name: data.name,
    fullName: data.full_name,
    description: data.description || "No description provided",
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language || "Unknown",
    topics: data.topics || [],
    defaultBranch: data.default_branch,
    size: data.size,
    openIssues: data.open_issues_count,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    license: data.license?.name,
    homepage: data.homepage,
  };
}

async function fetchRepoTree(owner: string, repo: string, branch: string): Promise<GitHubTree> {
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  };
  
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`,
    { headers }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch repository tree: ${response.statusText}`);
  }

  return await response.json();
}

async function fetchFileContent(owner: string, repo: string, path: string): Promise<string> {
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3.raw",
  };
  
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    { headers }
  );
  
  if (!response.ok) {
    return "";
  }

  return await response.text();
}

function analyzeRepoStructure(tree: GitHubTree): string {
  const files = tree.tree.filter(item => item.type === "blob");
  const dirs = tree.tree.filter(item => item.type === "tree");
  
  // Detect languages
  const extensions = files.map(f => {
    const ext = f.path.split(".").pop();
    return ext ? `.${ext}` : "";
  });
  
  const extensionCounts = extensions.reduce((acc, ext) => {
    if (ext) acc[ext] = (acc[ext] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Detect frameworks and tools
  const hasPackageJson = files.some(f => f.path === "package.json");
  const hasRequirementsTxt = files.some(f => f.path === "requirements.txt");
  const hasGoMod = files.some(f => f.path === "go.mod");
  const hasCargoToml = files.some(f => f.path === "Cargo.toml");
  const hasPomXml = files.some(f => f.path === "pom.xml");
  const hasDockerfile = files.some(f => f.path.includes("Dockerfile"));
  const hasDockerCompose = files.some(f => f.path.includes("docker-compose"));
  
  // Build structure summary
  let summary = `## Repository Structure\n\n`;
  summary += `- **Total Files**: ${files.length}\n`;
  summary += `- **Total Directories**: ${dirs.length}\n`;
  summary += `- **Repository Size**: ${tree.truncated ? "Large (truncated)" : "Complete"}\n\n`;
  
  summary += `### File Types Distribution\n`;
  Object.entries(extensionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([ext, count]) => {
      summary += `- ${ext}: ${count} files\n`;
    });
  
  summary += `\n### Detected Technologies\n`;
  if (hasPackageJson) summary += `- Node.js/JavaScript (package.json found)\n`;
  if (hasRequirementsTxt) summary += `- Python (requirements.txt found)\n`;
  if (hasGoMod) summary += `- Go (go.mod found)\n`;
  if (hasCargoToml) summary += `- Rust (Cargo.toml found)\n`;
  if (hasPomXml) summary += `- Java/Maven (pom.xml found)\n`;
  if (hasDockerfile) summary += `- Docker (Dockerfile found)\n`;
  if (hasDockerCompose) summary += `- Docker Compose (docker-compose.yml found)\n`;
  
  return summary;
}

async function analyzeWithAI(repoData: GitHubRepoData, structure: string, sampleFiles: Record<string, string>): Promise<string> {
  const prompt = `You are an expert software architect analyzing a GitHub repository. Generate a comprehensive "Repository Bible" for developers.

## Repository Information
- **Name**: ${repoData.fullName}
- **Description**: ${repoData.description}
- **Primary Language**: ${repoData.language}
- **Stars**: ${repoData.stars}
- **Topics**: ${repoData.topics.join(", ")}

${structure}

## Sample Files Content
${Object.entries(sampleFiles).map(([path, content]) => `### ${path}\n\`\`\`\n${content.slice(0, 1000)}\n\`\`\`\n`).join("\n")}

Based on this information, provide a detailed analysis in the following format:

# 📖 Repository Bible: ${repoData.name}

## 🎯 What This Project Does
[One paragraph plain English summary of the project's purpose and main functionality]

## 🛠️ Tech Stack
[List all detected technologies, frameworks, languages, databases, and tools]

## 🏗️ Architecture Overview
[Explain the high-level architecture, how components interact, and design patterns used]

## 📁 Directory Structure Explained
[Explain what each major directory/folder contains and its purpose]

## 🔄 Data Flow
[Describe how data moves through the application, from input to output]

## ⭐ Top 5 Most Important Files
[List the 5 most critical files with explanations of why they matter]

## ⚠️ Complexity Warnings
[Identify confusing, risky, or complex parts that new developers should be aware of]

## 🚀 Getting Started (New Contributor Guide)
[Step-by-step instructions for setting up and running the project locally]

## 💡 Suggested First Issues
[List 3-5 good first issues a new contributor could work on]

## 📚 Additional Resources
[Suggest documentation, tutorials, or concepts to learn for this project]

Be specific, actionable, and reference actual files/directories from the repository.`;

  const response = await fetch(`${AI_API_URL}?key=${GOOGLE_AI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "AI API request failed");
  }

  const data = await response.json();
  const result = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!result) {
    throw new Error("No response from AI");
  }

  return result;
}

export async function POST(request: NextRequest): Promise<NextResponse<RepoAnalysisResponse>> {
  try {
    if (!GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { success: false, error: "API key not configured" },
        { status: 500 }
      );
    }

    const body: RepoAnalysisRequest = await request.json();
    const { repoUrl } = body;

    if (!repoUrl) {
      return NextResponse.json(
        { success: false, error: "Repository URL is required" },
        { status: 400 }
      );
    }

    const parsed = parseGitHubUrl(repoUrl);
    if (!parsed) {
      return NextResponse.json(
        { success: false, error: "Invalid GitHub repository URL" },
        { status: 400 }
      );
    }

    const { owner, repo } = parsed;

    // Fetch repository data
    const repoData = await fetchGitHubRepo(owner, repo);
    
    // Fetch repository tree
    const tree = await fetchRepoTree(owner, repo, repoData.defaultBranch);
    
    // Analyze structure
    const structure = analyzeRepoStructure(tree);
    
    // Fetch sample important files
    const importantFiles = ["README.md", "package.json", "requirements.txt", "go.mod", "Cargo.toml", "pom.xml"];
    const sampleFiles: Record<string, string> = {};
    
    for (const file of importantFiles) {
      const fileInTree = tree.tree.find(item => item.path === file);
      if (fileInTree) {
        try {
          const content = await fetchFileContent(owner, repo, file);
          if (content) {
            sampleFiles[file] = content;
          }
        } catch (error) {
          // Skip files that can't be fetched
          console.error(`Failed to fetch ${file}:`, error);
        }
      }
    }
    
    // Analyze with AI
    const result = await analyzeWithAI(repoData, structure, sampleFiles);

    return NextResponse.json({
      success: true,
      result,
      repoData,
    });
  } catch (error) {
    console.error("Repository analysis error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Repository analysis failed",
      },
      { status: 500 }
    );
  }
}

// Made with Bob

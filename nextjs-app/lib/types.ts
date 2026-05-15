// Analysis Types
export type AnalysisType = 
  | 'review' 
  | 'security' 
  | 'explain' 
  | 'test' 
  | 'performance' 
  | 'refactor';

export interface AnalysisRequest {
  code: string;
  language: string;
  type: AnalysisType;
}

export interface AnalysisResponse {
  success: boolean;
  result?: string;
  error?: string;
}

// Repository Types
export interface RepoAnalysisRequest {
  repoUrl: string;
}

export interface RepoAnalysisResponse {
  success: boolean;
  result?: string;
  error?: string;
  repoData?: GitHubRepoData;
}

export interface GitHubRepoData {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  defaultBranch: string;
  size: number;
  openIssues: number;
  createdAt: string;
  updatedAt: string;
  license?: string;
  homepage?: string;
}

export interface GitHubFile {
  name: string;
  path: string;
  type: 'file' | 'dir';
  size?: number;
  download_url?: string;
}

export interface GitHubTreeItem {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  size?: number;
  url: string;
}

export interface GitHubTree {
  sha: string;
  url: string;
  tree: GitHubTreeItem[];
  truncated: boolean;
}

// UI State Types
export interface UsageStats {
  count: number;
  date: string;
}

export interface TabState {
  activeTab: 'code' | 'repo';
}

export interface AnalysisState {
  isAnalyzing: boolean;
  result: string | null;
  error: string | null;
}

// Feature Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface AnalysisOption {
  id: AnalysisType;
  label: string;
  description: string;
  icon: string;
}

// Made with Bob

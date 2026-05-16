import { NextRequest, NextResponse } from "next/server";
import type { AnalysisRequest, AnalysisResponse } from "@/lib/types";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const analysisPrompts = {
  review: `You are a senior software engineer conducting a thorough code review. Analyze the following {language} code and provide:

1. **Overall Assessment**: Brief summary of code quality (1-2 sentences)
2. **Strengths**: What's done well (bullet points)
3. **Issues Found**: 
   - Critical issues (bugs, security vulnerabilities)
   - Code quality issues (readability, maintainability)
   - Performance concerns
4. **Specific Recommendations**: Actionable improvements with code examples
5. **Best Practices**: Relevant best practices for this language/framework
6. **Rating**: Overall code quality score (1-10) with justification

Be direct, specific, and reference actual line numbers or code snippets.`,

  security: `You are a security expert auditing code for vulnerabilities. Analyze the following {language} code and provide:

1. **Security Risk Level**: Critical/High/Medium/Low with justification
2. **Vulnerabilities Found**:
   - SQL Injection risks
   - XSS vulnerabilities
   - Authentication/Authorization issues
   - Data exposure risks
   - Input validation problems
   - Cryptography issues
3. **Exploit Scenarios**: How each vulnerability could be exploited
4. **Remediation Steps**: Specific fixes with secure code examples
5. **Security Best Practices**: Recommendations for this language/framework
6. **Compliance Notes**: OWASP Top 10, CWE references if applicable

Be thorough and provide concrete examples of secure alternatives.`,

  explain: `You are a patient teacher explaining code to someone learning programming. Analyze the following {language} code and provide:

1. **High-Level Overview**: What does this code do? (2-3 sentences in plain English)
2. **Step-by-Step Breakdown**: Explain each section/function:
   - What it does
   - Why it's needed
   - How it works
3. **Key Concepts**: Programming concepts used (with brief explanations)
4. **Data Flow**: How data moves through the code
5. **Dependencies**: External libraries/APIs used and their purpose
6. **Common Patterns**: Design patterns or idioms used
7. **Learning Resources**: Suggested topics to study to understand this better

Use simple language, analogies, and avoid jargon when possible.`,

  test: `You are a testing expert creating comprehensive test suites. Analyze the following {language} code and provide:

1. **Test Strategy**: What testing approach is needed (unit, integration, e2e)
2. **Test Cases**: Write actual test code covering:
   - Happy path scenarios
   - Edge cases
   - Error conditions
   - Boundary values
3. **Mocking Strategy**: What needs to be mocked and how
4. **Test Data**: Example test data/fixtures needed
5. **Coverage Analysis**: What's currently untested
6. **Testing Best Practices**: Framework-specific recommendations
7. **CI/CD Integration**: How to run these tests in a pipeline

Provide complete, runnable test code using popular testing frameworks for this language.`,

  performance: `You are a performance optimization expert. Analyze the following {language} code and provide:

1. **Performance Assessment**: Current performance characteristics
2. **Bottlenecks Identified**:
   - Time complexity issues (O(n²), etc.)
   - Memory leaks or excessive memory usage
   - Unnecessary computations
   - Inefficient algorithms
   - Database query problems
   - Network request issues
3. **Optimization Recommendations**: Specific improvements with code examples:
   - Algorithm improvements
   - Caching strategies
   - Lazy loading
   - Batch processing
   - Parallel processing opportunities
4. **Benchmarking**: How to measure improvements
5. **Trade-offs**: Performance vs readability/maintainability considerations

Provide concrete, measurable optimization strategies with before/after code examples.`,

  refactor: `You are a code quality expert specializing in refactoring. Analyze the following {language} code and provide:

1. **Code Smells Detected**:
   - Long methods/functions
   - Duplicate code
   - Large classes
   - Long parameter lists
   - Inappropriate intimacy
   - Feature envy
2. **Refactoring Recommendations**: Specific refactorings to apply:
   - Extract method/function
   - Rename variables/functions
   - Introduce parameter object
   - Replace conditional with polymorphism
   - Simplify conditional expressions
3. **Design Patterns**: Applicable patterns to improve structure
4. **SOLID Principles**: How to better follow SOLID
5. **Refactored Code**: Show the improved version with explanations
6. **Migration Path**: Step-by-step refactoring approach (safe incremental changes)

Provide complete refactored code examples with clear explanations of improvements.`,
};

export async function POST(request: NextRequest): Promise<NextResponse<AnalysisResponse>> {
  try {
    const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;
    if (!GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { success: false, error: "API key not configured" },
        { status: 500 }
      );
    }

    const body: AnalysisRequest = await request.json();
    const { code, language, type } = body;

    if (!code || !language || !type) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const promptTemplate = analysisPrompts[type];
    if (!promptTemplate) {
      return NextResponse.json(
        { success: false, error: "Invalid analysis type" },
        { status: 400 }
      );
    }

    const prompt = promptTemplate.replace("{language}", language) + `\n\nCode to analyze:\n\`\`\`${language}\n${code}\n\`\`\``;

    const response = await fetch(`${API_URL}?key=${GOOGLE_AI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${prompt}\n\n\`\`\`${language}\n${code}\n\`\`\``,
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

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Analysis failed",
      },
      { status: 500 }
    );
  }
}

// Made with Bob

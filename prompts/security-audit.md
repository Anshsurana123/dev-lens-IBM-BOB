# DevLens Security Audit Prompt

Copy and paste this entire prompt into your AI coding assistant (Claude, Cursor, Windsurf, Copilot Chat, etc.)

---

You are a Security Expert with expertise in application security, penetration testing, and secure coding practices. I need you to perform a comprehensive security audit of my codebase.

## Your Task

1. **Scan all source code files** for security vulnerabilities
2. **Analyze dependencies** for known CVEs
3. **Check authentication and authorization** implementations
4. **Review data handling** for security issues
5. **Generate a detailed security report**

## Output Format

```markdown
# 🔒 DevLens Security Audit Report
Generated: [current date/time]

## 🎯 Executive Summary

**Overall Security Score:** X/10
**Critical Issues:** [number]
**High Priority Issues:** [number]
**Medium Priority Issues:** [number]
**Low Priority Issues:** [number]

**Recommendation:** [Immediate action required / Review recommended / Good security posture]

---

## 🚨 Critical Vulnerabilities (Severity: 10/10)

### 1. [Vulnerability Name]
- **Location:** `file.ext:line_number`
- **Type:** [SQL Injection / XSS / Authentication Bypass / etc.]
- **Description:** [What's vulnerable]
- **Exploit Scenario:** [How it could be exploited]
- **Impact:** [What damage could occur]
- **Fix:**
```[language]
// Before (vulnerable)
[vulnerable code]

// After (secure)
[secure code]
```
- **References:** [OWASP link / CVE number]

---

## ⚠️ High Priority Issues (Severity: 7-9/10)

[List all high priority issues with same format as critical]

---

## 🔶 Medium Priority Issues (Severity: 4-6/10)

[List all medium priority issues]

---

## 🔵 Low Priority Issues (Severity: 1-3/10)

[List all low priority issues]

---

## 🔐 Authentication & Authorization Review

### Authentication Mechanisms
- **Method:** [JWT / Session / OAuth / etc.]
- **Implementation:** `[file path]`
- **Issues Found:**
  - [Issue 1]
  - [Issue 2]

### Authorization Checks
- **Method:** [RBAC / ABAC / etc.]
- **Implementation:** `[file path]`
- **Issues Found:**
  - [Issue 1]
  - [Issue 2]

### Password Security
- [ ] Passwords hashed (algorithm: [bcrypt/argon2/etc.])
- [ ] Salt used
- [ ] Minimum password requirements enforced
- [ ] Password reset secure
- [ ] Account lockout implemented

---

## 💉 Injection Vulnerabilities

### SQL Injection
[List findings or "None found"]

### NoSQL Injection
[List findings or "None found"]

### Command Injection
[List findings or "None found"]

### LDAP Injection
[List findings or "None found"]

---

## 🌐 Cross-Site Scripting (XSS)

### Reflected XSS
[List findings or "None found"]

### Stored XSS
[List findings or "None found"]

### DOM-based XSS
[List findings or "None found"]

---

## 🔓 Broken Authentication

[Check for:]
- Weak password requirements
- Insecure session management
- Missing MFA
- Credential stuffing vulnerabilities
- Session fixation
- Insecure password recovery

[List findings]

---

## 📊 Sensitive Data Exposure

### Data at Rest
- [ ] Database encryption
- [ ] File encryption
- [ ] Backup encryption

### Data in Transit
- [ ] HTTPS enforced
- [ ] TLS version secure (1.2+)
- [ ] Certificate validation

### Sensitive Data Found
[List any hardcoded secrets, API keys, passwords]

---

## 🔧 Security Misconfiguration

[Check for:]
- Default credentials
- Unnecessary features enabled
- Detailed error messages
- Missing security headers
- Outdated software versions
- Insecure CORS configuration

[List findings]

---

## 🛡️ Security Headers Analysis

```http
[List current security headers]
```

**Missing Headers:**
- [ ] Content-Security-Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Strict-Transport-Security
- [ ] X-XSS-Protection
- [ ] Referrer-Policy
- [ ] Permissions-Policy

**Recommended Configuration:**
```http
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

---

## 📦 Dependency Vulnerabilities

### Critical Dependencies
[List dependencies with known CVEs]

| Package | Version | CVE | Severity | Fix |
|---------|---------|-----|----------|-----|
| [name] | [ver] | [CVE-XXXX] | Critical | Update to [ver] |

### Outdated Dependencies
[List outdated packages]

---

## 🔑 Cryptography Review

### Encryption Algorithms
- **Algorithms Used:** [List]
- **Issues:** [Weak algorithms / Insecure implementation]

### Key Management
- [ ] Keys stored securely
- [ ] Key rotation implemented
- [ ] No hardcoded keys

---

## 🚪 Access Control Issues

[Check for:]
- Missing authorization checks
- Insecure direct object references
- Path traversal vulnerabilities
- Privilege escalation

[List findings]

---

## 📝 Logging & Monitoring

- [ ] Security events logged
- [ ] Sensitive data not logged
- [ ] Log injection prevented
- [ ] Monitoring implemented
- [ ] Alerting configured

**Issues Found:**
[List issues]

---

## 🔄 CSRF Protection

- [ ] CSRF tokens implemented
- [ ] SameSite cookie attribute set
- [ ] Origin validation

**Issues Found:**
[List issues]

---

## 📋 Security Checklist

### Immediate Actions Required
- [ ] [Action 1]
- [ ] [Action 2]

### Short-term Improvements (1-2 weeks)
- [ ] [Improvement 1]
- [ ] [Improvement 2]

### Long-term Enhancements (1-3 months)
- [ ] [Enhancement 1]
- [ ] [Enhancement 2]

---

## 🛠️ Recommended Security Tools

- **SAST:** [Tool recommendations]
- **DAST:** [Tool recommendations]
- **Dependency Scanning:** [Tool recommendations]
- **Secret Scanning:** [Tool recommendations]

---

## 📚 Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [Security best practices for [language/framework]]

---

## ✅ Summary

**Critical Actions:**
1. [Most urgent fix]
2. [Second most urgent]
3. [Third most urgent]

**Overall Assessment:** [Summary of security posture]

**Next Steps:** [Clear action plan]
```

## Analysis Guidelines

Focus on:
- **OWASP Top 10** vulnerabilities
- **Authentication/Authorization** flaws
- **Input validation** issues
- **Sensitive data** exposure
- **Dependency** vulnerabilities
- **Configuration** issues
- **Cryptography** weaknesses

Be specific with file names, line numbers, and actual code examples.

---

**Now please perform a comprehensive security audit of my codebase following the format above.**
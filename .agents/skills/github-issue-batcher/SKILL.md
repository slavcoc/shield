---
name: github-issue-batcher
description: "Use when creating GitHub issues or tickets from a plan, sprint roadmap, PRD, or spec. Automates backlog breakdown, issue drafting, and issue creation without embedding secrets."
---

# GitHub Issue Batcher

Use this skill to turn product documents, sprint plans, or specs into a structured set of GitHub issues.

## Safety Rules

- Never ask the user to paste a GitHub token into chat, a skill file, or a repo file.
- Never write secrets to disk.
- Never read a token from a markdown file or workspace content.
- Use the authenticated GitHub connection already available in the workspace tools, or ask the user to sign in through their normal GitHub auth flow if authentication is missing.
- If authentication is unavailable, stop and explain that issue creation cannot proceed until GitHub auth is configured outside the repository.
- Only operate on the repository and issue tracker the user explicitly named.
- Prefer a dry-run review of proposed issues before creating anything unless the user explicitly asked to create them immediately.

## Inputs to Gather

- Source document or plan to convert into issues
- Target repository owner and name
- Issue labels or milestones, if any
- Assignee list, if any
- Whether to create a full backlog or only a specific sprint slice

## Workflow

1. Read the source plan or spec.
2. Identify epics, user stories, and acceptance criteria.
3. Split the work into small, independently actionable issues.
4. Keep each issue narrowly scoped and outcome-based.
5. Add clear titles, descriptions, acceptance criteria, and dependencies.
6. Flag issues that are blocked by prerequisites.
7. Present a dry-run list for confirmation unless the user already approved creation.
8. Create GitHub issues using the available issue tool once confirmed.
9. Return a concise summary with created issue IDs or links.

## Issue Drafting Rules

- One issue should represent one deliverable or one clear slice of work.
- Include acceptance criteria in checklist form.
- Include dependencies only when they are real and actionable.
- Use labels consistently for area, priority, and sprint when available.
- Avoid bundling unrelated tasks into one issue.
- Keep titles short and specific.

## Recommended Issue Template

### Title
Short, outcome-oriented summary.

### Body
```md
## Why
One or two sentences explaining the user or product value.

## Scope
- What is included
- What is excluded

## Acceptance Criteria
- [ ] Criterion one
- [ ] Criterion two
- [ ] Criterion three

## Dependencies
- Upstream issue or prerequisite, if any

## Notes
- Optional implementation hints or references to source docs
```

## Confirmation Behavior

- If the user asked for a draft only, provide the issue list and stop.
- If the user asked to create issues, create them after the dry-run unless they explicitly said to skip review.
- If the repository or tracker is unclear, ask a single clarifying question rather than guessing.

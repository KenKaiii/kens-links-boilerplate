---
name: check
description: Run linting and typechecking to find all code quality issues
---

# Code Quality Check

Run all code quality tools to identify issues in the codebase.

## Step 1: Run Linting

```bash
npm run lint
```

This runs ESLint to check for code style issues, potential bugs, and best practice violations.

## Step 2: Run Type Checking

```bash
npm run typecheck
```

This runs TypeScript compiler in check mode to verify type safety without emitting files.

## Step 3: Review Results

- Review all errors and warnings from both commands
- Errors must be fixed before committing
- Warnings should be addressed when possible

## Common Issues

**ESLint errors**:
- Unused variables
- Missing dependencies in useEffect
- Incorrect React hooks usage
- Import/export issues

**TypeScript errors**:
- Type mismatches
- Missing type definitions
- Incorrect prop types
- Any usage (avoid when possible)

## Quick Fixes

Many issues can be auto-fixed:
```bash
npm run lint -- --fix
```

For type errors, you'll need to manually add proper types or fix the code logic.

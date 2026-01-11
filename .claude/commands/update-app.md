---
name: update-app
description: Update dependencies, fix deprecations and warnings
---

# Dependency Update & Deprecation Fix

## Step 1: Check for Updates

```bash
npm outdated
```

Review all outdated packages. Pay attention to major version updates that may have breaking changes.

## Step 2: Update Dependencies

```bash
npm update
npm audit fix
```

If `npm audit fix` suggests `--force`, research the vulnerabilities first before proceeding.

## Step 3: Check for Deprecations & Warnings

Run a clean installation and check output:

```bash
rm -rf node_modules package-lock.json
npm install
```

Read ALL output carefully. Look for:
- Deprecation warnings
- Security vulnerabilities
- Peer dependency warnings
- Breaking changes

## Step 4: Fix Issues

For each warning/deprecation:
1. Research the recommended replacement or fix
2. Update code/dependencies accordingly
3. Re-run installation
4. Verify no warnings remain

Common fixes:
- Update import statements for renamed packages
- Replace deprecated APIs with new equivalents
- Adjust configuration files for breaking changes
- Update TypeScript types if needed

## Step 5: Run Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Fix all errors before completing. The build MUST succeed with ZERO warnings.

## Step 6: Verify Clean Install

Ensure a fresh install works:

```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

Verify ZERO warnings/errors and confirm:
- All dependencies resolve correctly
- Development server starts without issues
- No console warnings in terminal
- Application runs as expected

## Success Criteria

- ✅ All dependencies updated
- ✅ ZERO deprecation warnings
- ✅ ZERO security vulnerabilities
- ✅ All quality checks pass (lint, typecheck, build)
- ✅ Clean install completes without warnings
- ✅ Application runs correctly

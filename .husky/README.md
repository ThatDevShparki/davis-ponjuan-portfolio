# Git Hooks

This directory contains Git hooks managed by [Husky](https://typicode.github.io/husky/).

## Pre-commit Hook

The `pre-commit` hook automatically runs before each commit to ensure code quality.

### What it does:

1. **Runs on staged files only** - Only files you've added to the commit are checked
2. **Auto-fixes issues** - Automatically fixes formatting and linting problems
3. **Updates the commit** - Fixed files are automatically added back to the commit

### Workflow:

```
git add <files>
git commit -m "message"
  ↓
[Pre-commit hook runs]
  ↓
1. Backs up original state
2. Runs ESLint --fix on staged .js/.jsx/.ts/.tsx/.astro files
3. Runs Prettier --write on all staged files
4. Adds fixed files back to commit
5. Continues with commit
```

### What gets checked:

- **JavaScript/TypeScript/Astro files**: ESLint (auto-fix) + Prettier (format)
- **JSON/CSS/Markdown files**: Prettier (format)

### If commit fails:

If ESLint finds unfixable errors, the commit will be blocked. Fix the errors and try again:

```bash
# See what's wrong
pnpm run lint

# Try to auto-fix
pnpm run lint:fix

# Stage changes and commit again
git add .
git commit -m "your message"
```

### Skip hooks (not recommended):

```bash
git commit --no-verify -m "message"
```

**Note:** Only skip hooks if absolutely necessary. Hooks ensure code quality.

## Configuration

Hook behavior is configured in `package.json` under `lint-staged`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

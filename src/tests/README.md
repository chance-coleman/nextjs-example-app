## 📂 tests Directory

This directory contains unit tests, integration tests, and other automated tests for your Next.js application. It ensures your app's functionality remains reliable and correct as it evolves.

### 📖 Structure Overview

```
/tests
  ├── components/         # Tests for individual React components
  ├── hooks/              # Tests for custom React hooks
  ├── context/            # Tests for context providers and consumers
  ├── api/                # Tests for API routes (if applicable)
  ├── app/              # Integration tests for page-level behaviors
  └── utils/              # Tests for utility functions and helpers
```

### 🛠️ Conventions

* **Test Framework**: Typically uses Jest or Vitest
* **Filename Convention**: Name your test files with `.test.ts` / `.test.tsx` or `.spec.ts` / `.spec.tsx` suffix

  * Example: `Button.test.tsx`
* **Co-location**: Tests can be placed in this central `/tests` directory or next to the file they're testing if preferred for smaller projects.

### 📦 Example

```
/tests/components/Button.test.tsx
/tests/hooks/useAuth.test.ts
/tests/utils/formatDate.test.ts
```

### 🔍 Running Tests

Most projects configure a test script in `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Run with:

```bash
npm run test
```

or with Vitest if used:

```bash
npx vitest
```

### 📝 Notes

* Keep tests focused and isolated
* Use mocks and test utilities to avoid side effects
* Test both happy path and edge-case scenarios

## `/src/hooks/` Directory Overview

This directory is intended for storing all custom React hooks used throughout the application. Organizing hooks in a dedicated directory improves maintainability and makes it easier to reuse functionality across components.

### Example Structure

```
src/
  hooks/
    useWindowSize.ts
    useDebounce.ts
    useUser.ts
```

### Recommended Naming

* Each file should start with `use` followed by a descriptive name in camelCase (e.g., `useUserData.ts`, `useIsMobile.ts`).
* Hooks should be typed with TypeScript where applicable.

### Example Hook: `useWindowSize.ts`

```ts
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

### Best Practices

* Keep hooks pure and focused on a single piece of stateful behavior or side effect.
* Avoid placing unrelated logic in a single hook.
* Write unit tests for complex hooks.

### Usage

Import your hooks directly from the `/hooks/` directory:

```tsx
import { useWindowSize } from '@/hooks/useWindowSize';
```

---

Keep this directory organized and consistent for better long-term scalability and maintainability.

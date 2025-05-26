## 📂 `context/` Directory

The `context/` directory in a Next.js + React project is used to manage global state and share data or functions between components without prop-drilling. This is done by creating React Contexts — an efficient way to pass data deeply through the component tree.

### 📖 When to Use Context

* When multiple, deeply nested components need access to the same piece of data (e.g. user authentication, themes, or app-wide settings).
* As a lightweight alternative to state management libraries like Redux or Zustand when your state needs are relatively straightforward.

### 📦 Typical Contents

* `*.tsx` files defining your contexts and providers.
* Optional custom hooks for consuming contexts more conveniently.

### 📑 Example File Structure

```plaintext
context/
├── AuthContext.tsx      # Context for managing user authentication state
├── ThemeContext.tsx     # Context for managing theme (dark/light mode)
└── SomeFeatureContext.tsx # Context for a specific app feature
```

### 📘 Example Context

```tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
```

### 📝 Notes

* Always wrap your context usage with custom hooks like `useAuth` for cleaner and safer consumption.
* Provide descriptive context names and clear responsibilities for each context file.

---

✅ Refer to this `context/` directory README as a baseline guide whenever you need to add or update global state management in your Next.js app.

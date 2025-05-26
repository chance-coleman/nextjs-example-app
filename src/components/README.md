# 📁 components/

This directory contains all of the reusable React components used throughout the application.

## 📌 Purpose

Encapsulate UI and functional elements into modular, isolated, and reusable components to promote consistency and simplify maintenance.

## 📦 Typical Contents

* **UI Elements:** Buttons, Modals, Cards, Form inputs, Layout elements.
* **Page-specific Components:** Elements composed specifically for certain views but kept modular.
* **Utility Components:** Like loaders, error boundaries, or animation wrappers.

## 📁 Structure Example

```
components/
├── Button.tsx
├── Modal.tsx
├── Navbar.tsx
├── PageHeader.tsx
└── forms/
    └── InputField.tsx
```

## 📌 Conventions

* Prefer colocating component-specific styles and types with the component if applicable.
* Use PascalCase for component filenames (e.g., `UserCard.tsx`).
* Components should be as reusable and stateless as possible. Use hooks or context for shared state management.

## 📌 When to Add to This Directory

* When creating a UI element or functional React component intended for reuse.
* When breaking down a large page layout into smaller, composable pieces.

---

**Tip:** If a component gets large or gains subcomponents, consider creating a subfolder for it (e.g., `UserCard/` with `UserCard.tsx`, `types.ts`, `styles.module.css`).

# /app Directory README

The `/app` directory is the core of the Next.js application using the **App Router** (introduced in Next.js 13+). This directory defines the routing structure, layouts, metadata, and rendering behaviors of the app.

## Structure & Purpose

* **`layout.tsx`**
  Defines the root layout for your application. It wraps all pages and typically includes global providers, fonts, and shared elements like a navigation bar or footer.

* **`head.tsx`**
  Specifies the `<head>` content for your pages (like the `<title>`, meta tags, etc.). This file affects metadata and browser tab text at the application level.

* **`page.tsx`**
  Acts as the primary component for a route. Each folder under `/app` can contain its own `page.tsx` which defines the content for that route.

* **`error.tsx`**
  Custom error boundary for the route. If an error occurs in a specific route's rendering, this file is rendered.

* **`loading.tsx`**
  Displays a fallback loading UI while the route's content is loading asynchronously.

* **`not-found.tsx`**
  Renders a custom 404 page for when a user navigates to a non-existent route within a specific route folder.

* **`favicon.ico` / other static assets**
  Static assets should be placed in the `/public` directory instead of `/app`.

## Notes

* Every folder under `/app` can have its own `layout.tsx`, `head.tsx`, `error.tsx`, `loading.tsx`, and `not-found.tsx` for per-route customization.
* This directory replaces the older `pages/` convention when using the App Router.

## Example

```
/app
├── layout.tsx        # Root layout for the app
├── head.tsx          # Application-wide metadata
├── page.tsx          # Homepage content
├── error.tsx         # Error boundary for the root route
├── loading.tsx       # Loading UI for the root route
├── not-found.tsx     # 404 page for the root route
└── dashboard/
    ├── page.tsx      # Dashboard page content
    ├── layout.tsx    # Optional dashboard-specific layout
    └── ...
```

This ensures scalable, nested layouts and route-specific error handling.

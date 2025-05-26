# Next.js Example App Scaffold

This is a [Next.js](https://nextjs.org) project scaffold — a clean, opinionated starting point for building modern Next.js applications. It’s set up with essential structure, tooling, and conventions to save time getting new projects off the ground.

## 📦 What's Included

* **Next.js 15** for React-based full-stack applications
* **React 19**
* **TypeScript** for typed development
* **Tailwind CSS 4** for utility-first styling
* Project scaffolding organized under a `/src` directory for clearer separation of application code from configuration
* Pre-configured scripts for development, production builds, starting the app, and linting

## 📜 Scripts

Available npm scripts:

```bash
npm install     # Install dependencies
npm run dev     # Start the development server
npm run build   # Build the app for production
npm start       # Start the production build
npm run lint    # Run lint checks
```

## 📂 Project Structure

```bash
/src
  /app
    /layout.tsx        # Root layout wrapping the entire app (header, footer, providers)
    /page.tsx          # Root-level landing/home page
    /loading.tsx       # Optional loading spinner for suspense during navigation
    /error.tsx         # Global error boundary UI
    /not-found.tsx     # Custom 404 not found page

    /dashboard         # Feature folder for dashboard routes
      /layout.tsx      # Dashboard-specific layout (sidebar, nav)
      /page.tsx        # Dashboard home
      /settings
        /page.tsx      # Nested dashboard/settings page

    /profile
      /page.tsx
      /edit
        /page.tsx

    /admin
      /layout.tsx
      /users
        /page.tsx

  /components          # Reusable shared UI components (buttons, forms, modals)
  /hooks               # Custom React hooks
  /lib                 # Utilities, API clients, helper functions
  /context             # React Context providers (Auth, Theme, etc.)
  /styles              # Global styles, Tailwind config, CSS files
  /tests               # Unit & integration tests (optionally co-located too)

/public                # Static assets (images, icons, etc.)

/next.config.js        # Next.js configuration
/package.json          # Project metadata & scripts
/tsconfig.json         # TypeScript configuration
```

## 📖 Learn More

* [Next.js Documentation](https://nextjs.org/docs) — explore all Next.js features and APIs.
* [Learn Next.js](https://nextjs.org/learn) — an interactive tutorial for building Next.js apps.
* [Tailwind CSS Documentation](https://tailwindcss.com/docs) — utility classes for styling.

## 🚀 Deployment

The easiest way to deploy this app is via [Vercel](https://vercel.com), the creators of Next.js. Check out the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for details.

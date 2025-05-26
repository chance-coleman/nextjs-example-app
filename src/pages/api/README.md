## 📄 `src/app/api/` Directory Overview

This directory contains **API route handlers** for the Next.js **App Router**.

Unlike the legacy `pages/api/` system, these routes are built as **server-only modules** using modern `Request` and `Response` Web APIs and are colocated under the `app/` directory structure.

---

## 📦 How It Works

Each subdirectory inside `src/app/api/` maps directly to a URL endpoint.

**Example:**

```bash
src/
└── app/
    └── api/
        └── hello/
            └── route.ts
```

Accessing this API route:

```
GET http://localhost:3000/api/hello
```

---

## ✍️ Creating a New API Route

1. Inside `src/app/api/`, create a new folder named after your route.
2. Inside that folder, create a `route.ts` (or `route.js`) file.
3. Export one or more HTTP method handlers: `GET`, `POST`, `PUT`, `DELETE`, etc.

**Example:**

```ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from your API!' });
}
```

---

## ⚙️ Supported Features

* Server-side execution only
* Secure access to environment variables
* Can fetch data from external services
* Ideal for lightweight backend endpoints, form handling, or proxying requests
* Uses **Web Fetch API** (`Request`, `Response` objects)
* No access to React components

---

## 📝 Notes

* Prefer this `src/app/api/` directory for new projects using the **App Router**.
* The older `pages/api/` directory still works for backward compatibility but is not recommended for new code.
* Route handlers run as **Edge** or **Node.js** functions depending on your Next.js config.

---

## 📚 Official Docs

* [Next.js App Router API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers)

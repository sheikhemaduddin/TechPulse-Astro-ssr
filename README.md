# TechPulse — Astro SSR Frontend
**Stack:** Astro 4 · SSR · @astrojs/node adapter · pnpm

## What is SSR in Astro?
By default Astro builds fully static HTML at build time.
With `output: "server"` (SSR mode), pages render on every request —
allowing dynamic data, auth, and personalized content.

## Entry File
After `pnpm build`, Astro generates:
`dist/server/entry.mjs` — this is the Node.js server entry point.

Run it with:
```bash
node ./dist/server/entry.mjs
```

## Commands
```bash
# Install
pnpm install

# Development (http://localhost:4321)
pnpm dev

# Production build
pnpm build

# Preview production build locally
pnpm preview

# Run production server
pnpm start    # runs: node ./dist/server/entry.mjs
```

## Build Command (Cloudways / Vercel)
```
pnpm install && pnpm build
```

## Output Directory
```
dist/server      ← Node.js SSR server
dist/client      ← Static assets (JS, CSS, images)
```

## Start Command (Production)
```
node ./dist/server/entry.mjs
```

## Environment Variables
| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_API_URL` | ✅ Yes | Fastify backend URL e.g. https://your-api.cloudways.app |
| `PUBLIC_SITE_NAME` | ✗ | Site name (default: TechPulse) |

## Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured posts, categories, sidebar |
| `/blog` | All articles with search + category filter + pagination |
| `/blog/:slug` | Article detail — content, comments, like button, related |
| `/category/:slug` | Category page — filtered post grid |
| `/login` | Sign in with JWT — demo account buttons |

## Deployment (Two Apps)

### 1 — Deploy Fastify backend
```
Start: node src/server.js
Port:  4000
```
Copy URL → e.g. https://techpulse-api.cloudways.app

### 2 — Deploy Astro frontend
```
Build:  pnpm install && pnpm build
Start:  node ./dist/server/entry.mjs
Env:    PUBLIC_API_URL=https://techpulse-api.cloudways.app
Port:   4321
```

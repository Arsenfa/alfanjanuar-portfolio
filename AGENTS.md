# AGENTS.md

This file provides guidance to the AI agent when working with code in this repository.

## Stack — read this first

- **Vite 6 + React 19 + TypeScript 5.8** SPA (single page, no router).
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — NOT v3. There is no `tailwind.config.js`, no `postcss.config.js`, no `@tailwind base/components/utilities` directives. Config lives in `src/index.css` under `@theme { ... }` and `@utility` blocks. **Do not run `npx tailwindcss init`** — it will downgrade to v3 and break `@theme`, `@utility`, and utilities like `backdrop-blur-xs`.
- **All animations are CSS-only** — no framer-motion. Scroll-reveal uses a custom `useInView` hook (IntersectionObserver) in `src/hooks/useInView.ts`. Entry animations use `@keyframes` + `animation-delay`. Hover/tap effects use `hover-scale` and `hover-scale-lg` Tailwind utilities.
- **Lucide React** for icons.
- Colors are inline hex (`#020817`, `#64748B`, `#E5E7EB`, `#F1F5F9`, `#F8FAFC`) — do not refactor to Tailwind named shades without updating every occurrence consistently.

## Commands

- `npm run dev` — Vite dev server on port 3000 with `--host`.
- `npm run build` — production build to `dist/`.
- `npm run lint` — TypeScript type check (`tsc --noEmit`), not ESLint.
- `npm run clean` — removes `dist/` and `server.js` (leftover from the original template).
- `npm run preview` — preview the production build locally.

## Path alias

`@/*` maps to the **project root** (not `src/`), configured in both `vite.config.ts` and `tsconfig.json`. Example: `import X from '@/src/components/X'`.

## Non-obvious gotchas

- `vite.config.ts` reads `DISABLE_HMR`. Do not modify that block — it's used to prevent flicker during automated edits.
- The contact form in `src/components/ContactSection.tsx` does **not** send email. It simulates submission with `setTimeout` and persists messages to `localStorage` key `alfan_portfolio_messages`. Don't wire it to a real mail service without asking the user.
- Adding a new project mockup type requires edits in **three** places: `src/types.ts` (`mockupType` union), `src/components/ProjectMockup.tsx` (new branch), and `src/data.ts` (the data entry).
- `ProjectMockup.tsx` uses `minimal` prop to toggle between banner (colored) and modal (white) variants of the same illustration — keep both branches in sync when editing.
- `metadata.json` is project metadata, not app content. Don't stuff it with project data.
- Tech stack icons in `TechStackSection.tsx` are resolved via an explicit `iconMap` Record (not dynamic lookup) — the `icon` string in `src/data.ts` must match a key in `iconMap`.
- The modal uses a closing-state pattern: `App.tsx` manages `isModalClosing` state, sets it `true` on close, waits 200ms for the CSS fade-out animation, then unmounts. The `ProjectModal` component accepts an `isClosing` prop.
- Scroll-reveal sections use the `reveal` CSS class + `useInView` hook. The `visible` class triggers the CSS transition.

## Repo conventions

- No commits yet; repo was just initialized. No branch naming or PR conventions established.
- `.gitignore` excludes `node_modules/`, `dist/`, `build/`, `.env*` (except `.env.example`).
- `.env.example` lists `DISABLE_HMR` for optional HMR toggling.

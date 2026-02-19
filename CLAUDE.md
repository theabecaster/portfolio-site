# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint (next/core-web-vitals + next/typescript)
```

No test framework is configured.

## Architecture

Next.js 15 App Router portfolio site for Abraham Gonzalez (abrahamgonzalez.dev). TypeScript, Tailwind CSS 3, pnpm.

**Path alias:** `@/*` maps to `./src/*`

### Pages (App Router)

- `/` — Single-page home with Hero, About, Skills, Projects, and Contact sections (all inline in `src/app/page.tsx`, not using the section components from `src/components/sections/`)
- `/about`, `/projects`, `/contact` — Dedicated pages using components from `src/components/sections/`
- `/api/contact` — POST endpoint using Resend SDK to send emails (requires `RESEND_API_KEY` env var)

### Theme System

Dark/light mode via CSS class toggling on `<html>`. The `ThemeProvider` (`src/components/theme/ThemeProvider.tsx`) is a client-side context that reads `localStorage`/system preference and toggles the `.dark` class. All theme colors are CSS custom properties defined in `src/app/globals.css` (`:root` for light, `.dark` for dark) and mapped through `tailwind.config.js` — use the Tailwind token names (`bg-background`, `text-primary`, `border-border`, etc.) rather than raw hex values.

### Fonts

- **Headings:** Playfair Display (`font-heading` / `font-serif`) via `--font-playfair`
- **Body:** Cabin (`font-sans`) via `--font-cabin`

Both loaded through `next/font/google` in `src/app/layout.tsx`.

### Scroll Animations

`ScrollReveal` component (`src/components/ui/ScrollReveal.tsx`) uses IntersectionObserver for fade-in-up on scroll. Accepts `delay`, `once`, and `threshold` props. Framer Motion is also available as a dependency.

### Layout

`Header` (fixed, scroll-aware with mobile hamburger overlay) and `Footer` wrap all pages via the root layout. Navigation links: Home, About, Projects, Contact.

# Portfolio Website

[Live site](https://rousseauc1.github.io) · Hosted on [GitHub Pages](https://pages.github.com/) with GitHub Actions CI/CD

Personal portfolio for Cade Rousseau — Software Engineering student at Milwaukee School of Engineering. Built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark / light theme with preference saved in `localStorage`
- Client-side routing (React Router) with SPA fallback for GitHub Pages
- Project showcase with dedicated detail pages
- Experience section backed by JSON data
- Downloadable resume

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, TypeScript 5 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4, PostCSS |
| Routing | React Router DOM 7 |
| CI/CD | GitHub Actions → GitHub Pages |

## Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml           # Lint, build, audit, smoke tests
│       └── deploy.yml       # Build & deploy to GitHub Pages
├── public/
│   └── assets/images/       # Project images, resume, media
├── src/
│   ├── components/          # Shared UI (Header, NavBar, cards, etc.)
│   ├── context/             # ThemeContext
│   ├── data/                # projects.json, experience.json
│   ├── pages/               # Home, Projects, ProjectDetail, Experience, About, Resume
│   ├── styles/              # Global styles & Tailwind
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/rousseauc1/rousseauc1.github.io.git
cd rousseauc1.github.io
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint |

## Deployment

The site is published with **GitHub Pages** from this repository (`rousseauc1.github.io`).

On every push to `main` (or via workflow dispatch):

1. **CI** (`.github/workflows/ci.yml`) — install, lint, build, dependency audit, and a basic smoke test of the built site
2. **Deploy** (`.github/workflows/deploy.yml`) — build the Vite app, copy `index.html` to `404.html` for SPA client-side routes, then publish the `dist/` artifact with `actions/deploy-pages`

Live URL: https://rousseauc1.github.io

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, intro, and featured content |
| `/Projects` | Project grid |
| `/Projects/:id` | Project detail (problem, process, media, tech) |
| `/Experience` | Work and internship experience |
| `/About` | Background, education, interests |
| `/Resume` | Resume view and PDF download |

Legacy routes `/ProjectOne`, `/ProjectTwo`, and `/ProjectThree` redirect to the corresponding project detail pages.

## Theme

- **Light**: cream / warm brown palette (`#f5f0e6`, `#5c4d3f`)
- **Dark**: gray-scale surfaces with light text
- Theme preference persists in `localStorage`; transitions use a short CSS duration

## About

**Cade Rousseau**  
Software Engineering (Data Science minor) · MSOE · Expected graduation May 2027 · Waukesha, WI

## License

Copyright © 2026 Cade Rousseau. All Rights Reserved.

Personal portfolio — not licensed for reuse, reproduction, or distribution without permission.

## Contact

Reach out via the contact details on the live site.

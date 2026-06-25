# Faisal Afzal — Portfolio Website

A premium, production-ready personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Animated hero with typing effect
- Dark / Light mode toggle
- Glassmorphism UI with gradient accents
- Skills progress bars
- Education & experience timelines
- Project cards with technology tags
- Contact form with validation
- Scroll-to-top button
- SEO optimized with meta tags & JSON-LD
- Fully responsive (mobile, tablet, desktop)
- Accessibility friendly

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later recommended).

### Installation

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Resume Download

Place your resume PDF at:

```
public/Faisal-Afzal-Resume.pdf
```

The **Download Resume** button in the navbar and hero section will serve this file.

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── components/
│   ├── layout/       # Navbar, Footer, ThemeToggle, etc.
│   ├── sections/     # Hero, About, Skills, etc.
│   ├── ui/           # Reusable UI components
│   └── providers/    # Theme provider
└── lib/
    ├── data.ts       # All portfolio content (edit here)
    └── utils.ts      # Utility functions
```

## Customization

All personal content is centralized in `src/lib/data.ts`. Update that file to change text, links, skills, projects, and more.

## Deploy

Deploy easily to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any platform supporting Next.js.

---

Built for **Faisal Afzal** — MERN Stack Developer

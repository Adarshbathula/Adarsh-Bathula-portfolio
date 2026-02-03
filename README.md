# Adarsh Bathula – Portfolio

Modern, mobile-responsive portfolio website for a full-stack developer, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a brown and white palette, card-based UI, soft shadows, rounded corners, and smooth left-to-right page transitions.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Check out portfolio**:https://adarsh-bathula-portfolio.vercel.app/

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Pages

- `/` – Home (profile, tagline, CTAs)
- `/about` – Summary, education, experience
- `/projects` – Project cards with tech stacks
- `/skills` – Categorized skills
- `/contact` – Contact form + social links
- `/resume` – Resume viewer + download

## Vercel Deployment

1. Initialize git and connect to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/adarsh-portfolio.git
git push -u origin main
```

2. In Vercel:
   - Import the GitHub repository.
   - Framework: **Next.js** (auto-detected).
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. Before deploying, replace:
   - `public/AdarshBathula-Resume.pdf` with your actual resume.
   - Social links in `app/contact/page.tsx`.
   - Any `#` placeholders for GitHub/Live demo links in `app/projects/page.tsx`.


# Abhinav Udayan — Portfolio

A responsive, dark-glassmorphism portfolio built with Next.js App Router, React, Tailwind CSS, and TypeScript.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize before publishing

1. Replace `public/profile.jpg` with your own profile photo (keep the filename).
2. Put your resume PDF at `public/resume.pdf`.
3. Update GitHub and LinkedIn URLs in `src/lib/portfolio.ts`.
4. Review education dates, project descriptions, and skills in `src/lib/portfolio.ts`.
5. Add real project repository/demo links in the same file.

## Project structure

```text
abhinav-portfolio/
├── public/
│   ├── profile-placeholder.svg
│   └── resume-placeholder.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── portfolio.tsx
│   │   └── section-heading.tsx
│   └── lib/
│       └── portfolio.ts
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Git repository setup

```bash
git init
git add .
git commit -m "Initial portfolio scaffold"
```

Create an empty repository on GitHub, then connect it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abhinav-portfolio.git
git push -u origin main
```
## Live deployed link

```
https://my-portfolio-ten-blush-48.vercel.app
```
## Notes

- Uses Tailwind CSS 3 for a predictable, straightforward setup.
- Includes accessible dropdowns, responsive navigation, animated glass cards, and reduced-motion support.
- The profile image and resume are placeholders until you add your real files.
- Used vercel's free domain to deploy the portfolio live.

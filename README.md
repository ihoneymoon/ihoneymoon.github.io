# 🌸 Pinky Dev Portfolio

> A kawaii-aesthetic software engineer portfolio built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

[![Deploy to GitHub Pages](https://github.com/pinkydev/portfolio-se/actions/workflows/deploy.yml/badge.svg)](https://github.com/pinkydev/portfolio-se/actions/workflows/deploy.yml)

![Portfolio Preview](public/og-image.png)

---

## ✨ Features

- 🌸 **Kawaii aesthetic** — Soft pink, lavender, and pastel purple palette
- 🎨 **Glassmorphism UI** — Elegant frosted-glass cards throughout
- ✨ **Framer Motion animations** — Smooth, delightful interactions
- 💻 **Particle background** — Floating stars and sparkles canvas animation
- 🖱️ **Cursor glow** — Soft glow that follows your mouse
- 📱 **Fully responsive** — Beautiful on mobile, tablet, and desktop
- 🚀 **Static export** — Deploys to GitHub Pages via GitHub Actions
- 🔍 **SEO optimized** — Complete meta tags and OpenGraph support
- ♿ **Accessible** — Proper semantics and ARIA labels
- 🎯 **TypeScript** — Fully typed codebase

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| 🌸 **Hero** | Animated intro with typing effect, illustration, and social links |
| 👤 **About** | Bio, skills progress, and fun facts cards |
| 💻 **Tech Stack** | Floating tech cards with proficiency bars |
| 🚀 **Projects** | Filterable project showcase with hover animations |
| 🗺️ **Roadmap** | Visual learning journey timeline |
| 📖 **Experience** | Career milestone timeline |
| 📊 **GitHub Stats** | Activity heatmap, language stats, and charts |
| 🎵 **Current Vibes** | Clock, music player, coffee counter, mood widgets |
| 💌 **Contact** | Contact form + social links |
| 🌺 **Footer** | Sparkled footer with back-to-top |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-se.git
cd portfolio-se

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

## 📁 Project Structure

```
portfolio-se/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── app/
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout with SEO metadata
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── CursorGlow.tsx          # Smooth cursor glow effect
│   ├── Navigation.tsx          # Sticky glassmorphism navbar
│   └── ParticleBackground.tsx  # Canvas particle animation
├── sections/
│   ├── HeroSection.tsx         # Landing hero with illustration
│   ├── AboutSection.tsx        # About me & skills
│   ├── TechStackSection.tsx    # Technology showcase
│   ├── ProjectsSection.tsx     # Project portfolio
│   ├── RoadmapSection.tsx      # Learning roadmap
│   ├── ExperienceSection.tsx   # Career timeline
│   ├── GithubStatsSection.tsx  # GitHub statistics
│   ├── CurrentVibesSection.tsx # Fun live widgets
│   ├── ContactSection.tsx      # Contact form & links
│   └── Footer.tsx              # Footer with sparkles
├── lib/
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── next.config.ts              # Next.js config (static export)
├── tailwind.config.ts          # Custom Tailwind theme
└── tsconfig.json               # TypeScript config
```

## 🌍 GitHub Pages Deployment

### Step 1: Create your repository

```bash
git init
git add .
git commit -m "✨ Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 3: Update `next.config.ts` for subdirectory deployment

If your site will be at `https://username.github.io/repo-name/` (not the root domain), uncomment and update:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/YOUR_REPO_NAME", // ← Add this!
  images: { unoptimized: true },
};
```

> **Note**: If deploying to `https://username.github.io` (root, repository named `username.github.io`), leave `basePath` commented out.

### Step 4: Push and deploy

```bash
git add .
git commit -m "🚀 Configure for GitHub Pages"
git push
```

The GitHub Actions workflow will automatically build and deploy your portfolio!

### Step 5: Access your portfolio

Your site will be live at:
- `https://YOUR_USERNAME.github.io` (if repo is `username.github.io`)
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` (otherwise)

## 🎨 Customization Guide

### Update personal info

Edit the constants in each section file:

**`sections/HeroSection.tsx`** — Name, typing strings, social links
```tsx
const TYPING_STRINGS = ["Your Title 🌸", "Another Role ✨", ...];
```

**`sections/AboutSection.tsx`** — Bio text, skills, facts

**`sections/ProjectsSection.tsx`** — Your actual projects
```tsx
const PROJECTS = [
  {
    title: "My Cool Project",
    description: "...",
    tags: ["React", "TypeScript"],
    github: "https://github.com/you/project",
    demo: "https://project.vercel.app",
  },
  // ...
];
```

**`sections/ContactSection.tsx`** — Email, social handles

### Update colors

The color palette is defined in `tailwind.config.ts`. Modify the `sakura`, `lavender`, and `dreamy` color groups to change the theme.

### SEO

Update metadata in `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description...",
  // ...
};
```

## 📄 License

MIT — Feel free to use this as a template for your own portfolio! A credit/star is appreciated 🌸

---

<div align="center">
  Made with 💗 by <a href="https://github.com/pinkydev">Pinky Dev</a>
  <br>
  <em>Building cute things that solve real problems ✨</em>
</div>
# ihoneymoon.github.io

# Portfolio — Krushna Bhende

A single-page developer portfolio built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**.

🌐 **Live Demo:** [https://portfolio-nine-topaz-37.vercel.app/](https://portfolio-nine-topaz-37.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-nine-topaz-37.vercel.app/)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Deploy to Vercel

```bash
# Option A: Via Vercel CLI
npx vercel

# Option B: Connect your GitHub repo in the Vercel dashboard
# It auto-detects the Vite framework settings from vercel.json
```

## How to Customize

All personal data lives in the `src/data/` folder. Edit these files and the site updates automatically:

| File | What to change |
|------|---------------|
| `src/data/projects.ts` | Your projects — title, description, tech stack, GitHub + demo links |
| `src/data/skills.ts` | Your skills grouped by category |
| `src/data/experience.ts` | Work experience, education, hackathon wins |
| `src/data/socials.ts` | Social links (GitHub, LinkedIn, LeetCode, etc.) + resume URL |

### Things to Replace

- [ ] **Name** — Search for "Krushnaprakash bhende" / "krushna" and replace with your name
- [ ] **College** — Replace "Mauli Group of Institutions' College of Engineering and Technology (MGI-COET)" in Hero.tsx, About.tsx, and experience.ts
- [ ] **Email** — Replace `krushnaprakashbhende@gmail.com` in socials.ts and Contact.tsx
- [ ] **Social URLs** — Update all `yourusername` links in socials.ts
- [ ] **Resume** — Place your `resume.pdf` in the `public/` folder
- [ ] **Photo** — Replace the avatar placeholder in About.tsx with an `<img>` tag pointing to your photo (put it in `public/`)
- [ ] **Projects** — Replace placeholder projects with your real ones in projects.ts
- [ ] **Stats** — Update LeetCode count, GitHub stars, etc. in About.tsx

### Design Customization

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --background: 0 0% 4%;     /* Change page background */
  --accent: 145 80% 56%;     /* Change accent color (green) */
  /* ...etc */
}
```

Fonts are loaded from Google Fonts in `index.html`. To change fonts, update the `<link>` tag and the `fontFamily` config in `tailwind.config.ts`.

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool
- **TypeScript** — Type safety
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations
- **lucide-react** — Icons

## Folder Structure

```
src/
├── components/       # All React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Terminal.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Timeline.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/             # All customizable data
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── socials.ts
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles + theme variables
```

## License

MIT


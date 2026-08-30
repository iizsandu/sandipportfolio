# CLAUDE.md — Sandip Shaw Portfolio

## Project Overview

Personal data science portfolio website for Sandip Shaw. Built as a single-page application (SPA) with smooth scrolling between sections. Showcases data science skills, education, work experience, and three featured projects.

**Live source:** [Lovable project](https://lovable.dev/projects/1f481776-b4da-417b-83ee-df30d33af9c6)
**GitHub remote:** git@github.com:iizsandu/sandipportfolio.git

---

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 5 |
| Framework | React 18 + TypeScript 5 |
| Styling | Tailwind CSS 3 + custom CSS variables |
| UI components | shadcn/ui (Radix UI primitives) |
| Routing | React Router DOM 6 |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack React Query 5 |
| Email | EmailJS Browser 4 |
| Icons | Lucide React |
| Charts | Recharts |
| Notifications | Sonner (toasts) |
| Theme | next-themes |

---

## Development

```bash
npm run dev       # Start dev server at http://localhost:8080
npm run build     # Production build
npm run build:dev # Development mode build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

The dev server binds to port **8080** with IPv6 dual-stack enabled.

Path alias `@` maps to `./src`.

---

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx          # Main landing page (all sections)
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx           # Intro, CTA buttons, social links
│   ├── About.tsx          # Skills grid, education, experience
│   ├── Services.tsx       # Services section (currently commented out)
│   ├── Portfolio.tsx      # Project cards with category filter
│   ├── Contact.tsx        # EmailJS contact form
│   ├── Footer.tsx         # Footer
│   └── ui/                # shadcn/ui component library (60+ files)
├── hooks/
│   ├── use-mobile.tsx     # Mobile breakpoint detection
│   └── use-toast.ts       # Toast hook
├── lib/
│   └── utils.ts           # cn() classname utility
├── assets/
│   ├── profile.jpg
│   ├── project-routes.jpg
│   ├── project-plant.jpg
│   └── project-sentiment.jpg
├── App.tsx                # Router setup
├── index.css              # Global styles, Tailwind directives, CSS vars
└── main.tsx               # Entry point
```

---

## Sections & Navigation

The site is a single page with anchor-based smooth scrolling. Navbar links scroll to:

- **Home** → Hero section
- **About** → About section
- **Portfolio** → Portfolio section
- **Contact** → Contact section

---

## Portfolio Projects

Three featured projects displayed in [Portfolio.tsx](src/components/Portfolio.tsx):

1. **AI-powered Alternate Route Recommendation** — NLP + GIS for safe navigation avoiding high-crime zones. Tags: AI, NLP, GIS.
2. **Urban Greenery Optimization** — Deep learning + GIS using Sentinel-2 satellite imagery; U-Net semantic segmentation; NDVI/NDBI analysis. Tags: Computer Vision, CNN, Deep Learning.
3. **Twitter Sentiment Analysis** — Real-time NLP sentiment analysis of Russia-Ukraine conflict tweets. Tags: NLP, Sentiment Analysis, Data Visualization.

Filter buttons let visitors filter projects by category (All, AI, NLP, Data Visualization, Deep Learning).

---

## Contact Form (EmailJS)

The contact form in [Contact.tsx](src/components/Contact.tsx) uses EmailJS. Configuration (service ID, template ID, public key) is embedded in the component. Successful/failed submissions trigger Sonner toast notifications.

---

## Styling Conventions

- **Color tokens** defined as HSL CSS custom properties in [index.css](src/index.css). Primary blue: `#2080FF`, accent cyan: `#00BFF0`.
- **Dark mode** is class-based (via next-themes) but not fully wired up — UI is designed light-first.
- **Custom animations** defined in [tailwind.config.ts](tailwind.config.ts): `fade-in`, `slide-in-left`, `float`, accordion open/close.
- Use `cn()` from `@/lib/utils` for conditional classname merging throughout components.
- Container max-width is 1400px, centered.

---

## TypeScript Notes

TypeScript is configured loosely for development speed:
- No strict null checks
- No unused variable/parameter errors
- `allowJs: true`
- `skipLibCheck: true`

Don't enable stricter settings without testing — it will surface many existing issues.

---

## Services Section

[Services.tsx](src/components/Services.tsx) exists but is **commented out** in [Index.tsx](src/pages/Index.tsx). To re-enable it, uncomment the `<Services />` import and JSX usage in Index.tsx.

---

## Adding a New Portfolio Project

1. Add a project image to [src/assets/](src/assets/).
2. Import the image in [Portfolio.tsx](src/components/Portfolio.tsx).
3. Add a new entry to the `projects` array with fields: `id`, `title`, `description`, `image`, `tags`, `github`, `category`.
4. If introducing a new category, add a filter button to the `categories` array.

---

## Rules

- Before building or generating any resume, always explicitly ask Sandip for permission first.

---

## Owner / Contact

- **Name:** Sandip Shaw
- **Email:** sandip8017shaw@gmail.com
- **GitHub:** https://github.com/iizsandu
- **LinkedIn:** https://linkedin.com/in/sandip8017shaw
- **Medium:** https://medium.com/@sandip8017shaw
- **Location:** Pune, India

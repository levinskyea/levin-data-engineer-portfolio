# Levin Skye Aligway — Data Engineer Portfolio

A modern, production-ready personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Recharts**, and **Framer Motion**.

## 🖥️ Running Locally

### 1. Prerequisites

- **Node.js 18+** — download from [nodejs.org](https://nodejs.org) and run the installer
- Verify installation by opening a terminal and running:
  ```bash
  node --version   # should print v18.x.x or higher
  npm --version    # should print 9.x.x or higher
  ```

### 2. Clone the repository

```bash
git clone https://github.com/levinaligway/levin-data-engineer-portfolio.git
cd levin-data-engineer-portfolio
```

> Or download the ZIP from GitHub and extract it.

### 3. Install dependencies

```bash
npm install
```

This installs Next.js, Tailwind CSS, Framer Motion, Recharts, and all other packages listed in `package.json`.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads automatically as you edit files.

### 5. (Optional) Add your resume

Drop your resume file into the `public/` folder and name it `resume.pdf`:

```
public/
└── resume.pdf   ← place it here
```

The "Download Resume" button in the Hero section will serve it at `/resume.pdf`.

### 6. Build for production

```bash
npm run build   # compiles and optimises
npm start       # starts the production server on port 3000
```

Check for any TypeScript or lint errors before deploying:

```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, theme, navbar, footer)
│   ├── page.tsx            # Home page (all sections)
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # robots.txt
│   ├── etl-demo/
│   │   └── page.tsx        # Interactive ETL pipeline demo
│   └── projects/
│       └── [slug]/
│           └── page.tsx    # Dynamic project detail pages
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx       # + Textarea
│   │   └── skeleton.tsx
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── navbar.tsx          # Sticky nav + dark mode toggle
│   ├── footer.tsx
│   ├── fade-in.tsx         # Reusable scroll animation wrapper
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── dashboard.tsx       # Recharts line/bar charts + table
│   ├── skills.tsx
│   ├── experience.tsx
│   └── contact.tsx
└── lib/
    ├── utils.ts            # cn() helper
    └── data.ts             # Project data constants
```

---

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

That's it. Vercel handles builds, preview deployments, and CDN automatically.

### Custom Domain
In Vercel project settings → **Domains** → add your domain.

Update `BASE_URL` in `src/app/sitemap.ts` and `src/app/robots.ts` to match.

---

## 🎨 Customisation

| What | Where |
|------|-------|
| Your info (name, bio, links) | `src/components/hero.tsx` |
| Projects data | `src/lib/data.ts` |
| Experience entries | `src/components/experience.tsx` |
| Skills list | `src/components/skills.tsx` |
| Contact email | `src/components/contact.tsx` |
| SEO metadata | `src/app/layout.tsx` |
| Colour theme | `src/app/globals.css` (CSS variables) |

### Connect Contact Form
Replace the `handleSubmit` stub in `src/components/contact.tsx` with a real service:

```ts
// Formspree example
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message })
});
```

---

## ✨ Features

- ✅ Dark / light mode toggle
- ✅ Framer Motion scroll animations (fade-in + slide-up)
- ✅ Recharts dashboard (line chart, bar chart, data table)
- ✅ Skeleton loaders
- ✅ Dynamic project pages (`/projects/salmon`, `/projects/scallop`)
- ✅ Interactive ETL pipeline demo (`/etl-demo`)
- ✅ Full SEO (metadata, Open Graph, Twitter cards, sitemap, robots.txt)
- ✅ Fully responsive

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui + Radix UI |
| Charts | Recharts |
| Animations | Framer Motion |
| Theme | next-themes |
| Icons | lucide-react |
| Deployment | Vercel |

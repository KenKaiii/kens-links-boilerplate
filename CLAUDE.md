# Links Page Boilerplate

A modern, minimalist link-in-bio page template built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Designed for easy customization and Vercel deployment.

## Project Structure

```
app/
  ├── layout.tsx       # Root layout with metadata, fonts (Inter, Unbounded, Roboto)
  ├── page.tsx         # Main page with responsive layout (mobile/desktop)
  └── globals.css      # Global styles and Tailwind directives

components/
  ├── profile-section.tsx      # Profile image with animations
  ├── section-title.tsx        # User name display with accent
  ├── contacts-list.tsx        # Social links list wrapper
  ├── contact-row.tsx          # Individual gradient button with badge/featured support
  ├── social-icons.tsx         # Icon renderer (email, youtube, tiktok, instagram, twitter, etc.)
  └── floating-background.tsx  # Animated gradient orbs background

config/
  └── site-config.ts   # ⭐ Main customization file - profile, links, SEO, theme

lib/
  └── utils.ts         # Utility functions (cn for class merging)

public/
  ├── images/
  │   └── profile-placeholder.png  # Replace with your profile photo
  └── og-image.png                 # Replace with your OG image (1200x630)
```

## Organization Rules

**Configuration-driven approach:**
- ALL user content → `config/site-config.ts`
- Profile images → `/public/images/`
- Components → `/components/`, one component per file
- Utilities → `/lib/`, grouped by functionality
- Types → Defined alongside usage in components

**Component modularity:**
- Single responsibility per component
- Client components marked with `'use client'`
- Reusable, self-contained UI pieces
- Props typed with TypeScript interfaces

## Customization

Edit `config/site-config.ts` to update:
- Name, title, description, profile image path
- Social media links (add/remove/reorder)
- Badges (e.g., "Open for Work", "New Videos")
- Featured buttons (highlighted with ring)
- SEO metadata (title, description, OG image, URL)

## Code Quality - Zero Tolerance

After editing ANY file, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Fix ALL errors/warnings before continuing.

For development with hot reload:
```bash
npm run dev
```

Read terminal output. Fix ALL warnings before continuing.

## Tech Stack

- **Next.js 16** with App Router and Turbopack
- **React 19** with strict TypeScript
- **Tailwind CSS v4** for styling
- **Framer Motion 12** for animations
- **Lucide React** for icons

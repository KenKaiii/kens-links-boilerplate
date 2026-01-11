# Customization Guide

This guide will help you customize your Links Page boilerplate step by step.

## Step 1: Update Your Personal Information

Open `config/site-config.ts` and update the following:

### Basic Info
```typescript
name: 'Your Name',  // Your display name
title: 'Your Title / Tagline',  // Optional tagline
description: 'Your description or bio goes here.',
```

### Profile Image
```typescript
profileImage: '/images/profile-placeholder.png',
```
Then replace the file at `public/images/profile-placeholder.png` with your photo:
- Recommended size: 400x600px (portrait)
- Format: PNG or JPG
- The image will have a gradient fade at the bottom

## Step 2: Add Your Social Links

In the `links` array, update or add your social media links:

```typescript
links: [
  {
    icon: 'youtube',  // Icon type
    label: 'YouTube',  // Button label
    href: 'https://youtube.com/@yourchannel',  // Your URL
  },
  {
    icon: 'email',
    label: 'E-mail',
    value: 'your@email.com',  // Display value (optional)
    href: 'mailto:your@email.com',
  },
]
```

### Available Icons
- `skool` - Skool community
- `youtube` - YouTube
- `tiktok` - TikTok
- `instagram` - Instagram
- `twitter` - Twitter/X
- `linkedin` - LinkedIn
- `github` - GitHub
- `email` - Email (with copy functionality)

### Remove Links You Don't Need
Simply delete the entire link object from the array:

```typescript
// Remove this entire block if you don't need it
{
  icon: 'tiktok',
  label: 'TikTok',
  href: 'https://tiktok.com/@yourusername',
},
```

## Step 3: Update SEO Settings

```typescript
seo: {
  title: 'Your Name - Your Title',  // Browser tab title
  description: 'Your description for search engines.',  // Meta description
  ogImage: '/og-image.png',  // Social media preview image
  url: 'https://yourdomain.com',  // Your website URL
  twitterHandle: '@yourusername',  // Optional Twitter handle
}
```

### Create Your OG Image
Replace `public/og-image.png` with your custom image:
- Required size: 1200x630px
- Format: PNG or JPG
- This appears when sharing your link on social media

**Tips for OG Image:**
- Include your name or brand
- Keep text large and readable
- Use high contrast
- Test how it looks on Twitter/Facebook before deploying

## Step 4: Styling Customization (Optional)

### Change Colors
Edit `app/globals.css`:

```css
:root {
  --background: #000000;  /* Background color */
  --foreground: #ffffff;  /* Text color */
}
```

### Adjust Button Styles
Edit the ContactRow component in `components/contact-row.tsx`:
- Change `bg-neutral-950` to your preferred background
- Change `border-neutral-800` to your preferred border color
- Modify hover effects

### Disable Animations
In `app/page.tsx`, change:
```typescript
const reducedMotion = true;  // Set to true to disable all animations
```

## Step 5: Test Locally

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- Profile image displays correctly
- All links work
- Mobile view looks good (resize browser)
- Hover effects work on desktop

## Step 6: Deploy to Vercel

### From GitHub (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Update After Deployment
1. Get your Vercel URL (e.g., `your-site.vercel.app`)
2. Update the `url` in `config/site-config.ts`:
   ```typescript
   url: 'https://your-site.vercel.app',
   ```
3. Commit and push - Vercel auto-deploys

## Common Customizations

### Add a Custom Domain
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update the `url` in `config/site-config.ts`

### Change Font
1. Import a different Google Font in `app/layout.tsx`
2. Update the font variable
3. Use it in your components

### Add Analytics
1. Add Vercel Analytics:
   ```bash
   npm install @vercel/analytics
   ```
2. Import in `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   ```
3. Add `<Analytics />` component

### Add More Pages
Create new files in the `app/` directory:
- `app/about/page.tsx` → `/about` route
- `app/contact/page.tsx` → `/contact` route

## Need Help?

- Check the main [README.md](README.md) for more details
- Review [Next.js docs](https://nextjs.org/docs)
- Check [Tailwind docs](https://tailwindcss.com/docs)

## Checklist Before Deploying

- [ ] Updated name and title in config
- [ ] Replaced profile image
- [ ] Updated all social media URLs
- [ ] Replaced OG image
- [ ] Updated SEO settings
- [ ] Tested locally
- [ ] All links work correctly
- [ ] Mobile view looks good
- [ ] Updated URL after deployment
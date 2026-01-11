/**
 * Site Configuration
 *
 * Update this file with your personal information to customize your link page.
 * Replace all placeholder values with your actual data.
 */

export interface SocialLink {
  icon: 'youtube' | 'tiktok' | 'instagram' | 'twitter' | 'linkedin' | 'github' | 'email';
  label: string;
  value?: string; // Display value (optional, defaults to label)
  href: string;
  onClick?: () => void;
  badge?: string; // Optional badge text like "New", "Hiring", "Limited Spots"
  featured?: boolean; // Highlight this button with special styling
}

export interface SiteConfig {
  // Profile Information
  name: string;
  title: string;
  description: string;
  profileImage: string; // Path to your profile image in /public folder

  // Social Media Links
  links: SocialLink[];

  // SEO & Meta
  seo: {
    title: string;
    description: string;
    ogImage: string; // Path to Open Graph image in /public folder
    url: string; // Your deployed URL
    twitterHandle?: string;
  };

  // Styling
  theme: {
    fontFamily: string; // Custom font family (make sure to import in layout)
  };
}

// REPLACE THIS WITH YOUR INFORMATION
export const siteConfig: SiteConfig = {
  // Profile Information
  name: 'Your Name',
  title: 'Your Title / Tagline',
  description: 'Your description or bio goes here.',
  profileImage: '/images/profile-placeholder.png',

  // Social Media Links
  // Add or remove links as needed
  links: [
    {
      icon: 'email',
      label: 'E-mail',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
      badge: 'Open for Work',
      featured: true, // This button will have special styling
    },
    {
      icon: 'youtube',
      label: 'YouTube',
      href: 'https://youtube.com/@yourchannel',
      badge: 'New Videos',
    },
    {
      icon: 'tiktok',
      label: 'TikTok',
      href: 'https://tiktok.com/@yourusername',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/yourusername',
    },
    {
      icon: 'twitter',
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
    },
  ],

  // SEO & Meta Tags
  seo: {
    title: 'Your Name - Your Title',
    description: 'Your description for search engines and social media previews.',
    ogImage: '/og-image.png',
    url: 'https://yourdomain.com',
    twitterHandle: '@yourusername',
  },

  // Theme Configuration
  theme: {
    fontFamily: "'Inter', sans-serif",
  },
};

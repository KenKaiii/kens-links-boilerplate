'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Copy } from 'lucide-react';
import { SocialIcon } from './social-icons';

interface ContactRowProps {
  icon: string;
  label: string;
  value?: string;
  href: string;
  reducedMotion?: boolean;
  isEmail?: boolean;
  badge?: string;
  featured?: boolean;
}

// Gradient colors for each social platform
const gradientMap: Record<string, string> = {
  email: 'from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 shadow-slate-500/25 hover:shadow-slate-500/40',
  youtube: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-500/25 hover:shadow-red-500/40',
  tiktok: 'from-gray-800 to-black hover:from-black hover:to-gray-900 shadow-gray-800/25 hover:shadow-gray-800/40',
  instagram: 'from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 shadow-pink-500/25 hover:shadow-purple-500/40',
  twitter: 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-blue-500/25 hover:shadow-blue-500/40',
  linkedin: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-600/25 hover:shadow-blue-600/40',
  github: 'from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-gray-700/25 hover:shadow-gray-700/40',
};

export function ContactRow({
  icon,
  label,
  value,
  href,
  reducedMotion = false,
  isEmail = false,
  badge,
  featured = false,
}: ContactRowProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isEmail && value) {
      e.preventDefault();
      navigator.clipboard?.writeText(value);
      // You could add a toast notification here
    }
  };

  const gradient = gradientMap[icon] || gradientMap.email;

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      target={href && !isEmail ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      className="group block relative"
    >
      {/* Badge */}
      {badge && (
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          animate={{
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
            {badge}
          </div>
        </motion.div>
      )}

      <div
        className={`relative flex items-center justify-between p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-r ${gradient} text-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 ${
          featured ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' : ''
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
            <SocialIcon icon={icon} className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span className="text-sm md:text-base font-semibold tracking-wide font-[family-name:var(--font-roboto)]">
            {value || label}
          </span>
        </div>
        <div className="text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
          {isEmail ? (
            <Copy className="w-5 h-5 transition-transform duration-300" />
          ) : (
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
          )}
        </div>

        {/* Shine effect - handled by CSS for now */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full pointer-events-none transition-all duration-600 ease-in-out" />
      </div>
    </motion.a>
  );
}

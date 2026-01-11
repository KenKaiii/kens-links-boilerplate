'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  profileImage: string;
  reducedMotion?: boolean;
}

export function ProfileSection({ name, profileImage, reducedMotion = false }: ProfileSectionProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center mb-8"
      initial={reducedMotion ? undefined : { opacity: 0 }}
      animate={reducedMotion ? undefined : { opacity: 1 }}
      transition={reducedMotion ? undefined : { duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? undefined : { duration: 0.4, delay: 0.1 }}
      >
        <div className="w-44 h-56 sm:w-52 sm:h-64 md:w-56 md:h-72 overflow-hidden bg-slate-100 relative rounded-3xl shadow-2xl shadow-blue-500/10 ring-1 ring-slate-200">
          <Image
            src={profileImage}
            alt={`${name} Profile`}
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
          {/* Fade to white at bottom - 30% of image height */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}

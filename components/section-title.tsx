'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  name: string;
  reducedMotion?: boolean;
}

export function SectionTitle({ name, reducedMotion = false }: SectionTitleProps) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8 justify-center"
      initial={reducedMotion ? undefined : { opacity: 0 }}
      animate={reducedMotion ? undefined : { opacity: 1 }}
      transition={reducedMotion ? undefined : { delay: 0.2 }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide font-[family-name:var(--font-unbounded)]">
        {name}
      </h1>
    </motion.div>
  );
}

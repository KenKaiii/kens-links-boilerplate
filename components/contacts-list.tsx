'use client';

import { motion } from 'framer-motion';
import { ContactRow } from './contact-row';
import type { SocialLink } from '@/config/site-config';

interface ContactsListProps {
  links: SocialLink[];
  reducedMotion?: boolean;
}

export function ContactsList({ links, reducedMotion = false }: ContactsListProps) {
  return (
    <div className="flex flex-col gap-4">
      {links.map((contact, index) => (
        <motion.div
          key={contact.label}
          initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reducedMotion ? undefined : { delay: 0.3 + index * 0.05 }}
        >
          <ContactRow
            icon={contact.icon}
            label={contact.label}
            value={contact.value}
            href={contact.href}
            reducedMotion={reducedMotion}
            isEmail={contact.icon === 'email'}
            badge={contact.badge}
            featured={contact.featured}
          />
        </motion.div>
      ))}
    </div>
  );
}

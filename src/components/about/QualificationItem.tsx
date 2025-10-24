'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FileBadge } from 'lucide-react';
import React from 'react';

interface QualificationItemData {
  id: string;
  title: string;
  org: string;
  year: string;
  icon: React.ElementType;
}

interface QualificationProps {
  item: QualificationItemData;
  index: number;
}

// Type-safe fadeUp variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96], // cubic bezier for "easeOut"
    },
  }),
};

export default function QualificationItem({ item, index }: QualificationProps) {
  const Icon = item.icon;

  return (
    <motion.div
      custom={index + 1} // pass index to variant
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-zinc-900 text-zinc-400 p-6 rounded-xl shadow-md shadow-black/30 hover:shadow-white/30 transition-shadow duration-300"
    >
      <div className="flex items-start gap-3">
        <Icon className="text-red-700 mt-1" size={22} />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-zinc-300">{item.title}</h3>
          <p>{item.org}</p>
          <span className="font-medium">{item.year}</span>

          <Link
            href={`/certificates/${item.id}`}
            className="text-sm text-red-700 mt-1 inline-flex items-center gap-1 hover:underline w-auto"
          >
            <FileBadge size={16} /> View Certificate
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

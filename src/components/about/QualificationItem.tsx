'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileBadge } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

interface QualificationProps {
  item: {
    id: string;
    title: string;
    org: string;
    year: string;
    icon: React.ElementType;
  };
  index: number;
}

export default function QualificationItem({ item, index }: QualificationProps) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index + 1}
      className="bg-white border border-zinc-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <Icon className="text-blue-600 mt-1" size={22} />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-zinc-800">{item.title}</h3>
          <p className="  text-zinc-500">{item.org}</p>
          <span className="   font-medium">{item.year}</span>

          <Link
            href={`/certificate/${item.id}`}
            className="text-sm text-blue-500 hover:underline mt-1 inline-flex items-center gap-1"
          >
            <FileBadge size={16} /> View Certificate
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

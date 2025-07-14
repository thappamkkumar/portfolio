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
      custom={index + 1}
      variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
      className="bg-zinc-900 text-zinc-400 p-6 rounded-xl shadow-md shadow-black/30 hover:shadow-white/30 transition-shadow duration-300  "
    >
      <div className="flex items-start gap-3">
        <Icon className="text-red-700 mt-1" size={22} />
        <div className="flex flex-col gap-1 ">
          <h3 className="text-xl font-semibold text-zinc-300">{item.title}</h3>
          <p className="  ">{item.org}</p>
          <span className="   font-medium">{item.year}</span>

          <Link
            href={`/certificate/${item.id}`}
            className="text-sm text-red-700   mt-1  inline-flex items-center gap-1  hover:underline  w-auto"
          >
            <FileBadge size={16} /> View Certificate
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

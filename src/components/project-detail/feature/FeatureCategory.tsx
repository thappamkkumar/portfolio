'use client';

import { motion, Variants  } from 'framer-motion';
import FeatureCard from './FeatureCard';

/*
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
*/

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }, // cubic-bezier for easeOut
  },
};

interface Feature {
  title: string;
  description: string;
  image: string|null;
	points?: string[];
}

interface FeatureCategoryProps {
  catId: string;
  category: string;
  features: Feature[];
}

export default function FeatureCategory({ catId, category, features }: FeatureCategoryProps) {
  return (
    <section className="mb-12">
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-zinc-100 underline mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {category}
      </motion.h3>

      <div className="space-y-6">
        {features.map((feature, idx) => {
          const safeId = `${feature.title.replace(/\s+/g, '-').toLowerCase()}-${catId}-${idx}`;

          return (
            <FeatureCard
              key={safeId}
              id={safeId}
              {...feature}
            />
          );
        })}
      </div>
    </section>
  );
}

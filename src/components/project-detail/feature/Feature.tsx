'use client';

import { motion } from 'framer-motion';  
import FeatureCategory from './FeatureCategory';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCategoryData {
  category: string;
  features: Feature[];
}

interface FeaturesSectionProps {
  data: FeatureCategoryData[];
}

export default function Feature({ data }: FeaturesSectionProps) {
  return (
    <section className="py-20 max-w-5xl mx-auto md:px-0">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Screenshots <span className="text-red-700">&</span> Features
      </motion.h2>

      {data.map((group, idx) => (
        <FeatureCategory key={idx} catId={idx.toString()} category={group.category} features={group.features} />
      ))}
    </section>
  );
}

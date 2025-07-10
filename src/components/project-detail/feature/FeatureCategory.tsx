
'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCategoryProps {
  category: string;
  features: Feature[];
}

export default function FeatureCategory({ category, features }: FeatureCategoryProps) {
  return (
    <section className="mb-12">
			<motion.h3
        className="text-2xl md:text-3xl font-bold text-red-800  mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
       {category}
      </motion.h3>
       
			<div className="space-y-6">
				{features.map((feature, idx) => (
					<FeatureCard key={idx} {...feature} />
				))}
			</div>
    </section>
  );
}

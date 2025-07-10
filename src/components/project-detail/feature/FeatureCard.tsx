'use client';

import { motion } from 'framer-motion';
import FeatureImage from "./FeatureImage";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const detailLi = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
  }),
};

interface FeatureItemProps {
  title: string;
  description?: string;
	points?: string[];
  image: string;
   
}

export default function FeatureCard({ title, description, points = [], image }: FeatureItemProps) {
  return (
    <div className="bg-zinc-900 rounded-xl shadow-md border border-zinc-800 overflow-hidden">
      <div className="p-4 space-y-3">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-semibold text-white"
        >
          {title}
        </motion.h3>

        {description && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-300"
          >
            {description}
          </motion.p>
        )}

        {points.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-zinc-200 text-base">
            {points.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={detailLi}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-2"
      >
        <FeatureImage
          src={image}
          alt={title}
        />
      </motion.div>
    </div>
  );
}

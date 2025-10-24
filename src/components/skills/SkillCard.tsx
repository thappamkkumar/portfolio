'use client';

import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

import { motion, Variants, easeOut } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
  }),
};

const SkillCard: FC<SkillCardProps> = ({ title, icon: Icon, skills, index }) => {
  return (
    <motion.div
      className="  bg-zinc-900 p-6 rounded-xl shadow-md shadow-black/30 hover:shadow-white/30 transition-shadow duration-300"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="flex items-center gap-3 mb-5">
        <Icon className="text-red-700" size={28} />
        <h3 className="text-2xl font-semibold text-zinc-100">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 text-zinc-200 text-sm px-3 py-1 rounded-full border border-zinc-700 hover:bg-red-700 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;

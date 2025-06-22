'use client';

import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import skillsData from './skillsData';



const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto  ">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
			
        My <span className="text-red-800">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map(({ name, icon, items }, index) => (
          <SkillCard
            key={name}
            title={name}
            icon={icon}
            skills={items}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

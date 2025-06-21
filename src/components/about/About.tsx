'use client';

import { motion } from 'framer-motion';
import Introduction from './Introduction';
import QualificationList from './QualificationList';

const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="  relative  max-w-7xl mx-auto  py-20  text-base text-zinc-400  ">
			<motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16" 
				variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
				
      >
			  <span className="text-red-800">About</span> Me
         
      </motion.h2>
      <Introduction />
			<QualificationList />
    </section>
  );
}

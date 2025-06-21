'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School, BadgeCheck } from 'lucide-react';
import QualificationItem from './QualificationItem';

const qualifications = [
  {
    id: 'btech',
    title: 'Bachelor of Technology in Computer Science Engineering',
    org: 'Sri Sai College of Engineering & Technology | PTU',
    year: '2018 - 2022',
    icon: GraduationCap,
  },
  {
    id: 'higher-secondary',
    title: 'Higher Secondary Examination',
    org: 'Jammu & Kashmir State Board of School Education',
    year: '2017 - 2018',
    icon: School,
  },
  {
    id: 'secondary-school',
    title: 'Secondary School Examination',
    org: 'Jammu & Kashmir State Board of School Education',
    year: '2015 - 2016',
    icon: School,
  },
  {
    id: 'php-internship',
    title: 'Web Development (PHP) – Internship',
    org: 'Course & Certificate',
    year: '2022',
    icon: BadgeCheck,
  },
];

const fadeUpContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function QualificationList() {
  return (
    <motion.div
      className="mt-16  "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpContainer}
    >
      <motion.h2
        className="text-3xl font-semibold text-zinc-800 mb-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Education & Certifications
      </motion.h2>
			
			<div className=" grid md:grid-cols-2 gap-6">
				{qualifications.map((item, i) => (
					<QualificationItem key={item.id} item={item} index={i} />
				))}
			</ div>
    </motion.div>
  );
}

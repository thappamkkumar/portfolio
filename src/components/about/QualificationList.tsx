'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School, BadgeCheck } from 'lucide-react';
import QualificationItem from './QualificationItem';

const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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



export default function QualificationList() {
  return (
    <div className="mt-20 lg:mt-30  block lg:flex  " >
			<div className="lg:w-1/2 w-full h-auto ">
				<motion.h2
					className="lg:sticky lg:top-20   text-center lg:text-start  text-5xl md:text-6xl font-bold mb-18 text-zinc-200"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
				<span className="border-b-5 border-red-800">Education</span>
					 
				</motion.h2>
			</div>
			<div className="lg:w-1/2 w-full flex flex-col  gap-3">
				{qualifications.map((item, i) => (
					<QualificationItem key={item.id} item={item} index={i} />
				))}
			</ div>
    </div>
  );
}

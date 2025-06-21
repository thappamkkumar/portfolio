'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeRight= {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { delay:0.3, duration: 0.3 } },
};

const Logo = () => (
 <motion.h1
  className="text-xl font-bold flex items-center gap-1"
  variants={fadeRight}
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true }}
>
  <span className="text-lg bg-red-800 text-white rounded-md px-2 py-1">Mk</span>
  <span>Portfolio</span>
</motion.h1>

);

export default Logo;

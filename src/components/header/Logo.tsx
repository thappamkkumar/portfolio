'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
 <motion.h1
  className="text-xl font-bold flex items-center gap-1"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <span className="text-lg bg-red-700 text-white rounded-md px-2 py-1">Mk</span>
  <span>Portfolio</span>
</motion.h1>

);

export default Logo;

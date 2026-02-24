'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
};

const Logo = () => (
  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Link href="/" className="flex flex-col leading-tight">
      <span className="text-lg font-semibold text-zinc-100 tracking-tight">
        Mukesh  Kumar 
      </span>
       
    </Link>
  </motion.div>
);

export default Logo;
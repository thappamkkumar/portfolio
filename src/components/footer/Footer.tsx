'use client';

import { motion } from 'framer-motion'; 
import SocialLinks from './SocialLinks';
//import Logo from './Logo';
import NavLinks from './NavLinks';


 

const fadeUp= {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
      className="bg-zinc-900   py-10 px-4 mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Brand */}
       <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-zinc-100">
            Mukesh Kumar
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Full Stack Developer
          </p>
        </div>

        
        
          <NavLinks />
          <SocialLinks />
         
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Mukesh Kumar. All rights reserved.
      </div>
    </motion.footer>
  );
}

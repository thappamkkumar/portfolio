'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';
import Logo from './Logo';
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
      className="bg-zinc-900   py-10 px-6 mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Logo />
          <p className="text-sm text-zinc-400">
            Focused on delivering quality through design and code.
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

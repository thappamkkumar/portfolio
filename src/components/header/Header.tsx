'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from './navItems';
import Logo from './Logo';
import Navigation from './Navigation';

const fadeDown= {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Header: React.FC = () => {
  const [currentHash, setCurrentHash] = useState<string>('#home');
  const currentHashRef = useRef(currentHash);
  const sectionElementsRef = useRef<HTMLElement[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    currentHashRef.current = currentHash;
  }, [currentHash]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    sectionElementsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    setTimeout(() => {
      handleScroll();
    }, 100);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    let newHash = '#home';

    for (const el of sectionElementsRef.current) {
      const sectionTop = el.offsetTop;
      if (scrollY >= sectionTop - window.innerHeight / 2) {
        newHash = `#${el.id}`;
      }
    }

    if (newHash !== currentHashRef.current) {
      setCurrentHash(newHash);
      queueMicrotask(() => {
        history.replaceState(null, '', newHash);
      });
    }
  };

  useEffect(() => {
    const debouncedScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => handleScroll(), 100);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onHashChange = () => handleScroll();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <motion.header
      variants={fadeDown}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
      className="fixed z-50 w-full max-h-screen top-0  px-4 py-3 overflow-auto bg-zinc-950/20  backdrop-blur-md"
    >
			<div className="max-w-7xl mx-auto flex justify-between ">
        
        <div className="w-full flex justify-between items-center">
					
					<Logo />
					
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-400 cursor-pointer hover:text-zinc-100 transition-color duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav: spans 5 columns */}
        <div className="hidden   md:flex">
          <Navigation currentHash={currentHash} />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden    px-4 py-4 mt-1  bg-zinc-950/90    ">
          <Navigation currentHash={currentHash} />
        </div>
      )}
       
    </motion.header>
  );
};

export default Header;

'use client';

import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    label: 'Email',
    value: 'thappamkkumar@gmail.com',
    href: 'mailto:thappamkkumar@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/engineer-mukesh-kumar',
    href: 'https://www.linkedin.com/in/engineer-mukesh-kumar/',
    icon: <Linkedin size={20} />,
  },
  {
    label: 'GitHub',
    value: 'github.com/thappamkkumar', // replace with actual
    href: 'https://github.com/thappamkkumar',
    icon: <Github size={20} />,
  },
  {
    label: 'Phone',
    value: '+91 60058 19576',
    href: 'tel:+916005819576',
    icon: <Phone size={20} />,
  },
];

const fadeRight= {
  hidden: { opacity: 0, x: -30, },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function ContactDetails() {
  return (
    <motion.div
      className="space-y-8 text-white"
      variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
      {contactInfo.map((info, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
          <a
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 inline-flex items-center gap-3 hover:text-red-700 transition"
          >
            {info.icon}
            <span>{info.value}</span>
          </a>
        </div>
      ))}
    </motion.div>
  );
}

'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    label: 'Address',
    value: 'Kathua, Jammu And Kashmir, India',
    href: 'https://maps.app.goo.gl/Qanr4RMfhrTLrU4x8',
    icon: <MapPin size={20} />,
  },
  {
    label: 'Email',
    value: 'thappamkkumar@gmail.com',
    href: 'mailto:thappamkkumar@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'Phone',
    value: '+91-6005819576',
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
            className="text-zinc-300 inline-flex items-center gap-3 hover:text-red-800 transition"
          >
            {info.icon}
            <span>{info.value}</span>
          </a>
        </div>
      ))}
    </motion.div>
  );
}

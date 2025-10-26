'use client';

import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';


const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto   ">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
				variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > 
				 <span className="text-red-700">Contact</span> Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactDetails />
        <ContactForm />
      </motion.div>
    </section>
  );
}

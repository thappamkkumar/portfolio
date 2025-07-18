'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Overview() {
  return (
    <section id="overview" className="py-20 max-w-5xl mx-auto md:px-0">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Project <span className="text-red-700">Overview</span>
      </motion.h2>

      <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong className="text-zinc-300">ImageGallery</strong> is a lightweight web application designed to store and browse public images categorized by user-defined topics. It was developed using <strong className="text-zinc-300">React.js for the frontend</strong>, with a <strong className="text-zinc-300">PHP-based REST API</strong> and <strong className="text-zinc-300">MySQL</strong> for data storage and backend operations.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The platform allows users to upload and store images under specific categories. All uploaded images are publicly viewable and searchable through a dynamic, responsive interface. It’s ideal for managing simple image collections organized by category.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The app features a <strong className="text-zinc-300">real-time search</strong> functionality that filters images by category. Images are displayed in a responsive grid layout with smooth loading, optimized for both desktop and mobile devices.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>React.js frontend with reusable JSX components</li>
          <li>RESTful PHP API to manage categories and image data</li>
          <li>MySQL for storing image metadata and category structure</li>
          <li>Responsive CSS layout with simple, clean gallery grid</li>
          <li>Search functionality to filter images by category name</li>
          <li>Publicly accessible images organized by user-defined categories</li>
        </motion.ul>
      </div>
    </section>
  );
}

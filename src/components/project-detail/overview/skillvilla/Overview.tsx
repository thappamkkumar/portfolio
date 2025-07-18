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
          <strong className="text-zinc-300">SkillVilla</strong> is a full-featured professional media platform designed to empower individuals to showcase their skills, share their work, find job opportunities, and connect with a like-minded community. It’s built using <strong className="text-zinc-300">React.js (frontend), Laravel (backend), MySQL, Bootstrap, CSS, and custom JavaScript</strong>.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Users can create detailed profiles, post content, share their workfolio (completed projects), and search or apply for jobs and freelance gigs. A smart interest-based system tailors the feed and recommendations to user behavior and skills.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong className="text-zinc-300">Admin users</strong> have access to a backend dashboard to manage users, content, job posts, community discussions, and ensure platform moderation and quality control.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>User-driven platform with profiles, posts, and workfolios</li>
          <li>Job search, freelance gigs, and smart recommendations</li>
          <li>Community features: explore, stories, chat, problems & discussions</li>
          <li>Custom interface for job posting with company details</li>
          <li>Real-time chat and messaging system</li>
          <li>Built using React.js (frontend) and Laravel (API backend)</li>
          <li>Admin panel for user and content management</li>
          <li>Responsive UI with Bootstrap and custom CSS</li>
        </motion.ul>
      </div>
    </section>
  );
}

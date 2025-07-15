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
        Project <span className="text-red-800">Overview</span>
      </motion.h2>

      <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong className="text-zinc-300">ImagePuzzle</strong> is a browser-based puzzle game built using <strong className="text-zinc-300">HTML, CSS, and JavaScript</strong>. The app lets users challenge themselves by solving a shuffled image puzzle through drag-and-drop interactions.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The game begins with a simple interface where users can select the puzzle's <strong className="text-zinc-300">complexity</strong> (such as very easy, easy, hard, very hard) and   set a <strong className="text-zinc-300">time limit</strong> to solve it. Once configured, users are taken to the puzzle board where the image is split into pieces and scrambled.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Users must solve the puzzle by dragging and dropping pieces into the correct positions. The game uses basic drag-and-drop logic with JavaScript to track movements and determine when the puzzle is solved.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Pure HTML, CSS, and JavaScript — no external libraries</li>
          <li>Customizable puzzle complexity and time constraints</li>
          <li>Interactive drag-and-drop mechanics for gameplay</li>
          <li>Dynamically sliced images based on selected difficulty</li>
          <li>Responsive design that works across devices</li>
          <li>Win condition check and optional time-based challenge</li>
        </motion.ul>
      </div>
    </section>
  );
}

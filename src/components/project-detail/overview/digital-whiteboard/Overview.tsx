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
          <strong className="text-zinc-300">Digital Whiteboard</strong> is a desktop application developed in <strong className="text-zinc-300">Java</strong> that simulates a real-time drawing and annotation surface. Designed for sketching, diagramming, and educational purposes, it provides a responsive, feature-rich interface with essential tools.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The whiteboard includes support for multiple colored pencils (<strong className="text-zinc-300">red, blue, green, black</strong>) and a dedicated eraser, with customizable stroke width for both. Users can draw freely or use predefined geometric shapes (both filled and outlined), giving the app a versatile creative edge.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Text can be inserted anywhere on the board with manual control over <strong className="text-zinc-300">font size, color, and placement</strong>. The final drawings can be saved as PNG images to any location selected by the user — making it a great tool for creating visual content or saving work for later.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Built entirely with Java (Swing, AWT)</li>
          <li>Supports freehand drawing with adjustable pencil colors</li>
          <li>Stroke width customization for pencil and eraser</li>
          <li>Filled and outlined shape tools: rectangle, circle, etc.</li>
          <li>Text insertion with manual font size, color, and position</li>
          <li>Export the drawing as PNG to user-selected directory</li>
          <li>Ideal for sketching, planning, and digital whiteboarding</li>
        </motion.ul>
      </div>
    </section>
  );
}

'use client';

import { motion, Variants, easeOut } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
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
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
					<strong className="text-zinc-300">Photo Editor</strong> is a lightweight Java desktop application designed for everyday photo enhancement tasks. Built using <strong className="text-zinc-300">Java Swing</strong>, it provides an intuitive interface for users to perform operations like cropping, resizing, rotating, applying filters, flipping images, and more.
				</motion.p>

				<motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
					The app supports <strong className="text-zinc-300">real-time previews, dark/light modes</strong>, and enables users to add <strong className="text-zinc-300">image or text watermarks</strong> for branding or protection. It also features essential controls such as zoom, dimension editing, and image flipping (horizontal/vertical).
				</motion.p>

				<motion.ul className="list-disc list-inside mt-4 space-y-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
					<li>Crop images with adjustable area selection</li>
					<li>Resize with custom dimensions (width × height)</li>
					<li>Rotate and flip (horizontal & vertical)</li>
					<li>Apply image filters (grayscale, sepia, contrast)</li>
					<li>Add watermark – both text and image</li>
					<li>Zoom in/out and switch between dark & light UI</li>
				</motion.ul>

      </div>
    </section>
  );
}

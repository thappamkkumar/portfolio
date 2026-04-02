"use client";

import { motion, Variants } from "framer-motion";
import { Server, Rocket } from "lucide-react";

interface Block {
  description: string;
  points: string[];
}

interface Props {
  title: string;
  deployment: Block;
  outcome: Block;
}

/* Animations */
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DeploymentSection({
  title,
  deployment,
  outcome,
}: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-zinc-950">

      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-zinc-100"
        >
          {title}
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* 🚀 Deployment */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <Server className="text-red-700" />
            <h3 className="text-xl font-semibold text-zinc-100">
              Deployment
            </h3>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-sm md:text-base mb-4"
          >
            {deployment.description}
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-2">
            {deployment.points.map((point, i) => (
              <p key={i} className="text-zinc-400 text-sm">
                • {point}
              </p>
            ))}
          </motion.div>
        </motion.div>

        {/* 🎯 Outcome */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <Rocket className="text-red-700" />
            <h3 className="text-xl font-semibold text-zinc-100">
              What This Demonstrates
            </h3>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-sm md:text-base mb-4"
          >
            {outcome.description}
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-2">
            {outcome.points.map((point, i) => (
              <p key={i} className="text-zinc-400 text-sm">
                • {point}
              </p>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
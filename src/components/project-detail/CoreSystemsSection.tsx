"use client";

import { motion, Variants } from "framer-motion";
import { Layers, MessageSquare, Radio, Search, Infinity, Users } from "lucide-react";

interface System {
  title: string;
  description: string;
  points: string[];
}

interface Props {
  title: string;
  systems: System[];
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

export default function CoreSystemsSection({ title, systems }: Props) {
  const icons = [
    <Layers key="1" />,
    <MessageSquare key="2" />,
    <Radio key="3" />,
    <Search key="4" />,
    <Infinity key="5" />,
    <Users key="6" />,
  ];

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

        <motion.p
          variants={fadeUp}
          className="mt-4 text-zinc-400"
        >
          Key subsystems that define how the platform operates internally.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {systems.map((system, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-red-700/40 transition"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-700">
                {icons[i % icons.length]}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100">
                {system.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm mb-4">
              {system.description}
            </p>

            {/* Points */}
            <div className="space-y-2">
              {system.points.map((point, j) => (
                <p key={j} className="text-zinc-400 text-sm">
                  • {point}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
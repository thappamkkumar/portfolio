"use client";

import { motion, Variants } from "framer-motion";
import { AlertCircle, Wrench } from "lucide-react";

interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

interface Props {
  title: string;
  challenges: Challenge[];
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

export default function TechnicalChallengesSection({
  title,
  challenges,
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

        <motion.p
          variants={fadeUp}
          className="mt-4 text-zinc-400"
        >
          Key technical challenges encountered during development and how they were addressed.
        </motion.p>
      </motion.div>

      {/* Challenges */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10"
      >
        {challenges.map((challenge, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">
              {challenge.title}
            </h3>

            {/* Problem */}
            <div className="flex gap-3 mb-4">
              <AlertCircle className="text-red-700 mt-1" size={18} />
              <p className="text-zinc-400 text-sm md:text-base">
                <span className="text-zinc-200 font-medium">Problem: </span>
                {challenge.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="flex gap-3">
              <Wrench className="text-green-500 mt-1" size={18} />
              <p className="text-zinc-400 text-sm md:text-base">
                <span className="text-zinc-200 font-medium">Solution: </span>
                {challenge.solution}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
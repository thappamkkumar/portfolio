"use client";

import { motion, Variants } from "framer-motion";
import { AlertTriangle, User, CheckCircle } from "lucide-react";

interface Props {
  problemTitle: string;
  problems: string[];
  roleTitle: string;
  roleDescription: string;
  responsibilities: string[];
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

export default function ProblemRoleSection({
  problemTitle,
  problems,
  roleTitle,
  roleDescription,
  responsibilities,
}: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-zinc-950">
      <div className="grid md:grid-cols-2 gap-12">

        {/* 🔴 PROBLEM SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-zinc-100 flex items-center gap-3"
          >
            <AlertTriangle className="text-red-700" />
            {problemTitle}
          </motion.h2>

          {/* Problems */}
          <motion.div variants={fadeUp} className="space-y-4">
            {problems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="mt-1 w-2 h-2 bg-red-700 rounded-full"></span>
                <p className="text-zinc-400 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 🟢 ROLE SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-zinc-100 flex items-center gap-3"
          >
            <User className="text-red-700" />
            {roleTitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base md:text-lg"
          >
            {roleDescription}
          </motion.p>

          {/* Responsibilities */}
          <motion.div variants={fadeUp} className="space-y-4">
            {responsibilities.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-red-700 mt-1" size={18} />
                <p className="text-zinc-300 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
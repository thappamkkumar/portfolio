"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Layers, Users, Zap } from "lucide-react";

interface OverviewProps {
  title: string;
  description: string;
  points: string[];
  image: string;
}

/* Animation */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function OverviewSection({
  title,
  description,
  points,
  image,
}: OverviewProps) {
  return (
    <section
      id="overview"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-zinc-950"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
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
            className="text-3xl md:text-5xl font-bold text-zinc-100"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Points */}
          <motion.div
            variants={fadeUp}
            className="space-y-4 pt-4"
          >
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Icon (rotating set for visual variety) */}
                {i % 3 === 0 && <Layers className="text-red-700 mt-1" size={18} />}
                {i % 3 === 1 && <Users className="text-red-700 mt-1" size={18} />}
                {i % 3 === 2 && <Zap className="text-red-700 mt-1" size={18} />}

                <p className="text-zinc-300 text-sm md:text-base">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px]">
            <div className="absolute inset-0   rounded-xl" />

            <Image
              src={image}
              alt="overview"
              fill
              className="object-contain rounded-xl  "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

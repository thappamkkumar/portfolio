"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Server, Database, Globe, Zap, Layers } from "lucide-react";

interface Layer {
  title: string;
  points: string[];
}

interface Props {
  title: string;
  description: string;
  layers: Layer[];
  image?: string;
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

export default function ArchitectureSection({
  title,
  description,
  layers,
  image,
}: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-zinc-950">
      
      {/* HEADER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold md:text-center text-zinc-100"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-zinc-400 md:text-center text-base md:text-lg"
        >
          {description}
        </motion.p>
      </motion.div>

      {/* IMAGE (optional but powerful) */}
      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            <div className="absolute  " />
            <Image
              src={image}
              alt="Architecture diagram"
              fill
              className="object-contain  "
            />
          </div>
        </motion.div>
      )}

      {/* LAYERS GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3  gap-8"
      >
        {layers.map((layer, i) => {
          const icons = [
            <Globe key="globe" />,
            <Server key="server" />,
            <Zap key="zap" />,
            <Database key="db" />,
            <Layers key="layers" />,
          ];

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900 shadow-md shadow-black/30 hover:shadow-white/30 transition-shadow duration-300"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-700">
                  {icons[i % icons.length]}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {layer.title}
                </h3>
              </div>

              {/* Points */}
              <div className="space-y-3">
                {layer.points.map((point, j) => (
                  <p key={j} className="text-zinc-400 text-sm">
                    • {point}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

interface HeroImageProps {
  currentImage: number;
  images: string[];
}

export default function HeroImage({ currentImage, images }: HeroImageProps) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="hidden lg:block flex-1 relative group"
    >
      <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500">
        <Image
          src={images[currentImage]}
          alt="Hero Screenshot"
          fill
          className="object-fill rounded-xl border-4 border-white/10"
          priority
        />
      </div>
    </motion.div>
  );
}

'use client';

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // import Image from Next.js

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
  images: string[]; // array of image URLs
}

function HeroImage({ currentImage, images }: HeroImageProps) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="hidden lg:block flex-1 relative group"
    >
      <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500">
        <Image
          src={images[currentImage]} // path to image
          alt={`Hero Image ${currentImage}`} // better accessibility
          fill // automatically fills parent div
          className="object-fill rounded-xl border-4 border-white/10"
          sizes="(max-width: 1024px) 100vw, 50vw" // responsive sizing
          priority={currentImage === 0} // optional: load first image quickly
        />
      </div>
    </motion.div>
  );
}

export default memo(HeroImage);

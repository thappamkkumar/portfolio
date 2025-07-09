"use client";

import { useEffect, useMemo, useState } from "react";
import HeroText from "./hero/HeroText";
import HeroImage from "./hero/HeroImage";

interface HeroSectionProps {
  title: string;
  tagline: string;
  titles: string[]; // fixed type
  images: string[];
  liveDemoUrl?: string;
  codeUrl?: string;
  scrollToId?: string;
}

export default function HeroSection({
  title,
  tagline,
  titles,
  images,
  liveDemoUrl,
  codeUrl,
  scrollToId = "#overview",
}: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ??? Memoize images to avoid re-renders
  const memoizedImages = useMemo(() => images, [images]);

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % memoizedImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [memoizedImages]);

  // Typing animation
  useEffect(() => {
    const currentTitle = titles[index];

    if (subIndex === currentTitle.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(currentTitle.substring(0, subIndex));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles]);

  return (
    <section className="  w-full max-w-7xl     min-h-[95vh] mx-auto px-6 py-12 bg-zinc-950   overflow-hidden flex items-end lg:items-center justify-between gap-10">
       
        <HeroText
          title={title}
          text={text}
          tagline={tagline}
          liveDemoUrl={liveDemoUrl}
          codeUrl={codeUrl}
          scrollToId={scrollToId}
        />
        <HeroImage currentImage={currentImage} images={memoizedImages} />
       
    </section>
  );
}

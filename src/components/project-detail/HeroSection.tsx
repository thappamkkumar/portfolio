"use client";

import { useEffect, useState } from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

 

interface HeroSectionProps {
  title: string;
  tagline: string;
  images: string[];
  titles: string;
  liveDemoUrl?: string;
  codeUrl?: string;
  scrollToId?: string;
}

export default function HeroSection({
  title,
  tagline,
  images,
  titles,
  liveDemoUrl,
  codeUrl,
  scrollToId = "project-content",
}: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typing animation
  useEffect(() => {
    if (index === titles.length) setIndex(0);
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
  }, [subIndex, deleting, index]);

  return (
    <section className="relative w-full h-[95vh] bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 h-full flex    items-end  lg:items-center justify-between gap-10">
        
        <HeroText
          title={title}
          text={text}
          tagline={tagline}
          liveDemoUrl={liveDemoUrl}
          codeUrl={codeUrl}
          scrollToId={scrollToId}
        />
				<HeroImage currentImage={currentImage} images={images} />
      </div>
    </section>
  );
}

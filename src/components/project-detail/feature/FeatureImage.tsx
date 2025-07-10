'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  aspectRatio?: string; // optional aspect ratio (like '16/9' or '3/2')
}

export default function LazyImage({ src, alt, aspectRatio = '16/9' }: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-video overflow-hidden bg-zinc-900`}
       
    >
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-500 rounded-xl"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      )}
    </div>
  );
}

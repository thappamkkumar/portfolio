'use client';

import { ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="h-full bg-zinc-900 p-6 rounded-xl shadow-md shadow-black/30 hover:shadow-white/30 transition-shadow duration-300">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={800}
        height={450}
        className="w-full h-56 object-cover"
      />
      <div className="pt-5">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span
							key={`${project.title}-${tech}`}
              className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          {project.previewUrl && (
            <Link
              href={project.previewUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-red-700 hover:underline"
            >
              <ExternalLink size={16} /> Preview
            </Link>
          )}
          {project.docsUrl && (
            <Link
              href={project.docsUrl} 
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-red-700 transition"
            >
              <BookOpen size={16} /> Docs
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import SecondaryHeader from '@/components/header/SecondaryHeader';

const certificates = [
  {
    id: 'php-internship',
    title: 'Web Development (PHP) – Internship',
    imageUrl: '/certificates/php-internship.jpg',
  },
  {
    id: 'higher-secondary',
    title: 'Higher Secondary Examination',
    imageUrl: '/certificates/higher-secondary.jpg',
  },
  {
    id: 'secondary-school',
    title: 'Secondary School Examination',
    imageUrl: '/certificates/secondary-school.jpg',
  },
  {
    id: 'btech',
    title: 'Bachelor of Technology in CSE',
    imageUrl: '/certificates/btech.jpg',
  },
];

export default function CertificateDetailPage() {
  const params = useParams();
  const certificate = certificates.find((c) => c.id === params?.id);

  useEffect(() => {
    if (!certificate) {
      notFound();
    }
  }, [certificate]);

  if (!certificate) return null;

  return (
    <>
      <SecondaryHeader />

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          {certificate.title}
        </h1>

        <div className="flex justify-center">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            width={1600}
            height={900}
            className="rounded-xl shadow-md border border-zinc-200 w-full h-auto max-w-4xl"
            priority
          />
        </div>
      </section>
    </>
  );
}

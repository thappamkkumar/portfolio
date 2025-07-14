'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MessageBox from '@/components/alert/MessageBox';

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // ? New loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // ? Start loading

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Message sent successfully!');
        setStatus('success');
        form.reset();
      } else {
        setMessage(result.error || 'Something went wrong');
        setStatus('error');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
      setStatus('error');
    } finally {
      setIsSubmitting(false); // ? Stop loading
    }
  };

  return (
    <>
      {message && (
        <MessageBox
          message={message}
          type={status ?? 'success'}
          onClose={() => {
            setMessage('');
            setStatus(null);
          }}
        />
      )}

      <motion.form
        className="space-y-6 bg-zinc-900 p-6 rounded-xl shadow-md"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 bg-zinc-800 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 bg-zinc-800 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 bg-zinc-800 text-white"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting} // ? disable while submitting
          className={`w-full md:w-auto px-6 py-2 rounded-lg transition-all cursor-pointer
            ${isSubmitting ? 'bg-red-800/70 cursor-not-allowed' : 'bg-red-700 hover:bg-red-900'} text-white`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'} {/* ? Button label changes */}
        </button>
      </motion.form>
    </>
  );
}

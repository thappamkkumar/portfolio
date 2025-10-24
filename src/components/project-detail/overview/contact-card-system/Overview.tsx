'use client';

import { motion, Variants, easeOut } from 'framer-motion';


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Overview() {
  return (
    <section id="overview" className="py-20 max-w-5xl mx-auto md:px-0">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Project <span className="text-red-700">Overview</span>
      </motion.h2>

      <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <strong className="text-zinc-300">Contact Card System</strong> is a cloud-based contact management web application built using 
          <strong className="text-zinc-300"> React.js, Redux, PHP (REST API), MySQL, CSS, and SASS</strong>. It allows users to securely store, view, and manage personal or professional contact details.
        </motion.p>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          After registering and logging into the platform, users can add contacts with a comprehensive set of information — including 
          <strong className="text-zinc-300"> name, email, phone number, address, profile image, and social media links</strong> (Facebook, Instagram, Twitter, WhatsApp).
        </motion.p>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          The system automatically generates a visually appealing card for each contact using the submitted data, which is then displayed in the user&apos;s personal contact list. The interface is fully responsive and designed with a clean, modern layout for ease of use.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Secure login and registration with session management</li>
          <li>Create, view, and store contact details with profile photos</li>
          <li>Supports social media links: Facebook, Instagram, Twitter, WhatsApp</li>
          <li>Real-time UI updates using Redux</li>
          <li>Data managed via PHP REST API and stored in MySQL</li>
          <li>Responsive and stylish UI built with CSS and SASS</li>
        </motion.ul>
      </div>
    </section>
  );
}

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
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong className="text-zinc-300">StyleLoop</strong> is a complete single-vendor eCommerce web application developed from scratch using <strong className="text-zinc-300">Laravel, MySQL, Blade templates, Bootstrap, JavaScript, and CSS</strong>. It functions as a fashion-focused online storefront, providing a streamlined shopping experience for both users and admins.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The application includes a modern homepage with promotional banners, featured products, and brandas highlights. Customers can browse the catalog, view detailed product pages, search by category or keyword, manage their cart, place orders, and track their purchase history.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The <strong className="text-zinc-300">Admin dashboard</strong> provides tools to manage products, categories, customer orders, and user accounts. Admins can create, update, and delete items, oversee sales, and monitor the performance.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Single-vendor product catalog and order system</li>
          <li>Developed using Laravel MVC with Blade templating</li>
          <li>Full cart, checkout, and order history features</li>
          <li>Admin panel for product, category, and order management</li>
          <li>Responsive and mobile-friendly UI with Bootstrap</li>
          <li>Clean user experience with custom JavaScript and CSS</li>
        </motion.ul>
      </div>
    </section>
  );
}

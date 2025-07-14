'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Overview() {
  return (
    <section id="overview" className="py-20 max-w-5xl mx-auto   md:px-0">
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
					<strong className="text-zinc-300">ShopHub</strong> is a fully-featured multi-vendor eCommerce web application that I built independently from the ground up using <strong className="text-zinc-300">Laravel, MySQL, Blade templates, Bootstrap, JavaScript, and CSS</strong>. It simulates a real-world marketplace with distinct dashboards and functionality for <strong className="text-zinc-300">Admins, Vendors, and Customers</strong>.
				</motion.p>

				<motion.p
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					The platform enables <strong className="text-zinc-300">customers</strong> to browse a modern home page with a hero section, top products, and discounts. They can search for items, browse categories, view detailed product pages, add items to the cart, place orders, view their order history, and manage their profile.
				</motion.p>

				<motion.p
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<strong className="text-zinc-300">Vendors</strong> have their own dashboard where they can create and manage product categories, add new products, and handle customer orders. Each vendor only has access to their own data and operations.
				</motion.p>

				<motion.p
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<strong className="text-zinc-300">Admins</strong> oversee the entire system — including user management, product/category oversight, order tracking, and financial transactions across all vendors and customers.
				</motion.p>

				<motion.ul
					className="list-disc list-inside mt-4 space-y-2"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<li>Role-based access control for Admin, Vendor, and Customer</li>
					<li>Built with Laravel MVC, Blade templates, and MySQL</li>
					<li>Search, category filter, product detail, cart, and checkout</li>
					<li>Vendor-specific inventory and order management tools</li>
					<li>Admin dashboard with full system visibility and control</li>
					<li>Responsive UI with Bootstrap and custom CSS</li>
				</motion.ul>

      </div>
    </section>
  );
}

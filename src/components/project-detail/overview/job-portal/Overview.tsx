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
          <strong className="text-zinc-300">Job Portal</strong> is a complete recruitment web application developed using <strong className="text-zinc-300">core PHP, MySQL, HTML, CSS, and JavaScript</strong>. It’s designed to connect job seekers with employers by providing a centralized platform for job posting, discovery, and application management.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The platform supports two separate registration flows — one for <strong className="text-zinc-300">Jobseekers</strong> and another for <strong className="text-zinc-300">Hirers</strong>. Jobseekers can explore the latest job listings, apply with a single click, view application status, and manage their profiles. Hirers can post new jobs, edit listings, and review applications along with jobseeker details.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The <strong className="text-zinc-300">Admin panel</strong> offers control over the entire platform — including user accounts, job listings, application logs, and basic site configurations. It ensures a secure and manageable experience for all parties involved.
        </motion.p>

        <motion.ul
          className="list-disc list-inside mt-4 space-y-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Role-based access for Admin, Hirer, and Jobseeker</li>
          <li>Jobseekers can browse, apply, and track applications</li>
          <li>Employers can post jobs, edit listings, and view applicants</li>
          <li>Admin panel to manage users, jobs, and site settings</li>
          <li>Built using raw PHP, MySQL, and standard web technologies</li>
          <li>Responsive design for seamless experience on all devices</li>
        </motion.ul>
      </div>
    </section>
  );
}

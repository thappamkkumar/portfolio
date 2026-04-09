export const heroData = {
  projectName: "VK Salon",
  headline: "Modern Service Booking Platform",
  description:
    "A full-stack salon booking platform enabling users to explore services, view styles, and book appointments online with a seamless and responsive experience.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Vercel",
  ],
  image: "/project-doc/vk-salon/hero.png",
  liveDemoUrl: 'https://vk-salon.vercel.app',
  codeUrl: "",
};

export const overviewData = {
  title: "Product Overview",
  description:
    "VK Salon is a modern web-based service booking platform designed to digitize salon operations. It allows customers to browse services, explore styles, view barber profiles, and book appointments online while providing an engaging and user-friendly interface.",

  points: [
    "Service listing with pricing, images",
    "Online appointment booking system with simple form flow",
    "Barber/staff showcase with experience and contact details",
    "Customer review system with public feedback display",
    "Dedicated pages for services, styles, posts, and reviews",
  ],

  image: "/project-doc/vk-salon/overview.png",
};

export const problemRoleData = {
  problemTitle: "Problem",
  problems: [
    "Traditional salon businesses rely on manual booking systems leading to inefficiencies",
    "Lack of online presence limits visibility of services and styles",
    "Customers cannot easily explore services or book appointments remotely",
    "No structured system for collecting and displaying customer feedback",
  ],

  roleTitle: "My Role",
  roleDescription:
    "I designed and developed the complete platform with a focus on modern frontend architecture, responsive design, and seamless booking experience.",

  responsibilities: [
    "Built full-stack application using Next.js and Node.js",
    "Designed responsive UI using Tailwind CSS",
    "Implemented appointment booking system",
    "Integrated PostgreSQL database using Supabase",
    "Developed dynamic pages for services, styles, and posts",
    "Built review system with user submission and display",
    "Handled deployment on Vercel with environment configuration",
  ],
};

export const architectureData = {
  title: "System Architecture",

  description:
    "VK Salon follows a modern full-stack architecture using Next.js with server-side rendering and managed backend services. The system ensures smooth data flow between frontend, backend logic, and database while maintaining performance and scalability.",

  diagramDescription:
    "The architecture represents users interacting with the platform through a Next.js frontend. User actions such as browsing services, booking appointments, and submitting reviews are processed through backend APIs. Data is stored and managed in a PostgreSQL database via Supabase. The system is deployed on Vercel for optimized performance and scalability.",

  layers: [
    {
      title: "User Layer",
      points: [
        "Customers browse services, styles, and posts",
        "Users book appointments and submit reviews",
      ],
    },

    {
      title: "Frontend Layer",
      points: [
        "Built using Next.js with server-side rendering",
        "Styled using Tailwind CSS for responsive design",
        "Handles user interaction and UI rendering",
      ],
    },

    {
      title: "Backend Layer",
      points: [
        "Node.js-based API handling business logic",
        "Processes booking requests and review submissions",
        "Handles communication between frontend and database",
      ],
    },

    {
      title: "Core Services",
      points: [
        "Service Management: Display services with pricing and images",
        "Booking System: Handle appointment requests",
        "Review System: Collect and display user feedback",
        "Content System: Manage posts and styles",
      ],
    },

    {
      title: "Database Layer",
      points: [
        "PostgreSQL database managed via Supabase",
        "Stores bookings, services, users, and reviews",
        "Ensures structured and consistent data storage",
      ],
    },

    {
      title: "Deployment Layer",
      points: [
        "Hosted on Vercel with optimized Next.js deployment",
        "Supabase used for managed database services",
        "Environment variables configured for secure integration",
      ],
    },
  ],

  image: "/project-doc/vk-salon/architecture.png",
};

export const coreSystemsData = {
  title: "Core Systems",

  systems: [
    {
      title: "Service & Catalog System",
      description:
        "Displays available services with pricing and visual representation.",
      points: [
        "Service listing with images and pricing", 
        "Structured service presentation",
      ],
    },

    {
      title: "Booking System",
      description:
        "Handles appointment booking with a simple and user-friendly flow.",
      points: [
        "Booking form with name, phone, and message",
        "Stores booking requests in database",
        "Simple and fast user interaction",
      ],
    },

    {
      title: "Barber/Staff System",
      description:
        "Showcases salon staff with experience and details.",
      points: [
        "Display barber profiles",
        "Highlight experience and expertise",
        "Build trust with users",
      ],
    },

    {
      title: "Review System",
      description:
        "Allows users to share feedback and view public reviews.",
      points: [
        "User review submission",
        "Public display of reviews",
        "Dedicated review page",
      ],
    },

    {
      title: "Style Showcase System",
      description:
        "Displays different haircut styles to help users choose.",
      points: [
        "Style listing page",
        "Visual representation of styles",
        "Improves user decision-making",
      ],
    },

    {
      title: "Content/Post System",
      description:
        "Provides additional content and updates through posts.",
      points: [
        "Public post listing page",
        "Content visibility for users",
        "Enhances engagement",
      ],
    },
  ],
};

export const technicalChallengesData = {
  title: "Technical Challenges",

  challenges: [
    {
      title: "Managing Multiple Dynamic Pages",
      problem:
        "Handling multiple sections like services, styles, posts, and reviews while maintaining consistency.",
      solution:
        "Structured routing and reusable components in Next.js for scalability and maintainability.",
    },

    {
      title: "Designing a Smooth Booking Experience",
      problem:
        "Ensuring the booking process is simple and quick without unnecessary complexity.",
      solution:
        "Implemented a minimal form with optimized UX for fast and intuitive interaction.",
    },

    {
      title: "Integrating Supabase with Frontend",
      problem:
        "Connecting frontend application with a managed PostgreSQL database securely.",
      solution:
        "Used Supabase client for efficient data operations and secure integration.",
    },

    {
      title: "Maintaining Responsive UI Across Sections",
      problem:
        "Ensuring consistent design across different pages and devices.",
      solution:
        "Used Tailwind CSS with reusable components for responsive and consistent UI.",
    },
  ],
};

export const deploymentData = {
  title: "Deployment & Outcome",

  deployment: {
    description:
      "The application was deployed using Vercel for frontend hosting and Supabase for database management, ensuring a scalable and production-ready environment.",

    points: [
      "Hosted on Vercel with Next.js optimized deployment",
      "PostgreSQL database managed via Supabase",
      "Environment variables configured for secure setup",
      "Frontend and backend integrated with managed services",
    ],
  },

  outcome: {
    description:
      "This project demonstrates the ability to build a modern service-based platform with strong frontend experience and efficient backend integration.",

    points: [
      "Built a complete service booking platform from scratch",
      "Implemented user-friendly booking and review systems",
      "Designed modern UI using Tailwind CSS",
      "Integrated managed backend services (Supabase)",
      "Deployed and managed application using Vercel",
    ],
  },
};

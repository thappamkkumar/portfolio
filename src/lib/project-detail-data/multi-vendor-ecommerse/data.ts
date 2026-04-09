export const heroData = {
  projectName: "ShopHub",
  headline: "Multi-Vendor E-Commerce Platform",
  description:
    "A full-stack marketplace system enabling multiple vendors to manage products, customers to browse and purchase, and admins to control transactions, users, and platform operations.",
  techStack: [
    "Laravel",
    "Blade",
    "Eloquent ORM",
		"MySQL",
		"Javascript",
		"Bootstrap"
  ],
  image: "/project-doc/multi-vendor-ecommerse/hero.png",
  liveDemoUrl: "https://shophub.zya.me",
  codeUrl: "https://github.com/thappamkkumar/multi-vendor-ecommerse",
};

export const overviewData = {
  title: "Project Overview",
  description:
    "ShopHub is a multi-vendor e-commerce platform designed to simulate real-world marketplace systems like Amazon. It enables vendors to manage products and orders, customers to discover and purchase items, and administrators to oversee the entire platform including transactions, users, and product lifecycle management.",

  points: [
    "Multi-role system: Customer, Vendor, and Admin",
    "Advanced product search and category-based filtering",
    "Vendor dashboard for managing products and orders",
    "Centralized payment system with admin-controlled settlements",
    "Complete order, transaction, and user management system",
  ],

  image: "/project-doc/multi-vendor-ecommerse/overview.png",
};

export const problemRoleData = {
  problemTitle: "Problem",
  problems: [
    "Managing multiple vendors and their inventories within a single platform is complex",
    "Ensuring secure and controlled payment flow between customer, admin, and vendor is challenging",
    "Lack of centralized admin control can lead to inconsistent product and transaction management",
    "Efficient filtering and searching across large product datasets requires optimized query handling",
  ],

  roleTitle: "My Role",
  roleDescription:
    "I designed and developed the complete multi-vendor platform from scratch, focusing on role-based architecture, database design, and efficient product and transaction management.",

  responsibilities: [
    "Designed relational database schema for multi-role system",
    "Built backend using Laravel with Eloquent ORM",
    "Implemented role-based access control (Admin, Vendor, Customer)",
    "Developed product filtering and search functionality",
    "Built vendor dashboard for product and order management",
    "Designed centralized payment and transaction flow",
    "Created admin panel for full platform control",
    "Optimized database queries for performance and scalability",
  ],
};

export const architectureData = {
  title: "System Architecture",

  description:
    "ShopHub follows a modular MVC architecture using Laravel, where business logic, data handling, and presentation layers are clearly separated. The system supports multi-role access and centralized transaction handling within a structured backend.",

  layers: [
    {
      title: "Frontend",
      points: [
        "Built using Blade templating engine",
        "Server-rendered UI for fast performance",
        "Dynamic views based on user roles",
      ],
    },
    {
      title: "Backend",
      points: [
        "Laravel MVC architecture",
        "Handles business logic and request lifecycle",
        "Role-based middleware for access control",
      ],
    },
    {
      title: "Database",
      points: [
        "MySQL relational database",
        "Structured schema for users, products, orders, and transactions",
        "Foreign key relationships for data consistency",
      ],
    },
    {
      title: "ORM Layer",
      points: [
        "Eloquent ORM for database abstraction",
        "Dynamic query building for filtering and search",
        "Efficient relationship handling",
      ],
    },
    {
      title: "Deployment",
      points: [
        "Deployed on PHP-supported server environment",
        "Backend and database hosted together",
        "Environment-based configuration management",
      ],
    },
  ],

  image: "/project-doc/multi-vendor-ecommerse/architecture.png",
};

export const coreSystemsData = {
  title: "Core Systems",

  systems: [
    {
      title: "Product & Catalog System",
      description:
        "Manages product listings across multiple vendors with structured categorization and filtering.",
      points: [
        "Category-based product organization",
        "Vendor-specific product listings",
        "Advanced filtering and search functionality",
      ],
    },

    {
      title: "User Role System",
      description:
        "Handles different user types with isolated permissions and workflows.",
      points: [
        "Customer, Vendor, and Admin roles",
        "Role-based access control",
        "Separate dashboards for each user type",
      ],
    },

    {
      title: "Order & Payment System",
      description:
        "Controls the complete lifecycle of orders and manages secure transaction flow.",
      points: [
        "Customers pay at the time of order",
        "Payments held by admin until order completion",
        "Admin settles vendor payments after commission deduction",
      ],
    },

    {
      title: "Admin Management System",
      description:
        "Provides full control over platform operations and monitoring.",
      points: [
        "Manage users, products, categories, and orders",
        "Track payments and transactions",
        "Advanced filtering by vendor, customer, and product",
      ],
    },

    {
      title: "Vendor Management System",
      description:
        "Enables vendors to operate independently within the platform.",
      points: [
        "Add, update, and manage products",
        "Track orders and sales",
        "View earnings and payment status",
      ],
    },

    {
      title: "Search & Filtering System",
      description:
        "Optimized system for discovering products efficiently across large datasets.",
      points: [
        "Filter by category and vendor",
        "Search products dynamically",
        "Optimized queries for fast results",
      ],
    },
  ],
};

export const technicalChallengesData = {
  title: "Technical Challenges",

  challenges: [
    {
      title: "Managing Multi-Role Authorization",
      problem:
        "Handling different permissions and workflows for Admin, Vendor, and Customer users within a single system.",
      solution:
        "Implemented role-based middleware and structured access control logic in Laravel to isolate features per user type.",
    },

    {
      title: "Efficient Product Filtering and Search",
      problem:
        "Filtering products by category, vendor, and search queries while maintaining performance.",
      solution:
        "Built dynamic query logic using Eloquent ORM and optimized database queries for faster response times.",
    },

    {
      title: "Designing Centralized Payment Flow",
      problem:
        "Ensuring secure and logical handling of payments between customers, admin, and vendors.",
      solution:
        "Implemented an intermediary payment system where admin holds funds and releases them after order completion.",
    },

    {
      title: "Maintaining Data Consistency Across Entities",
      problem:
        "Managing relationships between users, products, orders, and transactions without data conflicts.",
      solution:
        "Designed normalized relational schema with proper foreign key constraints and structured data flow.",
    },

    {
      title: "Handling System Scalability in a Monolithic Setup",
      problem:
        "Managing increasing complexity as multiple modules (users, orders, products) interact within a single application.",
      solution:
        "Structured code into modular components and separated concerns within Laravel MVC architecture.",
    },
  ],
};

export const deploymentData = {
  title: "Deployment & Outcome",

  deployment: {
    description:
      "The application was deployed on a free hosting environment with cPanel support, where I handled full server setup, database integration, and application configuration manually.",

    points: [
      "Hosted on a cPanel-based free hosting server",
      "Managed deployment of Laravel application manually",
      "Configured MySQL database using phpMyAdmin",
      "Handled environment setup and server configuration",
      "Integrated application with database and server environment",
    ],
  },

  outcome: {
    description:
      "This project demonstrates the ability to build and deploy a complete multi-vendor marketplace system while managing real-world hosting environments and backend infrastructure.",

    points: [
      "Built a complete multi-vendor e-commerce system",
      "Implemented role-based architecture with isolated workflows",
      "Designed centralized payment and transaction system",
      "Handled real-world deployment using cPanel and shared hosting",
      "Managed full-stack application independently from development to deployment",
    ],
  },
};

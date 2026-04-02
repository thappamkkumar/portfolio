export const heroData = {
  projectName: "StyleLoop",
  headline: "Single Vendor E-Commerce Platform",
  description:
    "A full-stack e-commerce system enabling seamless product browsing, cart management, and order processing with centralized admin control over inventory, orders, and transactions.",
  techStack: [
    "Laravel",
    "Blade",
    "Eloquent ORM",
    "MySQL",
		"Javascript",
		"Bootstrap"

  ],
  image: "/project-doc/styleloop/hero.png",
  liveDemoUrl: "https://styleloop.page.gd",
  codeUrl: "https://github.com/thappamkkumar/E-commerse",
};

export const overviewData = {
  title: "Product Overview",
  description:
    "StyleLoop is a single-vendor e-commerce platform designed to handle end-to-end online shopping workflows. It allows customers to browse products, manage carts, and place orders, while administrators control inventory, categories, and transactions through a centralized dashboard.",

  points: [
    "Customer-focused shopping experience with cart and order management",
    "Category-based product browsing and filtering",
    "Centralized admin dashboard for full platform control",
    "Direct payment flow from customer to admin",
    "Complete order lifecycle and transaction tracking",
  ],

  image: "/project-doc/styleloop/overview.png",
};

export const problemRoleData = {
  problemTitle: "Problem",
  problems: [
    "Small businesses need a centralized system to manage products, orders, and customers efficiently",
    "Manual handling of orders and inventory leads to inconsistencies and operational inefficiencies",
    "Lack of structured admin control makes tracking transactions and delivery status difficult",
    "Providing a smooth customer shopping experience requires optimized cart and order workflows",
  ],

  roleTitle: "My Role",
  roleDescription:
    "I designed and developed the entire e-commerce system from scratch, focusing on clean architecture, efficient database design, and a smooth user experience for both customers and administrators.",

  responsibilities: [
    "Designed relational database schema for products, orders, and users",
    "Built backend using Laravel with Eloquent ORM",
    "Developed customer features including cart, order, and profile management",
    "Implemented admin dashboard for managing products, categories, and orders",
    "Designed order lifecycle and transaction tracking system",
    "Optimized database queries for product listing and filtering",
    "Handled full deployment and server configuration using cPanel",
  ],
};

export const architectureData = {
  title: "System Architecture",

  description:
    "StyleLoop follows a structured MVC architecture using Laravel, focusing on simplicity and efficiency for single-vendor operations. The system ensures smooth interaction between customers, backend services, and database while maintaining centralized control through the admin panel.",

  diagramDescription:
    "The architecture represents two primary actors—Customer and Admin—interacting through a unified frontend. Customer actions such as browsing, cart management, and ordering flow through the frontend to the Laravel backend, where business logic is processed. The backend communicates with the MySQL database for data storage. Payments are directly handled by the admin, simplifying the transaction flow.",

  layers: [
    {
      title: "User Layer",
      points: [
        "Customer: Browse products, manage cart, place orders, manage profile",
        "Admin: Manage products, categories, customers, orders, and transactions",
      ],
    },

    {
      title: "Frontend Layer",
      points: [
        "Built using Blade templating engine",
        "Server-rendered UI for fast performance",
        "Handles user interaction and request flow",
      ],
    },

    {
      title: "Backend Layer",
      points: [
        "Laravel MVC architecture",
        "Handles business logic for products, orders, and users",
        "Processes order lifecycle and transactions",
      ],
    },

    {
      title: "Core Services",
      points: [
        "Product Management: Add, update, delete products",
        "Cart System: Add/remove items and manage cart state",
        "Order System: Handle order placement and tracking",
        "Admin Dashboard: Full platform control and monitoring",
      ],
    },

    {
      title: "Database Layer",
      points: [
        "MySQL relational database",
        "Tables for users, products, orders, and transactions",
        "Maintains structured relationships for data consistency",
      ],
    },

    {
      title: "Payment Flow",
      points: [
        "Customer makes payment during order",
        "Payment goes directly to admin",
        "No intermediary or vendor distribution involved",
      ],
    },

    {
      title: "Deployment Layer",
      points: [
        "Hosted on InfinityFree cPanel-based server",
        "Managed deployment manually using cPanel",
        "Configured MySQL database using phpMyAdmin",
        "Handled full server and application integration",
      ],
    },
  ],

  image: "/project-doc/ecommerse/architecture.png",
};

export const coreSystemsData = {
  title: "Core Systems",

  systems: [
    {
      title: "Product & Catalog System",
      description:
        "Manages product listings with structured categorization for easy browsing.",
      points: [
        "Category-based product organization",
        "Product detail view with pricing and description",
        "Efficient product listing system",
      ],
    },

    {
      title: "Cart Management System",
      description:
        "Handles user cart operations and ensures smooth checkout flow.",
      points: [
        "Add and remove products from cart",
        "Maintain cart state for users",
        "Prepare items for order processing",
      ],
    },

    {
      title: "Order Management System",
      description:
        "Controls the complete lifecycle of customer orders.",
      points: [
        "Order placement and tracking",
        "Admin-managed order status and delivery updates",
        "Transaction tracking system",
      ],
    },

    {
      title: "Admin Dashboard System",
      description:
        "Provides centralized control over the entire platform.",
      points: [
        "Manage products, categories, and customers",
        "Monitor orders and transactions",
        "Update order and delivery status",
      ],
    },

    {
      title: "Search & Filtering System",
      description:
        "Enables efficient product discovery for users.",
      points: [
        "Category-based filtering",
        "Structured product browsing",
        "Optimized queries for faster results",
      ],
    },
  ],
};

export const technicalChallengesData = {
  title: "Technical Challenges",

  challenges: [
    {
      title: "Designing Efficient Cart and Order Flow",
      problem:
        "Ensuring smooth transition from cart management to order placement without data inconsistency.",
      solution:
        "Structured cart and order logic with proper state handling and database relationships to maintain consistency.",
    },

    {
      title: "Managing Admin-Controlled Operations",
      problem:
        "Providing full control to admin over products, orders, and transactions while maintaining system integrity.",
      solution:
        "Developed a centralized admin dashboard with controlled access and structured data flow.",
    },

    {
      title: "Optimizing Product Listing and Filtering",
      problem:
        "Handling product queries efficiently for category-based browsing.",
      solution:
        "Used optimized database queries and indexing for faster product retrieval.",
    },

    {
      title: "Maintaining Data Consistency",
      problem:
        "Managing relationships between users, products, and orders without conflicts.",
      solution:
        "Designed normalized relational schema with proper constraints and structured workflows.",
    },
  ],
};

export const deploymentData = {
  title: "Deployment & Outcome",

  deployment: {
    description:
      "The application was deployed on a InfinityFree hosting environment with cPanel support, where full server setup, database integration, and application configuration were handled manually.",

    points: [
      "Hosted on InfinityFree cPanel-based server",
      "Manual deployment of Laravel application",
      "Configured MySQL database using phpMyAdmin",
      "Handled environment and server setup",
      "Integrated application with hosting environment",
    ],
  },

  outcome: {
    description:
      "This project demonstrates the ability to design and build a complete single-vendor e-commerce system with clean architecture and real-world deployment experience.",

    points: [
      "Built a complete e-commerce workflow from browsing to order management",
      "Designed centralized admin control system",
      "Implemented cart, order, and transaction systems",
      "Handled real-world deployment using cPanel hosting",
      "Managed full-stack development independently",
    ],
  },
};
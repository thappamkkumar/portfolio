
 export const heroData = {
  projectName: "SkillVilla",
  headline: "Professional Media Platform ",
  description:
    "A full-stack system combining job marketplace, freelance workflows, content sharing, and real-time interaction using WebSockets and WebRTC.",
  techStack: [
    "React",
    "Redux",
    "Laravel",
    "MySQL",
    "WebSockets",
    "WebRTC",
    "AWS EC2",
  ],
  image: "/project-doc/skillvilla/hero.png", // 👈 add this
  liveDemoUrl: "http://52.53.160.90/",
  codeUrl: "", 
};
  
export const overviewData = {
  title: "Product Overview",
  description: "SkillVilla is a professional media platform designed to unify professional workflows such as job discovery, freelance bidding, content sharing, and real-time communication into a single system. Instead of separating these into different platforms, it provides a consistent user experience where users can showcase work, interact with others, and access opportunities without switching contexts.",
  points: [
    "Unified platform combining jobs, freelance, content, and communication",
    "Single user model (no role switching between hirer and job seeker)",
    "Real-time interaction through chat, calls, and live streaming",
    "Multiple content systems: posts, problems, workfolio, jobs, and gigs",
  ],

  image: "/projects/skillvilla/overview.png", // replace
};

export const problemRoleData = {
  problemTitle: "Problem",
  problems: [
    "Professional workflows like job discovery, freelance work, and content sharing are fragmented across multiple platforms",
    "Lack of real-time interaction in job and professional platforms reduces engagement",
    "Users often need to switch roles (hirer vs job seeker) across different systems",
    "No unified system to showcase work, interact, and access opportunities in one place",
  ],

  roleTitle: "My Role",
  roleDescription:
    "I designed and developed the complete user-facing system end-to-end, focusing on integrating multiple domains into a single platform while maintaining consistency and performance.",

  responsibilities: [
    "Designed REST API architecture using Laravel",
    "Implemented JWT-based authentication and authorization",
    "Built a modular frontend using React and Redux",
    "Integrated WebSockets for real-time messaging",
    "Implemented WebRTC for audio/video calls and live streaming",
    "Designed relational database schema (MySQL)",
    "Handled deployment on AWS EC2 with manual server configuration",
  ],
};

export const architectureData = {
  title: "System Architecture",

  description:
    "SkillVilla follows a monolithic full-stack architecture extended with real-time communication layers. The system combines REST APIs with persistent connections to support both standard operations and real-time interaction.",

  layers: [
    {
      title: "Frontend",
      points: [
        "Built with React and Redux for centralized state management",
        "Handles API communication and real-time updates",
        "Manages WebSocket connections and WebRTC signaling",
      ],
    },
    {
      title: "Backend",
      points: [
        "Laravel-based REST API architecture",
        "JWT authentication for secure access",
        "Event broadcasting for real-time updates",
      ],
    },
    {
      title: "Real-Time Layer",
      points: [
        "WebSockets (Laravel Reverb and Echo) for messaging and live updates",
        "WebRTC for audio/video calls and live streaming",
        "Backend used as signaling server for peer connections",
      ],
    },
    {
      title: "Database",
      points: [
        "MySQL relational schema for users, messages, jobs, and content",
        "Persistent storage for chat and platform data",
      ],
    },
    {
      title: "Deployment",
      points: [
        "Hosted on AWS EC2 with manual configuration",
        "Backend, frontend, WebSocket server, and database on single instance",
      ],
    },
  ],

  image: "/project-doc/skillvilla/architecture.png", // optional but recommended
};



export const coreSystemsData = {
  title: "Core Systems",

  systems: [
    {
      title: "Content Engine",
      description:
        "The platform supports multiple content types within a unified system, allowing users to create, interact, and share different forms of professional content.",
      points: [
        "Supports posts, problems (Q&A), workfolio, jobs, and freelance gigs",
        "Shared interaction model (like, comment, share)",
        "Consistent data handling across content types",
      ],
    },

    {
      title: "Real-Time Messaging System",
      description:
        "A persistent messaging system built using WebSockets to enable real-time communication between users.",
      points: [
        "Private and public chat channels",
        "Messages stored in database for persistence",
        "Real-time updates using WebSockets (Laravel Reverb and Echo)",
      ],
    },

    {
      title: "Communication Layer",
      description:
        "Supports both peer-to-peer and broadcast communication using WebRTC.",
      points: [
        "1-to-1 audio and video calls",
        "1-to-many live streaming system",
        "Backend used as signaling server",
      ],
    },

    {
      title: "Feed & Discovery System",
      description:
        "Dynamic content delivery system that adapts based on user behavior and interactions.",
      points: [
        "Interest-based and follow-based feed generation",
        "Search across users, jobs, posts, and content",
        "Unified explorer for multiple content types",
      ],
    },

    {
      title: "Infinite Scroll System",
      description:
        "Content loading mechanism optimized for continuous browsing without traditional pagination.",
      points: [
        "Dynamic data loading on scroll",
        "Controlled API calls using offsets/limits",
        "Prevents duplicate and redundant fetches",
      ],
    },

    {
      title: "Community System",
      description:
        "Allows users to create and interact within structured groups.",
      points: [
        "Public and private communities",
        "Separate content sections inside communities",
        "Community-based discussions and interactions",
      ],
    },
  ],
};


export const technicalChallengesData = {
  title: "Technical Challenges",

  challenges: [
    {
      title: "Managing Multiple Content Types in a Unified System",
      problem:
        "The platform includes different content types such as posts, jobs, problems, workfolio, and freelance gigs. Each required different data structures while maintaining consistent interaction behavior.",
      solution:
        "Designed a unified content handling approach with shared interaction patterns (like, comment, share) and feature-specific extensions to maintain consistency across the system.",
    },

    {
      title: "Synchronizing REST APIs with Real-Time Updates",
      problem:
        "The system uses both REST APIs and WebSockets, making it challenging to keep frontend state consistent between API responses and real-time events.",
      solution:
        "Used Redux as a centralized state layer where API responses initialize state and WebSocket events update the same store, ensuring consistency across the UI.",
    },

    {
      title: "Implementing WebRTC Without Third-Party Services",
      problem:
        "Establishing reliable peer-to-peer connections for audio/video calls and live streaming without external services added complexity in connection setup.",
      solution:
        "Used the Laravel backend as a signaling server to exchange SDP and ICE candidates, enabling direct peer-to-peer connections using WebRTC.",
    },

    {
      title: "Handling Infinite Scroll with Data Consistency",
      problem:
        "Replacing pagination with infinite scroll introduced issues such as duplicate data, inconsistent ordering, and excessive API calls.",
      solution:
        "Implemented controlled API requests using offsets and limits, managed frontend state carefully, and prevented redundant fetches during rapid scrolling.",
    },

    {
      title: "Managing System Complexity in a Single Application",
      problem:
        "Combining multiple domains (jobs, content, chat, streaming) in a single application increased complexity in routing, state management, and code organization.",
      solution:
        "Structured the application into modular sections, separated content creation flows, and organized APIs by domain to maintain scalability and clarity.",
    },
  ],
};

export const deploymentData = {
  title: "Deployment & Outcome",

  deployment: {
    description:
      "The application was deployed on an AWS EC2 instance with manual configuration, handling both backend and frontend within a single environment.",

    points: [
      "Hosted on AWS EC2 instance",
      "Manual setup of Laravel backend and React frontend",
      "WebSocket server configured on same environment",
      "MySQL database managed within the instance",
      "Environment variables used for configuration and security",
    ],
  },

  outcome: {
    description:
      "This project demonstrates the ability to design and build a complex full-stack system with real-time capabilities, integrating multiple domains into a unified platform.",

    points: [
      "Designed and implemented real-time systems using WebSockets and WebRTC",
      "Handled complex state management using Redux",
      "Built a multi-domain platform combining jobs, content, and communication",
      "Developed and structured scalable REST APIs",
      "Deployed and managed a full-stack application independently",
    ],
  },
};
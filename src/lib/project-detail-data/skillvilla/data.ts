
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
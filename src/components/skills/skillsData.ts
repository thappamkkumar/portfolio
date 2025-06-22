
import { Code, Library, Database, Settings, Users } from 'lucide-react';
const skillsData = [
  {
    name: 'Languages',
    icon: Code,
    items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'PHP', 'Java'],
  },
  {
    name: 'Frameworks & Libraries',
    icon: Library,
    items: ['Laravel', 'React Js', 'Next Js', 'Framer Motion', 'AOS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    name: 'Tools & Platforms',
    icon: Settings,
    items: ['Git', 'Axios','cURL', 'AJAX', 'WebSocket', 'WebRTC', 'phpMyAdmin'],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    items: ['Problem-solving', 'Teamwork', 'Time Management', 'Continuous Learning'],
  },
];

export default skillsData;
const projectList = [
 
 
 {
  id: 'skillvilla',
  title: 'SkillVilla – Professional Media Platform',
  description:
    'A full stack professional media platform featuring real-time chat, live streaming, community spaces, and job listings. Built with JWT-based authentication, WebSockets for real-time messaging, and WebRTC for live interactions. Deployed with scalable backend architecture and MySQL database management.',
  imageUrl: '/projects/skillvilla.png',
  previewUrl: 'http://52.53.160.90',
  caseStudyUrl: '/project-detail/skillvilla',
  tech: ['React', 'Redux', 'Laravel', 'WebSockets', 'WebRTC', 'JWT', 'MySQL'],
},

{
  id: 'vk-salon',
  title: 'VK Salon – Service Booking Platform',
  description:
    'A modern service booking platform with appointment scheduling, service management, and admin dashboard. Built using Next.js with TypeScript and PostgreSQL, focusing on clean UI architecture and optimized server-side rendering.',
  imageUrl: '/projects/vk-salon.png',
  previewUrl: 'https://vk-salon.vercel.app',
  caseStudyUrl: '/project-detail/vk-salon',
  tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
},

{
  id: 'multi-vendor-ecommerce',
  title: 'ShopHub – Multi Vendor E-commerce System',
  description:
    'A scalable multi-vendor e-commerce platform with role-based authentication, vendor dashboards, product management, and centralized admin control. Designed with modular Laravel backend architecture and relational database modeling.',
  imageUrl: '/projects/multi-vendor-ecommerce.png',
  previewUrl: 'https://shophub.zya.me',
  caseStudyUrl: '/project-detail/multi-vendor-ecommerce',
  tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
},

{
  id: 'ecommerce',
  title: 'StyleLoop – E-commerce Application',
  description:
    'A full stack e-commerce application supporting product browsing, cart management, order processing, and administrative product control with secure backend logic.',
  imageUrl: '/projects/ecommerce.png',
  previewUrl: 'https://styleloop.page.gd',
  caseStudyUrl: '/project-detail/ecommerce',
  tech: ['Laravel', 'PHP', 'MySQL','JavaScript', 'Bootstrap'],
},

/*

{
  id: 'job-portal',
  title: 'Job Portal – Recruitment Platform',
  description:
    'A recruitment platform enabling employers to post and manage job listings while allowing candidates to apply, upload resumes, and track applications with structured backend validation.',
  imageUrl: '/projects/job-portal.png',
  previewUrl: '',
  caseStudyUrl: '/project-detail/job-portal',
  tech: ['PHP', 'MySQL', 'JavaScript'],
},
 */
 
 
 
 
 /* {
    id: 'skillvilla',
    title: 'SkillVilla – Professional Media Platform',
    description:
      'A social platform for professionals to showcase skills, find jobs or freelance gigs, and network. Features include posts, stories, chat, communities, job listings, live streaming, profile management, and more.',
    imageUrl: '/projects/skillvilla.png',
    previewUrl: 'https://example.com/skillvilla',
    docsUrl: '/project-detail/skillvilla',
    tech: ['HTML', 'CSS', 'Bootstrap',  'JavaScript', 'React Js', 'Redux', 'Axios', 'PHP', 'Laravel', 'WebSocket', 'WebRTC', 'JWT', 'MySQL', ],
  },
	{
		id: 'vk-salon',
		title: 'VK Salon – Barber Shop Showcase',
		description: 
    'A platform for VK Salon to showcase barber services and work. Features landing page, barber profiles, service & style listings, posts with images/videos, appointment booking, and admin management.',
			
		imageUrl: '/projects/vk-salon.png', // replace with actual screenshot if available
		previewUrl: 'https://vk-salon.vercel.app', // replace with actual live URL
		docsUrl: '',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
	},
  {
    id: 'multi-vendor-ecommerce',
    title: 'ShopHub – Multi Vendor E-commerce Platform',
    description:
      'An extended version of the e-commerce platform with vendor functionality. Includes full admin panel and vendor dashboard for managing products and orders.',
    imageUrl: '/projects/multi-vendor-ecommerse.png',
    previewUrl: 'https://shophub.zya.me', 
    docsUrl: '/project-detail/multi-vendor-ecommerce',
    tech: ['HTML', 'CSS', 'Bootstrap',  'JavaScript', 'PHP', 'Laravel', 'MySQL', 'cURL'],
  },
  {
    id: 'ecommerce',
    title: 'StyleLoop – E-commerce Web App',
    description:
      'A basic e-commerce website where users can browse, cart, and purchase products. Admin panel supports product and order management.',
    imageUrl: '/projects/ecommerce.png',
    previewUrl: 'https://styleloop.page.gd',
    docsUrl: '/project-detail/ecommerce',
    tech: ['HTML', 'CSS', 'Bootstrap',  'JavaScript', 'PHP', 'Laravel', 'MySQL', 'cURL'],
  },
  {
    id: 'job-portal',
    title: 'Job Portal',
    description:
      'Web app where employers can post and manage job listings, and jobseekers can apply, upload resumes, and track applications.',
    imageUrl: '/projects/job-portal.png',
    previewUrl: '',
    docsUrl: '/project-detail/job-portal',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
   
  {
    id: 'contact-card',
    title: 'Contact Card System',
    description:
      'Simple contact management platform that stores and displays contact info as styled cards.',
    imageUrl: '/projects/contact-cards.png',
    previewUrl: '',
    docsUrl: '/project-detail/contact-card',
    tech: ['HTML', 'CSS', 'Sass', 'JavaScript', 'React Js', 'Redux', 'PHP', 'MySQL'],
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    description:
      'A responsive gallery web app that displays images in grid layout with React Js and PHP backend.',
    imageUrl: '/projects/image-gallery.png',
    previewUrl: '',
    docsUrl: '/project-detail/image-gallery',
    tech: ['HTML', 'CSS', 'JavaScript', 'React Js', 'PHP', 'MySQL'],
  },
	 
  {
    id: 'digital-whiteboard',
    title: 'Digital Whiteboard',
    description:
      'Desktop app that simulates a classroom whiteboard. Supports drawing shapes, freehand, text, and color selection.',
    imageUrl: '/projects/whiteboard.png',
    previewUrl: '',
    docsUrl: '/project-detail/digital-whiteboard',
    tech: ['Java'],
  },
  {
    id: 'photo-editor',
    title: 'Photo Editor',
    description:
      'A desktop photo editing app that supports crop, rotate, flip, filters, watermarks, and light/dark mode.',
    imageUrl: '/projects/photo-editor.png',
    previewUrl: '',
    docsUrl: '/project-detail/photo-editor',
    tech: ['Java'],
  },
  {
    id: 'image-puzzle',
    title: 'Image Puzzle',
    description:
      'A simple puzzle game where users solve scrambled images by rearranging tiles.',
    imageUrl: '/projects/image-puzzle.png',
    previewUrl: '',
    docsUrl: '/project-detail/image-puzzle',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
   */
];

export default projectList;

 
export const heroProps = {
	 title: "Contact Card System",
  tagline: "A cloud-based contact management web app built with React and PHP",
  titles: [
    "Secure Contact Backup & Sync",
    "Built with React, Redux, PHP API & MySQL",
    "Add Name, Email, Phone, Social Links, and Photo",
    "Responsive UI with CSS & SASS",
  ],
  images: [ 
			"/project-doc/contact-card/img1.png", 
			"/project-doc/contact-card/img2.png", 
			"/project-doc/contact-card/img3.png", 
			"/project-doc/contact-card/img4.png", 
			"/project-doc/contact-card/img5.png", 
			"/project-doc/contact-card/img6.png", 
			"/project-doc/contact-card/img7.png",  
  ],
  liveDemoUrl: "",
	codeUrl: "https://github.com/your-repo/contact-card-system",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "React Js",
		"Redux",
		"JSX",
    "CSS", 
    "Sass",  
    "PHP",
    "MySQL", 
  ],
};

 


export const featureProps = [
		{
      category: '',
      features: [ 
				{
					title: 'Home Page',
					description: 'The home page provides a brief introduction to the app and showcases demo contact cards for new or non-logged-in users.',
					points: [
						"Brief welcome message and summary of the app’s purpose",
						"Highlights benefits like cloud storage, contact safety, and accessibility",
						"Displays sample contact cards to demonstrate how real contacts will appear",
						"Encourages users to sign up or log in to start managing their own contacts",
						"Fully responsive layout built with React and SASS",
					],
					image: '/project-doc/contact-card/img1.png',
				},
				{
					title: 'Register Page',
					description: 'A straightforward registration form that collects only essential user information for account creation.',
					points: [
						"Input fields for username, password, and profile image upload",
						"Enforces strong password rules for better account security", 
						"Uploads and stores profile image on server",
						"On successful registration, redirects to login",
					],
					image: '/project-doc/contact-card/img2.png',
				},
				{
					title: 'Login Page',
					description: 'Secure and simple login interface for registered users to access their contact dashboard.',
					points: [
						"Users log in using a unique username and password",
						"Validates credentials via secure PHP API",
						"Displays clear error messages for incorrect input",
						"Session maintained until user logs out manually",
						"Redirects to dashboard upon successful login",
					],
					image: '/project-doc/contact-card/img3.png',
				},
				
				
				
			
				
				{
					title: 'Home Page (Logged-In)',
					description: 'A personalized home page for logged-in users, featuring updated navigation and user-specific header information.',
					points: [
						"Same layout and demo content as public home page for consistency",
						"Header now displays logged-in user’s name and profile image",
						"Navigation bar includes options like Home, Contact, Add Contact, and Logout",
						"Dynamic user state management handled via Redux",
						"Enhances personalization and user experience",
					],
					image: '/project-doc/contact-card/img4.png',
				},
				{
					title: 'Contact List Page',
					description: 'Displays all saved contact cards with pagination and interactive detail overlay for each contact.',
					points: [
						"Presents contact cards in a clean grid layout with pagination",
						"Each card shows the full profile image as the background",
						"Bottom-right floating button reveals contact details on click",
						"Details appear as an overlay with blurred background and semi-transparent white layer",
						"Displays contact name, phone number, email, address, and social media links on overlay",
						"Fully responsive and styled using CSS and SASS",
					],
					image: '/project-doc/contact-card/img5.png',
				},
				{
					title: 'Add Contact Page',
					description: 'Allows users to add new contacts with complete details through a validated form interface.',
					points: [
						"Form includes fields for name, email, phone number, address, and profile image",
						"Optional fields for social media links: Facebook, Instagram, Twitter, WhatsApp",
						"Client-side validation for required fields and proper formats (e.g., email, phone)",
						"Uploads profile image to server and stores all data in MySQL via PHP API",
						"Upon submission, the new contact card is instantly added to the contact list",
						"Uses Redux for state update and form handling",
					],
					image: '/project-doc/contact-card/img6.png',
				},
				{
					title: 'Logout Page',
					description: 'Securely ends the user session and redirects to the home or login page.',
					points: [
						"Clears user authentication token and Redux state on logout",
						"Redirects user to public home or login page after logout",
						"Prevents access to protected routes after logout",
						"Ensures secure session termination through backend API call",
						"Simple UI with confirmation or auto-logout feedback",
					],
					image: '/project-doc/contact-card/img7.png',
				},
 
			]
		},
 
];		
 
export const heroProps = {	
	title: "SkillVilla",
  tagline: "A professional media platform to showcase work, find jobs, and connect with opportunities",
  titles: [
    "React + Laravel Powered Platform",
    "Showcase Skills, Projects, and Workfolios",
    "Job Search, Freelance & Problem-Solving Community",
    "User Profiles, Chat, and Admin Dashboard",
  ],
  images: [   
	
			//public view images
			"/project-doc/skillvilla/public/small-home-page.png", 
			"/project-doc/skillvilla/public/about-page.png", 
			
			//sign up view images
			"/project-doc/skillvilla/sign-up/email-verify-page.png", 
			"/project-doc/skillvilla/sign-up/otp-verify-page.png", 
			"/project-doc/skillvilla/sign-up/generate-password-page.png",

			//login view images			
			"/project-doc/skillvilla/login/login-page.png", 
			
			//forgot password view images
			"/project-doc/skillvilla/forgot-password/verify-email-page.png", 
			"/project-doc/skillvilla/forgot-password/verify-otp-page.png", 
			"/project-doc/skillvilla/forgot-password/generate-new-password-page.png", 
			
			//customer view images
			//home view
			"/project-doc/skillvilla/customer/1-home/home-page.png", 
			
			//explore view
			"/project-doc/skillvilla/customer/2-explore/1-explore-users-page.png", 
			"/project-doc/skillvilla/customer/2-explore/2-explore-community-page.png", 
			"/project-doc/skillvilla/customer/2-explore/3-explore-post-page.png", 
			"/project-doc/skillvilla/customer/2-explore/4-explore-workfolio-page.png", 
			"/project-doc/skillvilla/customer/2-explore/5-explore-problem-page.png", 
			"/project-doc/skillvilla/customer/2-explore/6-explore-job-page.png", 
			"/project-doc/skillvilla/customer/2-explore/7-explore-freelance-page.png", 
		
			//chat view
			"/project-doc/skillvilla/customer/3-chat/1-chat-page.png",

			//community view			
			"/project-doc/skillvilla/customer/4-community/1-my-community-page.png",  
			"/project-doc/skillvilla/customer/4-community/2-joined-community-page.png",  
			"/project-doc/skillvilla/customer/4-community/3-communiy-detail-page.png",  
			
			//story view
			"/project-doc/skillvilla/customer/5-story/1-story-page.png", 
			"/project-doc/skillvilla/customer/5-story/2-story-detail-page.png",

			//create content view
			"/project-doc/skillvilla/customer/6-create/1-post-page.png", 
			"/project-doc/skillvilla/customer/6-create/2-story-page.png", 
			"/project-doc/skillvilla/customer/6-create/3-community-page.png", 
			"/project-doc/skillvilla/customer/6-create/4-workfolio-page.png", 
			"/project-doc/skillvilla/customer/6-create/5-problem-page.png", 
			"/project-doc/skillvilla/customer/6-create/6-company-register-page.png", 
			"/project-doc/skillvilla/customer/6-create/7-job-home-page.png", 
			"/project-doc/skillvilla/customer/6-create/8-job-page.png", 
			"/project-doc/skillvilla/customer/6-create/9-add-question-page.png", 
			"/project-doc/skillvilla/customer/6-create/10-freelance-page.png", 
			
			//company view
			"/project-doc/skillvilla/customer/7-company/1-company-profile-page.png", 
			"/project-doc/skillvilla/customer/7-company/2-company-profile-update-page.png", 
			
			//user profile view
			"/project-doc/skillvilla/customer/8-profile/1-user-profile-page.png", 
			"/project-doc/skillvilla/customer/8-profile/2-update-user-profile-page.png", 
			"/project-doc/skillvilla/customer/8-profile/3-other-user-profile-page.png", 
			 
  ],
  liveDemoUrl: "https://example.com/skillvilla",
	codeUrl: "",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
		"HTML",
		"CSS",
		"Bootstrap",
		"JavaScript",
		"React JS",
		"Redux",
		"Axios",
		"PHP",
		"Laravel",
		"WebSocket",
		"WebRTC",
		"JWT",
		"MySQL"
	]
};

 


export const featureProps = [
	{
		category: 'Public',
		features: [ 
			 {
					title: 'Home Page',
					description: "The public-facing homepage of SkillVilla introduces new users to the platform's mission, key features, and community impact, encouraging them to join and engage.",
					points: [
						"Hero section with the tagline: Connect, Share, Grow - and a call-to-action button to Get Started",
						"Highlights key platform features such as Explore, Chat, Community, Workfolio, Problem Discussions, Jobs & Freelance Gigs, Live Streams, Stories, and Posts",
						"Testimonials section showcasing user reviews and feedback",
						"Contact section with email, phone, address, social links, and a message form",
						"Footer with quick navigation links and basic info",
						"Responsive layout built using React JS, Bootstrap, and CSS",
					],
					image: '/project-doc/skillvilla/public/small-home-page.png',
				} 
		]
	},
	{
		category: 'Sign Up',
		features: [ 
			{
				title: 'Email Verfication Page',
				description: 'The first step of the sign-up process where users provide their email address to begin account creation.',
				points: [
					"Clean and simple UI for entering a valid email address",
					"Validates email format before proceeding",
					"Initiates sending of OTP to the entered email",
					 
				],
				image: '/project-doc/skillvilla/sign-up/email-verify-page.png',
			},
			{
				title: 'OTP Verification Page',
				description: 'Users enter the one-time password (OTP) sent to their email to verify their identity before account creation.',
				points: [
					"Secure OTP input field with masked input",
					"Option to resend OTP if not received",
					"Displays success or error messages based on OTP validity",
					"Advances to password creation upon successful verification",
				],
				image: '/project-doc/skillvilla/sign-up/otp-verify-page.png',
			},
			{
				title: 'Password Creation Page',
				description: 'The final step of the registration flow where users set a secure password for their new account.',
				points: [
					"Fields for entering and confirming password",
					"Client-side validation for password strength and matching",
					"Passwords stored securely using Laravel hashing",
					"Completes sign-up and redirects to login",
				],
				image: '/project-doc/skillvilla/sign-up/generate-password-page.png',
			} 
		]
	},
	{
		category: 'Sign In',
		features: [ 
			{
				title: 'Login Page',
				description: 'Provides secure access to registered users, ensuring only verified customers can log in and access their personalized dashboard.',
				points: [
					"Fields for email and password with client  and server-side validation",
					"'Remember Me' checkbox to maintain session across visits",
					"Login button with loading and error feedback",
					"Includes a link to Sign Up for new users",
					"Checks user credentials, role (must be a customer), and ban/block status",
					"Displays appropriate messages for invalid login attempts or restricted accounts",
				],
				image: '/project-doc/skillvilla/login/login-page.png',
			}

		], 
	},
	{
		category: 'Forgot Password',
		features: [ 
			{
				title: 'Email Verification Page',
				description: 'The first step in the password recovery process, where users enter their registered email to receive an OTP.',
				points: [
					"Simple input form for registered email address",
					"Validates email format before proceeding",
					"Sends OTP to the user's email if the account exists and is valid",
					"Guides user to the next step upon successful email submission",
				],
				image: '/project-doc/skillvilla/forgot-password/verify-email-page.png',
			},
			{
				title: 'OTP Verification',
				description: 'Users verify their identity by entering the OTP sent to their email before being allowed to reset their password.',
				points: [
					 
					"Resend OTP option with cooldown logic",
					"Shows clear success/failure feedback on OTP validation",
					"Moves to password reset if OTP is correct",
				],
				image: '/project-doc/skillvilla/forgot-password/verify-otp-page.png',
			},
			{
				title: 'New Password',
				description: 'Final step in resetting a password, allowing users to securely create a new password for their account.',
				points: [
					"Fields for entering and confirming new password",
					"Validates strength and match between passwords",
					"Password is securely updated and hashed using Laravel",
					"Redirects to login after successful reset",
				],
				image: '/project-doc/skillvilla/forgot-password/generate-new-password-page.png',
			} 
		], 
	},
	{
		category: 'Customer',
		features: [ 
			{
				title: 'Home Page',
				description: 'The personalized home page for logged-in users, showing a dynamic feed of content from followed users across various categories.',
				points: [
					"Displays a mixed feed of Posts, Problems, Workfolios, Jobs, and Freelance gigs",
					"Content is fetched based on the users the current user follows",
					"Each content type is visually distinct with clear layout and context",
					"Supports infinite scroll for seamless browsing",
					"Real-time updates through WebSocket for live content delivery (if enabled)",
					"Responsive and clean UI using React JS and Bootstrap",
				],
				image: '/project-doc/skillvilla/customer/1-home/home-page.png',
			},
			{
				title: 'Explore Page',
				description: 'Explore is a smart discovery section that allows users to search and discover content across the platform - tailored by interest and category.',
				points: [
					"Search bar at the top for global keyword search",
					"Tabs or filters for switching between categories: Users, Posts, Communities, Problems, Jobs, Freelance",
					"Content is prefetched   based on user interests a ",
					"Each section uses dedicated card layouts with relevant data and quick actions",
					"Responsive grid system for smooth browsing across all screen sizes",
					"Optimized with Redux for state handling and Axios for API requests",
				],
				image: null,
			},
			{
				title: 'Explore - Users',
				description: 'This section lets users discover other members of the platform, based on similar interests, skills, or professions.',
				points: [
					"User cards show profile image, full name,user id",
					"Search filter to find users by name, skill, industry",
					"Interest-based user suggestions shown by default",
					"Smooth transitions and   infinite scroll support",
				],
				image: '/project-doc/skillvilla/customer/2-explore/1-explore-users-page.png',
			},
			{
				title: 'Explore - Community',
				description: 'Allows users to discover and join communities aligned with their interests, professions, or goals.',
				points: [
					"Prefetched community suggestions based on user interests and activity",
					"Search bar to find communities by name, category, or topic",
					"Each community card displays cover image, community name, and total members", 
					"Responsive grid layout for smooth discovery across devices",
				],
				image: '/project-doc/skillvilla/customer/2-explore/2-explore-community-page.png',
			},
			{
				title: 'Explore - Posts',
				description: "A visual feed of posts shared by users across the platform, curated based on the viewer's interests.",
				points: [
					"Prefetched content personalized to the user's interest or skills and preferences",
					"Search bar to find posts by caption, tags, or keywords",
					"Post cards display image or video thumbnail with subtle hover effects",
					"Lightweight and fast-loading for a smooth browsing experience",
					"Supports infinite scroll for deep content discovery",
				],
				image: '/project-doc/skillvilla/customer/2-explore/3-explore-post-page.png',
			},
			{
				title: 'Explore - Workfolio',
				description: 'Showcases completed projects and creative work submitted by users, helping others discover talent and experience across industries.',
				points: [
					"Prefetched workfolios based on user interests",
					"Search bar to find workfolios by title, tags, or creator name",
					"Each card displays project title, posted by (userId), and rating out of 5 stars",
					"Includes total number of reviews for credibility",
					"Action buttons for viewing details, sharing, or saving the workfolio",
					"Responsive design with clean card-based layout",
				],
				image: '/project-doc/skillvilla/customer/2-explore/4-explore-workfolio-page.png',
			},
			{
				title: 'Explore - Problem',
				description: 'Browse and search user-submitted problems across various fields, aimed at finding expert insights and collaborative solutions.',
				points: [
					"Prefetched list of problems based on the user's interest ",
					"Search bar to find problems by title, keywords, or tags",
					"Each problem card displays the title, posted by (user ID), and total number of solutions received", 
					"Encourages community knowledge-sharing and problem-solving",
				],
				image: '/project-doc/skillvilla/customer/2-explore/5-explore-problem-page.png',
			},
			{
				title: 'Explore - Jobs',
				description: 'A smart job discovery section tailored to user interests, helping professionals find full-time and remote opportunities that match their skills.',
				points: [
					"Prefetched jobs based on user interests, skills, and activity",
					"Search functionality for job title, required skills, and company name",
					"Advanced filters for salary range, location, employment type, and remote options",
					"Job cards display title, company name, location, job type, salary package, and required skills",
					"Includes 'Apply' and 'Save' buttons for quick actions",
					"Dropdown menu with options to view job details, share, or save for later",
					 
				],
				image: '/project-doc/skillvilla/customer/2-explore/6-explore-job-page.png',
			},
			{
				title: 'Explore - Freelance',
				description: 'Connects job seekers with freelance gigs that match their skills and interests, supporting flexible, project-based work opportunities.',
				points: [
					"Prefetched freelance gigs based on user skills and past activity",
					"Search bar to filter by title, required skill, or posted user",
					"Freelance cards display title, posted by (user ID), rating (stars) and total reviews",
					"Includes payment range and type (fixed/hourly)",
					"Required skills are listed for quick evaluation",
					"Action buttons to place a bid or save the opportunity",
					"Dropdown menu for viewing details, sharing, or saving for later",
					 
				],
				image: '/project-doc/skillvilla/customer/2-explore/7-explore-freelance-page.png',
			},
			{
				title: 'Chat System',
				description: 'A fully responsive, real-time messaging system that allows users to chat privately and share platform content like posts, jobs, and workfolios.',
				points: [
					"Two-panel layout on desktop: Chat List (left) and Chat Box (right)",
					"On smaller screens, displays only chat list; selecting a conversation navigates to the chat box page",
					"Chat List shows recent conversations with user details and unread message count",
					"Chat Box supports real-time messaging with WebSocket",
					"Users can share content directly in chat: Posts, Workfolios, Jobs, Freelance Gigs, and Problems",
					"Shared content appears as interactive preview cards with title, thumbnail",
					"Fully responsive UI with smooth transitions for desktop and mobile",
				],
				image: '/project-doc/skillvilla/customer/3-chat/1-chat-page.png',
			},
			{
				title: 'Community - My Communities',
				description: 'Displays all communities created by the logged-in user, with quick access to manage members and handle join requests.',
				points: [
					"Lists all communities where the user is the creator/admin",
					"Each community item shows cover image, name, and total number of members",
					"If join requests exist, the item also displays the total number of pending requests",
					"Clean, scrollable layout optimized for both mobile and desktop",
					
				],
				image: '/project-doc/skillvilla/customer/4-community/1-my-community-page.png',
			},
			{
				title: 'Community - Joined Communities',
				description: 'Displays a list of all communities the user has joined, with an option to leave any community at any time.',
				points: [
					"Shows all communities the logged-in user is a member of",
					"Each community card includes cover image, name, and total members",
					"Includes a 'Leave' button to exit any joined community instantly",
					"Clean card layout optimized for mobile and desktop views",
					
				],
				image: '/project-doc/skillvilla/customer/4-community/2-joined-community-page.png',
			},
			{
				title: 'Community - Detail Page',
				description: 'A comprehensive view of the community that includes its details, member management, and the ability to share and moderate content.',
				points: [
					"Displays full community info: name, description, banner, and total members",
					"Member list with roles and options to remove or manage individuals",
					"Join request section with the ability to accept or cancel pending requests",
					"Integrated message section to post announcements or community-wide updates",
					"Community feed where users can share Posts, Problems, Workfolios, Jobs, and Freelance gigs",
					"Admin controls to edit or delete the community",
					"Fully responsive layout for both users and community admins",
				],
				image: '/project-doc/skillvilla/customer/4-community/3-communiy-detail-page.png',
			},
			{
				title: 'Story Page',
				description: 'A feature for users to share temporary moments with their network - visible for 24 hours, like modern social story systems.',
				points: [
					"Displays stories in a horizontal scroll layout starting with the logged-in user's story",
					"Followed users' latest stories are shown next with thumbnail, name, and time (e.g., '2 hrs ago')",
					"Tapping a story opens the full story view with all active stories from that user",
					"Each story auto-expires after 24 hours from the time of posting",
					"Supports both image and video thumbnails with smooth previews",
					"Mobile-optimized and styled for fast interactions and seamless transitions",
				],
				image: '/project-doc/skillvilla/customer/5-story/1-story-page.png',
			},
			{
				title: 'Story Detail Page',
				description: 'A full-screen view of all active stories from a selected user, including interactive elements like likes and comments.',
				points: [
					"Displays all currently active stories from the selected user",
					"Each story shows the user's image and name at the top",
					"Supports both image and video story formats",
					"Below the story, shows like button, comment field with send button",
					"Displays total likes and total comments count for the story",
					"Comment list shows each comment with user image and ID",
					"Allows real-time interaction and engagement within the 24-hour life of a story",
					"Smooth navigation between multiple stories from the same user",
				],
				image: '/project-doc/skillvilla/customer/5-story/2-story-detail-page.png',
			}





			

		], 
	},
 
 
 
 
];		
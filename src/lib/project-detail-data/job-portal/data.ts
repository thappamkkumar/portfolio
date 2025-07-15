// app/project-detail/multi-vendor-ecommerce/data.ts

export const heroProps = {
	
  title: "Job Portal",
  tagline: "A full-featured job listing and recruitment platform built with PHP and MySQL",
  titles: [
    "Role-based System: Admin, Employer & Jobseeker",
    "Built using Core PHP + MySQL",
    "Post Jobs, Apply, Manage Applications",
    "HTML, CSS & JavaScript Frontend",
  ],
  images: [ 
			"/project-doc/job-portal/login-page.png", 
			"/project-doc/job-portal/jobseeker-sign-up-page.png", 
			"/project-doc/job-portal/hirer-sign-up-page.png", 
			 
			"/project-doc/job-portal/jobseeker/jobseeker-home-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-job-detail-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-applied-jobs-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-update-basic-detail-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-update-contact-detail-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-update-profile-image-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-update-qualification-detail-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-profile-update-resume-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-update-password-page.png", 
			"/project-doc/job-portal/jobseeker/contact-page.png", 
			"/project-doc/job-portal/jobseeker/about-page.png", 
			"/project-doc/job-portal/jobseeker/jobseeker-logout-page.png", 
			"/project-doc/job-portal/employer/hirer-post-new-job-page.png", 
			"/project-doc/job-portal/employer/hirer-job-list-page.png", 
			"/project-doc/job-portal/employer/hirer-job-detail-page.png", 
			"/project-doc/job-portal/employer/hirer-job-application-page.png", 
			"/project-doc/job-portal/employer/hirer-job-application-detail-page.png", 
			"/project-doc/job-portal/employer/hirer-job-candidate-profile-page.png", 
			"/project-doc/job-portal/employer/hirer-profile-page.png", 
			"/project-doc/job-portal/employer/hirer-update-profile-page.png", 
			"/project-doc/job-portal/employer/hirer-update-profile-image-page.png", 
			"/project-doc/job-portal/employer/hirer-change-password-page.png", 
			"/project-doc/job-portal/employer/hirer-logout-page.png", 
			"/project-doc/job-portal/admin/admin-dashboard-page.png", 
			"/project-doc/job-portal/admin/admin-hirer-list-page.png", 
			"/project-doc/job-portal/admin/admin-hirer-profile-page.png", 
			"/project-doc/job-portal/admin/admin-jobseeker-list-page.png", 
			"/project-doc/job-portal/admin/admin-jobseeker-profile-page.png", 
			"/project-doc/job-portal/admin/admin-update-about-page.png", 
			"/project-doc/job-portal/admin/admin-update-contact-page.png", 
  ],
  liveDemoUrl: "",
  codeUrl: "https://github.com/your-repo/job-portal",
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS", 
    "JavaScript", 
  ],
};

 


export const featureProps = [
		{
      category: 'Authentication & Access',
      features: [ 
				{
					title: 'Login Page',
					description: 'Secure login interface for Jobseekers, Employers, and Admins to access the platform and manage their respective accounts.',
					points: [
						"Simple login form with Email ID and Password fields",
						"Validates user credentials and displays helpful error messages",
						"Role-based redirection after login (Jobseeker, Hirer, Admin)",
						"Includes a link to the Signup page for new users",
					],
					image: '/project-doc/job-portal/login-page.png',
				},
				{
					title: 'Jobseeker Signup Page',
					description: 'Allows individuals to create a jobseeker account to browse and apply for job listings.',
					points: [
						"Form includes fields for Name, Email, Password, and Re-enter Password",
						"Validates password confirmation and required fields",
						"Secure password handling using PHP and MySQL",
						"Directs users to login or dashboard after successful signup",
					],
					image: '/project-doc/job-portal/jobseeker-sign-up-page.png',
				},
				{
					title: 'Hirer Signup Page',
					description: 'Enables employers or companies to register on the platform and post job openings.',
					points: [
						"Form includes Name, Email, Password, Company Name, Tagline, Description, and Website Link",
						"Detailed fields help build a professional hirer profile",
						"Validates all input fields for accuracy and completeness",
						"Upon successful registration, hirers can access the job posting dashboard",
					],
					image: '/project-doc/job-portal/hirer-sign-up-page.png',
				},
			
			],
			 
		},
		
		//jobseeker
		{
      category: 'Jobseeker',
      features: [ 
					{
					title: 'Jobseeker Home Page',
					description: 'The homepage for jobseekers provides a streamlined interface to search and browse the latest job openings.',
					points: [
						"Search bar with two input fields: Job Title and Company Name (at least one required)",
						"Displays a list of the most recent job postings",
						"Each job card shows company logo, company name, job title, salary, posting date, location, and job type",
						"Clean and responsive layout for easy navigation across devices",
						"Real-time filtering based on search inputs for relevant results",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-home-page.png',
				},
				{
					title: 'Job Detail Page',
					description: 'Displays comprehensive details about a specific job and allows jobseekers to apply with a single click.',
					points: [
						"Shows full job information including title, company name, description, salary, location, job type, and posted date",
						"Company profile details displayed alongside the job post",
						"Clean layout with clear sections for job responsibilities and requirements",
						"One-click 'Apply Now' button for quick application submission",
						"Validates if the user is logged in before applying",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-job-detail-page.png',
				},
				{
					title: 'Applied Jobs Page',
					description: 'Allows jobseekers to view and track all the jobs they have applied for, along with application status and job details.',
					points: [
						"Displays a list of all jobs the user has applied to",
						"Each card shows company logo, company name, and the job title applied for",
						"Includes the date of application and current response status (e.g., Pending, Reviewed, Accepted)",
						"‘View Details’ button to see full job information again if needed",
						"Organized layout for easy tracking of application history",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-applied-jobs-page.png',
				},
				{
					title: 'Jobseeker Profile Page',
					description: 'A multi-section profile management page where jobseekers can view and update their personal, educational, and professional information.',
					points: [
						"Profile header with image, name, email, and edit buttons for each section",
						"Image update via a '+' icon button next to the profile picture",
						"Basic Information section includes: Name, Age, Gender, Marital Status, Skills, Hobbies, Date of Birth, and Languages",
						"Contact Information section with Phone Number, Email, and Address",
						"Qualification section showing: Highest Qualification, Pass Out Year, Institute Name, and Marks in Percentage",
						"Resume section allows uploading and updating a resume file",
						"Modular structure with clear labels and update options for each segment",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-page.png',
				},
				{
					title: 'Update Basic Information',
					description: 'Page to update jobseeker’s core personal details for a complete profile.',
					points: [
						"Form fields include Name, Age, Gender, Marital Status, Skills, Hobbies, Date of Birth, and Languages",
						"Pre-filled values make it easy to edit and resubmit",
						"Form validation ensures data is correctly entered",
						"Clean layout with labels and input guidance",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-update-basic-detail-page.png',
				},
				{
					title: 'Update Profile Image',
					description: 'Dedicated page for uploading or changing the jobseeker’s profile photo.',
					points: [
						"Includes a file upload input with image preview feature",
						"Only accepts image formats (e.g., JPG, PNG) with size restriction",
						"‘+’ icon near image triggers file selection",
						"Image is instantly updated after successful submission",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-update-profile-image-page.png',
				},
				{
					title: 'Update Contact Information',
					description: 'Page to manage the jobseeker’s communication details.',
					points: [
						"Fields include Phone Number, Email Address, and Residential Address",
						"Validates phone number format and email structure",
						"Pre-populated values for seamless updates",
						"Responsive layout optimized for mobile and desktop",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-update-contact-detail-page.png',
				},
				{
					title: 'Update Qualification Details',
					description: 'Form to update academic background and educational information.',
					points: [
						"Fields include Highest Qualification, Pass Out Year, Institute Name, and Marks (in %)",
						"Dropdown/select inputs where applicable (e.g., year, qualification)",
						"Validates marks input and year format",
						"Helps employers assess academic eligibility quickly",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-update-qualification-detail-page.png',
				},
				{
					title: 'Update Resume',
					description: 'Page to upload or replace the jobseeker’s resume file.',
					points: [
						"Accepts PDF format only for consistent employer viewing",
						"Allows viewing current uploaded resume name or status",
						"Upload form includes file size and format guidance",
						"Ensures updated resume is always available with one click",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-profile-update-resume-page.png',
				},
				{
					title: 'Password Change Page',
					description: 'Allows users to securely update their account password using their current credentials.',
					points: [
						"Form includes fields for Current Password, New Password, and Confirm New Password",
						"Validates password strength and matches before allowing update",
						"Displays clear error messages for incorrect or mismatched inputs", 
						"Successful update redirects user with a confirmation message",
						"Improves account security and user control over login access",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-update-password-page.png',
				},
				{
					title: 'Contact Page',
					description: 'Provides essential contact information for users to reach out to the Job Portal support team.',
					points: [
						"Displays official contact Email, Phone Number, and Office Address",
						"Simple, clean layout for quick access to support details",
						"Can be used by jobseekers, hirers, or guests to get in touch",
						"Helps resolve issues, provide feedback, or inquire about services",
						"Often linked in the footer or navigation for easy accessibility",
					],
					image: '/project-doc/job-portal/jobseeker/contact-page.png',
				},
				{
					title: 'About Page',
					description: 'Introduces the purpose, vision, and functionality of the Job Portal to new users and visitors.',
					points: [
						"Explains the mission of the platform — connecting jobseekers with employers efficiently",
						"Highlights the three user roles: Jobseeker, Hirer (Employer), and Admin",
						"Briefly outlines core features like job search, one-click apply, job posting, and candidate management",
						"Builds trust by sharing the value the platform brings to both hiring teams and individuals seeking employment",
						"Simple and informative layout to make understanding easy for first-time visitors",
					],
					image: '/project-doc/job-portal/jobseeker/about-page.png',
				},
				{
					title: 'Logout Page',
					description: 'Safely ends the user session and redirects them to the homepage or login screen.',
					points: [
						"Displays a brief message confirming successful logout",
						"Ensures all session data is cleared to maintain account security",
						"Redirects users to the login or homepage after logout", 
						"Simple and secure flow for ending a session properly",
					],
					image: '/project-doc/job-portal/jobseeker/jobseeker-logout-page.png',
				},
 
			]
		
		},
		
		//hirer
		{
      category: 'Employer / Hirer',
      features: [ 
				{
					title: 'Add New Job Page',
					description: 'Allows hirers to create and publish new job openings with all required details.',
					points: [
						"Form includes fields for: Category, Job Title, Job Type, Salary Package, Required Skills, Experience, Location, Expiry Date, and Job Description",
						"Structured layout makes it easy to input job data quickly",
						"Supports job type selection like Full-time, Part-time, Remote, etc.",
						"Date picker for setting job expiry to auto-hide outdated posts",
						"Field validations ensure all mandatory data is submitted correctly",
						"Posts are instantly visible on the job listings after submission",
					],
					image: '/project-doc/job-portal/employer/hirer-post-new-job-page.png',
				},
				{
					title: 'Job List Page',
					description: 'Displays all job postings created by the hirer, with search functionality to quickly find specific listings.',
					points: [
						"Search bar at the top to filter jobs by job title",
						"Lists all jobs posted by the logged-in hirer in a clean, card-based layout",
						"Each job card displays: Job Title, Job Type, Salary, Location, and Post Date", 
						"Real-time filtering of job list based on search input",
					],
					image: '/project-doc/job-portal/employer/hirer-job-list-page.png',
				},
				{
					title: 'Job Detail Page',
					description: 'Provides full details of a specific job post created by the hirer, with options to edit or delete the listing.',
					points: [
						"Displays complete job information including Title, Type, Category, Salary, Skills Required, Experience, Location, Expiry Date, and Description", 
						"Edit button navigates to a pre-filled form to update job details",
						"Delete button allows the hirer to remove the job permanently",
						"Clean layout helps hirers quickly assess and manage the job post",
					],
					image: '/project-doc/job-portal/employer/hirer-job-detail-page.png',
				},
				{
					title: 'Candidate List Page',
					description: 'Displays a list of candidates who have applied to the hirer’s job postings, with quick access to resumes, profiles, and application details.',
					points: [
						"Each card shows: Profile Image, Candidate Name, Applied Date, Job Title applied for, Phone Number, and Email",
						"Button to view the candidate’s resume",
						"‘View Profile’ button navigates to the jobseeker’s full profile",
						"‘Application Detail’ button shows specific info about that application (e.g. message, status)",
						"Helps hirers efficiently screen and follow up with applicants",
					],
					image: '/project-doc/job-portal/employer/hirer-job-application-page.png',
				},
				{
					title: 'Candidate Profile Page',
					description: 'Gives hirers a full overview of a jobseeker’s profile, including personal, contact, educational, and resume information.',
					points: [
						"Displays candidate’s Profile Image, Name, and Email at the top",
						"Sections include: Basic Info (Age, Gender, Skills, etc.), Contact Details, and Educational Qualification",
						"Resume section allows hirers to download/view the applicant’s submitted resume",
						"Well-structured layout helps in quick evaluation of the candidate",
						"Essential for screening before shortlisting or contacting applicants",
					],
					image: '/project-doc/job-portal/employer/hirer-job-candidate-profile-page.png',
				},
				{
					title: 'Application Detail Page',
					description: 'Displays complete information about a specific job application and allows the hirer to manage its status.',
					points: [
						"Shows detailed job information such as Job Title, Company Name, Salary, and Location",
						"Displays candidate's name, contact info, and the date of application",
						"Includes a section to view the candidate’s submitted message or notes (if any)",
						"Dropdown or radio options to update application status (e.g., Pending, Reviewed, Shortlisted, Rejected, Hired)",
						"Status updates reflect immediately and help streamline candidate tracking",
						"Improves communication transparency and decision-making for hiring teams",
					],
					image: '/project-doc/job-portal/employer/hirer-job-application-detail-page.png',
				},
				{
					title: 'Profile Page',
					description: 'Displays detailed company and user information for the hirer, with options to update profile and logo.',
					points: [
						"Profile header shows Company Logo (with + icon to update), User Name, and User ID",
						"Displays Company Name, Location, Establishment Year, Tagline, and Description",
						"Includes industry-specific fields like Number of Employees, Industry Type, and Nature of Business",
						"‘Update Logo’ button allows the hirer to upload a new company logo or profile image",
						"‘Update Details’ button lets the hirer modify company information as needed",
						"Structured layout helps present business identity clearly to jobseekers",
					],
					image: '/project-doc/job-portal/employer/hirer-profile-page.png',
				},
				{
					title: 'Profile Image Update Page',
					description: 'Allows hirers to upload or change their company logo or profile image with a simple interface.',
					points: [
						"Displays current logo with an option to select and upload a new image",
						"‘+’ icon or upload button makes interaction intuitive and user-friendly",
						"Supports common image formats like JPG, PNG, etc.",
						"Includes validation for image size and format to ensure consistency",
						"Once uploaded, the new logo instantly reflects across the platform",
						"Essential for maintaining a professional and up-to-date company profile",
					],
					image: '/project-doc/job-portal/employer/hirer-update-profile-image-page.png',
				},
				{
					title: 'Profile Update Page',
					description: 'Enables hirers to update their company and personal details to keep their profile accurate and professional.',
					points: [
						"Editable fields include: User Name, Company Name, Location, Established Year, Tagline, Description, Number of Employees, Industry, and Business Type",
						"Prefilled form with existing data for easy updates",
						"Input validations ensure all required fields are properly filled",
						"‘Save Changes’ button updates the profile instantly",
						"Improves transparency and builds trust with jobseekers viewing company info",
						"Essential for keeping the company’s presence up-to-date on the platform",
					],
					image: '/project-doc/job-portal/employer/hirer-update-profile-page.png',
				},
				{
					title: 'Password Change Page',
					description: 'Allows users to securely update their account password using their current credentials.',
					points: [
						"Form includes fields for Current Password, New Password, and Confirm New Password",
						"Validates password strength and matches before allowing update",
						"Displays clear error messages for incorrect or mismatched inputs",
						"Successful update redirects user with a confirmation message",
						"Improves account security and user control over login access",
					],
					image: '/project-doc/job-portal/employer/hirer-change-password-page.png',
				},
				{
					title: 'Logout Page',
					description: 'Safely ends the user session and redirects them to the homepage or login screen.',
					points: [
						"Displays a brief message confirming successful logout",
						"Ensures all session data is cleared to maintain account security",
						"Redirects users to the login or homepage after logout", 
						"Simple and secure flow for ending a session properly",
					],
					image: '/project-doc/job-portal/employer/hirer-logout-page.png',
				},









				


			],
		},
		
		//admin
		{
      category: 'Admin',
      features: [ 
				{
					title: 'Dashboard Page',
					description: 'Provides the admin with a quick overview of key platform metrics including registered users and posted jobs.',
					points: [
						"Displays total number of registered Jobseekers",
						"Shows total number of registered Hirers (Employers)",
						"Displays total number of active Job Posts on the platform",
						"Clean and minimal UI for quick access to platform statistics",
						"Acts as the entry point to deeper admin-level controls and management",
						"Helps the admin monitor growth and platform engagement at a glance",
					],
					image: '/project-doc/job-portal/admin/admin-dashboard-page.png',
				},
				{
					title: 'Hirer List Page',
					description: 'Allows the admin to view, search, and manage all registered hirers on the platform.',
					points: [
						"Search bar at the top to filter hirers by company name or concern name",
						"Displays hirers in a table format with the following columns:",
						"- Company Name",
						"- Concern Name (Hirer or employer)",
						"- Email Address",
						"- Registration Date",
						"- Action button to view detailed profile",
						"Pagination support to handle large data sets efficiently",
						"Helps admin monitor employer activity and maintain platform integrity",
					],
					image: '/project-doc/job-portal/admin/admin-hirer-list-page.png',
				},
				{
					title: 'Hirer Detail Page',
					description: 'Displays complete profile and business details of a hirer, allowing the admin to review and verify employer information.',
					points: [
						"Shows Company Logo, User Name, User ID, and Email",
						"Displays all company-related information: Company Name, Location, Established Year, Tagline, and Description",
						"Additional fields include Number of Employees, Industry Type, and Nature of Business",
						"Allows admin to verify authenticity and professionalism of the hirer",
						"Used for moderation, validation, or support actions by the admin",
						"Well-organized layout helps admins quickly understand employer profiles",
					],
					image: '/project-doc/job-portal/admin/admin-hirer-profile-page.png',
				},
				{
					title: 'Jobseeker List Page',
					description: 'Allows the admin to view and manage all registered jobseekers, with easy access to contact and profile details.',
					points: [
						"Search bar at the top to filter jobseekers by name or email",
						"List displayed in tabular format with the following columns:",
						"- Full Name",
						"- Contact Number",
						"- Email Address",
						"- Registration Date",
						"- Action button to view detailed jobseeker profile",
						"Pagination included for navigating large user bases",
						"Used by admin for platform oversight, user verification, or support",
					],
					image: '/project-doc/job-portal/admin/admin-jobseeker-list-page.png',
				},
				{
					title: 'Jobseeker Detail Page',
					description: 'Displays complete personal, educational, and contact information of a jobseeker for admin review and verification.',
					points: [
						"Header includes Profile Image, Full Name, and Email Address",
						"Basic Information: Age, Gender, Marital Status, Skills, Hobbies, Date of Birth, Languages",
						"Contact Information: Phone Number, Email, and Address",
						"Qualification Details: Highest Qualification, Pass Out Year, Institute Name, Percentage Marks",
						"Resume section with a downloadable file (if uploaded)",
						"Helps admin ensure authenticity and take necessary moderation actions",
						"Organized layout for quick and clear insight into the candidate’s profile",
					],
					image: '/project-doc/job-portal/admin/admin-jobseeker-profile-page.png',
				},
				{
					title: 'Contact Update Page',
					description: 'Allows the admin to update the platform’s official contact information that is displayed to users.',
					points: [
						"Editable fields for platform email address, phone number, and physical address",
						"Pre-filled form with existing data for convenience",
						"Validation to ensure correct format of email and phone number",
						"Admin can update details anytime to reflect accurate support/contact info",
						"Changes reflect instantly on the public-facing Contact page",
						"Maintains clear and professional communication channels for users",
					],
					image: '/project-doc/job-portal/admin/admin-update-contact-page.png',
				},
				{
					title: 'About Update Page',
					description: 'Enables the admin to update the content displayed on the public About page of the job portal.',
					points: [
						"Editable text fields for platform mission, vision, and description",
						"Rich text area for adding formatted content like paragraphs, bullet points, or emphasis",
						"Allows the admin to keep the About section relevant and up-to-date",
						"Supports content updates without needing developer involvement",
						"Immediate reflection of changes on the public-facing About page",
						"Helps communicate platform goals, values, and purpose clearly to users",
					],
					image: '/project-doc/job-portal/admin/admin-update-about-page.png',
				}







			],
		},
	

];		
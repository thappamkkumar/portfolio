 
export const heroProps = {	
	title: "Image Gallery",
	tagline: "A simple and searchable public image gallery built with React and PHP",
  titles: [
    "Category-Based Image Storage",
    "Built with React.js, PHP API, and MySQL",
    "Users Can Search Images by Category",
    "Responsive UI with CSS and JSX Components",
  ],
  images: [ 
			"/project-doc/image-gallery/img1.png", 
			"/project-doc/image-gallery/img2.png", 
			"/project-doc/image-gallery/img3.png", 
			"/project-doc/image-gallery/img4.png", 
			"/project-doc/image-gallery/img5.png",  
  ],
  liveDemoUrl: "",
	codeUrl: "https://github.com/your-repo/imagegallery",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "React Js",
		"JSX",
		"CSS",  
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
						description: 'The main interface of ImageGallery where users can search for images, browse categories, and view images in a responsive gallery layout.',
						points: [
							"Search bar at the top allows users to filter images by category in real time",
							"Add Image button opens a form to upload new images under specific categories",
							"Top Search Categories section shows frequently used or trending tags",
							"Image grid displays publicly available images with pagination support",
							"Clicking an image opens a pop-up (modal) to view it in larger size",
							"Fully responsive layout using React JSX and CSS for seamless UX",
						],
						image: '/project-doc/image-gallery/img1.png',
					},
					{
						title: 'Image View Modal',
						description: 'When a user clicks on an image in the gallery, a popup modal opens to display the image in a larger view with category context.',
						points: [
							"Displays a full-size version of the selected image in a centered modal",
							 
							"Blurred backdrop focuses user attention on the image",
							"Includes a close button to exit the modal easily",
							"Optimized for both desktop and mobile screen sizes",
						],
						image: '/project-doc/image-gallery/img2.png',
					},
					{
						title: 'Add Image Modal',
						description: 'A user-friendly popup form that allows uploading one or multiple images under a selected category.',
						points: [
							"Launched by clicking the 'Add Image' button on the homepage",
							"Supports selecting and uploading multiple images at once",
							"Category dropdown lets users organize uploads efficiently",
							"Add button sends images and category info to the PHP API",
							"Includes validation for required fields and allowed file types",
							"Close button lets users cancel and exit the modal anytime",
						],
						image: '/project-doc/image-gallery/img3.png',
					},
					{
						title: 'Search by Category',
						description: 'Allows users to quickly filter and find images by typing a category name into the search bar.',
						points: [
							"Search bar placed prominently at the top of the page",
							"Real-time filtering of images as users type a category name",
							 
							"Dynamically updates the image grid with matching results",
							"Improves user experience by reducing the time to find relevant images",
						],
						image: '/project-doc/image-gallery/img5.png',
					}



			]
		},
 
];		
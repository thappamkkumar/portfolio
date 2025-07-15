 
export const heroProps = {	
	title: "ImagePuzzle",
  tagline: "A fun and interactive image puzzle game built with HTML, CSS, and JavaScript",
  titles: [
    "Image Puzzle Game Interface",
    "Select Complexity and Time Limit",
    "Built with Vanilla JS, HTML & CSS",
    "Drag-and-Drop to Solve the Puzzle",
  ],
  images: [ 
			"/project-doc/image-puzzle/img1.png", 
			"/project-doc/image-puzzle/img2.png", 
			"/project-doc/image-puzzle/img3.png", 
  ],
  liveDemoUrl: "",
	codeUrl: "https://github.com/your-repo/imagepuzzle",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "HTML",
		"CSS",
		"Javascript"
   
  ],
};

 


export const featureProps = [
		{
      category: '',
      features: [ 
				  {
						title: 'Home Page (Game Setup)',
						description: 'The game setup screen where users choose puzzle difficulty and time before starting the challenge.',
						points: [
							"Users can select time duration from 1 to 10 minutes",
							"Difficulty levels: Very Easy (3x3), Easy (4x4), Hard (5x5), Very Hard (6x6)",
							"Each level dynamically controls how the image is split into parts",
							"Clean UI with dropdowns or buttons for selecting time and level",
							"Start button initializes the puzzle with selected options",
						],
						image: '/project-doc/image-puzzle/img2.png',
					},
					{
						title: 'Game Page',
						description: 'The main puzzle interface where users solve the shuffled image using drag-and-drop functionality within the selected time and difficulty.',
						points: [
							"Puzzled image is generated based on the selected level (e.g., 3x3, 4x4, etc.)",
							"Original image is shown as a hint to guide the user",
							"Countdown timer displays remaining time based on selected duration",
							"Back button allows users to return to the setup screen",
							"Finish button lets users end the puzzle manually if completed early",
							"Puzzle auto-submits if time runs out before user finishes",
							"Drag-and-drop logic tracks and swaps pieces as the user plays",
						],
						image: '/project-doc/image-puzzle/img3.png',
					},
					{
						title: 'Result Page',
						description: 'The final screen that displays the result of the puzzle game based on whether the user completed it correctly within the time limit.',
						points: [
							"Displays a message: 'You Win the Game' or 'You Lose the Game' based on performance",
							 
							"Includes a 'Next' button to restart the game with the same difficulty and time settings",
							"Smooth transition from gameplay to result screen for user experience continuity",
						],
						image: '/project-doc/image-puzzle/img1.png',
					} 
 

			]
		},
 
];		
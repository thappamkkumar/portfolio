 
export const heroProps = {	
	 
		title: "Digital Whiteboard",
		tagline: "A powerful Java-based desktop drawing tool for sketching, annotating, and designing with ease",
		titles: [
			"Desktop Drawing App Built in Java",
			"Multiple Colors & Adjustable Stroke Width",
			"Predefined Shapes, Text Tools & Eraser",
			"Save Artwork as PNG Locally",
		],  
		images: [ 
			"/project-doc/digital-whiteboard/user-interface.jpg",  
			"/project-doc/digital-whiteboard/free-hand-line-1.jpg",  
			"/project-doc/digital-whiteboard/free-hand-line-2.jpg",  
			"/project-doc/digital-whiteboard/free-hand-line-3.jpg",  
			"/project-doc/digital-whiteboard/free-hand-line-4.jpg", 
			"/project-doc/digital-whiteboard/shapes-1.jpg",  
			"/project-doc/digital-whiteboard/shapes-2.jpg",  
			"/project-doc/digital-whiteboard/shapes-3.jpg",  
			"/project-doc/digital-whiteboard/shapes-4.jpg",  
			"/project-doc/digital-whiteboard/shapes-5.jpg",  
			"/project-doc/digital-whiteboard/shapes-6.jpg",  
			"/project-doc/digital-whiteboard/shapes-7.jpg",  
			"/project-doc/digital-whiteboard/shapes-8.jpg",  
			"/project-doc/digital-whiteboard/shapes-9.jpg",  
			"/project-doc/digital-whiteboard/text-1.jpg",  
			"/project-doc/digital-whiteboard/text-2.jpg",  
			"/project-doc/digital-whiteboard/text-3.jpg",  
			"/project-doc/digital-whiteboard/text-4.jpg",  
			"/project-doc/digital-whiteboard/text-5.jpg",  
			"/project-doc/digital-whiteboard/text-6.jpg",   
			"/project-doc/digital-whiteboard/page-change-1.jpg",  
			"/project-doc/digital-whiteboard/page-change-2.jpg",  
			"/project-doc/digital-whiteboard/page-change-3.jpg",   
			"/project-doc/digital-whiteboard/save.jpg",  
  ],
  liveDemoUrl: "",
	codeUrl: "https://github.com/your-repo/whiteboard",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "Java",
		"AWT",
		"Swing",
	  
  ],
};

 


export const featureProps = [
		{
      category: '',
      features: [ 
				{
					title: 'Main Interface',
					description: 'The core drawing interface with an intuitive header toolbar and a spacious canvas area for sketching, writing, or designing.',
					points: [
						"Top header includes navigation buttons for switching pages (< and >)",
						"Four pencil tools with fixed colors: blue, red, green, and black",
						"Eraser tool to remove drawn content manually",
						"Stroke width selector with dropdown for customizing pencil/eraser size",
						"Color picker button to set color for shapes and text",
						"Shape tool dropdown with various predefined filled and outlined shapes",
						"Text tool button to add text with customizable color, size, and position",
						"Large canvas area below the header for drawing and interaction",
					],
					image: '/project-doc/digital-whiteboard/user-interface.jpg',
				},
				{
					title: 'Freehand Drawing (Small Stroke)',
					description: 'Draw smooth, natural lines on the canvas using any of the four preset pencil colors with a minimal stroke width for precision.',
					points: [
						"Allows users to freely draw on the canvas using mouse input",
						"Supports pencil colors: blue, red, green, and black",
						"Small stroke width ideal for detailed sketching or handwriting",
						"Real-time rendering ensures fluid and responsive drawing",
						"Perfect for annotations, outlines, and precise illustrations",
					],
					image: '/project-doc/digital-whiteboard/free-hand-line-1.jpg',
				},
				{
					title: 'Change Stroke Width',
					description: 'Customize the thickness of the pencil or eraser by selecting a predefined stroke width from a dropdown menu.',
					points: [
						"Clicking the 'Stroke' button reveals a dropdown with multiple stroke width options",
						"Users can select different stroke sizes for drawing or erasing",
						"Stroke width applies to all pencil colors and the eraser tool",
						"Helps in creating both fine lines and bold strokes based on need",
						"Enhances precision and flexibility while drawing or sketching",
					],
					image: '/project-doc/digital-whiteboard/free-hand-line-2.jpg',
				},
				{
					title: 'Freehand Drawing (Large Stroke)',
					description: 'Draw bold and expressive lines on the canvas by selecting a larger stroke width for the pencil tool.',
					points: [
						"Works with all four pencil colors: red, green, blue, and black",
						"Large stroke width is ideal for headings, highlights, or bold sketches",
						"Smooth and responsive drawing experience using mouse input",
						"Stroke size is selected from the dropdown stroke control",
						"Gives users creative control over line weight and visual emphasis",
					],
					image: '/project-doc/digital-whiteboard/free-hand-line-3.jpg',
				},
				{
					title: 'Eraser Tool',
					description: 'Remove any drawn content on the canvas using a smooth and adjustable eraser for precise corrections.',
					points: [
						"Activated by clicking the eraser icon in the header toolbar",
						"Erases freehand lines, shapes, and other drawn elements",
						"Stroke width of the eraser can be changed via the stroke dropdown",
						"Works in real-time for quick and responsive correction",
						"Essential for refining sketches or cleaning up mistakes during drawing",
					],
					image: '/project-doc/digital-whiteboard/free-hand-line-4.jpg',
				},
				{
					title: 'Select Shape',
					description: 'Add geometric shapes to the canvas by selecting from a dropdown list of predefined shapes.',
					points: [
						"Click the 'Shape' button to open a dropdown menu",
						"Choose from predefined shapes like rectangles, circles, and more",
						"Both filled and outlined versions are available for each shape",
						"Selected shape can be drawn on the canvas by dragging with the mouse",
						"Shape color is customizable using the color picker before drawing",
					],
					image: '/project-doc/digital-whiteboard/shapes-1.jpg',
				},
				{
					title: 'Draw & Resize Shapes',
					description: 'Easily draw and adjust shapes on the canvas using draggable and resizable boundaries.',
					points: [
						"After selecting a shape from the dropdown, click on the canvas to place it",
						"The shape appears with a bounding box and resize handles",
						"Users can click and drag the edges or corners to resize the shape dynamically",
						"Supports filled and outlined shapes with customizable stroke and color",
						"Provides a user-friendly interface for precise shape positioning and dimensioning",
					],
					image: '/project-doc/digital-whiteboard/shapes-3.jpg',
				},
				{
					title: 'Filled & Outlined Shapes',
					description: 'Draw a variety of geometric shapes with either filled or outlined styles using predefined or custom colors.',
					points: [
						"Includes commonly used shapes like rectangles, circles, and more",
						"Each shape can be drawn in either filled or outlined mode",
						"Users can choose a color before placing the shape on the canvas",
						"Shapes are rendered with smooth edges and precise alignment",
						"Supports resizing and repositioning after placement",
					],
					image: '/project-doc/digital-whiteboard/shapes-7.jpg',
				},
				{
					title: 'Change Shape Color',
					description: 'Customize the color of shapes and text using the integrated color picker accessible from the toolbar.',
					points: [
						"Click the 'Color' button in the top toolbar to open the color picker",
						"Choose any color to apply to the next shape or text you add",
						"Selected color applies to both filled and outlined shapes",
						"Ensures visual consistency and creative flexibility across elements",
						"Easy-to-use interface allows rapid switching between colors during design",
					],
					image: '/project-doc/digital-whiteboard/shapes-8.jpg',
				},
				{
					title: 'Draw Shapes with Selected Color',
					description: 'Draw colorful shapes by first choosing a custom color and then placing various shapes on the canvas.',
					points: [
						"Color selected from the color picker is applied to all shapes drawn afterward",
						"Works with both filled and outlined shapes for consistent styling",
						"Shapes like rectangles, circles, etc., appear in the selected color",
						"Enables users to visually organize drawings using color coding",
						"Encourages creativity and clarity in diagrams, sketches, or notes",
					],
					image: '/project-doc/digital-whiteboard/shapes-9.jpg',
				},
				{
					title: 'Enter Custom Text',
					description: 'Use the text input panel to type custom content before placing it on the canvas.',
					points: [
						"Click the 'Text' button in the toolbar to open the input panel",
						"Type the desired text in the input field",
						"Press the 'Add' button to confirm and enter placement mode",
						"Supports multi-word input for labels or annotations",
						"Prepares the user to position the text anywhere on the canvas",
					],
					image: '/project-doc/digital-whiteboard/text-1.jpg',
				},
				{
					title: 'Place Text on Canvas',
					description: 'After entering the text, click anywhere on the canvas to insert it at your desired location.',
					points: [
						"Clicking on the canvas after text input places the text at that position",
						"Text appears with the predefined size and color settings",
						"Users can place multiple text entries at different positions",
						"Ideal for labeling diagrams, adding titles, or writing notes",
						"Improves communication and clarity in your whiteboard sketches",
					],
					image: '/project-doc/digital-whiteboard/text-2.jpg',
				},
				{
					title: 'Resize Text',
					description: 'Easily adjust the size of added text by selecting it and dragging the resize handles.',
					points: [
						"Click on any placed text to activate its bounding box",
						"Resizable corners (square handles) appear around the text",
						"Drag a handle to increase or decrease text size dynamically",
						"Helps in emphasizing important labels or adjusting layout balance",
						"Works seamlessly with different fonts, sizes, and colors",
					],
					image: '/project-doc/digital-whiteboard/text-4.jpg',
				},
				{
					title: 'Colored Text',
					description: 'Customize the color of your text using the toolbar color picker before placing it on the canvas.',
					points: [
						"Click the 'Color' button in the toolbar to open the color picker",
						"Choose any color to apply to upcoming text entries",
						"Typed text will appear in the selected color when placed",
						"Useful for categorizing notes, highlighting key terms, or improving visual structure",
						"Color selection remains active until changed again",
					],
					image: '/project-doc/digital-whiteboard/text-6.jpg',
				},
				{
					title: 'Save as PNG',
					description: 'Export your whiteboard as a PNG image and save it to a custom location with your chosen file name.',
					points: [
						"Click the 'Save' button in the toolbar to open the save dialog",
						"A modal appears allowing the user to choose the destination folder",
						"Users can specify a custom file name like project1.png or project2.png",
						"The entire canvas is captured and exported as a high-quality PNG image",
						"Ensures your work is preserved for sharing, documentation, or offline use",
					],
					image: '/project-doc/digital-whiteboard/save.jpg',
				}














 

			]
		},
 
];		
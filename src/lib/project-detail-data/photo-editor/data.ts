 
export const heroProps = {	
	title: 'Photo Editor',
  tagline: 'A versatile image editing desktop application built using Java',
  titles: [
    "Crop, Resize, Rotate & Flip Tools",
    "Apply Filters & Watermarks",
    "Zoom, Theme Modes, and More",
    "Built with Java Swing for desktop",
  ],
  images: [ 
			"/project-doc/photo-editor/user-interface.jpg",  
			"/project-doc/photo-editor/select-image-1.jpg",  
			"/project-doc/photo-editor/select-image-2.jpg",  
			"/project-doc/photo-editor/crop-1.jpg",  
			"/project-doc/photo-editor/crop-2.jpg",  
			"/project-doc/photo-editor/canvas.jpg",  
			"/project-doc/photo-editor/horizontal-flip.jpg",  
			"/project-doc/photo-editor/vertical-flip.jpg",  
			"/project-doc/photo-editor/rotate.jpg",  
			"/project-doc/photo-editor/dimension-change.jpg",  
			"/project-doc/photo-editor/filters-1.jpg",  
			"/project-doc/photo-editor/filters-2.jpg",  
			"/project-doc/photo-editor/filters-3.jpg",  
			"/project-doc/photo-editor/filters-4.jpg",  
			"/project-doc/photo-editor/image-watermark-1.jpg",  
			"/project-doc/photo-editor/image-watermark-2.jpg",  
			"/project-doc/photo-editor/image-watermark-3.jpg",  
			"/project-doc/photo-editor/text-watermark-1.jpg",  
			"/project-doc/photo-editor/text-watermark-2.jpg",  
			"/project-doc/photo-editor/zoom-in.jpg",  
			"/project-doc/photo-editor/zoom-out.jpg",  
			"/project-doc/photo-editor/dark-mode.jpg",  
			"/project-doc/photo-editor/light-mode.jpg",  
			"/project-doc/photo-editor/save.jpg",  
		 
  ],
  liveDemoUrl: "",
	codeUrl: "https://github.com/thappamkkumar/photo-editor",  
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "Java",
		"Swing",
		"AWT"
   
  ],
};

 


export const featureProps = [
		{
      category: '',
      features: [ 
				{
					title: 'Main Interface',
					description: 'A clean and functional photo editing workspace with toolbar controls and a canvas panel.',
					points: [
						"Top toolbar provides quick access to all editing tools and settings",
						"Side panel serves as the main canvas area for real-time image editing",
						"Toolbar buttons include: Select Image, Save, Canvas, Filters, Crop, Watermarks, and Zoom controls",
						"'More' button includes theme switching options (Dark/Light Mode)",
						"Designed for ease of use with intuitive layout and quick tool access",
					],
					image: '/project-doc/photo-editor/user-interface.jpg',
				},
				{
					title: 'Select Image',
					description: 'Import an image into the editor using the "Select Image" button from the toolbar.',
					points: [
						"Click the 'Select Image' button on the toolbar to begin",
						"A modal file picker opens allowing you to browse and choose any image file",
						"Supported formats include JPG, PNG, and JPEG",
						 
					],
					image: '/project-doc/photo-editor/select-image-1.jpg',
				},
				{
					title: 'Display Selected Image',
					description: 'After selecting an image, it is rendered directly onto the canvas area for editing.',
					points: [
						"The chosen image is instantly displayed on the canvas panel",
						"Canvas supports real-time visual feedback for all edits",
						"Users can now apply tools like crop, filters, zoom, and watermarking",
						 
					],
					image: '/project-doc/photo-editor/select-image-2.jpg',
				},
				{
					title: 'Canvas Editor',
					description: 'Access advanced editing controls like rotate, flip, and resize through the canvas editor panel.',
					points: [
						"Click the 'Canvas' button in the toolbar to open the canvas editor tools",
						"Rotate button allows  rotation of the image in either direction",
						"Flip image horizontally or vertically with one click",
						"Change image dimensions by specifying custom width and height values",
						"All actions are instantly reflected on the editing canvas",
					],
					image: '/project-doc/photo-editor/canvas.jpg',
				},
				{
					title: 'Rotate Image',
					description: 'Rotate your image easily in fixed increments using the canvas editor tools.',
					points: [
						"Click the 'Canvas' button in the toolbar to access rotation options",
						"Use the rotate button to rotate the image by 90 deg, 180 deg, or 270 deg",
						"Supports both clockwise and counterclockwise rotation",
						"Image orientation updates instantly on the panel",
						"Useful for correcting orientation of landscape or portrait images",
					],
					image: '/project-doc/photo-editor/rotate.jpg',
				},
				{
					title: 'Flip Image Horizontally',
					description: 'Mirror your image left-to-right using the horizontal flip feature in the canvas editor.',
					points: [
						"Access via the 'Canvas' button in the toolbar",
						"Click the horizontal flip icon to mirror the image across its vertical axis",
						"Commonly used for correcting selfies or mirrored text/images",
						"Applied in real time on the editing canvas",
						"Does not affect the image resolution or quality",
					],
					image: '/project-doc/photo-editor/horizontal-flip.jpg',
				},
				{
					title: 'Flip Image Vertically',
					description: 'Invert your image upside down by flipping it along the horizontal axis.',
					points: [
						"Available in the canvas editor after clicking the 'Canvas' button",
						"Vertically flips the image from top to bottom",
						"Useful for creative effects or correcting upside-down images",
						"Instant visual feedback on canvas after applying",
						"Image content remains intact and editable after flip",
					],
					image: '/project-doc/photo-editor/vertical-flip.jpg',
				},
				{
					title: 'Change Image Dimensions',
					description: 'Resize your image by entering custom width and height values directly in the canvas editor.',
					points: [
						"Click the 'Canvas' button in the toolbar to access dimension controls",
						"Enter new width and height in the input fields provided",
						"Click the 'Change' button to apply new dimensions to the image",
						"Supports both upscaling and downscaling of images",
						"Maintains image clarity while updating canvas size in real time",
					],
					image: '/project-doc/photo-editor/dimension-change.jpg',
				},
				{
					title: 'Apply Crop to Image',
					description: 'Finalize your crop selection to trim the image and remove unwanted areas.',
					points: [
						"After selecting the crop area, click the 'Yes' button on the right side",
						"The image is cropped to match the dimensions of the selected region",
						"Crop operation is performed without altering the image quality",
						"Canvas refreshes to show only the cropped portion",
						"Ensures a non-destructive workflow with a clean, focused result",
					],
					image: '/project-doc/photo-editor/crop-1.jpg',
				},
				{
					title: 'Cropped Image Display',
					description: 'Once cropped, the updated image is shown on the canvas with all editing tools still available.',
					points: [
						"The image now reflects the cropped area only",
						"Canvas resizes automatically to fit the new image dimensions",
						"All editing tools remain active for continued enhancement",
						"User can proceed to apply filters, rotate, add watermark, etc.",
						"Enhances visual clarity by removing distractions from the original image",
					],
					image: '/project-doc/photo-editor/crop-2.jpg',
				},
				{
					title: 'Choose Image Filter',
					description: 'Enhance the look of your photo by selecting from a range of predefined filters.',
					points: [
						"Click the 'Filter' button in the toolbar to open the filter panel",
						"A list of filters appears on the right side of the editor",
						"Filters include options like grayscale, sepia, invert, brightness, and more",
						"Hover over each filter to preview the effect live on the image",
						"Click on a filter to apply it instantly",
					],
					image: '/project-doc/photo-editor/filters-1.jpg',
				},
				{
					title: 'Filter Applied to Image',
					description: 'Once selected, the filter is applied directly to the image in real time.',
					points: [
						"The image on the canvas updates immediately with the chosen filter",
						"User can switch filters to preview and compare styles",
						"Applied filter remains active as user continues editing",
						"Preserves original resolution and dimensions",
						"Adds visual style and mood to the image with a single click",
					],
					image: '/project-doc/photo-editor/filters-2.jpg',
				},
				{
					title: 'Add Image Watermark',
					description: 'Embed an image as a watermark to protect your content or brand your photos.',
					points: [
						"Click the 'Image Watermark' button in the toolbar to open the image upload modal",
						"Select a watermark image (e.g., logo or icon) from your device",
						"The selected image is loaded on top of the canvas as a draggable element",
						 
					],
					image: '/project-doc/photo-editor/image-watermark-1.jpg',
				},
				{
					title: 'Resize & Position Watermark',
					description: 'Freely move and resize the watermark image over the main image before finalizing it.',
					points: [
						"Watermark image appears with a bounding box and corner handles",
						"Drag to reposition the watermark anywhere on the canvas",
						"Resize it using the corners to adjust scale proportionally",
						"Preview placement before applying to ensure it fits perfectly",
						"Prevents accidental distortions by locking aspect ratio during scaling",
					],
					image: '/project-doc/photo-editor/image-watermark-2.jpg',
				},
				{
					title: 'Apply Watermark to Image',
					description: 'Finalize the watermark placement by confirming with the Yes/No options.',
					points: [
						"Once the watermark image is placed and resized, two buttons appear: 'Yes' to apply, 'No' to cancel",
						"Clicking 'Yes' merges the watermark with the main image permanently",
						"Clicking 'No' removes the watermark and returns to the editor unchanged",
						"Prevents accidental overlays by requiring explicit confirmation",
						"After applying, editing can continue or the image can be saved/exported",
					],
					image: '/project-doc/photo-editor/image-watermark-2.jpg',
				},
				{
					title: 'Create Text Watermark',
					description: 'Add a customizable text watermark with full control over style and placement.',
					points: [
						"Click the 'Text Watermark' button in the toolbar to open the configuration panel",
						"Enter your watermark text in the input field",
						"Select font size, text color using the color picker, and font style ",
						"After setting up, click 'Yes' to proceed or 'No' to cancel",
						"Once confirmed, click anywhere on the image to place the watermark",
					],
					image: '/project-doc/photo-editor/text-watermark-1.jpg',
				},
				{
					title: 'Text Watermark Applied',
					description: 'The configured text watermark is added to the image at the chosen location.',
					points: [
						"The text appears exactly where the user clicked on the image",
						"Applies all selected styles including color, size, and font formatting",
						"The watermark becomes part of the image and is non-editable after placement",
						"Ensures professional branding or copyright labeling",
						"Further edits like filters or cropping can still be applied after this",
					],
					image: '/project-doc/photo-editor/text-watermark-2.jpg',
				},
				{
					title: 'Zoom In',
					description: 'Zoom into the image to view and edit fine details with precision.',
					points: [
						"Click the 'Zoom In' button on the top toolbar to enlarge the image view",
						"Allows closer inspection of image areas for accurate edits like cropping, watermarking, or filtering",
						"Does not affect the actual image resolution-only the canvas view",
						"Useful for pixel-level control when working on small elements",
					],
					image: '/project-doc/photo-editor/zoom-in.jpg',
				},
				{
					title: 'Zoom Out',
					description: 'Zoom out to view the image in its entirety and adjust your overall layout.',
					points: [
						"Click the 'Zoom Out' button in the toolbar to decrease the image zoom level",
						"Helpful for getting a full view after making detailed edits",
						"Ensures you maintain balance and alignment across the entire canvas",
						"Like Zoom In, this only adjusts the view, not the actual image size",
					],
					image: '/project-doc/photo-editor/zoom-out.jpg',
				},
				{
					title: 'Dark Mode',
					description: 'Switch to dark mode for a comfortable editing experience in low-light environments.',
					points: [
						"Click the 'More' button in the toolbar and select 'Dark Mode' from the dropdown",
						"Changes the interface background to darker tones to reduce eye strain",
						"Helpful for editing at night or in dimly lit rooms",
						"Improves visibility of bright image elements and provides contrast",
						"User preferences are retained until changed again",
					],
					image: '/project-doc/photo-editor/dark-mode.jpg',
				},
				{
					title: 'Light Mode',
					description: 'Switch back to light mode for a bright and clear editing workspace.',
					points: [
						"Accessed via the 'More' button dropdown in the top toolbar",
						"Restores the default bright UI theme suited for well-lit environments",
						"Ideal for general use and working during daytime",
						"Maintains consistent layout and functionality as in dark mode",
						"User can toggle between modes anytime based on preference",
					],
					image: '/project-doc/photo-editor/light-mode.jpg',
				},
				{
					title: 'Save Edited Image',
					description: 'Export your final image as a PNG file to a chosen location on your device.',
					points: [
						"Click the 'Save' button located in the top toolbar",
						"A modal window opens allowing the user to select a destination folder",
						"Prompt appears to enter a file name - image is saved as a `.png` file",
						"Ensures the edited image, including all transformations and watermarks, is preserved",
						"Simple and intuitive saving process with full user control over file naming and location",
					],
					image: '/project-doc/photo-editor/save.jpg',
				}


			]
		},
 
];		
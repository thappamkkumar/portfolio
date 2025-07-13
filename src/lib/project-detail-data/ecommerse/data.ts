// app/project-detail/multi-vendor-ecommerce/data.ts

export const heroProps = {
 title: "StyleLoop",
  tagline: "A sleek single-vendor eCommerce web app built with Laravel",
  titles: [
    "Single-vendor Online Store",
    "Built with Laravel + MySQL",
    "Product Management & Order Tracking",
    "Bootstrap UI, Custom CSS & JavaScript",
  ],
  images: [ 
		 "/project-doc/ecommerse/ecommerse-login-page.png",
		 "/project-doc/ecommerse/ecommerse-register-page.png",
		 "/project-doc/ecommerse/customer/home-page.png",
		 "/project-doc/ecommerse/customer/products-page.png",
		 "/project-doc/ecommerse/customer/product-detail-page.png",
		 "/project-doc/ecommerse/customer/place-order-verification-page.png",
		 "/project-doc/ecommerse/customer/category-page.png",
		 "/project-doc/ecommerse/customer/category-product-page.png",
		 "/project-doc/ecommerse/customer/products-search-page.png",
		 "/project-doc/ecommerse/customer/cart-page.png",
		 "/project-doc/ecommerse/customer/order-products-page.png",
		 "/project-doc/ecommerse/customer/profile-page.png",
		 "/project-doc/ecommerse/customer/profile-address-change-page.png",
		 "/project-doc/ecommerse/customer/profile-basic-detail-change-page.png",
		 "/project-doc/ecommerse/customer/profile-password-change-page.png",
		 "/project-doc/ecommerse/admin/dashboard-page.png",
		 "/project-doc/ecommerse/admin/user-list-page.png",
		 "/project-doc/ecommerse/admin/user-profile-page.png",
		 "/project-doc/ecommerse/admin/category-list-page.png",
		 "/project-doc/ecommerse/admin/category-detail-page.png",
		 "/project-doc/ecommerse/admin/brand-list-page.png",
		 "/project-doc/ecommerse/admin/brand-detail-page.png",
		 "/project-doc/ecommerse/admin/product-list-page.png",
		 "/project-doc/ecommerse/admin/product-search-page.png",
		 "/project-doc/ecommerse/admin/product-brand-filter-page.png",
		 "/project-doc/ecommerse/admin/product-category-filter-page.png",
		 "/project-doc/ecommerse/admin/product-detail-page.png",
		 "/project-doc/ecommerse/admin/product-update-page.png",
		 "/project-doc/ecommerse/admin/order-list-page.png",
		 "/project-doc/ecommerse/admin/order-detail-page.png",
		 "/project-doc/ecommerse/admin/transection-list-page.png",
		 "/project-doc/ecommerse/admin/transection-detail-page.png",
		 "/project-doc/ecommerse/admin/profile-page.png", 
		 
  ],
  liveDemoUrl: "https://your-live-demo.com",
  codeUrl: "https://github.com/your-repo/styleloop",
  scrollToId: "#overview",
};



export const techStackProps = {
  stack: [
    "Laravel",
    "MySQL",
    "Blade Templates",
    "CSS",
    "Bootstrap",
    "JavaScript", 
  ],
};

 


export const featureProps = [
		{
      category: 'Authentication & Access',
      features: [ 
					{
					title: 'Login Page',
					description: 'The login page provides secure access to the platform for both customers and administrators, ensuring only authorized users can manage or shop.',
					points: [
						"Customers and admins can log in using their registered email and password",
						"Includes a 'Remember Me' option to stay signed in across sessions",
						"Offers a 'Forgot Password' link for quick recovery",
						"Provides validation with clean and user-friendly error messages",
					],
					image: '/project-doc/ecommerse/ecommerse-login-page.png',
				},
				{
					title: 'Register Page',
					description: 'A secure and user-friendly registration page with role selection and email OTP verification.',
					points: [
					 
						'The form includes input fields for Full Name, Email, Mobile Number, and Password',
						'Client-side validations ensure required fields, valid email format, and password strength',
						'After submitting the form, a 6-digit OTP is sent to the user`s email address',
						'User must enter the OTP to verify their email and complete registration',
						'Error handling displays friendly messages for duplicate emails or OTP timeouts',
						'New accounts remain inactive until email verification is complete',
						'Secure password hashing and validations prevent duplicate accounts and spam'
					],
					image: '/project-doc/ecommerse/ecommerse-register-page.png',
				},
        {
          title: 'Logout Page',
          description: 'Secure logout mechanism with confirmation and feedback.',
					points: [
						'Accessible only when the user is logged in (Customer or Seller)',
						'Clears authentication tokens or cookies from the client side',
						'Optional confirmation prompt to prevent accidental logout',
						'Redirects the user to the login or home page after logout',
						'Handles edge cases like expired sessions gracefully',
					],
          image: '/project-doc/ecommerse/customer/logout-page.png',
        },
 
			],
			
			
			
		},
		
		//Customer
		{
      category: 'Customer',
      features: [
				{
					title: 'Home Page',
					description: 'The home page is designed to attract customers with featured content, product highlights, and a clean layout to encourage browsing and shopping.',
					points: [
						"Hero section with eye-catching banner and call-to-action",
						"Top Brands section showcasing featured fashion labels",
						"Special Offer section with promotional deals and discounts",
						"Featured Products grid with clean, responsive design",
						"Product cards include image, price, sale price (if applicable), and discount badge",
						"Quick-access Buy Now and Add to Cart buttons on each product",
					],
					image: '/project-doc/ecommerse/customer/home-page.png',
				}, 
				{
					title: 'Product Listing Page',
					description: 'Displays all available products in a paginated layout, allowing users to browse the catalog efficiently.',
					points: [
						"Grid layout showcasing product cards with image, name, and pricing details",
						"Supports sale price and discount display if applicable",
						"Pagination for navigating through large product collections",
						"Fully responsive layout with clean spacing and visual hierarchy",
						"Quick access to individual product detail pages",
					],
					image: '/project-doc/ecommerse/customer/products-page.png',
				},
				{
					title: 'Product Detail Page',
					description: 'Displays complete information and actions for a selected product.',
					points: [
						//   Main Section
						"Shows product images and name",
						"Displays total rating using stars (1 to 5)",
						"Shows sale price (if any), original price, and discount percentage",
						"Indicates stock status (Available or Out of Stock)",
						"Displays delivery charges",
						"Includes 'Add to Cart' and 'Buy Now' buttons (for logged-in customers only)",

						//   Product Specification Section
						"Lists all technical and key specifications",

						//   Description & Video Section
						"Shows detailed product description",
						"Embeds product video if available",

						//   Reviews & Ratings Section
						"If user hasn't reviewed, shows form to submit rating and review",
						"Displays list of reviews from other users",

						//   Similar Products
						"Displays similar or related products at the bottom"
					],
					image: '/project-doc/ecommerse/customer/product-detail-page.png',
				},
				{
					title: 'Place Order Page',
					description: 'Shows order summary, delivery address, and confirms order before payment.',
					points: [
						"Displays product name, quantity, price, GST, and delivery charges",
						"Calculates and displays the total payable amount",
						"Shows selected delivery address with a 'Change Address' button",
						"Includes a prominent 'Place Order' button to continue to payment"
					],
					image: '/project-doc/ecommerse/customer/place-order-verification-page.png',
				},
				{
					title: 'Change Delivery Address Page',
					description: 'Allows user to view, select, or change delivery address before confirming the order.',
					points: [					],
					image: '/project-doc/ecommerse/customer/place-order-verfication-address-change-page.png',
				},
				{
					title: 'Payment Page',
					description: 'Allows user to choose and complete the payment for the order.',
					points: [
						"User can select a payment method: UPI, Card, or Net Banking",
						"Secure input fields for respective payment details",
						"Includes a 'Pay Now' button to initiate payment process",
						"Validates payment data before submission"
					],
					image: '/project-doc/ecommerse/customer/plcae-order-payment-page.png',
				},
				{
					title: 'Order Response Page',
					description: 'Displays order confirmation status after payment.',
					points: [
						"Shows success message and order summary if payment is successful",
						"Displays failure message if payment is unsuccessful",
						"Provides option to go back to cart or retry payment on failure",
						"Includes 'Go to Orders' button to view all placed orders"
					],
					image: '/project-doc/ecommerse/customer/place-order-success-page.png',
				},
				{
					title: 'Category Page',
					description: 'Displays a list of all product categories for users to explore.',
					points: [
						"Shows all available product categories",
						"Clicking on a category navigates to its product listing page"
					],
					image: '/project-doc/ecommerse/customer/category-page.png',
				},
				{
					title: 'Category-wise Products Page',
					description: 'Displays products belonging to a selected category.',
					points: [
						"Displays all products of the selected category",
						"Supports pagination to navigate through products",
						 
					],
					image: '/project-doc/ecommerse/customer/category-product-page.png',
				},
				{
					title: 'Product Search Page',
					description: 'Allows users to search for products using keywords and view relevant results in a clean, paginated layout.',
					points: [
						"Search bar at the top for quick keyword-based product lookup",
						"Displays matched products in a grid format with consistent styling",
						"Supports pagination for large result sets",
						"Highlights product name, image, price, and discounts if available",
						"Responsive design ensures usability across devices",
					],
					image: '/project-doc/ecommerse/customer/products-search-page.png',
				},
				{
					title: 'Cart Page',
					description: 'Displays products added to the cart with quantity control and purchase options.',
					points: [
						"Displays list of products in the cart with pagination",
						"Each item shows: product name  linking to product detail and price ",
						"Quantity adjustment using '-' and '+' buttons",
						"Shows total price per product based on quantity",
						"Includes a 'Buy Now' button to proceed with product purchase",
						"Includes a 'Delete' button to remove product from the cart",
					],
					image: '/project-doc/ecommerse/customer/cart-page.png',
				},
				{
					title: 'Order Page',
					description: 'Displays a list of all products ordered by the user, along with order and payment details.',
					points: [
						"Lists all ordered products with pagination",
						"Each product card shows product image, name, and quantity ordered",
						"Displays the payment amount (what the user paid for that item)",
						"Shows current order status (e.g., Pending, Shipped, Delivered, Cancelled)",
						"Includes 'View Product' button to navigate to the detailed product page"
					],
					image: '/project-doc/ecommerse/customer/order-products-page.png',
				},
					{
					title: 'Customer Profile Page',
					description: 'Page where customers can view and manage their personal information and address.',
					points: [
						"Profile is divided into two main cards: Personal Info and Address",
						
						// Card 1: Personal Info
						"First card shows profile image (or placeholder), name, email, and phone number",
						"Includes buttons: 'Add Image' or 'Change Image' (based on if image exists)",
						"Includes 'Change Password' button - opens a modal or update box",
						"Includes 'Update Details' button to edit name, email, or phone - opens a modal",

						// Card 2: Address Info
						"Second card displays delivery address: Country, State, District, Pincode",
						"'Area, Street, Sector, Village' and 'Flat, House No., Building, Company' fields",
						"Includes 'Update Address' button - opens a modal to update address"
					],
					image: '/project-doc/ecommerse/customer/profile-page.png',
				},
				{
					title: 'Change Password Page',
					description: 'Page for changing account password securely.',
					points: [
						"Fields: Current Password, New Password, Confirm New Password",
						"Validates current password before accepting new one",
						"Ensures new password is strong and meets required format",
						"Both new password fields must match", 
					],
					image: '/project-doc/ecommerse/customer/profile-password-change-page.png',
				},
				{
					title: 'Update Basic Details Page',
					description: 'Page for updating customer profile details like name, email, and phone.',
					points: [
						"Pre-filled fields: Name, Email, Phone Number",
						"Email field is read-only, email change is not supported",
						"Contact number validated for correct format",
						"Updates button change user details and redirects to profile"
					],
					image: '/project-doc/ecommerse/customer/profile-basic-detail-change-page.png',
				},
				{
					title: 'Update Address Page',
					description: 'Page for customers to update their delivery address.',
					points: [
						"Pre-fills current address details if available",
						"Fields: Country, State, District, Pincode",
						"'Area, Street, Sector, Village' and 'Flat, House No., Building, Company'",
						"All fields have validation for empty or incorrect values",
						"Save button to update the address and return to the profile page"
					],
					image: '/project-doc/ecommerse/customer/profile-address-change-page.png',
				},
 
				
			]
		},
		
		
		// Admin
		{
      category: 'Admin',
      features: [
				{
					title: 'Dashboard Page',
					description: 'Provides a centralized overview of platform performance and key statistics for the admin.',
					points: [
						"Displays cards with total counts for: Users, Customers,    Products, Orders, and Transactions",
						"Each card shows the current total count and may include a small percentage or delta indicator for growth",
						"Growth charts (monthly, within a year) for: Users, Customers,   Products, and Orders",
						"Highcharts is used to visualize these growth trends in line or bar chart format",
						"Charts are interactive and allow the admin to hover for details",
						"Responsive layout that adapts to desktop and tablet views"
					],
					image: '/project-doc/ecommerse/admin/dashboard-page.png',
				},
				{
					title: 'Users Management Page',
					description: 'Allows admin to view, manage, and add users.',
					points: [
						"Displays a paginated table of all registered users ",
						"Each row includes: Name, Email,  and action buttons",
						"Includes a search bar to search users by name or email", 
						"Action buttons to: View Detail",
						"User-friendly messages for actions performed (e.g. 'User blocked successfully')",
						"Includes an 'Add User' button at the top",
						
					],
					image: '/project-doc/ecommerse/admin/user-list-page.png',
				},
				{
					title: 'Add New User Page ',
					description: 'Allows the admin to manually create a new user with predefined role.',
					points: [
						"Accessible from the Users Management page by clicking the 'Add User' button",
						"Presents a form to input user details",
						"Fields include:", 
						"  - Email: Must be unique and valid",
						"  - Password: Minimum character requirements with validation",
						"Validates email and password format before submission",
						"Shows error messages if the user already exists or inputs are invalid",
						"On successful creation, redirects back to the Users Management page with success message",
						"Admin-created users can later update their profile details after login"
					],
					image: '/project-doc/ecommerse/admin/user-add-new-page.png',
				},
				{
					title: 'User Detail/Profile Page ',
					description: 'Admin can view and update individual user details, including profile status and image.',
					points: [
						"Top section displays user's profile image with two buttons:",
						"   - Change Image",
						"   - Activate / Deactivate User (based on current status)",
						"Below image, detailed user info shown in input fields:",
						" - Full Name",
						" - Email",
						" - Phone Number",
						" - Country",
						" - State",
						" - City",
						" - Pincode",
						" - Landmark ",
						" - Address Line 1 (Area, Street, Sector, Village)",
						" - Address Line 2 (Flat, House No., Building, Company)",
						"All fields are editable to allow admin to update user data",
						"'Update' button at the bottom to save changes",
						"Visual cues for active/inactive status (e.g., badge or label)"
					],
					image: '/project-doc/ecommerse/admin/user-profile-page.png',
				},
				{
					title: 'Category List Page',
					description: 'Admin can view all platform-wide categories, manage them, and add new categories to the system.',
					points: [
						"Page heading: 'Category List'",
						"Displays summary stats above the list:",
						"   - Showing = [number of categories on current page]",
						"   - Total = [total categories in database]",
						"   - Page = [current] / [total pages]",
						"'Add New Category' button allows admin to add a new category to the platform",
						"Category table includes columns like:",
						" - Category Name",
						" - Slug",
						" - GST",
						" - Total Products",	
						"Pagination controls at bottom with 'Prev' and 'Next' buttons",
						"Data is paginated and dynamically updates based on page navigation"
					],
					image: '/project-doc/ecommerse/admin/category-list-page.png',
				},
				{
					title: "Add New Category Page ",
					description: "Allows admin to add a new product category to the platform.",
					points: [
						"Page heading: 'Add New Category'",
						"Contains a form with the following input fields:",
						" - Name: Category name (required)",
						" - Slug: URL-friendly identifier",
						" - GST: GST percentage for the category (e.g., 5%, 12%, etc.)",
						"'Submit' button to add the category to the system",
						"Proper validation for all input fields (e.g., unique slug, required name)",
						"Shows success message on successful creation and error message on failure",
					],
					image: "/project-doc/ecommerse/admin/category-add-new.png",
				},
				{
					title: 'Category Detail & Update Page ',
					description: 'Allows admin to view and update details of a specific category, and access related products.',
					points: [
						"Page starts with an 'Activate / Deactivate' toggle button to control category visibility",
						"'Products' button that navigates to the product list filtered by this category",
						"Below that, a form with input fields for editing category details:",
						" - Name: Editable field for category name",
						" - Slug: Editable slug (URL-friendly string)",
						" - GST: Editable GST percentage (tax rate applied)",
						"'Update' button to save changes to the category",
						"Input fields are pre-filled with existing data",
						"Includes validation and success/error messages on update",
						"Admin can easily manage category attributes without switching pages"
					],
					image: '/project-doc/ecommerse/admin/category-detail-page.png',
				},
				{
					title: 'Brand List Page',
					description: 'Admin can view all brands, manage them, and add new brands to the system.',
					points: [
						"Page heading: 'Brand List'",
						"Displays summary stats above the list:",
						"   - Showing = [number of brands on current page]",
						"   - Total = [total brands in database]",
						"   - Page = [current] / [total pages]",
						"'Add New brand' button allows admin to add a new brand to the platform",
						"brand table includes columns like:",
						" - Name", 
						" - Total Products",	
						"Pagination controls at bottom with 'Prev' and 'Next' buttons",
						"Data is paginated and dynamically updates based on page navigation"
					],
					image: '/project-doc/ecommerse/admin/brand-list-page.png',
				},
				{
					title: "Add New Brand Page ",
					description: "Allows admin to add a new brand to the platform.",
					points: [
						"Page heading: 'Add New Brand'",
						"Contains a form with the following input fields:",
						" - Brand Name",
						" - Logo/Image ", 
						"'Submit' button to add the brand to the system",
						 
						"Shows success message on successful creation and error message on failure",
					],
					image: "/project-doc/ecommerse/admin/brand-add-new-page.png",
				},
				{
					title: 'Brand Detail & Update Page ',
					description: 'Allows admin to view and update details of a specific brand, and access related products.',
					points: [
						"Change logo/image button to change image.",
						"'Activate / Deactivate' toggle button to control brand visibility",
						"'Products' button that navigates to the product list filtered by this brand",
						"Below that, a form with input fields for editing brand details:",
						" - Name: Editable field for brand name", 
						"'Update' button to save changes to the brand",
						"Input fields are pre-filled with existing data",
						"Includes validation and success/error messages on update",
						"Admin can easily manage brand attributes without switching pages"
					],
					image: '/project-doc/ecommerse/admin/brand-detail-page.png',
				},
				{
					title: 'Product List Page',
					description: 'Displays a complete list of all products in the system with filtering and search capabilities.',
					points: [
						"Page starts with a search bar to find products by name",
						"Next to the search bar is a filter button which opens options to filter by:",
						" - Brands (dropdown list of all brands)",
						" - Category (dropdown list of all categories)",
					
						"Product list displayed in table format with columns:",
						" - Product Name",
						" - Brand Name",
						" - Category", 
						" - Price",
						" - Discount",
						" - 'More' button to view detailed information or take actions",
						"Includes pagination with details like Showing=X, Total=Y, Page=A / B",
						"Admin can manage, view or trace each product entry efficiently"
					],
					image: '/project-doc/ecommerse/admin/product-list-page.png',
				},
				{
					title: 'Search Product Page ',
					description: 'Allows admin to search products quickly using a dedicated input field.',
					points: [
						"Page contains a single search input field at the top",
						"Admin can enter a product name or keyword to search",
						"Displays list of matching products below the input",
						"Each result includes key product info: Name, Brand Name, Category, Price, Discount",
						"Includes pagination for large result sets",
						"Each row includes a 'More' button to view product details or actions"
					],
					image: '/project-doc/ecommerse/admin/product-search-page.png',
				},
				{
					title: 'Brand Filter Page',
					description: 'Allows admin to filter products by selecting a brand from the dropdown.',
					points: [
						"Page includes a 'Brand' filter button with dropdown",
						"Dropdown lists  brands",
						"Admin can select a brand to view only their listed products",
						"Upon selection, the product list updates to show relevant products",
						"Pagination is maintained for filtered results",
					],
					image: '/project-doc/ecommerse/admin/product-brand-filter-page.png',
				},
				{
					title: 'Category Filter Page',
					description: 'Enables admin to filter products by selecting a specific category.',
					points: [
						"Page includes a 'Category' filter button with dropdown",
						"Dropdown displays all available product categories",
						"Admin selects a category to view only products under that category",
						"Product list updates dynamically after selection",
						"Helps admin focus on specific product types efficiently"
					],
					image: '/project-doc/ecommerse/admin/product-category-filter-page.png',
				},
				{
					title: 'Add New Product Page',
					description: 'Allows admin to add a new product to their store by filling in all required product details.',
					points: [
						"Page starts with a heading like 'New Product'",
						"Includes a dropdown to select a category ",
						"Fields for product name, slug, and description",
						"Price input field and optional sale price field",
						"Stock quantity field to manage availability", 
						"File uploader for product thumbnail",
						"File uploader for multiple product images",
						"Video upload or YouTube video link input",
						"Specification section (key-value input pairs for technical/product details)",
						"Full description section with rich text editor", 
						"Submit (Save) button to add the product to the vendor's product list", 
					],
					image: '/project-doc/ecommerse/admin/product-add-new-page.png',
				},
				{
					title: 'Product Detail Page',
					description: 'Provides full information and controls for managing a single product, including status toggling and reviewing customer interactions.',
					points: [
						"**Top section** includes: product thumbnail and buttons to **Activate** or **Deactivate** the product",
						"**Image Gallery** showing all uploaded product images",
						"**Basic Product Details**: name, category, seller name, sale price, original price, discount (%)",
						"**Product Video Section**: embedded player for viewing uploaded product demo or showcase video",
						"**Description Section**: full product description in text or rich format",
						"**Specifications Section**: displays all technical or feature specifications of the product",
						"**Review and Rating Section**: shows average rating (1 to 5 stars), customer reviews with feedback and names",
						"Used for deep inspection and moderation of product information and customer sentiment"
					],
					image: '/project-doc/ecommerse/admin/product-detail-page.png',
				},
				{
					title: 'Product Update Page',
					description: 'Allows the admin to edit and update all information related to a specific product.',
					points: [
						"Page pre-fills all current product data for editing",
						"Editable fields include: Product Name, Category (dropdown), Slug, Price, Sale Price ",
						"Stock quantity input for inventory control",
						"Image uploaders for changing the Thumbnail and additional product Images",
						"Textarea or rich editor for Short Description and Full Description",
						"Section to update embedded Product Video (via URL )",
						"Specification section with structured key-value inputs for technical/product details", 
						"Update button to apply changes"
					],
					image: '/project-doc/ecommerse/admin/product-update-page.png',
				},
				{
					title: 'Order List Page',
					description: 'Displays a paginated list of orders received by the admin in a tabular format.',
					points: [
						"Heading: 'Order List'",
						"Paginated table layout for better organization and performance",
						"Columns include: Order Id, User Name, Product Name, Quantity ",
						"Each row has a 'More' button to navigate to the order detail page",
						"Supports pagination with controls and status like: Showing=10, Total=50 Orders, Page=1 / 5"
					],
					image: '/project-doc/ecommerse/admin/order-list-page.png',
				},
				{
					title: 'Order Detail Page',
					description: "Displays full details of a specific order placed by a user.",
					points: [
						"Displays Order ID at the top",
						"Product Name associated with the order",
						"Customer/User Name who placed the order",
						"Complete Delivery Address including all address fields",
						"Price of the product",
						"Delivery Charges applied",
						"GST amount calculated",
						"Ordered Quantity",
						"Order Status (e.g., Pending, Shipped, Delivered, Cancelled)",
						"Order Date when the order was placed"
					],
					image: '/project-doc/ecommerse/admin/order-detail-page.png',
				},
				{
					title: 'Transaction List Page ',
					description: 'Displays a list of all transactions made by user during product purchases.',
					points: [
						"Top search bar to filter transactions by username, product",
						"Transaction data is displayed in a tabular format with the following columns:",
						" - Username (Customer who made the transaction)",
						" - Product Name (Product for which transaction was done)",
						" - Amount paid",
						" - Status (e.g., completed, Failed, Pending)",
						" - More button to view detailed transaction information"
					],
					image: '/project-doc/ecommerse/admin/transection-list-page.png',
				},
				{
					title: 'Transaction Detail Page ',
					description: 'Shows full details of a specific transaction made by a customer.',
					points: [
						"Displays detailed information related to the selected transaction, including:",
						" - Order ID (associated order)",
						" - User Name (customer who made the transaction)",
						" - Product Name (purchased product)",
						" - Transaction ID (unique payment identifier)",
						" - Status (Success, Failed, or Pending)",
						" - Amount paid by the user",
						" - Payment Method (e.g., UPI, Card, Net Banking)",
						" - Date & Time of transaction",
						" - Delivery Address (from related order, for context)",
						"Provides clear visibility of transaction data for administrative review"
					],
					image: '/project-doc/ecommerse/admin/transection-detail-page.png',
				},
				{
					title: 'Admin Profile Page',
					description: 'Page for viewing and updating admin settings including contact, branding, and integration information.',
					points: [
						"Admin can view and update their platform's core settings and profile information.",
						"Form fields for Website Name, Email, Mobile Number, and Address.",
						"Social Media Links for platforms like Facebook, Instagram, Youtube, etc.",
						"Section for Payment Gateway Details.",
						"Option to Change Password with validation for old password and new password inputs.",
						"Update buttons available for each section to save changes independently.",
						"UI optimized for quick admin configuration and secure data management.",
					],
					image: '/project-doc/ecommerse/admin/profile-page.png',
				}
				
				
			]
		},
];		
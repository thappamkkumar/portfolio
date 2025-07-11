// app/project-detail/multi-vendor-ecommerce/data.ts

export const heroProps = {
  title: "ShopHub",
  tagline: "A powerful multi-vendor eCommerce web app built with Laravel",
  titles: [
    "Multi-vendor Marketplace",
    "Built with Laravel + MySQL",
    "Admin, Vendor & Customer Roles",
    "Bootstrap, JS, Auth, Dashboard",
  ],
  images: [
    "/project-doc/multi-vendor-ecommerse/login-page.png",
    "/project-doc/multi-vendor-ecommerse/register-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/home-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-list-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-search-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-detail-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/place-order-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/categories-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/category-product-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/cart-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/order-list-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/profile-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/logout-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/dashboard-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/category-list-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/product-list-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/product-add-new-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/order-list-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/payment-list-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/profile-page.png",
    "/project-doc/multi-vendor-ecommerse/vendor/logout-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/dashboard-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/user-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/category-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/product-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/order-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/transection-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/payment-list-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/profile-page.png",
    "/project-doc/multi-vendor-ecommerse/admin/logout-page.png",
  ],
  liveDemoUrl: "https://your-live-demo.com",
  codeUrl: "https://github.com/your-repo/shophub",
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
		// Authentication & Access
		{
      category: 'Authentication & Access',
      features: [
        {
          title: 'Login Page',
          description: ' The login page provides secure access to the platform for all user types-customers, vendors, and administrators.',
					points: [
						"Users can log in using their registered email and password",
						"Includes a 'Remember Me' checkbox to maintain login sessions",
						"Offers a 'Sign Up' link for users who don't have an account",
						"Validates credentials with user-friendly error messages",
					],
          image: '/project-doc/multi-vendor-ecommerse/login-page.png',
        },
        {
          title: 'Register Page',
					description: 'A secure and user-friendly registration page with role selection and email OTP verification.',
					points: [
						'Users can choose between "Customer" or "Seller" roles during registration',
						'The form includes input fields for Full Name, Email, Mobile Number, and Password',
						'Client-side validations ensure required fields, valid email format, and password strength',
						'After submitting the form, a 6-digit OTP is sent to the user`s email address',
						'User must enter the OTP to verify their email and complete registration',
						'Error handling displays friendly messages for duplicate emails or OTP timeouts',
						'New accounts remain inactive until email verification is complete',
						'Secure password hashing and API validations prevent duplicate accounts and spam'
					],
          image: '/project-doc/multi-vendor-ecommerse/register-page.png',
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
          image: '/project-doc/multi-vendor-ecommerse/customer/logout-page.png',
        },
			  
			],
    },
   
		//Customer
		{
      category: 'Customer',
      features: [
				{
					title: 'Home Page',
					description: 'Landing page displaying promotional content, featured deals, and latest products.',
					points: [
							// Hero Section
							"Hero section with heading: 'All Type Of Products Are Available Under Best Price.'",
							"Subheading: 'SALE UPTO 50% OFF.'",
							"Call-to-action button labeled 'Shop Now'",

							// Special Offer Section
							"Special Offer section showcasing discounted products",
							"Each product displays: image, name, sale price, original price, and discount (if any)",

							// Featured Products Section
							"Feature Product section showing newly added items",
							"Each product shows: image, name, sale price (if any), and original price",
							"Includes 'Buy Now' and 'Add to Cart' buttons-only visible to logged-in customers"
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/home-page.png',
				},
				{
					title: 'Product Page',
					description: 'Displays a list of products with search and pagination.',
					points: [
						"Shows a list of newly added products",
						"Includes a search bar to filter products by name",
						"Supports pagination to navigate through multiple product pages",
					 
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/product-list-page.png',
				},
				{
					title: 'Product Search Page',
					description: 'Displays search results based on user input with pagination.',
					points: [
						"Lists products that match the user's search query",
						"Retains the search term in the search bar for reference",
						"Supports pagination for navigating large result sets",
						 
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/product-search-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/product-detail-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/place-order-page.png',
				},
				{
					title: 'Change Delivery Address Page',
					description: 'Allows user to view, select, or change delivery address before confirming the order.',
					points: [					],
					image: '/project-doc/multi-vendor-ecommerse/customer/place-order-address-change-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/place-order-payment-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/place-order-response.png',
				},
				{
					title: 'Category Page',
					description: 'Displays a list of all product categories for users to explore.',
					points: [
						"Shows all available product categories",
						"Each category is represented with an image and name",
						"Clicking on a category navigates to its product listing page"
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/categories-page.png',
				},
				{
					title: 'Category-wise Products Page',
					description: 'Displays products belonging to a selected category.',
					points: [
						"Displays all products of the selected category",
						"Supports pagination to navigate through products",
						 
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/category-products-page.png',
				},
				{
					title: 'Cart Page',
					description: 'Displays products added to the cart with quantity control and purchase options.',
					points: [
						"Displays list of products in the cart with pagination",
						"Each item shows: product name, price, and a 'Detail' button linking to product detail",
						"Quantity adjustment using '-' and '+' buttons",
						"Shows total price per product based on quantity",
						"Includes a 'Buy' button to proceed with product purchase",
						"Includes a 'Delete' button to remove product from the cart",
					],
					image: '/project-doc/multi-vendor-ecommerse/customer/cart-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/order-list-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/profile-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/profile-change-password-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/profile-update-basic-detail-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/customer/profile-update-address-page.png',
				},


			],
    },
     
		
		//Vendor or Seller
		{
      category: 'Vendor',
      features: [
				{
					title: 'Dashboard Page',
					description: 'Landing page for vendors to get an overview of their activity.',
					points: [
						"Displays total number of products uploaded by the vendor",
						"Shows total number of orders received",
						"Shows total payments received for completed orders",
						"Each card is clickable to navigate to the relevant detailed section (Products, Orders, Payments)",
						"Clean and minimal UI with real-time data updates"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/dashboard-page.png',
				},
				{
					title: 'Categories Page',
					description: 'Page to view and manage categories allowed by admin.',
					points: [
						"Displays heading: 'Category List'",
						"Shows summary info: Showing = [number of categories shown], Total = [total categories], Page = [current page] / [total pages]",
						"Includes a button to 'Add New Category' from the list of admin-approved categories",
						"Lists available categories with basic info like name, GST, total products and a 'Remove' button to delete it from vendor's list",
						"Pagination controls with 'Next' and 'Previous' buttons to navigate between pages"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/category-list-page.png',
				},
				{
					title: 'Add New Category Page',
					description: 'Popup interface for vendors to select and add categories from the admin-approved list.',
					points: [
						"Triggered by 'Add New Category' button on the Vendor Category List page",
						"Opens a popup/modal displaying a scrollable list of available categories from the admin",
						"Each category in the list has a checkbox or 'Select' button",
						"Vendor can select one or multiple categories to add",
						"Includes 'Cancel' buttons at the bottom and top of the modal to close",
						"On successful add, selected categories appear in the vendor's category list"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/category-add-new-page.png',
				},
				{
					title: 'Product List Page',
					description: 'Displays all products added by the vendor with controls for managing products.',
					points: [
						"Page starts with a heading like 'Product List'",
						"Top section includes:",
						" - Add New Product button (navigates to product creation page)",
						" - Category filter dropdown to filter by selected category",
						" - Search bar to find products by name or keyword",
						"Product list displayed in table or card format",
						"Each product row includes:",
						" - Product Name",
						" - Category",
						" - Slug (URL-friendly identifier)",
						" - Price",
						" - Discount (if any)",
						" - 'More' button for navigate to detail",
						"Pagination controls at the bottom (Next / Previous)",
						"Pagination info shown above the list: e.g., Showing=10, Total=10 products, Page=1 / 1"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-list-page.png',
				},
				{
					title: 'Product Search Page',
					description: 'A dedicated page for vendors to search their products using keywords.',
					points: [
						"Top of the page includes a single input field for searching products",
						"Vendors can search using product name, slug, or relevant keywords",
						"Below the search bar, results are displayed in a tabular layout",
						"Each product row includes: Name, Category, Slug, Price, Discount, More button",
						"Pagination controls are available at the bottom to navigate between pages",
						"Displays pagination info: Showing=10, Total=XX products, Page=X / Y"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-search-page.png',
				},
				{
					title: 'Filter Products by Category Page',
					description: 'Vendors can filter their product listings by selecting a category from their assigned category list.',
					points: [
						"Page includes a filter button or dropdown labeled 'Categories'.",
						"When clicked, it opens a modal or dropdown box with list of categories selected by the vendor.",
						"Vendor can select any category from the list.",
						"Upon selection, the product list dynamically updates to show only products under the selected category.",
						"Each filtered product row includes: Name, Category, Slug, Price, Discount, More button.",
						"Pagination and count indicators are updated accordingly: Showing=X, Total=Y, Page=A / B."
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-filter-category-list-page.png',
				},
				{
					title: 'Filtered Product List Page',
					description: 'Displays all products associated with the category selected by the vendor.',
					points: [
						"This page shows a list of all products under the selected category", 
						"Each product row includes: Name, Category, Slug, Price, Discount, and More button",
						"Search bar is available to further refine products by name or keyword",
						"Pagination is implemented with indicators: Showing=X, Total=Y, Page=A / B",
						"If no products are found in the selected category, a 'No products found' message is displayed"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-filter-by-category-page.png',
				},
				{
					title: 'Add New Product Page',
					description: 'Allows vendors to add a new product to their store by filling in all required product details.',
					points: [
						"Page starts with a heading like 'New Product'",
						"Includes a dropdown to select a category (from vendor's approved categories)",
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
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-add-new-page.png',
				},
				{
					title: 'Product Detail Page',
					description: 'Displays complete information of a single product with actions to manage and update it.',
					points: [
						"Top section has action buttons: 'Activate', 'Deactivate', and 'Update'",
						"Product thumbnail displayed next to the buttons",
						"Gallery of additional product images shown after thumbnail",
						'To view thumbnail and images click on it',
						"Next section includes all basic product details: Name, Category, Slug, Price, Sale Price, Discount %, and Stock",
						"Then comes the Description section: short and full product descriptions",
						"Followed by Product Video if available (embedded player  )",
						"After that is the Specification section showing structured technical/product data", 
						"Status label shows whether the product is currently Active or Inactive"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-detail-page.png',
				},
				{
					title: 'Product Update Page',
					description: 'Allows the vendor to edit and update all information related to a specific product.',
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
					image: '/project-doc/multi-vendor-ecommerse/vendor/product-detail-update-page.png',
				},
				{
					title: 'Order List Page',
					description: 'Displays a paginated list of orders received by the vendor in a tabular format.',
					points: [
						"Heading: 'Order List'",
						"Paginated table layout for better organization and performance",
						"Columns include: Order Number, Customer Name, Product Name, Quantity, Order Date",
						"Each row has a 'More' button to navigate to the order detail page",
						"Supports pagination with controls and status like: Showing=10, Total=50 Orders, Page=1 / 5"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/order-list-page.png',
				},
				{
					title: 'Order Detail Page',
					description: "Displays full details of a specific order placed by a customer for the vendor's product.",
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
					image: '/project-doc/multi-vendor-ecommerse/vendor/order-detail-page.png',
				},
				{
					title: 'Payment List Page (Vendor)',
					description: 'Displays the list of payments sent by the admin to the vendor for completed orders.',
					points: [
						"Shows a table of all completed payments",
						"Each row contains the Order ID linked to the payment",
						"Displays the total Amount paid for the order",
						"Shows the Date when the payment was made by the admin",
						"Includes pagination to navigate through payment history"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/payment-list-page.png',
				},
				{
					title: 'Profile Page',
					description: 'Allows the vendor to view and update their profile, business, and payment information.',
					points: [
						"**Profile Section**",
						"Displays vendor's profile image or logo",
						"Shows name, email, and phone number",
						"Includes buttons to update image/logo and change password",

						"**Basic Business Details**",
						"Includes fields: Name, Brand Name, GSTIN",
						"Location fields: Country, State, City, Pincode, Landmark",
						"Update button to modify business and location details",

						"**Payment Details Section**",
						"Contains bank or payment details for receiving payments",
						"Includes update button to edit payment information"
					],
					image: '/project-doc/multi-vendor-ecommerse/vendor/profile-page.png',
				}








				


				


			],
		}


  ]
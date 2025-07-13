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
    "/project-doc/multi-vendor-ecommerse/customer/category-products-page.png",
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
    "/project-doc/multi-vendor-ecommerse/admin/transaction-list-page.png",
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
						'Secure password hashing and  validations prevent duplicate accounts and spam'
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
		},

		
		// Admin
		{
      category: 'Admin',
      features: [
				{
					title: 'Dashboard Page',
					description: 'Provides a centralized overview of platform performance and key statistics for the admin.',
					points: [
						"Displays cards with total counts for: Users, Customers, Vendors, Products, Orders, and Payments",
						"Each card shows the current total count and may include a small percentage or delta indicator for growth",
						"Growth charts (monthly, within a year) for: Users, Customers, Vendors, Products, and Orders",
						"Highcharts is used to visualize these growth trends in line or bar chart format",
						"Charts are interactive and allow the admin to hover for details",
						"Responsive layout that adapts to desktop and tablet views"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/dashboard-page.png',
				},
				{
					title: 'Users Management Page',
					description: 'Allows admin to view, manage, and add users (customers or sellers).',
					points: [
						"Displays a paginated table of all registered users (customers and sellers)",
						"Each row includes: Name, Email, Role (Customer/Seller), and action buttons",
						"Includes a search bar to search users by name or email",
						"Filter option to view only Customers, Sellers, or All Users",
						"Action buttons to: View Detail",
						"User-friendly messages for actions performed (e.g. 'User blocked successfully')",
						"Includes an 'Add User' button at the top",
						
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/user-list-page.png',
				},
				{
					title: 'Add New User Page ',
					description: 'Allows the admin to manually create a new user with predefined role.',
					points: [
						"Accessible from the Users Management page by clicking the 'Add User' button",
						"Presents a form to input user details",
						"Fields include:",
						"  - Role: Select either 'Customer' or 'Seller'",
						"  - Email: Must be unique and valid",
						"  - Password: Minimum character requirements with validation",
						"Validates email and password format before submission",
						"Shows error messages if the user already exists or inputs are invalid",
						"On successful creation, redirects back to the Users Management page with success message",
						"Admin-created users can later update their profile details after login"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/user-add-new-page.png',
				},
				{
					title: 'Search User Page ',
					description: 'Allows the admin to search for users by email or role to manage them efficiently.',
					points: [
						"Includes a search input field to find users by email or partial match", 
						"Displays a list/table of matching users with key details:",
						"  - Name (if available)",
						"  - Email",
						"  - Role (Customer or Seller)", 
						"Each result row includes action buttons:",
						"   - View / Manage User",
						"Supports pagination for large result sets",
						"Displays 'No results found' message if query returns no users",
						"Includes total results count and current page info"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/user-search-page.png',
				},
				{
					title: 'Customer List Page  ',
					description: 'Displays a filtered list of all registered customers in the system.',
					points: [
						"Navigated from main user list by clicking 'Customers' filter button",
						"Shows only users with role = Customer",
						"Displays list/table of customers with key columns:",
						"   - Name",
						"   - Email",
						"   - Role",
						"   - More",
						"Each row has actions:",
						"   - View / Manage Customer", 
						"Pagination support for large user sets",
						"Displays: Showing=X, Total=Y Customers, Page=N / M",
						"Includes search bar to find customers by email"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/users-filter-by-customer-page.png',
				},
				{
					title: 'Seller List Page  ',
					description: 'Displays a filtered list of all registered vendors or sellers.',
					points: [
						"Navigated from main user list by clicking 'Sellers' filter button",
						"Shows only users with role = Seller/Vendor",
						"Displays list/table of sellers with key columns:",
						" - Name",
						" - Email",
						" - Role",
						" - More",
						"Each row has actions:",
						" - View / Manage Sellers",
						" - Delete Vendor",
						"Pagination support for large sellers lists",
						"Displays: Showing=X, Total=Y sellers, Page=N / M",
						"Includes search bar to find sellers by email"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/users-filter-by-vendor-page.png',
				},
				{
					title: 'Customer Detail/Profile Page ',
					description: 'Admin can view and update individual customer details, including profile status and image.',
					points: [
						"Top section displays customer's profile image with two buttons:",
						"   - Change Image",
						"   - Activate / Deactivate Customer (based on current status)",
						"Below image, detailed customer info shown in input fields:",
						" - Full Name",
						" - Email",
						" - Phone Number",
						" - Country",
						" - State",
						" - City",
						" - Pincode",
						" - Address Line 1 (Area, Street, Sector, Village)",
						" - Address Line 2 (Flat, House No., Building, Company)",
						"All fields are editable to allow admin to update customer data",
						"'Update' button at the bottom to save changes",
						"Visual cues for active/inactive status (e.g., badge or label)"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/user-customer-profile-page.png',
				},
				{
					title: 'Seller (Vendor) Detail/Profile Page',
					description: 'Admin can view and update seller details including business and payment information, and manage their account status.',
					points: [
						"Top section displays seller's logo or profile image with buttons:",
						" - Change Logo/Image",
						" - Activate / Deactivate Seller (based on current status)",
						"Below image, detailed seller information shown in editable input fields:",
						" - Name",
						" - Email",
						" - Phone Number",
						" - Brand Name",
						" - GSTIN",
						" - Country",
						" - State",
						" - City",
						" - Pincode",
						" - Landmark",
						"Payment details section for payout preferences (e.g., UPI ID, Bank Info)",
						"All fields are editable, enabling admin to update seller profile data",
						"'Update' button at bottom of each section to save changes",
						"Visual badge or label to indicate current status (Active/Inactive)"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/user-vendor-profile-page.png',
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
						" - Remove/Delete Button for each row",
						"Pagination controls at bottom with 'Prev' and 'Next' buttons",
						"Data is paginated and dynamically updates based on page navigation"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/category-list-page.png',
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
					image: "/project-doc/multi-vendor-ecommerse/admin/category-add-new-page.png",
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
					image: '/project-doc/multi-vendor-ecommerse/admin/category-detail-page.png',
				},
				{
					title: 'Product List Page',
					description: 'Displays a complete list of all products in the system with filtering and search capabilities.',
					points: [
						"Page starts with a search bar to find products by name",
						"Next to the search bar is a filter button which opens options to filter by:",
						" - Category (dropdown list of all categories)",
						" - Seller (dropdown list of all registered sellers)",
						"Product list displayed in table format with columns:",
						" - Product Name",
						" - Category",
						" - Seller Name",
						" - Price",
						" - Discount",
						" - 'More' button to view detailed information or take actions",
						"Includes pagination with details like Showing=X, Total=Y, Page=A / B",
						"Admin can manage, view or trace each product entry efficiently"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/product-list-page.png',
				},
				{
					title: 'Search Product Page ',
					description: 'Allows admin to search products quickly using a dedicated input field.',
					points: [
						"Page contains a single search input field at the top",
						"Admin can enter a product name or keyword to search",
						"Displays list of matching products below the input",
						"Each result includes key product info: Name, Category, Seller, Price, Discount",
						"Includes pagination for large result sets",
						"Each row includes a 'More' button to view product details or actions"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/product-search-page.png',
				},
				{
					title: 'Seller Filter Page',
					description: 'Allows admin to filter products by selecting a seller from the dropdown.',
					points: [
						"Page includes a 'Seller' filter button with dropdown",
						"Dropdown lists all registered sellers",
						"Admin can select a seller to view only their listed products",
						"Upon selection, the product list updates to show relevant products",
						"Pagination is maintained for filtered results",
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/product-filter-seller-list-page.png',
				},
				{
					title: 'Filtered Product List by Seller',
					description: 'Displays products uploaded by the selected seller after applying the seller filter.',
					points: [
						"Shows list of products related only to the selected seller",
						"Retains the same structure and layout as the main product list page",
						"All product details are shown: name, category, seller name, price, discount, and 'More' button",
						"Search bar and category filter remain usable",
						"Includes pagination to navigate through filtered results",
						"Useful for reviewing or managing a specific seller's products"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/product-filter-by-seller-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/admin/product-filter-category-list-page.png',
				},
				{
					title: 'Filtered Product List by Category  ',
					description: 'Displays all products under a selected category after applying the category filter.',
					points: [
						"Shows only the products belonging to the selected category",
						"Layout is same as main product list page with search bar and seller filter still accessible",
						"Each product row includes name, category, seller name, price, discount, and more button",
						"Pagination allows browsing through category-specific product list",
						"Helps admin focus on products of a specific type or section",
						"Effective for monitoring category-based inventory"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/product-filter-by-category-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/admin/product-detail-page.png',
				},
				{
					title: 'Order List Page)',
					description: 'Displays a paginated list of all orders placed by customers with quick access to details.',
					points: [
						"Page starts with a Search Bar at the top to search orders by customer name, product, or order ID",
						"Orders are listed in a tabular format with the following columns:",
						" - Order ID",
						" - Customer Name",
						" - Product Name",
						" - Quantity",
						" - More button to view detailed order information",
						"Supports pagination to navigate between pages of order data",
						"Useful for tracking purchases and managing customer orders efficiently"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/order-list-page.png',
				},
				{
					title: 'Order Detail Page',
					description: 'Detailed view of an individual order with full breakdown and vendor payment status.',
					points: [
						"Displays complete order information including:",
						" - Order ID",
						" - User (Customer) Name",
						" - Product Name",
						" - Vendor Name",
						" - Delivery Address",
						" - Transaction ID",
						" - Order Date",
						" - Price of product",
						" - Delivery Charges",
						" - GST applicable",
						" - Quantity ordered",
						" - Total Amount",
						"Includes vendor payout control:",
						"   - If payment to vendor is pending, shows 'Pay to Vendor Now' button",
						"   - If payment is already made, shows 'Payment Sent' status"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/order-detail-page.png',
				},
				{
					title: 'Transaction List Page (Admin)',
					description: 'Displays a list of all transactions made by customers during product purchases.',
					points: [
						"Top search bar to filter transactions by username, product",
						"Transaction data is displayed in a tabular format with the following columns:",
						" - Username (Customer who made the transaction)",
						" - Product Name (Product for which transaction was done)",
						" - Amount paid",
						" - Status (e.g., completed, Failed, Pending)",
						" - More button to view detailed transaction information"
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/transaction-list-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/admin/transaction-detail-page.png',
				},
				{
					title: 'Payment Page (Admin to sellers/vendors Transfers)',
					description: 'Displays list of payments transferred by Admin to vendors after order completion and delivery.',
					points: [
						"Lists all payments made by admin to sellers/vendors for completed orders.",
						"Shows important details in a table format with the following columns:",
						" - Order ID (associated with the payment)",
						" - Seller Name (receiver of the payment)", 
						" - Amount Paid to Seller (final amount after deducting platform fee)", 
						" - Payment Date (when the transfer was done)",
						"Includes a search bar on top for finding payments",
						"Ensures transparency of revenue sharing between admin and vendors",
					],
					image: '/project-doc/multi-vendor-ecommerse/admin/payment-list-page.png',
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
					image: '/project-doc/multi-vendor-ecommerse/admin/profile-page.png',
				}
 
			],
		}
		
		
		
  ]
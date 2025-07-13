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
				
				
			]
		},
		
];		
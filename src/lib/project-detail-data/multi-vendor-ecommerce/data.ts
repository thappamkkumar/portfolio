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
          title: 'Logout',
          description: 'Protected logout with feedback.',
          image: '/project-doc/multi-vendor-ecommerse/customer/logout-page.png',
        },
      ],
    },
     
  ]
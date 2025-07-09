import HeroSection from "@/components/project-detail/HeroSection";

export default function MultiVendorEcommerce() {
  const images = [
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
 
 
  ];

  return (
    <main className="">
      <HeroSection
        title="ShopHub"
        tagline="A powerful multi-vendor eCommerce web app built with Laravel"
        images={images}
				titles={[
					"Multi-vendor Marketplace",
					"Built with Laravel + MySQL",
					"Admin, Vendor & Customer Roles",
					"Bootstrap, JS, Auth, Dashboard",
				]}
        liveDemoUrl="https://your-live-demo.com"
        codeUrl="https://github.com/your-repo/shophub"
        scrollToId="#project-content"
      />

      <span id="project-content" className="block pt-50 text-8xl text-center">
        Multi-Vendor E-commerce Platform
      </span>
    </main>
  );
}

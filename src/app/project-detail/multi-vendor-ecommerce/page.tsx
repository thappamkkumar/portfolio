import HeroSection from "@/components/project-detail/HeroSection";

export default function MultiVendorEcommerce() {
  const images = [
    "/project-doc/multi-vendor-ecommerse/login-page.png",
    "/project-doc/multi-vendor-ecommerse/register-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/logout-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/home-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-list-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-search-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-detail-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/product-detail-review-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/place-order-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/place-order-address-change-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/place-order-payment-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/place-order-response.png",
    "/project-doc/multi-vendor-ecommerse/customer/categories-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/category-product-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/cart-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/order-list-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/profile-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/profile-change-password-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/profile-update-address-page.png",
    "/project-doc/multi-vendor-ecommerse/customer/profile-update-basic-detail-page.png",
 
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
        scrollToId="project-content"
      />

      <span className="block pt-50 text-8xl text-center">
        Multi-Vendor E-commerce Platform
      </span>
    </main>
  );
}

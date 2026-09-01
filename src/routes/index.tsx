import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/storefront/Header";
import { Carousel } from "@/components/storefront/Carousel";
import { ProductCard } from "@/components/storefront/ProductCard";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { RegionModal } from "@/components/storefront/RegionModal";
import { Footer } from "@/components/storefront/Footer";
import {
  CategoryGrid,
  Hero,
  PromoBanner,
  ShopByColor,
  TrustMarquee,
} from "@/components/storefront/Sections";
import { StoreProvider } from "@/components/storefront/store-context";
import { products } from "@/lib/shop-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woolworks — Wool Varsity Jackets & Letterman Outerwear" },
      {
        name: "description",
        content:
          "Shop Woolworks wool varsity jackets, letterman patches, wool bombers and knit accessories in navy, cream, maroon and black.",
      },
      { property: "og:title", content: "Woolworks — Wool Varsity Jackets" },
      {
        property: "og:description",
        content:
          "Heavyweight wool varsity jackets and letterman outerwear in classic navy, cream, maroon and black colorways.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <div id="new-arrivals">
            <Carousel title="New Arrivals" subtitle="Lorem ipsum dolor sit amet consectetur.">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
          <CategoryGrid />
          <PromoBanner />
          <ShopByColor />
          <TrustMarquee />
        </main>
        <Footer />
        <CartDrawer />
        <RegionModal />
      </div>
    </StoreProvider>
  );
}

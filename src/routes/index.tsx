import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/storefront/Header";
import { Carousel } from "@/components/storefront/Carousel";
import { ProductCard } from "@/components/storefront/ProductCard";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { RegionModal } from "@/components/storefront/RegionModal";
import { Footer } from "@/components/storefront/Footer";
import {
  Hero,
  PromoBanner,
  ShopByColor,
  TeamShots,
  TrustMarquee,
} from "@/components/storefront/Sections";
import { products } from "@/lib/shop-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woolworks — Wool Varsity Jackets to Rep Your Team" },
      {
        name: "description",
        content:
          "Woolworks wool varsity jackets built on team spirit and rivalry. Shop team colorways in navy, maroon, black and green.",
      },
      { property: "og:title", content: "Woolworks — Rep Your Team" },
      {
        property: "og:description",
        content:
          "Heavyweight wool varsity jackets for every side of the rivalry — navy, maroon, black and green team colorways.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <TeamShots />
          <div id="the-lineup">
            <Carousel title="The Lineup" subtitle="Lorem ipsum dolor sit amet consectetur.">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
          <PromoBanner />
          <ShopByColor />
          <TrustMarquee />
        </main>
        <Footer />
        <CartDrawer />
        <RegionModal />
      </div>
    </>
  );
}

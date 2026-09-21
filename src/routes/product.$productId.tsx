import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/storefront/Header";
import { Footer } from "@/components/storefront/Footer";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { RegionModal } from "@/components/storefront/RegionModal";
import { Carousel } from "@/components/storefront/Carousel";
import { ProductCard } from "@/components/storefront/ProductCard";
import { useStore } from "@/components/storefront/store-context";
import { productQueryOptions, productsQueryOptions } from "@/lib/use-products";
import type { Product } from "@/lib/shop-data";

export const Route = createFileRoute("/product/$productId")({
  head: () => ({
    meta: [
      { title: "Woolworks Team Jacket — Wool Varsity Jacket" },
      {
        name: "description",
        content:
          "Heavyweight wool varsity jacket in team colorways with felt patches and striped rib trims. Rep your team.",
      },
      { property: "og:title", content: "Woolworks Team Jacket" },
      {
        property: "og:description",
        content: "Heavyweight wool varsity jacket in team colorways — rep your team.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: async ({ params, context }) => {
    const [product, allProducts] = await Promise.all([
      context.queryClient.ensureQueryData(productQueryOptions(params.productId)),
      context.queryClient.ensureQueryData(productsQueryOptions),
    ]);
    if (!product) throw notFound();
    return { product, allProducts };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, allProducts } = Route.useLoaderData();

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Detail product={product} />
          <div id="the-lineup">
            <Carousel title="The Lineup" subtitle="Shop the rest of the team collection.">
              {allProducts
                .filter((p) => p.id !== product.id)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </Carousel>
          </div>
        </main>
        <Footer />
        <CartDrawer />
        <RegionModal />
      </div>
    </>
  );
}

function Detail({ product }: { product: Product }) {
  const { addLine } = useStore();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    () => product.sizes.find((s) => !s.soldOut)?.label,
  );

  return (
    <section className="md:mx-auto md:grid md:max-w-[1600px] md:grid-cols-2 md:gap-10 md:px-8 md:py-10">
      <div className="grid grid-cols-1 gap-1 md:gap-3">
        {[
          product.image,
          ...(product.hoverImage !== product.image ? [product.hoverImage] : []),
          ...(product.images || []),
        ]
          .filter(Boolean)
          .map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${product.name} wool varsity jacket view ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            width={1024}
            height={1280}
            className={`aspect-4/5 w-full ${
              i === 0 || i === 1 || i === 2 || i === 3 || i === 4 ? "bg-white object-contain" : "object-cover"
            }`}
          />
        ))}
      </div>
      <div className="px-5 py-8 md:px-0 md:py-0">
        <Link to="/" className="text-[10px] label-caps text-muted-foreground">
          ← Back to shop
        </Link>
        <h1 className="mt-3 display-title text-4xl md:text-5xl">{product.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{product.blurb}</p>
        <p className="mt-3 flex items-center gap-2 text-lg">
          <span className={product.compareAt ? "text-sale font-medium" : ""}>${product.price}</span>
          {product.compareAt ? (
            <span className="text-sm text-muted-foreground line-through">${product.compareAt}</span>
          ) : null}
        </p>

        <p className="mt-7 text-[10px] label-caps text-muted-foreground">Select a size</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              disabled={size.soldOut}
              onClick={() => setSelectedSize(size.label)}
              aria-pressed={selectedSize === size.label}
              className={`border px-3 py-1.5 text-[11px] label-caps transition-colors ${
                size.soldOut
                  ? "cursor-not-allowed border-border text-muted-foreground line-through"
                  : selectedSize === size.label
                    ? "border-ink bg-ink text-primary-foreground"
                    : "border-foreground/25 hover:border-foreground/50"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => addLine(product, selectedSize)}
          disabled={product.sizes.length > 0 && !selectedSize}
          className="mt-7 w-full bg-ink px-8 py-4 text-[11px] label-caps text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {product.sizes.length > 0 && !selectedSize ? "Select a size" : "Add to bag"}
        </button>

        <p className="mt-6 text-sm text-muted-foreground">
          Crafted from premium wool with genuine leather sleeves and hand-embroidered team
          details. Cut for a classic fit that keeps you warm on game day and beyond.
        </p>
      </div>
    </section>
  );
}

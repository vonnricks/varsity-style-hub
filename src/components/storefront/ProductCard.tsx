import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import type { Product } from "@/lib/shop-data";
import { useStore } from "./store-context";

export function ProductCard({ product }: { product: Product }) {
  const { addLine } = useStore();
  const [hover, setHover] = useState(false);

  return (
    <article
      className="group w-[74vw] shrink-0 snap-start sm:w-[46vw] lg:w-[23vw] xl:w-[300px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative aspect-4/5 overflow-hidden"
        style={{ backgroundColor: product.imageBg ?? "#ffffff" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} wool varsity jacket`}
            loading="lazy"
            width={1024}
            height={1280}
            className={`absolute inset-0 size-full transition-opacity duration-500 ${
              product.imageFit === "contain" ? "object-contain p-4" : "object-cover"
            } ${hover ? "opacity-0" : "opacity-100"}`}
          />
        ) : null}
        {product.hoverImage ? (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate colorway`}
            loading="lazy"
            width={1024}
            height={1280}
            className={`absolute inset-0 size-full transition-opacity duration-500 ${
              (product.hoverImageFit ?? product.imageFit) === "contain"
                ? "object-contain p-4"
                : "object-cover"
            } ${hover ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundColor: product.hoverImageBg ?? product.imageBg ?? "transparent",
            }}
          />
        ) : null}
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-ink px-2 py-1 text-[10px] label-caps text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => addLine(product)}
          className={`absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-card py-2.5 text-[11px] label-caps transition-all duration-300 ${
            hover ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <Eye className="size-3.5" /> Quick view
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.sizes.map((size) => (
          <span
            key={size.label}
            className={`border px-2 py-0.5 text-[10px] label-caps ${
              size.soldOut
                ? "border-border text-muted-foreground line-through"
                : "border-foreground/25 text-foreground"
            }`}
          >
            {size.label}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium">
          <Link to="/product/$productId" params={{ productId: product.id }}>
            {product.name}
          </Link>
        </h3>
        {product.blurb ? (
          <p className="text-xs text-muted-foreground">{product.blurb}</p>
        ) : null}
        <p className="mt-1 flex items-center gap-2 text-sm">
          <span className={product.compareAt ? "text-sale font-medium" : ""}>${product.price}</span>
          {product.compareAt ? (
            <span className="text-xs text-muted-foreground line-through">
              ${product.compareAt}
            </span>
          ) : null}
        </p>
      </div>
    </article>
  );
}

import { wixFetch } from "./wix-client";
import type { Product } from "./shop-data";

type WixMediaItem = { image?: { url: string } };
type WixVariant = {
  id: string;
  choices?: Record<string, string>;
  stock?: { inStock?: boolean };
};
type WixProductOption = { name: string };
type WixProduct = {
  id: string;
  name: string;
  description?: string;
  ribbon?: string;
  price?: { price?: number };
  priceData?: { price?: number };
  media?: { items?: WixMediaItem[] };
  productOptions?: WixProductOption[];
  variants?: WixVariant[];
  manageVariants?: boolean;
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapWixProduct(p: WixProduct): Product {
  const images = (p.media?.items ?? []).map((item) => item.image?.url).filter(Boolean) as string[];
  const [image, hoverImage, ...gallery] = images;

  const sizeOption = (p.productOptions ?? []).find((o) => o.name === "Size");
  const variantIdBySize: Record<string, string> = {};
  const sizes: { label: string; soldOut?: boolean }[] = [];
  if (sizeOption) {
    for (const v of p.variants ?? []) {
      const label = v.choices?.["Size"];
      if (!label) continue;
      variantIdBySize[label] = v.id;
      sizes.push({ label, soldOut: v.stock?.inStock === false });
    }
  }

  return {
    id: p.id,
    name: p.name,
    blurb: p.description ? stripHtml(p.description) : "",
    price: p.priceData?.price ?? p.price?.price ?? 0,
    image: image ?? "",
    hoverImage: hoverImage ?? image ?? "",
    images: gallery,
    sizes,
    ...(p.ribbon ? { badge: p.ribbon } : {}),
    variantIdBySize,
    manageVariants: Boolean(p.manageVariants),
  };
}

export async function fetchWixProducts(): Promise<Product[]> {
  const data = await wixFetch<{ products: WixProduct[] }>(
    "https://www.wixapis.com/stores/v1/products/query",
    {
      method: "POST",
      body: JSON.stringify({ query: { paging: { limit: 100 } } }),
    },
  );
  return (data?.products ?? []).map(mapWixProduct);
}

export async function fetchWixProduct(id: string): Promise<Product | null> {
  const data = await wixFetch<{ product: WixProduct }>(
    `https://www.wixapis.com/stores-reader/v1/products/${id}`,
    { method: "GET" },
    { allow404: true },
  );
  return data?.product ? mapWixProduct(data.product) : null;
}

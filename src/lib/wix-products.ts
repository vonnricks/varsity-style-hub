import { wixFetch } from "./wix-client";
import type { Product } from "./shop-data";

// This Wix site uses Stores Catalog V3, so all reads go through /stores/v3.
type WixImage = { url?: string } | string | undefined;
type WixMediaItem = { image?: WixImage };
type WixChoice = {
  optionChoiceNames?: { optionName?: string; choiceName?: string };
};
type WixVariant = {
  id: string;
  choices?: WixChoice[];
  inventoryStatus?: { inStock?: boolean };
  price?: { actualPrice?: { amount?: string } };
};
type WixProductV3 = {
  id: string;
  name: string;
  plainDescription?: string;
  ribbon?: { name?: string };
  actualPriceRange?: { minValue?: { amount?: string } };
  media?: { main?: WixMediaItem; itemsInfo?: { items?: WixMediaItem[] } };
  variantsInfo?: { variants?: WixVariant[] };
};

const FIELDS = ["PLAIN_DESCRIPTION", "MEDIA_ITEMS_INFO", "VARIANT_OPTION_CHOICE_NAMES", "CURRENCY"];

function imageUrl(img: WixImage): string | undefined {
  if (!img) return undefined;
  return typeof img === "string" ? img : img.url;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapWixProduct(p: WixProductV3): Product {
  const items = p.media?.itemsInfo?.items ?? (p.media?.main ? [p.media.main] : []);
  const images = items.map((i) => imageUrl(i.image)).filter(Boolean) as string[];
  const [image, hoverImage, ...gallery] = images;

  const variants = p.variantsInfo?.variants ?? [];
  const variantIdBySize: Record<string, string> = {};
  const sizes: { label: string; soldOut?: boolean }[] = [];
  for (const v of variants) {
    const size = v.choices?.find((c) => c.optionChoiceNames?.optionName === "Size");
    const label = size?.optionChoiceNames?.choiceName;
    if (!label) continue;
    variantIdBySize[label] = v.id;
    sizes.push({ label, soldOut: v.inventoryStatus?.inStock === false });
  }

  const priceStr =
    p.actualPriceRange?.minValue?.amount ?? variants[0]?.price?.actualPrice?.amount ?? "0";

  return {
    id: p.id,
    name: p.name,
    blurb: p.plainDescription ? stripHtml(p.plainDescription) : "",
    price: Number(priceStr) || 0,
    image: image ?? "",
    hoverImage: hoverImage ?? image ?? "",
    images: gallery,
    sizes,
    ...(p.ribbon?.name ? { badge: p.ribbon.name } : {}),
    variantIdBySize,
    manageVariants: variants.length > 1,
  };
}

export async function fetchWixProduct(id: string): Promise<Product | null> {
  const qs = FIELDS.map((f) => `fields=${f}`).join("&");
  const data = await wixFetch<{ product: WixProductV3 }>(
    `https://www.wixapis.com/stores/v3/products/${id}?${qs}`,
    { method: "GET" },
    { allow404: true },
  );
  return data?.product ? mapWixProduct(data.product) : null;
}

export async function fetchWixProducts(): Promise<Product[]> {
  const data = await wixFetch<{ products: WixProductV3[] }>(
    "https://www.wixapis.com/stores/v3/products/query",
    {
      method: "POST",
      body: JSON.stringify({ query: { cursorPaging: { limit: 100 } }, fields: FIELDS }),
    },
  );
  const list = data?.products ?? [];
  // Query results may omit variant details, so load each product fully.
  const full = await Promise.all(list.map((p) => fetchWixProduct(p.id).catch(() => null)));
  return full.map((p, i) => p ?? mapWixProduct(list[i]));
}

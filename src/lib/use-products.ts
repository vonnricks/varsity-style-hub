import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchWixProduct, fetchWixProducts } from "./wix-products";
import { localProducts, products, type Product } from "./shop-data";
import { groupVests } from "./lineup-order";

const localByName = new Map(
  localProducts.map((p) => [p.name.trim().toLowerCase(), p]),
);

// These established vest listings use the site's selected back-logo photo
// as their second image, without changing the store's cover or other photos.
const vestBackByName = new Map(
  products
    .filter((p) => p.id === "item-5" || p.id === "item-6")
    .map((p) => [p.name.trim().toLowerCase(), p.hoverImage] as const),
);

// Sizes the site's own catalog declares for a style, for the cases where the
// store's size row is wrong (a size that no longer exists, or a new one).
const siteSizesByName = new Map(
  products
    .filter((p) => p.siteSizes && p.sizes.length)
    .map((p) => [p.name.trim().toLowerCase(), p.sizes] as const),
);

// Prices the site's own catalog declares for a style, for the cases where the
// store listing's price is not the one shoppers should see.
const sitePriceByName = new Map(
  products
    .filter((p) => p.sitePrice)
    .map((p) => [p.name.trim().toLowerCase(), p.price] as const),
);

// Deals the site advertises on a store listing, keyed by the store product ID.
// The store still runs the sale at checkout; this only shows the badge.
const siteBadgeById = new Map([
  ["e6d91c9a-77bf-4d6a-ba25-bd47e525117a", "Buy One Get One Free"],
]);

// Items that live in this site's own catalog instead of the Wix store. They are
// merged into the lineup, and skipped when the Wix store already carries a
// product with the same name — so adding the style in Wix retires the local
// copy automatically.
function withLocalItems(wixProducts: Product[]): Product[] {
  const wixNames = new Set(
    wixProducts.map((p) => p.name.trim().toLowerCase()).filter(Boolean),
  );
  const extras = localProducts.filter((p) => !wixNames.has(p.name.trim().toLowerCase()));
  // New styles lead the lineup.
  return [...extras, ...wixProducts];
}

// When this site carries its own photos for a style that also lives in the Wix
// store, the site's photos are shown. Where the catalog opts in with
// `siteSizes`, the site decides which sizes are offered (a size the store no
// longer sells, or a new one), while the store still decides whether each of
// those sizes is in stock. Where it opts in with `sitePrice`, the site's price
// is shown instead of the store's — the store still sets what checkout charges.
function withSitePhotos(product: Product): Product {
  const key = product.name.trim().toLowerCase();
  const local = localByName.get(key);
  const sizes = siteSizesByName.get(key);
  const price = sitePriceByName.get(key);
  const badge = siteBadgeById.get(product.id);
  const vestBack = vestBackByName.get(key);
  if (!local && !sizes && price === undefined && !badge && !vestBack) return product;
  return {
    ...product,
    ...(badge ? { badge } : {}),
    ...(local ? { image: local.image, hoverImage: local.hoverImage } : {}),
    ...(local?.images ? { images: local.images } : {}),
    ...(vestBack ? { hoverImage: vestBack, hoverImageFit: "contain" as const } : {}),
    ...(price === undefined ? {} : { price }),
    ...(sizes
      ? {
          sizes: sizes.map((s) => {
            const store = product.sizes.find((x) => x.label === s.label);
            if (!store) return s;
            return store.soldOut === undefined
              ? { ...s }
              : { ...s, soldOut: store.soldOut };
          }),
        }
      : {}),
  };
}

function localItemById(productId: string): Product | undefined {
  return localProducts.find((p) => p.id === productId);
}

export const productsQueryOptions = queryOptions({
  queryKey: ["wix-products"],
  queryFn: async () => groupVests(withLocalItems(await fetchWixProducts()).map(withSitePhotos)),
  staleTime: 60_000,
});

export const productQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: ["wix-product", productId],
    queryFn: async () => {
      const local = localItemById(productId);
      // Existing hero links and bookmarks keep the local ID. Once Wix carries
      // the style, resolve that alias to the orderable store product instead.
      const found = local
        ? (await fetchWixProducts()).find(
            (p) => p.name.trim().toLowerCase() === local.name.trim().toLowerCase(),
          ) ?? local
        : await fetchWixProduct(productId);
      return found ? withSitePhotos(found) : found;
    },
    staleTime: 60_000,
  });

export function useProducts() {
  return useQuery(productsQueryOptions);
}

export function useProduct(productId: string) {
  return useQuery(productQueryOptions(productId));
}

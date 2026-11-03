import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchWixProduct, fetchWixProducts } from "./wix-products";
import { localProducts, products, type Product } from "./shop-data";

const localByName = new Map(
  localProducts.map((p) => [p.name.trim().toLowerCase(), p]),
);

// Sizes the site's own catalog declares for a style, for the cases where the
// store's size row is wrong (a size that no longer exists, or a new one).
const siteSizesByName = new Map(
  products
    .filter((p) => p.siteSizes && p.sizes.length)
    .map((p) => [p.name.trim().toLowerCase(), p.sizes] as const),
);

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
// store, the site's photos are shown. The store listing still decides price
// and checkout. Sizes follow the site's list only where the catalog opts in
// with `siteSizes` (used where the store's size row is wrong).
function withSitePhotos(product: Product): Product {
  const key = product.name.trim().toLowerCase();
  const local = localByName.get(key);
  const sizes = siteSizesByName.get(key);
  if (!local && !sizes) return product;
  return {
    ...product,
    ...(local ? { image: local.image, hoverImage: local.hoverImage } : {}),
    ...(local?.images ? { images: local.images } : {}),
    ...(sizes ? { sizes } : {}),
  };
}

function localItemById(productId: string): Product | undefined {
  return localProducts.find((p) => p.id === productId);
}

export const productsQueryOptions = queryOptions({
  queryKey: ["wix-products"],
  queryFn: async () => withLocalItems(await fetchWixProducts()).map(withSitePhotos),
  staleTime: 60_000,
});

export const productQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: ["wix-product", productId],
    queryFn: async () => {
      const found = localItemById(productId) ?? (await fetchWixProduct(productId));
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

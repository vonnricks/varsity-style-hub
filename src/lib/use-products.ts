import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchWixProduct, fetchWixProducts } from "./wix-products";
import { localProducts, type Product } from "./shop-data";

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

function localItemById(productId: string): Product | undefined {
  return localProducts.find((p) => p.id === productId);
}

export const productsQueryOptions = queryOptions({
  queryKey: ["wix-products"],
  queryFn: async () => withLocalItems(await fetchWixProducts()),
  staleTime: 60_000,
});

export const productQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: ["wix-product", productId],
    queryFn: async () =>
      localItemById(productId) ?? (await fetchWixProduct(productId)),
    staleTime: 60_000,
  });

export function useProducts() {
  return useQuery(productsQueryOptions);
}

export function useProduct(productId: string) {
  return useQuery(productQueryOptions(productId));
}

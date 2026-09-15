import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchWixProduct, fetchWixProducts } from "./wix-products";

export const productsQueryOptions = queryOptions({
  queryKey: ["wix-products"],
  queryFn: fetchWixProducts,
  staleTime: 60_000,
});

export const productQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: ["wix-product", productId],
    queryFn: () => fetchWixProduct(productId),
    staleTime: 60_000,
  });

export function useProducts() {
  return useQuery(productsQueryOptions);
}

export function useProduct(productId: string) {
  return useQuery(productQueryOptions(productId));
}

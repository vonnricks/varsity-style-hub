import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type Context,
  type ReactNode,
} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Product } from "@/lib/shop-data";
import {
  addToCart,
  getCheckoutUrl,
  getCurrentCart,
  removeLineItem,
  updateLineItemQuantity,
  type WixCartLineItem,
} from "@/lib/wix-cart";

export type CartLine = WixCartLineItem;

type Overlay = "none" | "search" | "cart" | "menu" | "region";

type StoreValue = {
  lines: CartLine[];
  subtotal: number;
  count: number;
  isLoading: boolean;
  addLine: (product: Product, size?: string) => void;
  setQty: (lineItemId: string, qty: number) => void;
  checkout: () => void;
  isCheckingOut: boolean;
  overlay: Overlay;
  open: (o: Exclude<Overlay, "none">) => void;
  close: () => void;
};

// Keep a single context instance across hot-module reloads so that a provider
// created by an older module copy is still readable by newer consumers.
const globalStore = globalThis as typeof globalThis & {
  __storefrontStoreContext?: Context<StoreValue | null>;
};
const StoreContext =
  globalStore.__storefrontStoreContext ??
  (globalStore.__storefrontStoreContext = createContext<StoreValue | null>(null));

const CART_QUERY_KEY = ["wix-cart"];

export function StoreProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const [overlay, setOverlay] = useState<Overlay>("none");

  const cartQuery = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: getCurrentCart,
    staleTime: 10_000,
  });

  const addLineMutation = useMutation({
    mutationFn: ({
      catalogItemId,
      variantId,
    }: {
      catalogItemId: string;
      variantId: string | undefined;
    }) => addToCart(catalogItemId, variantId, 1),
    onSuccess: (cart) => {
      queryClient.setQueryData(CART_QUERY_KEY, cart);
      setOverlay("cart");
    },
  });

  const setQtyMutation = useMutation({
    mutationFn: ({ lineItemId, qty }: { lineItemId: string; qty: number }) =>
      qty > 0 ? updateLineItemQuantity(lineItemId, qty) : removeLineItem(lineItemId),
    onSuccess: (cart) => {
      queryClient.setQueryData(CART_QUERY_KEY, cart);
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const cartId = cartQuery.data?.id;
      if (!cartId) throw new Error("Your cart is empty");
      return getCheckoutUrl(cartId);
    },
    onSuccess: (url) => {
      window.location.href = url;
    },
  });

  const addLine = useCallback(
    (product: Product, size?: string) => {
      const resolvedSize =
        size ?? product.sizes.find((s) => !s.soldOut)?.label ?? product.sizes[0]?.label;
      const variantId = resolvedSize ? product.variantIdBySize?.[resolvedSize] : undefined;
      addLineMutation.mutate({ catalogItemId: product.id, variantId });
    },
    [addLineMutation],
  );

  const setQty = useCallback(
    (lineItemId: string, qty: number) => {
      setQtyMutation.mutate({ lineItemId, qty });
    },
    [setQtyMutation],
  );

  const lines = cartQuery.data?.lineItems ?? [];

  const value = useMemo<StoreValue>(
    () => ({
      lines,
      subtotal: cartQuery.data?.subtotal ?? 0,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      isLoading: cartQuery.isLoading,
      addLine,
      setQty,
      checkout: () => checkoutMutation.mutate(),
      isCheckingOut: checkoutMutation.isPending,
      overlay,
      open: (o) => setOverlay(o),
      close: () => setOverlay("none"),
    }),
    [lines, cartQuery.data?.subtotal, cartQuery.isLoading, addLine, setQty, checkoutMutation, overlay],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

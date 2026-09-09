import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type Context,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/shop-data";

export type CartLine = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

type Overlay = "none" | "search" | "cart" | "menu" | "region";

type StoreValue = {
  lines: CartLine[];
  subtotal: number;
  count: number;
  addLine: (product: Product, size?: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  overlay: Overlay;
  open: (o: Exclude<Overlay, "none">) => void;
  close: () => void;
};

// Keep a single context instance across hot-module reloads so that a provider
// created by an older module copy is still readable by newer consumers.
const globalStore = globalThis as typeof globalThis & {
  __storefrontStoreContext?: React.Context<StoreValue | null>;
};
const StoreContext =
  globalStore.__storefrontStoreContext ??
  (globalStore.__storefrontStoreContext = createContext<StoreValue | null>(null));

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    const seed = products[0]!;
    return [
      { id: seed.id, name: seed.name, size: "M", price: seed.price, image: seed.image, qty: 1 },
    ];
  });
  const [overlay, setOverlay] = useState<Overlay>("none");

  const addLine = useCallback((product: Product, size = "M") => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === product.id && l.size === size);
      if (found) {
        return prev.map((l) => (l === found ? { ...l, qty: l.qty + 1 } : l));
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          size,
          price: product.price,
          image: product.image,
          qty: 1,
        },
      ];
    });
    setOverlay("cart");
  }, []);

  const setQty = useCallback((id: string, size: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id && l.size === size ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const value = useMemo<StoreValue>(() => {
    const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
    return {
      lines,
      subtotal,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      addLine,
      setQty,
      overlay,
      open: (o) => setOverlay(o),
      close: () => setOverlay("none"),
    };
  }, [lines, overlay, addLine, setQty]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

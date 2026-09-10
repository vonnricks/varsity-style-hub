import { Minus, Plus, X } from "lucide-react";
import { useStore } from "./store-context";

const FREE_THRESHOLD = 500;

export function CartDrawer() {
  const { overlay, close, lines, setQty, subtotal } = useStore();
  const isOpen = overlay === "cart";
  const progress = Math.min(100, (subtotal / FREE_THRESHOLD) * 100);

  return (
    <div className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />
      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-card shadow-panel transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <h2 className="text-[12px] label-caps">Your cart</h2>
          <button type="button" aria-label="Close cart" onClick={close}>
            <X className="size-5" />
          </button>
        </div>

        <div className="border-b border-border px-5 py-4">
          <p className="text-xs text-muted-foreground">
            {progress >= 100
              ? "You've unlocked free shipping!"
              : `Add $${Math.max(0, FREE_THRESHOLD - subtotal)} more for free shipping.`}
          </p>
          <div className="mt-2 h-1.5 w-full bg-secondary">
            <div
              className="h-full bg-maroon transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            lines.map((line) => (
              <div key={`${line.id}-${line.size}`} className="flex gap-4 border-b border-border py-5">
                <img
                  src={line.image}
                  alt={line.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-24 w-20 shrink-0 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{line.name}</span>
                    <span>${line.price * line.qty}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Size — {line.size}</p>
                  <div className="mt-3 inline-flex items-center border border-border">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(line.id, line.size, line.qty - 1)}
                      className="p-2 transition-colors hover:bg-secondary"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span className="w-8 text-center text-xs">{line.qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(line.id, line.size, line.qty + 1)}
                      className="p-2 transition-colors hover:bg-secondary"
                    >
                      <Plus className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border p-5">
          <div className="flex justify-between text-sm">
            <span className="label-caps text-[11px]">Subtotal</span>
            <span className="font-medium">${subtotal}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-ink py-4 text-[11px] label-caps text-primary-foreground transition-opacity hover:opacity-90"
          >
            Checkout
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Free returns within 30 days.
          </p>
        </div>
      </aside>
    </div>
  );
}

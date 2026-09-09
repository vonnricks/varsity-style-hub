import { X } from "lucide-react";
import { regions } from "@/lib/shop-data";
import { useStore } from "./store-context";

function Field({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] label-caps text-muted-foreground">{label}</span>
      <select className="mt-1.5 h-11 w-full border border-border bg-background px-3 text-sm outline-none focus:border-foreground">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export function RegionModal() {
  const { overlay, close } = useStore();
  const isOpen = overlay === "region";

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-ink/60" onClick={close} />
      <div
        className={`relative w-full max-w-md bg-card p-6 shadow-panel transition-all duration-300 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
        }`}
      >
        <button
          type="button"
          aria-label="Close region selector"
          onClick={close}
          className="absolute right-4 top-4"
        >
          <X className="size-4" />
        </button>
        <h2 className="display-title text-2xl">Your region</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose your country, currency, and language.
        </p>
        <div className="mt-6 space-y-4">
          <Field label="Country" options={regions.countries} />
          <Field label="Currency" options={regions.currencies} />
          <Field label="Language" options={regions.languages} />
        </div>
        <button
          type="button"
          onClick={close}
          className="mt-6 w-full bg-ink py-3.5 text-[11px] label-caps text-primary-foreground transition-opacity hover:opacity-90"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

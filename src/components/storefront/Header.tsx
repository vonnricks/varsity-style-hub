import { useState } from "react";
import { ChevronDown, MapPin, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { BRAND, navItems } from "@/lib/shop-data";
import { MegaMenu } from "./MegaMenu";
import { AnnouncementBar } from "./AnnouncementBar";
import { useStore } from "./store-context";

function IconButton({
  label,
  onClick,
  children,
  badge,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative rounded-sm p-2 text-foreground transition-colors hover:text-maroon"
    >
      {children}
      {badge ? (
        <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-maroon text-[10px] font-semibold text-maroon-foreground">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

export function Header() {
  const { open, close, overlay, count } = useStore();
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const menuOpen = overlay === "menu";
  const searchOpen = overlay === "search";

  return (
    <>
    <header className="sticky top-0 z-50 bg-background">
      <AnnouncementBar />
      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-8">
          <div className="flex flex-1 items-center gap-1">
            <IconButton label="Open menu" onClick={() => open("menu")}>
              <Menu className="size-5 lg:hidden" />
              <span className="hidden lg:block">
                <Search className="size-5" />
              </span>
            </IconButton>
            <button
              type="button"
              onClick={() => open("search")}
              className="hidden text-[11px] label-caps text-muted-foreground transition-colors hover:text-foreground lg:block"
            >
              Lorem
            </button>
          </div>

          <a href="/" className="display-title text-2xl md:text-3xl">
            {BRAND}
          </a>

          <div className="flex flex-1 items-center justify-end">
            <IconButton label="Store locator">
              <MapPin className="size-5" />
            </IconButton>
            <IconButton label="Account login">
              <User className="size-5" />
            </IconButton>
            <IconButton label="Open cart" onClick={() => open("cart")} badge={count}>
              <ShoppingBag className="size-5" />
            </IconButton>
          </div>
        </div>

        {/* Desktop nav + mega menu */}
        <nav
          className="relative hidden border-t border-border lg:block"
          onMouseLeave={() => setHovered(null)}
        >
          <ul className="mx-auto flex max-w-[1600px] items-center justify-center gap-9 px-8">
            {navItems.map((item) => (
              <li key={item.label} onMouseEnter={() => setHovered(item.label)}>
                <button
                  type="button"
                  className={`py-3.5 text-[11px] label-caps transition-colors ${
                    hovered === item.label ? "text-maroon" : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {navItems.map((item) => (
            <MegaMenu key={item.label} item={item} open={hovered === item.label} />
          ))}
        </nav>
      </div>

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={close} />
        <div
          className={`absolute inset-x-0 top-0 bg-card p-6 shadow-panel transition-transform duration-300 md:p-10 ${
            searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto flex max-w-3xl items-center gap-4">
            <Search className="size-5 text-muted-foreground" />
            <input
              placeholder="Lorem ipsum dolor sit amet"
              className="h-12 w-full border-0 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
            />
            <button type="button" aria-label="Close search" onClick={close}>
              <X className="size-5" />
            </button>
          </div>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap gap-2">
            {["Lorem ipsum", "Dolor sit", "Consectetur", "Adipiscing"].map((t) => (
              <span key={t} className="border border-border px-3 py-1.5 text-xs text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-full max-w-sm flex-col bg-card transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <span className="display-title text-xl">{BRAND}</span>
            <button type="button" aria-label="Close menu" onClick={close}>
              <X className="size-5" />
            </button>
          </div>
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="Lorem ipsum dolor"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {navItems.map((item) => {
              const isOpen = expanded === item.label;
              return (
                <div key={item.label} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between px-4 py-4 text-[12px] label-caps"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 space-y-5 px-4 pb-5">
                      {item.columns.map((column) => (
                        <div key={column.heading}>
                          <p className="text-[10px] label-caps text-muted-foreground">
                            {column.heading}
                          </p>
                          <ul className="mt-2 space-y-2">
                            {column.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="text-sm text-foreground/80">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 border-t border-border px-4 py-4 text-[11px] label-caps">
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> Lorem
            </span>
            <span className="flex items-center gap-2">
              <User className="size-4" /> Ipsum
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

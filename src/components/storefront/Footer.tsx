import { useState } from "react";
import { ChevronDown, Facebook, Globe, Instagram, Twitter, Youtube } from "lucide-react";
import { BRAND, footerGroups } from "@/lib/shop-data";
import { useStore } from "./store-context";

export function Footer() {
  const { open } = useStore();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-[1600px] px-4 py-14 md:px-8 md:py-20">
        <div className="flex flex-col gap-6 border-b border-primary-foreground/15 pb-8 md:flex-row md:items-center md:justify-between">
          <span className="display-title text-3xl">{BRAND}</span>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social link ${i + 1}`}
                className="flex size-10 items-center justify-center border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop columns */}
        <div className="hidden grid-cols-4 gap-10 py-12 md:grid">
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-[11px] label-caps text-primary-foreground/60">{group.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/85 transition-opacity hover:opacity-70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordions */}
        <div className="md:hidden">
          {footerGroups.map((group) => {
            const isOpen = expanded === group.heading;
            return (
              <div key={group.heading} className="border-b border-primary-foreground/15">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : group.heading)}
                  className="flex w-full items-center justify-between py-4 text-[11px] label-caps"
                >
                  {group.heading}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "1000px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <ul className="min-h-0 space-y-2.5 pb-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-primary-foreground/85">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={() => open("region")}
            className="flex items-center gap-2 border border-primary-foreground/25 px-4 py-2.5 text-[11px] label-caps transition-colors hover:bg-primary-foreground/10"
          >
            <Globe className="size-4" /> United States / USD $
          </button>
          <p className="text-[11px] text-primary-foreground/60">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

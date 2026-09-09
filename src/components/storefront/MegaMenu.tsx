import type { NavItem } from "@/lib/shop-data";

export function MegaMenu({ item, open }: { item: NavItem; open: boolean }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 border-b border-border bg-card shadow-panel transition-all duration-300 ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-10 px-10 py-10">
        {item.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-[11px] label-caps text-muted-foreground">{column.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-foreground/80 transition-colors hover:text-maroon"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-secondary p-6">
          <p className="display-title text-2xl">New season</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fresh team colorways have just landed for the new season.
          </p>
          <a href="#" className="mt-4 inline-block text-[11px] label-caps underline">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
}

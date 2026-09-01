import heroImage from "@/assets/hero-varsity.jpg";
import { categoryPills, categoryTiles, colorSwatches, trustMessages } from "@/lib/shop-data";

export function Hero() {
  return (
    <section>
      <div className="relative h-[72vh] min-h-[440px] w-full overflow-hidden md:h-[82vh]">
        <img
          src={heroImage}
          alt="Model wearing a navy and cream wool varsity jacket"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-4 pb-12 md:px-8 md:pb-16">
          <p className="text-[11px] label-caps text-primary-foreground/85">Lorem ipsum dolor</p>
          <h1 className="mt-3 max-w-2xl display-title text-5xl text-primary-foreground md:text-7xl">
            Consectetur adipiscing elit
          </h1>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/85">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
          <div className="mt-7">
            <a
              href="#new-arrivals"
              className="inline-block bg-card px-8 py-4 text-[11px] label-caps text-foreground transition-opacity hover:opacity-90"
            >
              Shop lorem ipsum
            </a>
          </div>
        </div>
      </div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-border px-4 py-4 md:px-8">
        {categoryPills.map((pill) => (
          <a
            key={pill}
            href="#"
            className="shrink-0 rounded-full border border-border px-4 py-2 text-[11px] label-caps transition-colors hover:border-foreground hover:bg-secondary"
          >
            {pill}
          </a>
        ))}
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 pb-14 md:px-8 md:pb-20">
      <h2 className="display-title text-3xl md:text-5xl">Lorem categoriae</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {categoryTiles.map((tile, i) => (
          <a key={`${tile.title}-${i}`} href="#" className="group relative overflow-hidden">
            <img
              src={tile.image}
              alt={tile.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-0 p-4">
              <p className="display-title text-lg text-primary-foreground md:text-xl">
                {tile.title}
              </p>
              <p className="text-[11px] text-primary-foreground/80">{tile.copy}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="bg-maroon text-maroon-foreground">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <div>
          <h2 className="display-title text-4xl md:text-6xl">Ipsum dolor sit amet</h2>
          <p className="mt-3 max-w-xl text-sm text-maroon-foreground/85">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <a
          href="#"
          className="bg-card px-8 py-4 text-[11px] label-caps text-foreground transition-opacity hover:opacity-90"
        >
          Tempor incididunt
        </a>
      </div>
    </section>
  );
}

export function ShopByColor() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-14 md:px-8 md:py-20">
      <h2 className="display-title text-3xl md:text-5xl">Lorem per colorem</h2>
      <div className="no-scrollbar mt-8 flex gap-5 overflow-x-auto pb-2 md:gap-8">
        {colorSwatches.map((swatch) => (
          <a key={swatch.name} href="#" className="group shrink-0 text-center">
            <span
              className={`block size-20 rounded-full border border-border transition-transform duration-300 group-hover:scale-105 md:size-24 ${swatch.token}`}
            />
            <span className="mt-3 block text-[11px] label-caps">{swatch.name}</span>
            <span className="block text-[11px] text-muted-foreground">{swatch.count} lorem</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function TrustMarquee() {
  const row = [...trustMessages, ...trustMessages];
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-4">
      <div className="flex w-max animate-marquee gap-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-10">
            {row.map((message, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex shrink-0 items-center gap-10 text-[11px] label-caps text-foreground/80"
              >
                {message}
                <span className="text-maroon">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

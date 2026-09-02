import { Link } from "@tanstack/react-router";
import { colorSwatches, heroImage, teamShots, trustMessages } from "@/lib/shop-data";

export function Hero() {
  return (
    <section className="relative aspect-4/5 w-full overflow-hidden md:aspect-16/9">
      <img
        src={heroImage}
        alt="Four rivals standing shoulder to shoulder in wool varsity jackets"
        width={1280}
        height={1600}
        className="absolute inset-0 size-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent" />
      <div className="relative flex h-full flex-col justify-end px-5 pb-8 md:mx-auto md:max-w-[1600px] md:px-8 md:pb-16">
        <p className="text-[11px] label-caps text-primary-foreground/85">Lorem ipsum dolor</p>
        <h1 className="mt-2 display-title text-4xl leading-[0.95] text-primary-foreground md:text-7xl">
          Rep your team
        </h1>
        <p className="mt-3 max-w-md text-sm text-primary-foreground/85">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-5">
          <a
            href="#the-lineup"
            className="inline-block bg-card px-7 py-3.5 text-[11px] label-caps text-foreground transition-opacity hover:opacity-90"
          >
            Shop lorem ipsum
          </a>
        </div>
      </div>
    </section>
  );
}

export function TeamShots() {
  return (
    <section className="px-0 py-10 md:py-16">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <h2 className="display-title text-3xl md:text-5xl">Pick a side</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 px-5 md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-4">
        {teamShots.map((shot) => (
          <Link
            key={shot.team}
            to="/product/$productId"
            params={{ productId: shot.productId }}
            className="group relative block aspect-square overflow-hidden"
          >
            <img
              src={shot.image}
              alt={`${shot.team} wool varsity jacket lifestyle shot`}
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-[10px] label-caps text-primary-foreground/80">{shot.rivalry}</p>
              <p className="display-title text-2xl text-primary-foreground">{shot.team}</p>
              <p className="mt-1 text-[11px] text-primary-foreground/80">{shot.copy}</p>
              <span className="mt-3 inline-block bg-card px-5 py-2.5 text-[10px] label-caps text-foreground">
                Shop this team
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="bg-maroon text-maroon-foreground">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <div>
          <h2 className="display-title text-4xl md:text-6xl">Ipsum dolor sit amet</h2>
          <p className="mt-3 max-w-xl text-sm text-maroon-foreground/85">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <a
          href="#the-lineup"
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
    <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-20">
      <h2 className="display-title text-3xl md:text-5xl">Lorem per colorem</h2>
      <div className="no-scrollbar mt-6 flex gap-5 overflow-x-auto pb-2 md:gap-8">
        {colorSwatches.map((swatch) => (
          <a key={swatch.name} href="#the-lineup" className="group shrink-0 text-center">
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

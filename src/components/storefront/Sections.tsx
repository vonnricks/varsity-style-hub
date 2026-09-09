import { Link } from "@tanstack/react-router";
import { colorSwatches, heroTiles, teamShots, trustMessages } from "@/lib/shop-data";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="grid h-[calc(100svh+2rem)] grid-cols-2 grid-rows-2 md:h-[92vh]">
        {heroTiles.map((tile, i) => (
          <img
            key={tile.alt}
            src={tile.image}
            alt={tile.alt}
            width={1024}
            height={1024}
            loading={i === 0 ? "eager" : "lazy"}
            className="size-full object-cover object-center"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-ink/35" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="display-title text-5xl leading-[0.9] text-primary-foreground drop-shadow-lg md:text-7xl">
          Rep your team
        </h1>
        <a
          href="#pick-a-side"
          className="pointer-events-auto mt-5 bg-maroon px-8 py-4 text-[11px] label-caps text-maroon-foreground transition-opacity hover:opacity-90"
        >
          SHOP INVENTORY
        </a>
      </div>
    </section>
  );
}


function DealBand({ eyebrow, heading, copy }: { eyebrow: string; heading: string; copy: string }) {
  return (
    <div className="bg-secondary px-5 py-12 text-center md:py-16">
      <p className="text-[10px] label-caps text-maroon">{eyebrow}</p>
      <h3 className="mx-auto mt-2 max-w-xl display-title text-3xl md:text-5xl">{heading}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">{copy}</p>
      <a
        href="#the-lineup"
        className="mt-5 inline-block bg-ink px-8 py-4 text-[11px] label-caps text-primary-foreground transition-opacity hover:opacity-90"
      >
        Shop now
      </a>
    </div>
  );
}

const deals = [
  {
    eyebrow: "Lorem offer",
    heading: "Perfect duo: buy 2 get 15% off",
    copy: "Mix and match any two lorem ipsum team jackets to build your perfect duo.",
  },
  {
    eyebrow: "Ipsum offer",
    heading: "Free lorem shipping over $100",
    copy: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
  },
];

export function TeamShots() {
  return (
    <section id="pick-a-side" className="py-10 md:py-16">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <h2 className="display-title text-3xl md:text-5xl">Pick a side</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-6 md:grid md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-4">
        {teamShots.map((shot, i) => (
          <div key={shot.team} className="contents md:block">
            <Link
              to="/product/$productId"
              params={{ productId: shot.productId }}
              className="group block"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={shot.image}
                  alt={`${shot.team} wool varsity jacket lifestyle shot`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-6 text-center md:px-0 md:text-left">
                <p className="text-[10px] label-caps text-maroon">{shot.rivalry}</p>
                <h3 className="mt-1 display-title text-3xl md:text-2xl">{shot.team}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{shot.copy}</p>
                <span className="mt-4 inline-block bg-ink px-6 py-3 text-[10px] label-caps text-primary-foreground">
                  Shop this team
                </span>
              </div>
            </Link>
            {i % 2 === 1 ? (
              <div className="md:hidden">
                <DealBand {...deals[i === 1 ? 0 : 1]!} />
              </div>
            ) : null}
          </div>
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
          <h2 className="display-title text-4xl md:text-6xl">BRINGING LUXURY TO SPORTS</h2>
          <p className="mt-3 max-w-xl text-sm text-maroon-foreground/85">
            Produced with quality material to give you stile while you cheer on your team.
          </p>
        </div>
        <a
          href="#the-lineup"
          className="bg-card px-8 py-4 text-[11px] label-caps text-foreground transition-opacity hover:opacity-90"
        >
          
        </a>
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

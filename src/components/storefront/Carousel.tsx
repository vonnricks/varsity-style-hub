import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Carousel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between px-4 md:px-8">
        <div>
          <h2 className="display-title text-3xl md:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="flex size-10 items-center justify-center border border-border transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="flex size-10 items-center justify-center border border-border transition-colors hover:bg-secondary"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:gap-6 md:px-8"
      >
        {children}
      </div>
    </section>
  );
}

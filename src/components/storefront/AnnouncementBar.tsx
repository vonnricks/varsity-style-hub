import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { announcements } from "@/lib/shop-data";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % announcements.length), 4000);
    return () => clearInterval(id);
  }, [closed]);

  if (closed) return null;

  return (
    <div className="relative bg-ink text-primary-foreground">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-center px-10">
        <div className="relative h-4 w-full overflow-hidden">
          {announcements.map((message, i) => (
            <p
              key={message}
              className="absolute inset-0 text-center text-[11px] label-caps transition-all duration-500 ease-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: `translateY(${(i - index) * 100}%)`,
              }}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Close announcement"
        onClick={() => setClosed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1.5 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}

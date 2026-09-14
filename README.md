# Varsity Style Hub

uild a responsive e-commerce storefront for a wool varsity jacket company, with identical layout and interaction flow on desktop and mobile. Use a simple placeholder text logo. All body copy should be Lorem Ipsum. All product names should be generic: “Item 1”, “Item 2”, “Item 3”, etc.

Header (sticky):

    •    Thin announcement bar with rotating Lorem Ipsum promo messages, auto-carousel, closeable

    •    Placeholder logo centered; full nav row on desktop (Men / Women / Kids / New Arrivals / Sale / Discover), hamburger on mobile

    •    Mega-menu on hover (desktop) / full-screen slide-in drawer (mobile), sub-categories grouped in columns, all labeled with Lorem Ipsum

    •    Right icons: search overlay, store locator, account login, cart drawer

Hero: full-bleed image of a wool varsity jacket (original photo-style illustration, not sourced from any existing brand), one CTA button, horizontal scrolling category pill strip below

Product carousel: “New Arrivals” horizontal scroll, 5-6 cards — each with a hover-swap image pair of wool varsity jackets in different colorways, size chips (some struck-through), “Item 1”/“Item 2” naming, price, quick-view on hover

Category tile grid: 4-8 image tiles (varsity jackets, letterman patches, wool bombers, accessories), 2-col mobile / 4-col desktop

Promo banner: full-width colored section, bold Lorem Ipsum headline + offer text + CTA

Shop-by-color row: color swatches (classic varsity colors: navy, cream, maroon, black) in horizontal scroll

Trust marquee: infinite scrolling ticker with Lorem Ipsum trust messages

Footer: logo + social icons, 4-column link groups (Shop/Support/About/Legal) with Lorem Ipsum labels, collapsing to accordions on mobile, region/currency selector

Cart drawer: right slide-in, progress bar, line items with steppers, upsell banner, checkout CTA

Region modal: footer-triggered, country/currency/language dropdowns, confirm button

Use Tailwind, mobile-first breakpoints, smooth drawer/overlay transitions, componentized structure (Header, MegaMenu, ProductCard, Carousel, CartDrawer, Footer, RegionModal). Generate all product and hero imagery as original wool varsity jacket product photography — reference psychobunny.com pull layout from this existing retailer’s website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eaa26ab6-c9c2-4a85-a7dc-2eef00d7a555).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

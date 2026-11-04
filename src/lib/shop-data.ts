import jacketCream from "@/assets/jacket-cream.jpg";
import jacketMaroon from "@/assets/jacket-maroon.jpg";
import jacketBlack from "@/assets/jacket-black.jpg";
import jacketGreen from "@/assets/jacket-green.jpg";
import item5FrontBackAsset from "@/assets/item5-front-back.png";
import item5FrontAsset from "@/assets/item5-front.png";
import item5BackAsset from "@/assets/item5-back.png";
import item5SideAsset from "@/assets/item5-side.png";
import item5BackAltAsset from "@/assets/item5-back-alt.png";
import item1FrontBackAsset from "@/assets/item1-front-back.png";
import item1SideAsset from "@/assets/item1-side.png";
import item1CoverNoBg from "@/assets/item1-cover.png";
import item1Stack2Asset from "@/assets/Black_stack_2.PNG";
import item1Stack3Asset from "@/assets/Black_stack_3.PNG";
import item1Stack4Asset from "@/assets/Black_stack_4.PNG";
import item1Stack5Asset from "@/assets/Black_Stack.PNG";
import item1Stack6Asset from "@/assets/Black_Stack_6.JPG";
import item1Stack7Asset from "@/assets/ChatGPT_Image_Sep_4_2026_10_43_46_AM.png";
import item2FrontBackAsset from "@/assets/item2-front-back.png";
import item2CoverNoBg from "@/assets/item2-cover-nobg.png";
import item2SideAsset from "@/assets/item2-side.png";
import item2Stack1Asset from "@/assets/Burgundy_Stack_1.png";
import item2Stack2Asset from "@/assets/Burgundy_Stack_7.png";
import item2Stack3Asset from "@/assets/Photoroom_20260827_192836-2.PNG";
import item2Stack4Asset from "@/assets/Photoroom_20260827_192843-2.PNG";
import item3FrontBackAsset from "@/assets/item3-front-back.png";
import item3CoverNoBg from "@/assets/item3-cover-nobg.png";
import item3FrontAsset from "@/assets/item3-front.jpg";
import item3BackAsset from "@/assets/item3-back.jpg";
import item3Side1Asset from "@/assets/item3-side-1.jpg";
import item3Side2Asset from "@/assets/item3-side-2.jpg";
import item4FrontBackAsset from "@/assets/item4-front-back.png";
import item4CoverNoBg from "@/assets/item4-cover-nobg.png";
import item4FrontAsset from "@/assets/item4-front.png";
import item4BackAsset from "@/assets/item4-back.png";
import item4AngleAsset from "@/assets/item4-angle.png";
import item4FrontStraightAsset from "@/assets/item4-front-straight.png";
import item4Stack1Asset from "@/assets/3-2.png";
import item4Stack2Asset from "@/assets/Photoroom_20260525_205704-2.PNG";
import item4Stack3Asset from "@/assets/Photoroom_20260526_212932_2.PNG";
import item4Stack4Asset from "@/assets/Photoroom_20260526_212943_2.PNG";
import item6FrontBackAsset from "@/assets/item6-front-back.png";
import item6FrontAsset from "@/assets/item6-front.png";
import item6Stack5Asset from "@/assets/item6-stack-5.jpg";
import item6Stack6Asset from "@/assets/item6-stack-6.jpg";
import item6Stack7Asset from "@/assets/item6-stack-7.jpg";
import item5Stack1Asset from "@/assets/item6-stack-1.png";
import item5Stack2Asset from "@/assets/item6-stack-2.png";
import item5Stack3Asset from "@/assets/item6-stack-3.jpg";
import item5Stack4Asset from "@/assets/item6-stack-4.PNG";
import item7FrontAsset from "@/assets/item7-front.png";
import item7HoverAsset from "@/assets/item7-hover.jpg";
import item7Lifestyle1Asset from "@/assets/Black_and_Burgundy_2.PNG";
import item7Lifestyle2Asset from "@/assets/Black_and_Burgundy.PNG";
import item7Lifestyle3Asset from "@/assets/PBlack_and_Burgundy_3PNG.PNG";
import item8FrontAsset from "@/assets/item8-front.jpg";
import item8Lifestyle1Asset from "@/assets/Burgundy_and_Gold.PNG";
import item8Lifestyle2Asset from "@/assets/Burgundy_and_Gold_2.PNG";
import item8Lifestyle3Asset from "@/assets/Burgundy_and_Gold3.PNG";
// Bundled with the site (not CDN-hosted) so they load from the same place as
// the other product photos, which display reliably for all visitors.
import dmvHoodieFront from "@/assets/dmv-hoodie-front.jpg";
import dmvHoodieStudio from "@/assets/dmv-hoodie-studio.jpg";
import dmvHoodieDetail from "@/assets/dmv-hoodie-detail.jpg";
import dmvHoodieAngle from "@/assets/dmv-hoodie-angle.jpg";
import teamNavyAsset from "@/assets/team-navy.png";
import teamMaroonAsset from "@/assets/team-maroon.png";
import teamBlackAsset from "@/assets/team-black.png";
import teamGreenAsset from "@/assets/team-green.png";
import heroRivals from "@/assets/hero-rivals.jpg";
// Bundled with the site (not CDN-hosted) so it loads from the same place as
// the product photos, which display reliably for all visitors.
// The group portrait is cropped to 16:9 so every hero photo fills the same
// space with nothing cut off.
import heroGroupPortrait from "@/assets/hero-washington-group-169.jpg";
import heroWeDemBoyz from "@/assets/hero-we-dem-boyz.jpg";
import heroFightOldDcBlack from "@/assets/hero-fight-old-dc-black.jpg";
import heroFightOldDcBurgundy from "@/assets/hero-fight-old-dc-burgundy.jpg";
import heroWarriorHoodieBlack from "@/assets/hero-warrior-hoodie-black.jpg";
import heroWarriorHoodieBurgundy from "@/assets/hero-warrior-hoodie-burgundy.jpg";
import heroShadowVestMall from "@/assets/hero-shadow-vest-mall.jpg";
import heroShadowVestUrban from "@/assets/hero-shadow-vest-urban.jpg";
import heroCapitalVestTerrace from "@/assets/hero-capital-vest-terrace.jpg";
import heroDmvCultureHoodie from "@/assets/hero-dmv-culture-hoodie.jpg";
import hero2DmvCultureHoodieMonument from "@/assets/hero2-dmv-culture-hoodie-monument.jpg";

export const heroImage = heroRivals;

// Photos the hero rotates through, in order. Each one opens the item it shows:
// `productId` for a single product, `anchor` to jump to a section of the page.
export type HeroSlide = {
  image: string;
  alt: string;
  productId?: string;
  anchor?: string;
};

export const heroSlides: HeroSlide[] = [
  { image: heroWeDemBoyz, alt: "Man in a navy We Dem Boyz varsity jacket seen from behind, Washington Monument in the background", productId: "e6d91c9a-77bf-4d6a-ba25-bd47e525117a" },
  { image: heroFightOldDcBlack, alt: "Man in an all-black Fight for Old DC varsity jacket in a brick alleyway", productId: "b9dc34f9-1307-44ff-b5e8-3b6e4ab060e4" },
  { image: heroFightOldDcBurgundy, alt: "Man in a burgundy and gold Fight for Old DC varsity jacket", productId: "1aa0f8df-4e72-46d6-a358-8ecb232d4924" },
  { image: heroWarriorHoodieBlack, alt: "Man in a black Warrior Legacy hoodie with the Capitol dome at sunset behind him", productId: "b539f338-4d5c-45bd-8572-468c50719162" },
  { image: heroWarriorHoodieBurgundy, alt: "Man in a burgundy Warrior Legacy hoodie leaning on a stone balustrade", productId: "ed48d2a7-4fd9-414f-9598-683face08840" },
  { image: heroShadowVestMall, alt: "Man in a black District Shadow puffer vest seen from behind, overlooking the National Mall", productId: "f4d63011-c507-49a0-86c0-162b21fe7979" },
  { image: heroShadowVestUrban, alt: "Man in a black puffer vest and graphic hoodie in an urban concrete setting", productId: "f4d63011-c507-49a0-86c0-162b21fe7979" },
  { image: heroCapitalVestTerrace, alt: "Man in a burgundy Burgundy Capital puffer vest walking across a stone terrace", productId: "82f49fde-d95f-4242-9227-13a930add080" },
  { image: heroDmvCultureHoodie, alt: "Man in a black DMV Culture hoodie standing beside stone columns, the Washington Monument and National Mall behind him", productId: "f503605d-3cc6-409b-916a-3d81d2197f9a" },
  { image: hero2DmvCultureHoodieMonument, alt: "Woman in a black DMV Culture hoodie with the Washington Monument behind her", productId: "f503605d-3cc6-409b-916a-3d81d2197f9a" },
];

export const heroPhoto = {
  image: heroGroupPortrait,
  alt: "Five people in Washington varsity jackets and hoodies with two puffer vests on display",
  width: 1672,
  height: 941,
};


export const BRAND = "CETS APPAREL";

export const announcements = [
  "Free Shipping on All Orders over $100",
  "NEW TEAM COLORWAYS DROP EVERY SEASON",
  "Rep your rivalry — limited run styles available now",
];

export type MegaColumn = { heading: string; links: string[] };

export type NavItem = {
  label: string;
  columns: MegaColumn[];
};

const navLinks = (n: number, seed: string) =>
  [
    "Jackets",
    "Vests",
    "Crewnecks",
    "Caps",
    "Accessories",
    "New In",
    "Best Sellers",
    "Gift Cards",
  ]
    .slice(0, n)
    .map((l) => `${l} ${seed}`);

export const navItems: NavItem[] = [
  {
    label: "Men",
    columns: [
      { heading: "Shop By Team", links: navLinks(5, "i") },
      { heading: "Collections", links: navLinks(4, "ii") },
      { heading: "Essentials", links: navLinks(4, "iii") },
    ],
  },
  {
    label: "Women",
    columns: [
      { heading: "Shop By Team", links: navLinks(5, "iv") },
      { heading: "Collections", links: navLinks(4, "v") },
      { heading: "Essentials", links: navLinks(3, "vi") },
    ],
  },
  {
    label: "Kids",
    columns: [
      { heading: "Shop By Team", links: navLinks(4, "vii") },
      { heading: "Collections", links: navLinks(4, "viii") },
      { heading: "Essentials", links: navLinks(3, "ix") },
    ],
  },
  {
    label: "New Arrivals",
    columns: [
      { heading: "Just Dropped", links: navLinks(4, "x") },
      { heading: "Trending Now", links: navLinks(4, "xi") },
      { heading: "Coming Soon", links: navLinks(3, "xii") },
    ],
  },
  {
    label: "Sale",
    columns: [
      { heading: "Last Chance", links: navLinks(4, "xiii") },
      { heading: "Under $100", links: navLinks(3, "xiv") },
      { heading: "Bundle Deals", links: navLinks(3, "xv") },
    ],
  },
  {
    label: "Discover",
    columns: [
      { heading: "Our Story", links: navLinks(4, "xvi") },
      { heading: "Rivalries", links: navLinks(3, "xvii") },
      { heading: "Lookbook", links: navLinks(3, "xviii") },
    ],
  },
];

export type Product = {
  id: string;
  name: string;
  blurb: string;
  price: number;
  compareAt?: number;
  image: string;
  hoverImage: string;
  sizes: { label: string; soldOut?: boolean }[];
  badge?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  hoverImageFit?: "cover" | "contain";
  hoverImageBg?: string;
  images?: string[];
  // When true, this site's own size list is shown instead of the store's.
  siteSizes?: boolean;
  // When true, this site's own price is shown instead of the store's.
  sitePrice?: boolean;
  // Items kept in this site's own catalog instead of the Wix store.
  local?: boolean;
  // Present on products loaded live from Wix Stores.
  variantIdBySize?: Record<string, string>;
  manageVariants?: boolean;
};

export const products: Product[] = [
  {
    id: "item-1",
    name: "Midnight District Varsity Jacket",
    blurb: "",
    price: 225,
    image: item1CoverNoBg,
    hoverImage: item1CoverNoBg,
    sizes: [
      { label: "S", soldOut: true },
      { label: "M" },
      { label: "L", soldOut: true },
      { label: "XL", soldOut: true },
      { label: "2XL", soldOut: true },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    hoverImageFit: "contain",
    hoverImageBg: "#ffffff",
    images: [
      item1Stack2Asset,
      item1Stack3Asset,
      item1Stack4Asset,
      item1Stack5Asset,
      item1Stack6Asset,
      item1Stack7Asset,
    ],
  },
  {
    id: "item-2",
    name: "Capital Gold Varsity Jacket",
    blurb: "",
    price: 225,
    image: item2CoverNoBg,
    hoverImage: item2CoverNoBg,
    // XS is unavailable and 3XL is a new size, so this listing's sizes come from
    // the site rather than the store.
    sizes: [
      { label: "S", soldOut: true },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "3XL" },
    ],
    siteSizes: true,
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [
      item2Stack1Asset,
      item2Stack2Asset,
      item2Stack3Asset,
      item2Stack4Asset,
      item2SideAsset,
    ],
  },
  {
    id: "item-3",
    name: "Bay Dynasty Varsity Jacket",
    blurb: "",
    price: 225,
    image: item3CoverNoBg,
    hoverImage: item3FrontAsset,
    sizes: [
      { label: "M", soldOut: true },
      { label: "L", soldOut: true },
      { label: "XL", soldOut: true },
      { label: "2XL", soldOut: true },
      { label: "3XL", soldOut: true },
      { label: "4XL", soldOut: true },
    ],
    badge: "Sold Out",
    imageFit: "contain",
    imageBg: "#ffffff",
  },
  {
    id: "item-4",
    name: "District Legacy Varsity Jacket",
    blurb: "",
    // The store listing still says $225, so the site's own price is shown here.
    price: 125,
    sitePrice: true,
    image: item4CoverNoBg,
    hoverImage: item4FrontAsset,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [
      item4Stack1Asset,
      item4Stack2Asset,
      item4Stack3Asset,
      item4Stack4Asset,
    ],
  },
  {
    id: "item-5",
    name: "Burgundy Capital Puffer Vest",
    blurb: "",
    price: 125,
    image: item5FrontBackAsset,
    hoverImage: item5FrontAsset,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [
      item5Stack1Asset,
      item5Stack2Asset,
      item5Stack3Asset,
      item5Stack4Asset,
    ],
  },
  {
    id: "item-6",
    name: "District Shadow Puffer Vest",
    blurb: "",
    price: 125,
    image: item6FrontBackAsset,
    hoverImage: item6FrontAsset,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [
      item6Stack5Asset,
      item6Stack6Asset,
      item6Stack7Asset,
    ],
  },
  {
    id: "item-7",
    name: "Warrior Legacy Hoodie – Black",
    blurb: "",
    price: 65,
    image: item7HoverAsset,
    hoverImage: item7HoverAsset,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [item7Lifestyle1Asset, item7Lifestyle2Asset, item7Lifestyle3Asset],
  },
  {
    id: "item-8",
    name: "Warrior Legacy Hoodie – Burgundy",
    blurb: "",
    price: 65,
    image: item8FrontAsset,
    hoverImage: item8FrontAsset,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    imageFit: "contain",
    imageBg: "#ffffff",
    images: [item8Lifestyle1Asset, item8Lifestyle2Asset, item8Lifestyle3Asset],
  },
  {
    id: "item-9",
    name: "DMV Culture Collective Hoodie",
    blurb:
      "Represent your teams. Rep your city. Rep the DMV. This bold hoodie celebrates the passion, rivalries, and championship spirit of Washington, D.C., Maryland, and Virginia sports.",
    price: 65,
    image: dmvHoodieFront,
    hoverImage: dmvHoodieStudio,
    sizes: [
      { label: "M" },
      { label: "L" },
      { label: "XL" },
      { label: "2XL" },
      { label: "3XL" },
      { label: "4XL" },
    ],
    badge: "New",
    imageFit: "contain",
    imageBg: "#ffffff",
    hoverImageFit: "cover",
    images: [dmvHoodieDetail, dmvHoodieAngle],
    local: true,
  },
];

// Items kept in this site's own catalog rather than the Wix store. They are
// merged into the lineup, and skipped when the Wix store already carries a
// product with the same name.
export const localProducts: Product[] = products.filter((p) => p.local === true);


export type TeamShot = {
  team: string;
  rivalry: string;
  copy: string;
  image: string;
  productId: string;
};

export const teamShots: TeamShot[] = [
  {
    team: "DALLAS LEGACY VARSITY JACKET",
    rivalry: "BRIGHT BLUE AND GRAY",
    copy: "Luxury Style and Warmth",
    image: teamNavyAsset,
    productId: "e6d91c9a-77bf-4d6a-ba25-bd47e525117a",
  },
  {
    team: "MIDNIGHT DISTRICT VARSITY JACKET",
    rivalry: "TRIPLE BACK",
    copy: "Stand Out In Comfort",
    image: teamMaroonAsset,
    productId: "b9dc34f9-1307-44ff-b5e8-3b6e4ab060e4",
  },
  {
    team: "WARRIOR LEGACY HOODIE – BURGUNDY",
    rivalry: "BRIGHT BURGUNDY & GOLD",
    copy: "Thick Cotton and Bright Colors",
    image: teamBlackAsset,
    productId: "ed48d2a7-4fd9-414f-9598-683face08840",
  },
  {
    team: "WARRIOR LEGACY HOODIE – BLACK",
    rivalry: "BLACK & BURGUNDY",
    copy: "Impecable Embroidery",
    image: teamGreenAsset,
    productId: "b539f338-4d5c-45bd-8572-468c50719162",
  },
];

export const colorSwatches = [
  { name: "Navy", token: "bg-swatch-navy", count: 12 },
  { name: "Cream", token: "bg-swatch-cream", count: 9 },
  { name: "Maroon", token: "bg-swatch-maroon", count: 7 },
  { name: "Black", token: "bg-swatch-black", count: 14 },
  { name: "Green", token: "bg-swatch-green", count: 5 },
  { name: "Grey", token: "bg-swatch-grey", count: 8 },
];

export const trustMessages = [
  "Free shipping over $100",
  "Premium wool and leather",
  "30-day easy returns",
  "Embroidered team crests",
  "Made in small batches",
];

export const footerGroups = [
  {
    heading: "Shop",
    links: ["Jackets", "Vests", "New Arrivals", "Best Sellers", "Gift Cards"],
  },
  {
    heading: "Support",
    links: ["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ"],
  },
  {
    heading: "About",
    links: ["Our Story", "Rivalries", "Lookbook", "Journal", "Stores"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Do Not Sell"],
  },
];

export const regions = {
  countries: ["United States", "United Kingdom", "Canada", "Australia"],
  currencies: ["USD $", "GBP £", "CAD $", "AUD $"],
  languages: ["English (US)", "English (UK)", "English (CA)", "English (AU)"],
};

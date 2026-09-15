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
import teamNavyAsset from "@/assets/team-navy.png";
import teamMaroonAsset from "@/assets/team-maroon.png";
import teamBlackAsset from "@/assets/team-black.png";
import teamGreenAsset from "@/assets/team-green.png";
import heroRivals from "@/assets/hero-rivals.jpg";
import heroRival1Asset from "@/assets/hero-rival-1.jpg";
import heroRival2Asset from "@/assets/hero-rival-2.jpg";
import heroRival3Asset from "@/assets/hero-rival-3.jpg";
import heroRival4Asset from "@/assets/hero-rival-4.jpg";

export const heroImage = heroRivals;

export const heroTiles = [
  { image: heroRival1Asset, alt: "Woman wearing a maroon and gold wool varsity jacket" },
  { image: heroRival2Asset, alt: "Man wearing a navy and grey wool varsity jacket" },
  { image: heroRival3Asset, alt: "Woman cheering in a black and red wool varsity jacket" },
  { image: heroRival4Asset, alt: "Man wearing a black and grey wool varsity jacket" },
];

export const BRAND = "CETS APPAREL";

export const announcements = [
  "FREE SHIPPING ON ALL ORDERS OVER $500",
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
};

const sizeSet = (soldOut: string[] = []) =>
  ["XS", "S", "M", "L", "XL"].map((label) => ({
    label,
    soldOut: soldOut.includes(label),
  }));

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
    sizes: sizeSet(["S", "XL"]),
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
    price: 225,
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
];

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
    productId: "item-4",
  },
  {
    team: "MIDNIGHT DISTRICT VARSITY JACKET",
    rivalry: "TRIPLE BACK",
    copy: "Stand Out In Comfort",
    image: teamMaroonAsset,
    productId: "item-1",
  },
  {
    team: "WARRIOR LEGACY HOODIE – BURGUNDY",
    rivalry: "BRIGHT BURGUNDY & GOLD",
    copy: "Thick Cotton and Bright Colors",
    image: teamBlackAsset,
    productId: "item-8",
  },
  {
    team: "WARRIOR LEGACY HOODIE – BLACK",
    rivalry: "BLACK & BURGUNDY",
    copy: "Impecable Embroidery",
    image: teamGreenAsset,
    productId: "item-7",
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
  "Free shipping over $150",
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

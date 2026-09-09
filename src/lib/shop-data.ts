import jacketCream from "@/assets/jacket-cream.jpg";
import jacketMaroon from "@/assets/jacket-maroon.jpg";
import jacketBlack from "@/assets/jacket-black.jpg";
import jacketGreen from "@/assets/jacket-green.jpg";
import item5FrontBackAsset from "@/assets/item5-front-back.png.asset.json";
import item5FrontAsset from "@/assets/item5-front.png.asset.json";
import item5BackAsset from "@/assets/item5-back.png.asset.json";
import item5SideAsset from "@/assets/item5-side.png.asset.json";
import item5BackAltAsset from "@/assets/item5-back-alt.png.asset.json";
import item1FrontBackAsset from "@/assets/item1-front-back.png.asset.json";
import item1SideAsset from "@/assets/item1-side.png.asset.json";
import item2FrontBackAsset from "@/assets/item2-front-back.png.asset.json";
import item2SideAsset from "@/assets/item2-side.png.asset.json";
import item3FrontBackAsset from "@/assets/item3-front-back.png.asset.json";
import item3FrontAsset from "@/assets/item3-front.jpg.asset.json";
import item3BackAsset from "@/assets/item3-back.jpg.asset.json";
import item3Side1Asset from "@/assets/item3-side-1.jpg.asset.json";
import item3Side2Asset from "@/assets/item3-side-2.jpg.asset.json";
import item4FrontBackAsset from "@/assets/item4-front-back.png.asset.json";
import item4FrontAsset from "@/assets/item4-front.png.asset.json";
import item4BackAsset from "@/assets/item4-back.png.asset.json";
import item4AngleAsset from "@/assets/item4-angle.png.asset.json";
import item4FrontStraightAsset from "@/assets/item4-front-straight.png.asset.json";
import item6FrontBackAsset from "@/assets/item6-front-back.png.asset.json";
import item6FrontAsset from "@/assets/item6-front.png.asset.json";
import teamNavyAsset from "@/assets/team-navy.png.asset.json";
import teamMaroonAsset from "@/assets/team-maroon.png.asset.json";
import teamBlackAsset from "@/assets/team-black.png.asset.json";
import teamGreenAsset from "@/assets/team-green.png.asset.json";
import heroRivals from "@/assets/hero-rivals.jpg";
import heroRival1Asset from "@/assets/hero-rival-1.jpg.asset.json";
import heroRival2Asset from "@/assets/hero-rival-2.jpg.asset.json";
import heroRival3Asset from "@/assets/hero-rival-3.jpg.asset.json";
import heroRival4Asset from "@/assets/hero-rival-4.jpg.asset.json";

export const heroImage = heroRivals;

export const heroTiles = [
  { image: heroRival1Asset.url, alt: "Woman wearing a maroon and gold wool varsity jacket" },
  { image: heroRival2Asset.url, alt: "Man wearing a navy and grey wool varsity jacket" },
  { image: heroRival3Asset.url, alt: "Woman cheering in a black and red wool varsity jacket" },
  { image: heroRival4Asset.url, alt: "Man wearing a black and grey wool varsity jacket" },
];

export const BRAND = "CETS APPAREL";

export const announcements = [
  "Free shipping on all orders over $150",
  "New team colorways drop every Friday",
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
};

const sizeSet = (soldOut: string[] = []) =>
  ["XS", "S", "M", "L", "XL"].map((label) => ({
    label,
    soldOut: soldOut.includes(label),
  }));

export const products: Product[] = [
  {
    id: "item-1",
    name: "Item 1",
    blurb: "Lorem ipsum dolor sit amet",
    price: 225,
    image: item1FrontBackAsset.url,
    hoverImage: item1SideAsset.url,
    sizes: [
      { label: "S", soldOut: true },
      { label: "M" },
      { label: "L", soldOut: true },
      { label: "XL", soldOut: true },
      { label: "2XL", soldOut: true },
      { label: "4XL" },
    ],
  },
  {
    id: "item-2",
    name: "Item 2",
    blurb: "Consectetur adipiscing elit",
    price: 225,
    image: item2FrontBackAsset.url,
    hoverImage: item2SideAsset.url,
    sizes: sizeSet(["S", "XL"]),
    imageFit: "contain",
    imageBg: "#ffffff",
  },
  {
    id: "item-3",
    name: "Item 3",
    blurb: "Sed do eiusmod tempor",
    price: 225,
    image: item3FrontBackAsset.url,
    hoverImage: item3FrontAsset.url,
    sizes: sizeSet(["M"]),
    badge: "Sold Out",
  },
  {
    id: "item-4",
    name: "Item 4",
    blurb: "Incididunt ut labore",
    price: 225,
    image: item4FrontBackAsset.url,
    hoverImage: item4FrontAsset.url,
    sizes: sizeSet([]),
  },
  {
    id: "item-5",
    name: "Item 5",
    blurb: "Magna aliqua ut enim",
    price: 125,
    image: item5FrontBackAsset.url,
    hoverImage: item5FrontAsset.url,
    sizes: sizeSet(["L", "XL"]),
    imageFit: "contain",
  },
  {
    id: "item-6",
    name: "Item 6",
    blurb: "Quis nostrud exercitation",
    price: 125,
    image: item6FrontBackAsset.url,
    hoverImage: item6FrontAsset.url,
    sizes: sizeSet(["XS", "S"]),
    imageFit: "contain",
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
    team: "TEAM DALLAS JKT",
    rivalry: "BRIGHT BLUE AND GRAY",
    copy: "Luxury Style and Warmth",
    image: teamNavyAsset.url,
    productId: "item-1",
  },
  {
    team: "TEAM WASHINGTON JKT",
    rivalry: "TRIPLE BACK",
    copy: "Stand Out In Comfort",
    image: teamMaroonAsset.url,
    productId: "item-3",
  },
  {
    team: "TEAM WASHINGTON SWT",
    rivalry: "BRIGHT BURGUNDY & GOLD",
    copy: "Thick Cotton and Bright Colors",
    image: teamBlackAsset.url,
    productId: "item-4",
  },
  {
    team: "TEAM WASHINGTON SWT",
    rivalry: "BLACK & BURGUNDY",
    copy: "Impecable Embroidery",
    image: teamGreenAsset.url,
    productId: "item-5",
  },
];

export const colorSwatches = [
  { name: "Lorem navy", token: "bg-swatch-navy", count: 12 },
  { name: "Ipsum cream", token: "bg-swatch-cream", count: 9 },
  { name: "Dolor maroon", token: "bg-swatch-maroon", count: 7 },
  { name: "Amet black", token: "bg-swatch-black", count: 14 },
  { name: "Elit green", token: "bg-swatch-green", count: 5 },
  { name: "Sed grey", token: "bg-swatch-grey", count: 8 },
];

export const trustMessages = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Incididunt ut labore et dolore",
  "Magna aliqua ut enim ad minim",
];

export const footerGroups = [
  {
    heading: "Shop",
    links: ["Lorem ipsum", "Dolor sit amet", "Consectetur elit", "Sed eiusmod", "Tempor labore"],
  },
  {
    heading: "Support",
    links: ["Incididunt ut", "Labore dolore", "Magna aliqua", "Enim ad minim", "Quis nostrud"],
  },
  {
    heading: "About",
    links: ["Exercitation", "Ullamco laboris", "Nisi aliquip", "Ex ea commodo", "Consequat duis"],
  },
  {
    heading: "Legal",
    links: ["Aute irure", "In reprehenderit", "Voluptate velit", "Esse cillum", "Fugiat nulla"],
  },
];

export const regions = {
  countries: ["Lorem States", "Ipsum Kingdom", "Dolor Republic", "Amet Federation"],
  currencies: ["LRM $", "IPS €", "DLR £", "AMT ¥"],
  languages: ["Lorem (LM)", "Ipsum (IP)", "Dolor (DL)", "Amet (AM)"],
};

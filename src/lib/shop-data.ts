import jacketNavy from "@/assets/jacket-navy.jpg";
import jacketCream from "@/assets/jacket-cream.jpg";
import jacketMaroon from "@/assets/jacket-maroon.jpg";
import jacketBlack from "@/assets/jacket-black.jpg";
import jacketGreen from "@/assets/jacket-green.jpg";
import jacketGrey from "@/assets/jacket-grey.jpg";
import lineupItem1Asset from "@/assets/lineup-item-1.png.asset.json";
import lineupItem2Asset from "@/assets/lineup-item-2.png.asset.json";
import lineupItem3Asset from "@/assets/lineup-item-3.jpeg.asset.json";
import lineupItem4Asset from "@/assets/lineup-item-4.png.asset.json";
import lineupItem5Asset from "@/assets/lineup-item-5.png.asset.json";
import lineupItem6Asset from "@/assets/lineup-item-6.png.asset.json";
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
  "Lorem ipsum dolor sit amet — consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation",
];

export type MegaColumn = { heading: string; links: string[] };

export type NavItem = {
  label: string;
  columns: MegaColumn[];
};

const loremLinks = (n: number, seed: string) =>
  [
    "Lorem ipsum",
    "Dolor sit amet",
    "Consectetur",
    "Adipiscing elit",
    "Sed do eiusmod",
    "Tempor incididunt",
    "Labore et dolore",
    "Magna aliqua",
  ]
    .slice(0, n)
    .map((l) => `${l} ${seed}`);

export const navItems: NavItem[] = [
  {
    label: "Men",
    columns: [
      { heading: "Lorem categoria", links: loremLinks(5, "i") },
      { heading: "Ipsum collectio", links: loremLinks(4, "ii") },
      { heading: "Dolor essentia", links: loremLinks(4, "iii") },
    ],
  },
  {
    label: "Women",
    columns: [
      { heading: "Amet lineae", links: loremLinks(5, "iv") },
      { heading: "Consectetur", links: loremLinks(4, "v") },
      { heading: "Adipiscing", links: loremLinks(3, "vi") },
    ],
  },
  {
    label: "Kids",
    columns: [
      { heading: "Elit parvus", links: loremLinks(4, "vii") },
      { heading: "Sed eiusmod", links: loremLinks(4, "viii") },
      { heading: "Tempor", links: loremLinks(3, "ix") },
    ],
  },
  {
    label: "New Arrivals",
    columns: [
      { heading: "Incididunt", links: loremLinks(4, "x") },
      { heading: "Ut labore", links: loremLinks(4, "xi") },
      { heading: "Magna aliqua", links: loremLinks(3, "xii") },
    ],
  },
  {
    label: "Sale",
    columns: [
      { heading: "Veniam", links: loremLinks(4, "xiii") },
      { heading: "Quis nostrud", links: loremLinks(3, "xiv") },
      { heading: "Exercitation", links: loremLinks(3, "xv") },
    ],
  },
  {
    label: "Discover",
    columns: [
      { heading: "Ullamco laboris", links: loremLinks(4, "xvi") },
      { heading: "Nisi ut aliquip", links: loremLinks(3, "xvii") },
      { heading: "Ex ea commodo", links: loremLinks(3, "xviii") },
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
    price: 348,
    image: lineupItem1Asset.url,
    hoverImage: jacketCream,
    sizes: sizeSet(["XS"]),
    badge: "Lorem",
  },
  {
    id: "item-2",
    name: "Item 2",
    blurb: "Consectetur adipiscing elit",
    price: 372,
    compareAt: 430,
    image: lineupItem2Asset.url,
    hoverImage: jacketMaroon,
    sizes: sizeSet(["S", "XL"]),
    badge: "Ipsum",
  },
  {
    id: "item-3",
    name: "Item 3",
    blurb: "Sed do eiusmod tempor",
    price: 329,
    image: lineupItem3Asset.url,
    hoverImage: jacketBlack,
    sizes: sizeSet(["M"]),
  },
  {
    id: "item-4",
    name: "Item 4",
    blurb: "Incididunt ut labore",
    price: 395,
    image: lineupItem4Asset.url,
    hoverImage: jacketGreen,
    sizes: sizeSet([]),
  },
  {
    id: "item-5",
    name: "Item 5",
    blurb: "Magna aliqua ut enim",
    price: 310,
    compareAt: 360,
    image: lineupItem5Asset.url,
    hoverImage: jacketGrey,
    sizes: sizeSet(["L", "XL"]),
    badge: "Dolor",
  },
  {
    id: "item-6",
    name: "Item 6",
    blurb: "Quis nostrud exercitation",
    price: 415,
    image: lineupItem6Asset.url,
    hoverImage: jacketNavy,
    sizes: sizeSet(["XS", "S"]),
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
    team: "Team Lorem",
    rivalry: "Lorem vs Ipsum",
    copy: "Consectetur adipiscing elit, sed do eiusmod tempor.",
    image: teamNavyAsset.url,
    productId: "item-1",
  },
  {
    team: "Team Ipsum",
    rivalry: "Ipsum vs Dolor",
    copy: "Incididunt ut labore et dolore magna aliqua veniam.",
    image: teamMaroonAsset.url,
    productId: "item-3",
  },
  {
    team: "Team Dolor",
    rivalry: "Dolor vs Amet",
    copy: "Quis nostrud exercitation ullamco laboris nisi ut.",
    image: teamBlackAsset.url,
    productId: "item-4",
  },
  {
    team: "Team Amet",
    rivalry: "Amet vs Lorem",
    copy: "Duis aute irure dolor in reprehenderit voluptate.",
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

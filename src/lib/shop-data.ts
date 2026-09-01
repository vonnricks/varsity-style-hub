import jacketNavy from "@/assets/jacket-navy.jpg";
import jacketCream from "@/assets/jacket-cream.jpg";
import jacketMaroon from "@/assets/jacket-maroon.jpg";
import jacketBlack from "@/assets/jacket-black.jpg";
import jacketGreen from "@/assets/jacket-green.jpg";
import jacketGrey from "@/assets/jacket-grey.jpg";
import tileVarsity from "@/assets/tile-varsity.jpg";
import tilePatches from "@/assets/tile-patches.jpg";
import tileBomber from "@/assets/tile-bomber.jpg";
import tileAccessories from "@/assets/tile-accessories.jpg";

export const BRAND = "Woolworks";

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
    image: jacketNavy,
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
    image: jacketCream,
    hoverImage: jacketMaroon,
    sizes: sizeSet(["S", "XL"]),
    badge: "Ipsum",
  },
  {
    id: "item-3",
    name: "Item 3",
    blurb: "Sed do eiusmod tempor",
    price: 329,
    image: jacketMaroon,
    hoverImage: jacketBlack,
    sizes: sizeSet(["M"]),
  },
  {
    id: "item-4",
    name: "Item 4",
    blurb: "Incididunt ut labore",
    price: 395,
    image: jacketBlack,
    hoverImage: jacketGreen,
    sizes: sizeSet([]),
  },
  {
    id: "item-5",
    name: "Item 5",
    blurb: "Magna aliqua ut enim",
    price: 310,
    compareAt: 360,
    image: jacketGreen,
    hoverImage: jacketGrey,
    sizes: sizeSet(["L", "XL"]),
    badge: "Dolor",
  },
  {
    id: "item-6",
    name: "Item 6",
    blurb: "Quis nostrud exercitation",
    price: 415,
    image: jacketGrey,
    hoverImage: jacketNavy,
    sizes: sizeSet(["XS", "S"]),
  },
];

export const categoryPills = [
  "Lorem ipsum",
  "Dolor sit",
  "Amet elit",
  "Consectetur",
  "Adipiscing",
  "Eiusmod tempor",
  "Incididunt",
  "Labore magna",
];

export const categoryTiles = [
  { title: "Lorem ipsum", copy: "Dolor sit amet", image: tileVarsity },
  { title: "Consectetur", copy: "Adipiscing elit sed", image: tilePatches },
  { title: "Eiusmod tempor", copy: "Incididunt ut labore", image: tileBomber },
  { title: "Magna aliqua", copy: "Ut enim ad minim", image: tileAccessories },
  { title: "Veniam quis", copy: "Nostrud exercitation", image: tileBomber },
  { title: "Ullamco laboris", copy: "Nisi ut aliquip ex", image: tilePatches },
  { title: "Ea commodo", copy: "Duis aute irure dolor", image: tileVarsity },
  { title: "Reprehenderit", copy: "In voluptate velit esse", image: tileAccessories },
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

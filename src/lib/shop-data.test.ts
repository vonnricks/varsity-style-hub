// @ts-nocheck -- run with bun test; Bun test types are not part of the app build.
import { expect, test, mock } from "bun:test";
import { plugin } from "bun";

plugin({ name: "test-images", setup(build) {
  build.onLoad({ filter: /\.(jpg|png|PNG|JPG)$/ }, ({ path }) => ({ contents: `export default ${JSON.stringify(path)}`, loader: "js" }));
} });
const { products } = await import("./shop-data");

test("Raven City Puffer Vest costs $125", () => {
  expect(products.find(p => p.name === "Raven City Puffer Vest")?.price).toBe(125);
});
test("Raven City Puffer Vest offers all sizes M through 4XL", () => {
  expect(products.find(p => p.name === "Raven City Puffer Vest")?.sizes).toEqual([
    { label: "M" }, { label: "L" }, { label: "XL" }, { label: "2XL" }, { label: "3XL" }, { label: "4XL" },
  ]);
});

test("Raven City's existing hero link resolves to its orderable Wix listing", async () => {
  const local = products.find(p => p.name === "Raven City Puffer Vest");
  const storeProduct = { ...local, price: 90, id: "dbdbdcee-fa8c-4c88-8afc-0af30be05170", local: undefined, variantIdBySize: { M: "wix-medium" }, image: "store-image" };
  mock.module("./wix-products", () => ({
    fetchWixProducts: async () => [storeProduct],
    fetchWixProduct: async () => storeProduct,
  }));
  const { productQueryOptions } = await import("./use-products");
  const resolved = await productQueryOptions("item-10").queryFn();
  expect(resolved.id).toBe("dbdbdcee-fa8c-4c88-8afc-0af30be05170");
  expect(resolved.local).not.toBe(true);
  expect(resolved.variantIdBySize.M).toBe("wix-medium");
  expect(resolved.image).toBe(local.image);
  expect(resolved.price).toBe(125);
});

test("District Legacy (We Dem Boyz) Varsity Jacket costs $225", () => {
  expect(products.find(p => p.name === "District Legacy Varsity Jacket")?.price).toBe(225);
});

test("We Dem Boyz (Dallas Legacy) jacket carries the Buy One Get One Free badge", async () => {
  const dallas = {
    id: "e6d91c9a-77bf-4d6a-ba25-bd47e525117a",
    name: "Dallas Legacy Varsity Jacket",
    blurb: "", price: 225, image: "store-image", hoverImage: "store-image",
    sizes: [{ label: "M" }],
  };
  mock.module("./wix-products", () => ({
    fetchWixProducts: async () => [dallas],
    fetchWixProduct: async () => dallas,
  }));
  const { productsQueryOptions } = await import("./use-products");
  const lineup = await productsQueryOptions.queryFn();
  expect(lineup.find(p => p.id === dallas.id)?.badge).toBe("Buy One Get One Free");
});
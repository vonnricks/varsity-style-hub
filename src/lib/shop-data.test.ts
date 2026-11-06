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
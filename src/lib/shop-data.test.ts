// @ts-nocheck -- run with bun test; Bun test types are not part of the app build.
import { expect, test } from "bun:test";
import { plugin } from "bun";

plugin({ name: "test-images", setup(build) {
  build.onLoad({ filter: /\.(jpg|png|PNG|JPG)$/ }, ({ path }) => ({ contents: `export default ${JSON.stringify(path)}`, loader: "js" }));
} });
const { products } = await import("./shop-data");

test("Raven City Puffer Vest costs $90", () => {
  expect(products.find(p => p.name === "Raven City Puffer Vest")?.price).toBe(90);
});
test("Raven City Puffer Vest offers all sizes M through 4XL", () => {
  expect(products.find(p => p.name === "Raven City Puffer Vest")?.sizes).toEqual([
    { label: "M" }, { label: "L" }, { label: "XL" }, { label: "2XL" }, { label: "3XL" }, { label: "4XL" },
  ]);
});
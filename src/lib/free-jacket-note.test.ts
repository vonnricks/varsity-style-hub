// @ts-nocheck -- run with bun test.
import { expect, test } from "bun:test";
import { offersFreeJacketNote, freeJacketNote, appendBuyerNote } from "./free-jacket-note";

test("District Legacy offers the free-jacket size note, other jackets do not", () => {
  expect(offersFreeJacketNote({ id: "e6d91c9a-77bf-4d6a-ba25-bd47e525117a", name: "Dallas Legacy Varsity Jacket" })).toBe(true);
  expect(offersFreeJacketNote({ id: "item-4", name: "District Legacy Varsity Jacket" })).toBe(true);
  expect(offersFreeJacketNote({ id: "item-2", name: "Capital Gold Varsity Jacket" })).toBe(false);
});
test("Buyer's free-jacket size is preserved with the order note", () => {
  expect(freeJacketNote("  4XL  ")).toBe("We Dem Boyz / District Legacy — free jacket size: 4XL");
  expect(freeJacketNote(" ")).toBeUndefined();
  expect(appendBuyerNote("Existing delivery note", "Free jacket: XL")).toBe("Existing delivery note\nFree jacket: XL");
});
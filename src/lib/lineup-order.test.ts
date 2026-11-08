// @ts-nocheck -- run with bun test.
import { expect, test } from "bun:test";
import { groupVests } from "./lineup-order";

test("The Lineup groups all vests side by side without losing products", () => {
  const names = ["Raven City Puffer Vest", "DMV Culture Collective Hoodie", "District Shadow Puffer Vest", "Burgundy Capital Puffer Vest", "District Legacy Varsity Jacket"];
  const result = groupVests(names.map(name => ({ name })));
  expect(result.map(item => item.name)).toEqual([
    "Raven City Puffer Vest", "District Shadow Puffer Vest", "Burgundy Capital Puffer Vest", "DMV Culture Collective Hoodie", "District Legacy Varsity Jacket",
  ]);
});
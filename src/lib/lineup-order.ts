export function groupVests<T extends { name: string }>(items: T[]): T[] {
  const vests = items.filter((item) => /\bvest\b/i.test(item.name));
  if (vests.length < 2) return items;
  const firstVest = items.findIndex((item) => /\bvest\b/i.test(item.name));
  return [
    ...items.slice(0, firstVest),
    ...vests,
    ...items.slice(firstVest).filter((item) => !/\bvest\b/i.test(item.name)),
  ];
}
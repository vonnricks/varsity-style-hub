export const DISTRICT_LEGACY_ID = "e6d91c9a-77bf-4d6a-ba25-bd47e525117a";

export function offersFreeJacketNote(product: { id: string; name: string }): boolean {
  return product.id === DISTRICT_LEGACY_ID ||
    product.name.trim().toLowerCase() === "district legacy varsity jacket";
}

export function freeJacketNote(value: string): string | undefined {
  const text = value.trim();
  return text ? `We Dem Boyz / District Legacy — free jacket size: ${text}` : undefined;
}

export function appendBuyerNote(existing: string | undefined, note: string): string {
  const combined = existing ? `${existing}\n${note}` : note;
  if (combined.length > 1000) throw new Error("Your order notes are full. Please shorten the note.");
  return combined;
}
import { wixFetch } from "./wix-client";
import { WIX_STORES_APP_ID } from "./wix-config";

export type WixCartLineItem = {
  id: string;
  catalogItemId: string | undefined;
  variantId: string | undefined;
  name: string;
  size: string | undefined;
  image: string | undefined;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
};

export type WixCart = {
  id: string | null;
  lineItems: WixCartLineItem[];
  subtotal: number;
};

const EMPTY_CART: WixCart = { id: null, lineItems: [], subtotal: 0 };

type RawLineItem = {
  id: string;
  name?: { original?: string };
  quantityInfo?: { quantity?: number; confirmedQuantity?: number; requestedQuantity?: number };
  pricing?: { unitPrice?: { amount?: string }; totalPrice?: { amount?: string } };
  source?: {
    catalogReference?: { catalogItemId?: string; options?: { variantId?: string } };
    rootCatalogItemId?: string;
  };
  attributes?: {
    image?: { url?: string };
    descriptionLines?: { name?: { original?: string }; plainText?: { original?: string } }[];
  };
};
type RawCart = { id?: string; lineItems?: RawLineItem[]; subtotal?: { amount?: string } };

function extractSize(li: RawLineItem): string | undefined {
  const lines = li.attributes?.descriptionLines ?? [];
  return lines.find((l) => l.name?.original === "Size")?.plainText?.original;
}

function mapCart(raw: RawCart | null | undefined): WixCart {
  if (!raw) return EMPTY_CART;
  const lineItems: WixCartLineItem[] = (raw.lineItems ?? []).map((li) => ({
    id: li.id,
    catalogItemId: li.source?.catalogReference?.catalogItemId ?? li.source?.rootCatalogItemId,
    variantId: li.source?.catalogReference?.options?.variantId,
    name: li.name?.original ?? "Item",
    size: extractSize(li),
    image: li.attributes?.image?.url,
    quantity:
      li.quantityInfo?.quantity ?? li.quantityInfo?.confirmedQuantity ?? li.quantityInfo?.requestedQuantity ?? 1,
    unitPrice: Number(li.pricing?.unitPrice?.amount ?? 0),
    lineTotal: Number(li.pricing?.totalPrice?.amount ?? 0),
  }));
  return {
    id: raw.id ?? null,
    lineItems,
    subtotal: raw.subtotal?.amount != null ? Number(raw.subtotal.amount) : lineItems.reduce((s, l) => s + l.lineTotal, 0),
  };
}

export async function getCurrentCart(): Promise<WixCart> {
  const data = await wixFetch<{ cart?: RawCart }>(
    "https://www.wixapis.com/ecom/v2/carts/current",
    { method: "GET" },
    { allow404: true },
  );
  return mapCart(data?.cart);
}

export async function addToCart(
  catalogItemId: string,
  variantId: string | undefined,
  quantity = 1,
): Promise<WixCart> {
  const catalogReference: { catalogItemId: string; appId: string; options?: { variantId: string } } = {
    catalogItemId,
    appId: WIX_STORES_APP_ID,
  };
  if (variantId) catalogReference.options = { variantId };

  const data = await wixFetch<{ cart: RawCart }>(
    "https://www.wixapis.com/ecom/v2/carts/current/add-line-items",
    {
      method: "POST",
      body: JSON.stringify({ catalogItems: [{ catalogReference, quantity }] }),
    },
  );
  return mapCart(data?.cart);
}

export async function updateLineItemQuantity(lineItemId: string, quantity: number): Promise<WixCart> {
  if (quantity <= 0) return removeLineItem(lineItemId);
  const data = await wixFetch<{ cart: RawCart }>(
    "https://www.wixapis.com/ecom/v2/carts/current/update-line-items",
    {
      method: "POST",
      body: JSON.stringify({ lineItems: [{ lineItemId, quantity: { newQuantity: quantity } }] }),
    },
  );
  return mapCart(data?.cart);
}

export async function removeLineItem(lineItemId: string): Promise<WixCart> {
  const data = await wixFetch<{ cart: RawCart }>(
    "https://www.wixapis.com/ecom/v2/carts/current/remove-line-items",
    {
      method: "POST",
      body: JSON.stringify({ lineItemIds: [lineItemId] }),
    },
  );
  return mapCart(data?.cart);
}

export async function getCheckoutUrl(cartId: string): Promise<string> {
  const data = await wixFetch<{ checkoutUrl: string }>(
    `https://www.wixapis.com/ecom/v2/carts/${cartId}/get-checkout-url`,
    { method: "POST", body: JSON.stringify({}) },
  );
  if (!data?.checkoutUrl) throw new Error("Wix did not return a checkout URL");
  return data.checkoutUrl;
}

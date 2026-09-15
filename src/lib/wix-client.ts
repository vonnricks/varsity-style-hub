import { WIX_CLIENT_ID } from "./wix-config";

const TOKEN_ENDPOINT = "https://www.wixapis.com/oauth2/token";
const STORAGE_KEY = "wix_visitor_tokens";

type StoredTokens = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

// SSR requests have no localStorage, so they fall back to this in-memory copy
// (each server render just mints a fresh anonymous token instead).
let memoryTokens: StoredTokens | null = null;

function readStoredTokens(): StoredTokens | null {
  if (typeof window === "undefined") return memoryTokens;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredTokens) : null;
  } catch {
    return null;
  }
}

function writeStoredTokens(tokens: StoredTokens) {
  memoryTokens = tokens;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
  } catch {
    // Private browsing / storage disabled — in-memory copy still works for this request.
  }
}

function toStoredTokens(data: {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}): StoredTokens {
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    // Refresh a minute early so a near-expiry token never gets used for a real request.
    expiresAt: Date.now() + data.expires_in * 1000 - 60_000,
  };
}

async function requestAnonymousTokens(): Promise<StoredTokens> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId: WIX_CLIENT_ID, grantType: "anonymous" }),
  });
  if (!res.ok) {
    throw new Error(`Failed to get a Wix visitor token: ${res.status}`);
  }
  return toStoredTokens(await res.json());
}

async function refreshTokens(refreshToken: string): Promise<StoredTokens> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken, grantType: "refresh_token" }),
  });
  if (!res.ok) {
    return requestAnonymousTokens();
  }
  return toStoredTokens(await res.json());
}

async function getAccessToken(): Promise<string> {
  const stored = readStoredTokens();
  if (stored && stored.expiresAt > Date.now()) {
    return stored.accessToken;
  }
  const fresh = stored
    ? await refreshTokens(stored.refreshToken)
    : await requestAnonymousTokens();
  writeStoredTokens(fresh);
  return fresh.accessToken;
}

export class WixApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function wixFetch<T>(
  url: string,
  init: RequestInit = {},
  options: { allow404?: boolean } = {},
): Promise<T | null> {
  const accessToken = await getAccessToken();
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
      Authorization: accessToken,
    },
  });

  if (res.status === 404 && options.allow404) {
    return null;
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new WixApiError(res.status, `Wix API error ${res.status} on ${url}: ${body}`);
  }

  if (res.status === 204) return null;
  return (await res.json()) as T;
}

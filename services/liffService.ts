import { useEffect, useState } from "react";
import liff from "@line/liff";

let initialized = false;

async function initLiff() {
  if (!initialized) {
    try {
      const LIFFID = "2003536696-gwwkQzpx";
      await liff.init({ liffId: LIFFID });
      initialized = true;
    } catch (error) {
      console.error("Error initializing LIFF:", error);
    }
  }
}

export function useLiff() {
  const [liffInstance, setLiffInstance] = useState<typeof liff | null>(null);

  useEffect(() => {
    initLiff().then(() => {
      setLiffInstance(liff);
    });
  }, []);

  return liffInstance;
}

export async function getUserProfileImage(): Promise<string | null> {
  const liff = useLiff();

  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  const profile = await liff.getProfile();
  return profile.pictureUrl ?? null;
}

export async function getUserId(): Promise<string | null> {
  const liff = useLiff();

  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  const profile = await liff.getProfile();
  return profile.userId;
}

export async function getUserDisplayName(): Promise<string | null> {
  const liff = useLiff();

  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  const profile = await liff.getProfile();
  return profile.displayName;
}

export async function getUserToken(): Promise<string | null> {
  const liff = useLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  return liff.getIDToken();
}

export async function getAccessToken(): Promise<string | null> {
  const liff = useLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  return liff.getAccessToken();
}

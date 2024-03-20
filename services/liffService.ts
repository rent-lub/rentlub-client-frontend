import { useEffect, useState } from "react";
import liff from "@line/liff";

let liffInstance: typeof liff | null = null;
let initPromise: Promise<typeof liff> | null = null;

export function useLiff() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initPromise) {
      initPromise = initLiff();
    }

    initPromise.then((instance) => {
      liffInstance = instance;
      setInitialized(true);
    });

    return () => {
      initPromise = null;
    };
  }, []);

  return initialized ? liffInstance : null;
}

async function initLiff(): Promise<typeof liff> {
  try {
    const LIFFID = "2003536696-gwwkQzpx";
    await liff.init({ liffId: LIFFID });
    console.log("init liff suceess");
    return liff;
  } catch (error) {
    console.error("Error initializing LIFF:", error);
    throw error;
  }
}

export async function getUserProfileImage(): Promise<string | null> {
  const liff = liffInstance || useLiff();

  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  const profile = await liff.getProfile();
  console.log(profile.pictureUrl);
  return profile.pictureUrl ?? "";
}

export async function getUserId(): Promise<string | null> {
  const liff = liffInstance || useLiff();

  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  const profile = await liff.getProfile();
  console.log(profile);
  return profile.userId;
}

export async function getUserDisplayName(): Promise<string | null> {
  const liff = liffInstance || useLiff();

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

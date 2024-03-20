"use client";

import { useEffect, useState } from "react";
import liff from "@line/liff";

async function initLiff() {
  try {
    const liffID = "2003536696-gwwkQzpx";
    await liff.init({ liffId: liffID! });
    return liff;
  } catch (error) {
    console.error("Error initializing LIFF:", error);
    return null;
  }
}

export function useLiff() {
  const [liffInstance, setLiffInstance] = useState<typeof liff | null>(null);

  useEffect(() => {
    initLiff().then((liff) => {
      setLiffInstance(liff);
    });
  }, []);

  return liffInstance;
}

export async function getUserProfileImage(): Promise<string | null> {
  const liff = await initLiff();
  if (!liff) return null;

  if (!liff.isLoggedIn()) {
    liff.login();
  }

  const profile = await liff.getProfile();
  return profile.pictureUrl ?? "";
}

export async function getUserId(): Promise<string | null> {
  const liff = await initLiff();
  if (!liff) return null;

  if (!liff.isLoggedIn()) {
    liff.login();
  }

  const profile = await liff.getProfile();
  return profile.userId;
}

export async function getUserDisplayName(): Promise<string | null> {
  const liff = await initLiff();
  if (!liff) return null;

  if (!liff.isLoggedIn()) {
    liff.login();
  }

  const profile = await liff.getProfile();
  return profile.displayName;
}

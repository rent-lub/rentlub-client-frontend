"use client";

import { useEffect, useState } from "react";
import liff from "@line/liff";

export async function initLiff() {
  try {
    const LIFFID = process.env.NEXT_PUBLIC_LIFF_ID;
    await liff.init({ liffId: LIFFID! });
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

export async function getUserToken(): Promise<string | null> {
  const liff = await initLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  return liff.getIDToken();
}

export async function getAccessToken(): Promise<string | null> {
  const liff = await initLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }

  return liff.getAccessToken();
}

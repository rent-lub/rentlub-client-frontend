import liff from "@line/liff";
import { useEffect, useState } from "react";

let liffInstance: typeof liff | null = null;

export const initLiff = async (): Promise<typeof liff | null> => {
  try {
    if (!liffInstance) {
      const LIFFID = process.env.NEXT_PUBLIC_LIFF_IF;
      await liff.init({ liffId: LIFFID! });
      liffInstance = liff;
    }
    return liffInstance;
  } catch (error) {
    console.error("Error initializing LIFF:", error);
    return null;
  }
};

export const useLiff = () => {
  const [liffState, setLiffState] = useState<typeof liff | null>(null);

  useEffect(() => {
    initLiff().then((liff) => {
      setLiffState(liff);
    });
  }, []);

  return liffState;
};

export const getUserProfileImage = async (): Promise<string | null> => {
  const liff = await initLiff();
  if (!liff) return null;
  if (!liff.isLoggedIn()) {
    liff.login();
  }
  const profile = await liff.getProfile();
  return profile.pictureUrl ?? "";
};

export const getUserId = async (): Promise<string | null> => {
  const liff = await initLiff();
  if (!liff) return null;
  if (!liff.isLoggedIn()) {
    liff.login();
  }
  const profile = await liff.getProfile();
  return profile.userId;
};

export const getUserDisplayName = async (): Promise<string | null> => {
  const liff = await initLiff();
  if (!liff) return null;
  if (!liff.isLoggedIn()) {
    liff.login();
  }
  const profile = await liff.getProfile();
  return profile.displayName;
};

export const getUserToken = async (): Promise<string | null> => {
  const liff = await initLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }
  return liff.getIDToken();
};

export const getAccessToken = async (): Promise<string | null> => {
  const liff = await initLiff();
  if (!liff || !liff.isLoggedIn()) {
    return null;
  }
  return liff.getAccessToken();
};

"use client";
import { useEffect, useState } from "react";
import Shopping from "./shopping/pages";
import {
  getUserDisplayName,
  getUserId,
  getUserProfileImage,
  useLiff,
} from "~/services/liffService";

export default function Home() {
  const liff = useLiff();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const image = await getUserProfileImage();
      const id = await getUserId();
      const name = await getUserDisplayName();

      setProfileImage(image);
      setUserId(id);
      setDisplayName(name);
    }

    fetchData();

    console.log(profileImage);
  }, []);

  return (
    <main className="flex min-h-screen">
      <Shopping />
    </main>
  );
}

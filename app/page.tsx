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
  return (
    <main className="flex min-h-screen">
      <Shopping />
    </main>
  );
}

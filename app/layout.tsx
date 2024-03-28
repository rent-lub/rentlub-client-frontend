import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import StoreProvider from "./StoreProvider";
import "rsuite/dist/rsuite-no-reset.min.css";
import localFont from "next/font/local";

const lineSeed = localFont({
  src: [
    {
      path: "../fonts/LINESeedSansTH_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedSansTH_W_XBd.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedSansTH_W_He.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tang Wang Jeng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lineSeed.className}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}



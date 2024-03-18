import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import StoreProvider from "./StoreProvider";
import "rsuite/dist/rsuite-no-reset.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentlub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Preahvihear } from "next/font/google";
import "./globals.css";

const font = Preahvihear({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navnefest for Håkon",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

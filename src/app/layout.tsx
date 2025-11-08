import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gyanu | Portfolio",
  description: "Hey! 👋, I'm Gyaneshwar",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>{children}</body>
    </html>
  );
}

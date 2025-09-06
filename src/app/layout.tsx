import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const Font = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spark",
  description: "Develop by Fizora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Font.className} antialiased`}>{children}</body>
    </html>
  );
}

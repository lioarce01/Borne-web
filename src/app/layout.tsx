import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "- Borne -",
  description:
    "Borne is a free and open source CLI tool for managin github repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

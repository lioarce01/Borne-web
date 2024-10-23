import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "./icon.svg",
  title: "Borne - Your GitHub CLI Companion",
  description:
    "Borne is a free and open-source CLI tool designed to simplify the management of GitHub repositories, allowing you to handle your workflows more efficiently.",
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

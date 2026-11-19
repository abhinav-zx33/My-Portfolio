import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav Udayan | Portfolio",
  description:
    "Portfolio of Abhinav Udayan — software development, AI, and data analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

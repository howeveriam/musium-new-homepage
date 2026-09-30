import type { Metadata } from "next";
import "./globals.css";
import "./musium.css";

export const metadata: Metadata = {
  title: "Musium | Piano Lessons with Dami Jeong",
  description: "Private piano lessons for children and adults in Hoffman Estates, Schaumburg and online.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [{ url: "/musium-icon-v2.png", type: "image/png" }],
    shortcut: "/musium-icon-v2.png",
    apple: "/musium-icon-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

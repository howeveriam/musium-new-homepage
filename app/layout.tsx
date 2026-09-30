import type { Metadata } from "next";
import "./globals.css";
import "./musium.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://musium.org"),
  title: "Piano Lessons for Schaumburg | Musium · Dami Jeong",
  description: "Award-winning private piano lessons for children and adults in the Schaumburg area. Study with Dami Jeong at her Hoffman Estates studio or online.",
  alternates: { canonical: "/" },
  openGraph: { title: "Piano Lessons for Schaumburg | Musium", description: "Private piano lessons with award-winning teacher Dami Jeong. Hoffman Estates studio and online lessons for children and adults.", url: "/", siteName: "Musium", locale: "en_US", type: "website" },
  twitter: { card: "summary", title: "Piano Lessons for Schaumburg | Musium", description: "Private piano lessons with Dami Jeong, serving Schaumburg from her Hoffman Estates studio and online." },
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

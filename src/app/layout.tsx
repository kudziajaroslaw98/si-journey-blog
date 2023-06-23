import { Inter } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journey - blog",
  viewport: "width=device-width, initial-scale=1",
  description:
    "Explore Journey's blog - your go-to guide for self-improvement and personal growth. Dive into our articles to inspire change, encourage positive habits, and lead a fulfilling life. Begin your journey towards becoming the best version of yourself today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-emperor-950`}>{children}</body>
    </html>
  );
}

import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/header"));
const Banner = dynamic(() => import("@/components/banner"));
// @ts-ignore
// dynamic(() => import("easymde/dist/easymde.min.css"));
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
      <body className={`bg-emperor-950`}>
        <div className="max-w-7xl mx-auto">
          <Header></Header>
          <Banner></Banner>
          {children}
        </div>
      </body>
    </html>
  );
}

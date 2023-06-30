import './globals.css';
import dynamic from 'next/dynamic';
import React from 'react';

const Header = dynamic(() => import('@/components/header.tsx'));
// const Banner = dynamic(() => import('@/components/banner.tsx'))
// @ts-ignore
dynamic(() => import('easymde/dist/easymde.min.css'));
export const metadata = {
  metadataBase: new URL(
    'https://si-journey-blog-git-develop-kj44389.vercel.app/'
  ),
  title: 'Journey - blog',
  viewport: 'width=device-width, initial-scale=1.0',
  description:
    "Explore Journey's blog - your go-to guide for self-improvement and personal growth. Dive into our articles to inspire change, encourage positive habits, and lead a fulfilling life. Begin your journey towards becoming the best version of yourself today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-emperor-950 text-emperor-100 no-scrollbar font-inter overflow-x-clip">
        <div className="w-full">
          <div className="">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

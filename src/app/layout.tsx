import {Analytics} from '@vercel/analytics/react';
import {Metadata} from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
import React from 'react';
// eslint-disable-next-line camelcase
import {Inter, Open_Sans} from 'next/font/google';
import Footer from '@/components/footer.tsx';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
});

const Header = dynamic(() => import('@/components/header.tsx'));

export const metadata: Metadata = {
    metadataBase: new URL(`https://si-journey-blog.vercel.app/`),
    title: 'Journey - blog',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
        type: 'website',
        url: `https://si-journey-blog.vercel.app/`,
        title: 'Journey - blog',
        description:
            "Explore Journey's blog - your go-to guide for self-improvement and personal growth. Dive into our articles to inspire change, encourage positive habits, and lead a fulfilling life. Begin your journey towards becoming the best version of yourself today.",
        images: [
            {
                url: `https://si-journey-blog.vercel.app/images/blog-banner.webp`,
                width: 1200,
                height: 630,
                alt: 'Journey Blog',
            },
        ],
    },
    authors: [
        {name: 'Jarek Kudzia', url: 'https://github.com/kudziajaroslaw98'},
    ],
    keywords: [
        'self-improvement',
        'personal growth',
        'blog',
        'journey',
        'motivation',
        'mindset',
        'fighting addictions',
    ],
    creator: 'Jarek Kudzia',
    description:
        "Explore Journey's blog - your go-to guide for self-improvement and personal growth. Dive into our articles to inspire change, encourage positive habits, and lead a fulfilling life. Begin your journey towards becoming the best version of yourself today.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={`${inter.className} ${openSans.className}`}>
        <body className='no-scrollbar overflow-x-clip bg-emperor-950 font-inter text-emperor-100'>
        <div className='w-full'>
            <div className=''>
                <Header/>

                <div>{children}</div>

                <Footer/>
            </div>
        </div>
        <Analytics/>
        </body>
        </html>
    );
}

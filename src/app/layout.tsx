import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import dynamic from 'next/dynamic';
import React from 'react';
import Footer from '@/components/footer.tsx';

const Header = dynamic(() => import('@/components/header.tsx'));
// @ts-ignore
dynamic(() => import('easymde/dist/easymde.min.css'));
export const metadata: Metadata = {
	metadataBase: new URL(
		'https://si-journey-blog-git-develop-kj44389.vercel.app/'
	),
	title: 'Journey - blog',
	viewport: 'width=device-width, initial-scale=1.0',
	openGraph: {
		type: 'website',
		url: 'https://si-journey-blog-git-develop-kj44389.vercel.app/',
		title: 'Journey - blog',
		description:
			"Explore Journey's blog - your go-to guide for self-improvement and personal growth. Dive into our articles to inspire change, encourage positive habits, and lead a fulfilling life. Begin your journey towards becoming the best version of yourself today.",
		images: [
			{
				url: 'https://si-journey-blog-git-develop-kj44389.vercel.app/images/blog-banner.webp',
				width: 1200,
				height: 630,
				alt: 'Journey Blog',
			},
		],
	},
	authors: [
		{ name: 'Jarek Kudzia', url: 'https://github.com/kudziajaroslaw98' },
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
		<html lang='en' className='scroll-smooth'>
			<body className='bg-emperor-950 text-emperor-100 no-scrollbar font-inter overflow-x-clip'>
				<div className='w-full'>
					<div className=''>
						<Header />

						<div className='pt-16 pb-16'>{children}</div>

						<Footer />
					</div>
				</div>
				<Analytics />
			</body>
		</html>
	);
}

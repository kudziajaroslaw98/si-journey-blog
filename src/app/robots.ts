import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/sitemap.xml', '/sitemap', '/robots.txt', '/favicon.ico'],
			disallow: '/blog/studio/',
		},
		sitemap: `https://si-journey-blog.vercel.app/sitemap.xml`,
	};
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/blog/categories/all'],
			disallow: ['/blog/studio'],
		},
		sitemap: 'https://si-journey-blog.vercel.app/sitemap.xml',
	};
}

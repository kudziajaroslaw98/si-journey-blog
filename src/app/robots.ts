import { MetadataRoute } from 'next';
import getAbsolutePath from '@/utils/absolute-path.ts';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/blog/categories/all'],
			disallow: ['/blog/studio'],
		},
		sitemap: `${getAbsolutePath()}/sitemap.xml`,
	};
}

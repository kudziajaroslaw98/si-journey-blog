import { MetadataRoute } from 'next';
import getAbsolutePath from '@/utils/absolute-path.ts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { posts, categories } = await fetch(`${getAbsolutePath()}/api/sitemap`, {
		headers: {
			'Content-Type': 'application/json',
			'Cache-control': 'stale-while-revalidate, s-maxage=3600',
		},
		method: 'GET',
	}).then((res) => res.json());

	return [
		{
			url: `${getAbsolutePath()}/`,
			lastModified: new Date(),
		},
		{
			url: `${getAbsolutePath()}/blog/categories/all`,
			lastModified: new Date(),
		},
		...posts.map((post: string) => ({
			url: post,
			lastModified: new Date(),
		})),
		...categories.map((category: string) => ({
			url: category,
			lastModified: new Date(),
		})),
	];
}

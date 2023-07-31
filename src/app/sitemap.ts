import { MetadataRoute } from 'next';
import getAbsolutePath from '@/utils/absolute-path.ts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { posts, categories } = await fetch(`${getAbsolutePath()}/api/sitemap`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
	}).then((res) => res.json());

	return [
		{
			url: `${getAbsolutePath()}/`,
			lastModified: new Date(),
		},
		{
			url: `${getAbsolutePath()}/blog/category/all`,
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

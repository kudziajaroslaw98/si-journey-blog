import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { Category, Post } from '../../../../typings.ts';
import { clientFetch } from '@/sanity/lib/client.ts';

export async function GET() {
	const query = groq`*[_type == "post"]{ slug }`;
	const slugs: Post[] = await clientFetch(query);
	const postSlugRoutes = slugs.map((slug) => slug.slug.current);

	const query2 = groq`*[_type == "category"]{ slug }`;
	const categorySlugs: Category[] = await clientFetch(query2);
	const categorySlugRoutes = categorySlugs.map((slug) => slug.slug.current);

	const postRoutes = postSlugRoutes.map(
		(slug) => `https://si-journey-blog.vercel.app/blog/post/${slug}`
	);

	const categoryRoutes = categorySlugRoutes.map(
		(slug) => `https://si-journey-blog.vercel.app/blog/category/${slug}`
	);

	return NextResponse.json({ posts: postRoutes, categories: categoryRoutes });
}

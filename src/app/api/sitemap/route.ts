import { groq } from 'next-sanity';
import { clientFetch } from '@/sanity/lib/client.ts';
import getAbsolutePath from '@/utils/absolute-path.ts';
import { Category, Post } from '@/types/typings.ts';

function generateSiteMap(postRoutes: string[], categoryRoutes: string[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${getAbsolutePath()}/</loc>
       <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
     </url>
     <url>
       <loc>${getAbsolutePath()}/blog/category/all</loc>
       <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
     </url>
     ${postRoutes
						.map(
							(route: string) => `
           <url>
               <loc>${route}</loc>
               <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
           </url>`
						)
						.join('')}
     ${categoryRoutes
						.map(
							(route: string) => `
           <url>
               <loc>${route}</loc>
               <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
           </url>`
						)
						.join('')}
   </urlset>
 `;
}

export async function GET() {
	const query = groq`*[_type == "post"]{ slug }`;
	const query2 = groq`*[_type == "category"]{ slug }`;

	const slugs: Post[] = await clientFetch(query);
	const categorySlugs: Category[] = await clientFetch(query2);

	const postSlugRoutes = slugs.map((slug) => slug.slug.current);
	const categorySlugRoutes = categorySlugs.map((slug) => slug.slug.current);

	const postRoutes = postSlugRoutes.map(
		(slug) => `${getAbsolutePath()}/blog/post/${slug}`
	);

	const categoryRoutes = categorySlugRoutes.map(
		(slug) => `${getAbsolutePath()}/blog/category/${slug}`
	);

	const body = generateSiteMap(postRoutes, categoryRoutes);

	return new Response(body, {
		status: 200,
		headers: {
			'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
			'Content-Type': 'text/xml',
		},
	});
}

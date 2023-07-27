import { ImageResponse } from 'next/server';
import urlFor from '@/lib/urlFor.ts';
import getAbsolutePath from '@/utils/absolute-path.ts';

export const alt = 'Twitter Card Image';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
	const post = await fetch(
		`${getAbsolutePath()}/blog/post/${params.slug}/api/open-graph`
	).then((res) => res.json());

	return new ImageResponse(
		<img src={urlFor(post.mainImage, 1200).url()} alt={post.title} />,
		{
			...size,
		}
	);
}

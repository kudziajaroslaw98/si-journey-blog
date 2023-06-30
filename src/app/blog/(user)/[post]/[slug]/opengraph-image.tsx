import { ImageResponse } from 'next/server';
import urlFor from '@/lib/urlFor.ts';

export const alt = 'Twitter Card Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(
    `https://si-journey-blog-git-develop-kj44389.vercel.app/blog/post/${params.slug}/api`
  ).then((res) => res.json());

  return new ImageResponse(
    <img src={urlFor(post.mainImage).url()} alt={post.title} />,
    {
      ...size,
    }
  );
}

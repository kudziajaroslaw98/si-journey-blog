import { ImageResponse } from 'next/server';
import Image from 'next/image';
import urlFor from '@/lib/urlFor.ts';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetch(`/blog/post/${params.slug}`).then((res) =>
    res.json()
  );

  console.log(post);

  return new ImageResponse(
    <Image src={urlFor(post.mainImage).url()} alt="open graph image" />
  );
}

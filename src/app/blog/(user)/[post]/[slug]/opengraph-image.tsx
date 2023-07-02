import Head from 'next/head';
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
    (
      <div>
        <Head>
          <meta
            property="og:description"
            content={
              post.description ||
              "Explore Journey's blog - your go-to guide for self-improvement and personal growth."
            }
          />
          <meta
            property="og:title"
            content={`Journey Blog: ${post.title}` || 'Journey - blog'}
          />
          <meta
            property="og:image:url"
            content={urlFor(post.mainImage).url()}
          />
          <meta property="og:image:alt" content={post.title} />
          <meta property="og:image:width" content={size.width.toString()} />
          <meta property="og:image:height" content={size.height.toString()} />
          <meta property="og:site_name" content="Journey Blog" />
        </Head>

        <img src={urlFor(post.mainImage).url()} alt={post.title} />
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/server';

export const alt = 'Twitter Card Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(
    `https://si-journey-blog-git-develop-kj44389.vercel.app/blog/post/${params.slug}`
  ).then((res) => res.json());
  console.log(post);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  );
}

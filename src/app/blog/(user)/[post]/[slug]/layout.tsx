import React from 'react';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { Post } from '../../../../../../typings.ts';
import { clientFetch } from '@/sanity/lib/client.ts';

type Props = {
  slug: string;
};

export default async function Layout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: Props;
}) {
  const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `;

  const post: Post = await clientFetch(query, { slug });

  return (
    <>
      {/* eslint-disable-next-line react/no-children-prop */}
      <Head>
        <meta
          name="description"
          content={
            post.description ||
            "Explore Journey's blog - your go-to guide for self-improvement and personal growth."
          }
        />
        <meta
          property="og:description"
          content={
            post.description ||
            "Explore Journey's blog - your go-to guide for self-improvement and personal growth."
          }
        />
        <meta
          name="title"
          content={`Journey Blog: ${post.title}` || 'Journey - blog'}
        />
        <meta
          property="og:title"
          content={`Journey Blog: ${post.title}` || 'Journey - blog'}
        />
      </Head>
      {children}
    </>
  );
}

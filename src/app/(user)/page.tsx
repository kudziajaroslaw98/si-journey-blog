import BlogList from "@/components/blog-list";
import PreviewBlogList from "@/components/preview-blog-list";
import PreviewSuspense from "@/components/preview-suspense";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";

export const revalidate = 10;

const clientFetch = cache(client.fetch.bind(client));

const query2 = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export default async function Page() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <>
        <h1>preview mode</h1>
        <PreviewSuspense fallback="Loading...">
          <PreviewBlogList query={query2} />
        </PreviewSuspense>
      </>
    );
  }
  const posts = await clientFetch(query2);
  return <BlogList posts={posts} />;
}

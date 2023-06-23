import BlogList from "@/components/blog-list";
import PreviewBlogList from "@/components/preview-blog-list";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import { lazy } from "react";
import { clientFetch, getClient } from "../../../sanity/lib/client";
import Link from "next/link";

const PreviewProvider = lazy(() => import("@/components/preview-provider"));

export const fetchPostsQuery = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `;
  const slugs: Post[] = await clientFetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Page = async () => {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN! }
    : undefined;
  const client = getClient(preview);
  const posts = await client.fetch(fetchPostsQuery);
  return (
    <>
      <div className="relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-left m-6">
            <span className="text-sm tracking-tight text-gray-100">
              {preview ? "Draft Mode" : "Not in Draft Mode"}
            </span>
          </div>
          {preview ? (
            <PreviewProvider token={preview?.token}>
              <PreviewBlogList posts={posts} query={fetchPostsQuery} />
            </PreviewProvider>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </div>
      <div className="text-left">
        <Link
          href="/studio"
          className="mx-2 my-4 inline-block rounded-full border border-gray-200 px-4 py-1 text-sm font-semibold text-gray-600 hover:border-transparent hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        >
          Open Studio
        </Link>
        {preview && (
          <>
            <Link
              href="/api/draft/exit"
              className="mx-2 my-4 inline-block rounded-full border border-gray-200 px-4 py-1 text-sm font-semibold text-gray-600 hover:border-transparent hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              Stop previewing drafts
            </Link>
          </>
        )}
        {!preview && (
          <>
            <Link
              href="/api/draft"
              className="mx-2 my-4 inline-block rounded-full border border-gray-200 px-4 py-1 text-sm font-semibold text-gray-600 hover:border-transparent hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              Preview drafts
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Page;

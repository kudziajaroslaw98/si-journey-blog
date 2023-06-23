"use client";

import BlogList from "./blog-list";
import { useLiveQuery } from "@sanity/preview-kit";

type Props = {
  posts: Post[];
  query: string;
};

export default function PreviewBlogList({ posts, query }: Props) {
  const [data, loading] = useLiveQuery(posts, query);

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <>
      <BlogList posts={data} />
    </>
  );
}

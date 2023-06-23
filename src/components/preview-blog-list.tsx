"use client";

import { usePreview } from "../../sanity/lib/sanity.preview";
import BlogList from "./blog-list";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  console.log("loading..", posts);
  return <BlogList posts={posts} />;
}

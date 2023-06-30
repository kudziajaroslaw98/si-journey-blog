'use client'

import { useLiveQuery } from '@sanity/preview-kit'
import BlogList from './blog-list.tsx'
import { Post } from '../../typings.ts'

type Props = {
  posts: Post[]
  query: string
}

export default function PreviewBlogList({ posts, query }: Props) {
  const [data, loading] = useLiveQuery(posts, query)

  if (loading) {
    return <>Loading...</>
  }
  return (
    <div>
      <BlogList posts={data} />
    </div>
  )
}

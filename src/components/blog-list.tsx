import PostCardComponent from '@/components/post-card.component.tsx'
import { Post } from '../../typings.ts'

export interface Props {
  posts: Post[]
}

function BlogList({ posts }: Props) {
  return (
    <div>
      <div className="flex flex-wrap justify-center pb-24">
        {posts?.map((post) => (
          <PostCardComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default BlogList

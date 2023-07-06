import PostCardComponent from '@/components/post-card.component.tsx';
import { Post } from '../../typings.ts';

export interface Props {
	posts: Post[];
	category?: string;
}

function BlogList({ posts, category }: Props) {
	return (
		<div className='flex flex-wrap w-full justify-center gap-x-4 gap-y-16'>
			{posts?.map((post, index) => (
				<PostCardComponent
					key={post._id}
					post={post}
					index={index}
					category={category}
				/>
			))}
		</div>
	);
}

export default BlogList;

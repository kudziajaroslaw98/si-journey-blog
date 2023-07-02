import PostCardComponent from '@/components/post-card.component.tsx';
import { Post } from '../../typings.ts';

export interface Props {
	posts: Post[];
}

function BlogList({ posts }: Props) {
	return (
		<div className='flex flex-wrap w-full justify-center md:justify-between gap-y-16'>
			{posts?.map((post, index) => (
				<PostCardComponent key={post._id} post={post} index={index} />
			))}
		</div>
	);
}

export default BlogList;

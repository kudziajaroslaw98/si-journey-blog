import HeartIcon from '@heroicons/react/24/solid/HeartIcon';

type PostCardLikeProps = {
	likes: number;
};

function PostCardLikesComponent({ likes }: PostCardLikeProps) {
	return (
		<div className='flex items-center justify-center gap-x-1'>
			<HeartIcon className='h-4 w-4' />
			<span className='text-sm'>{likes}</span>
		</div>
	);
}

export default PostCardLikesComponent;

import ChatBubbleLeftIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon';

type PostCardCommentsProps = {
	comments: number;
};

function PostCardCommentsComponent({ comments }: PostCardCommentsProps) {
	return (
		<div className='flex items-center justify-center gap-x-1'>
			<ChatBubbleLeftIcon title='Comments' className='h-4 w-4' />
			<span className='text-sm'>{comments}</span>
		</div>
	);
}

export default PostCardCommentsComponent;

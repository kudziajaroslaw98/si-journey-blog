import HeartIcon from '@heroicons/react/24/solid/HeartIcon';

type RatingStarsProps = {
	likes: number;
};

function RatingStarsComponent({ likes }: RatingStarsProps) {
	return (
		<div className='flex items-center justify-center gap-x-1'>
			<HeartIcon className='h-6 w-6' />
			<span>{likes}</span>
		</div>
	);
}

export default RatingStarsComponent;

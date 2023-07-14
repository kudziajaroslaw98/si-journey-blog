import Image from 'next/image';
import urlFor from '@/lib/urlFor.ts';
import ClientSiteRoute from '@/components/client-site-route.tsx';
import { Post } from '../../typings.ts';
import RatingStarsComponent from '@/components/rating-stars.component.tsx';

type PostCardProps = {
	post: Post;
	index: number;
};

function PostCardComponent({ post, index }: PostCardProps) {
	return (
		<ClientSiteRoute key={post._id} route={`/blog/post/${post.slug?.current}`}>
			<div className='post group flex h-[19rem] w-full flex-col overflow-hidden rounded-md bg-emperor-1000 shadow-lg transition-all'>
				<div className='relative h-[14.375rem] w-full drop-shadow-xl transition-transform duration-200 ease-out group-hover:rotate-1 group-hover:scale-105'>
					{post.mainImage ? (
						<Image
							className='object-cover object-left lg:object-center'
							src={urlFor(post.mainImage, 368).url()}
							alt={post.author.name}
							fetchPriority={index < 3 ? 'high' : 'low'}
							fill
						/>
					) : null}
				</div>

				<div className='flex h-full w-full flex-col justify-between p-4'>
					<div className='flex flex-col justify-between'>
						<span className='line-clamp-3 text-lg font-bold text-emperor-100 decoration-emperor-100 transition-all group-hover:underline group-hover:decoration-picton-blue-500 group-hover:decoration-2'>
							{post.title}
						</span>
					</div>

					<div className='flex w-full items-end justify-center space-x-4'>
						<div className='relative flex h-full items-center justify-center'>
							{post?.author?.image && (
								<Image
									className='min-h-[2rem] min-w-[2rem] rounded-full object-fill object-center'
									src={urlFor(post.author.image, 32).url()}
									alt={post.author.name}
									width={32}
									height={32}
								/>
							)}
						</div>

						<div className='flex w-full flex-col text-emperor-100'>
							<div className='flex w-full items-center justify-between'>
								<span className='text-xs'>{post.timeToRead}</span>
								<RatingStarsComponent likes={post.likes} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ClientSiteRoute>
	);
}

export default PostCardComponent;

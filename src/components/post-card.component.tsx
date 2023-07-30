import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import urlFor from '@/lib/urlFor.ts';
import ClientSiteRoute from '@/components/client-site-route.tsx';
import { Post } from '../../typings.ts';

const PostCardLikesComponent = dynamic(
	() => import('@/components/blog-list/post-card-likes.component.tsx')
);
const PostCardCommentsComponent = dynamic(
	() => import('@/components/blog-list/post-card-comments.component.tsx')
);

type PostCardProps = {
	post: Post;
	index: number;
};

function PostCardComponent({ post, index }: PostCardProps) {
	return (
		<ClientSiteRoute key={post._id} route={`/blog/post/${post.slug?.current}`}>
			<motion.div
				whileHover={{
					transitionTimingFunction: 'linear',
					scale: 1.02,
					transition: {
						duration: 0.1,
					},
				}}
				initial={{
					transitionTimingFunction: 'linear',
					opacity: 0,
					y: 120,
				}}
				animate={{
					opacity: 1,
					y: 0,
					transitionTimingFunction: 'linear',
					transition: {
						type: 'spring',
						bounce: 0.25,
						stiffness: 100,
						duration: 0.1,
						delay: index * 0.08,
					},
				}}
				className='post group flex h-[19rem] w-full flex-col overflow-hidden rounded-md bg-emperor-950 shadow-lg transition-all hover:scale-[1.02]'
			>
				<div className='relative h-[14.375rem] w-full drop-shadow-xl transition-transform duration-200'>
					{post.mainImage ? (
						<Image
							className='bg-emperor-200 object-cover object-left lg:object-center'
							src={urlFor(post.mainImage, 368).url()}
							alt={post.author.name}
							fetchPriority={index < 3 ? 'high' : 'low'}
							loading={index < 3 ? 'eager' : 'lazy'}
							sizes='90vw (max-width: 768px) 336px (max-width: 880px) 416px (max-width: 1024px) 304px (max-width: 1280px) 368px'
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
								<span className=''>{post.author.name}</span>
							</div>
							<div className='flex w-full items-center justify-between'>
								<span className='text-xs text-emperor-500'>{post.timeToRead}</span>
								<div className='flex gap-x-4'>
									<PostCardLikesComponent likes={post.likes} />
									<PostCardCommentsComponent comments={post.comments?.length ?? 0} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</ClientSiteRoute>
	);
}

export default PostCardComponent;

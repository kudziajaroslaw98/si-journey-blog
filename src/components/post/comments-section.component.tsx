import Image from 'next/image';
import React from 'react';
import defaultPicture from '@/public/images/people/default-picture.png';
import { Comment } from '../../../typings.ts';
import ChatBubbleLeftIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon';

type Props = {
	comments: Comment[];
};

function CommentsSectionComponent({ comments }: Props) {
	return comments?.length > 0 ? (
		<section className='space-y-6 whitespace-break-spaces py-10 font-open-sans text-xl font-extralight leading-relaxed text-emperor-100 md:space-y-12'>
			<span className='flex items-center pb-8 font-inter text-3xl font-semibold text-emperor-100'>
				<span className='flex items-center justify-center gap-x-4'>
					<ChatBubbleLeftIcon title='Comments' className='h-8 w-8' />
					<span>Comments</span>
				</span>
				<span className='pl-4 font-inter text-xl font-semibold text-emperor-800'>
					({comments.length})
				</span>
			</span>

			{comments.map((comment, index) => (
				<div
					key={comment._id}
					className='relative flex w-full flex-col gap-x-8 md:flex-row'
				>
					<div className='relative z-10 flex h-8 w-8 md:h-16 md:w-16'>
						{comment.picture ? (
							<span className=' flex h-8 w-8 md:h-16 md:w-16'>picture</span>
						) : (
							<Image
								src={defaultPicture}
								fetchPriority='low'
								alt='Default profile picture'
								className='flex h-8 w-8 !max-w-[32px] rounded-full object-cover md:h-16 md:w-16 md:!max-w-[64px]'
							/>
						)}
					</div>

					{index < comments.length - 1 && (
						<span className='absolute -bottom-8 left-[0.95rem] -z-10 h-full w-[2px] bg-emperor-900 md:-bottom-16 md:left-8' />
					)}

					<div className='-mt-9 flex flex-col gap-y-2 pl-16 font-open-sans text-lg font-extralight leading-relaxed text-emperor-100 md:-mt-0 md:pl-0 md:text-xl'>
						<span className='font-inter text-xl font-semibold'>{comment.name}</span>

						<span className='break-words font-open-sans font-light'>
							{comment.message}
						</span>

						<span className='font-inter text-xs text-emperor-400'>
							{new Date(comment._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</span>
					</div>
				</div>
			))}
		</section>
	) : (
		<section className='flex flex-col items-center justify-center space-y-6 whitespace-break-spaces py-10 font-open-sans text-xl font-extralight leading-relaxed text-emperor-100 md:items-start md:justify-normal md:space-y-12'>
			<span className='flex flex-row items-center pb-4 font-inter text-3xl font-semibold text-emperor-100'>
				<span className='flex items-center justify-center gap-x-4'>
					<ChatBubbleLeftIcon title='Comments' className='h-8 w-8' />
					<span>Comments</span>
				</span>
			</span>
			<span className='flexitems-center justify-center text-center font-inter text-xl text-emperor-100 md:text-left'>
				There is no comments yet. <br />
				Be the first one to comment!
			</span>
		</section>
	);
}

export default CommentsSectionComponent;

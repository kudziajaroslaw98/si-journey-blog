import Image from 'next/image';
import React from 'react';
import defaultPicture from '@/public/images/people/default-picture.png';
import { Comment } from '../../../typings.ts';

type Props = {
	comments: Comment[];
};

function CommentsSectionComponent({ comments }: Props) {
	return (
		comments?.length > 0 && (
			<section className='space-y-6 whitespace-break-spaces py-10 font-open-sans text-xl font-extralight leading-relaxed text-emperor-100 md:space-y-12'>
				<span className='flex items-center pb-8 font-inter text-3xl font-semibold text-emperor-100'>
					Comments
					<span className='pl-4 font-inter text-xl font-semibold text-emperor-800'>
						({comments.length})
					</span>
				</span>

				{comments.map((comment, index) => (
					<div
						key={comment._id}
						className='relative flex w-full flex-col gap-x-8 md:flex-row'
					>
						<div className='relative z-10 flex w-8 h-8 md:w-16 md:h-16'>
							{comment.picture ? (
								<span className=' flex w-8 h-8 md:w-16 md:h-16'>picture</span>
							) : (
								<Image
									src={defaultPicture}
									fetchPriority='low'
									alt='Default profile picture'
									className='rounded-full flex object-cover !max-w-[32px] md:!max-w-[64px] w-8 h-8 md:w-16 md:h-16'
								/>
							)}
						</div>

						{index < comments.length - 1 && (
							<span className='absolute -bottom-8 left-[0.95rem] -z-10 h-full w-[2px] bg-emperor-900 md:-bottom-16 md:left-8' />
						)}

						<div className='-mt-9 flex flex-col gap-y-2 pl-16 font-open-sans text-lg font-extralight leading-relaxed text-emperor-100 md:-mt-0 md:pl-0 md:text-xl'>
							<span className='font-inter text-xl font-semibold'>{comment.name}</span>

							<span className='font-open-sans font-light break-words'>{comment.message}</span>

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
		)
	);
}

export default CommentsSectionComponent;

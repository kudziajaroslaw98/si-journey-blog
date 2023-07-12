import Image from 'next/image';
import jarekPhoto from '@/public/images/jarek-photo.webp';
import Arrow from '@/public/images/svg/arrow.svg';

export default function AboutUsComponent() {
	return (
		<div className='flex flex-col items-center justify-center lg:flex-row'>
			<div className='relative w-[26.5rem] h-[25.5625rem]'>
				<Image
					className='rounded-lg object-cover object-center shadow-xl'
					src={jarekPhoto}
					fill
					fetchPriority='low'
					alt='Jarek picture'
					unoptimized
				/>
			</div>

			<div className='flex h-fit w-full flex-col justify-between pt-24 lg:pt-0 lg:pl-24'>
				<div className='space-y-12'>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-4xl font-bold'>Jarek Kudzia</h2>

						<h5 className='text-xl font-bold text-picton-blue-600'>
							Founder of Journey
						</h5>
					</div>

					<p className='leading-normal font-open-sans'>
						As a seasoned programmer and an avid self-improvement advocate, I blend my
						analytical mindset with a passion for personal growth. I believe in
						fostering physical prowess through calisthenics and martial arts, while
						also nurturing the mind and social skills.
						<br />
						<br />
						I strive to make the world a better place by simplifying the journey of
						self-improvement. I aim to make it less overwhelming for those starting
						out, just as I once was, by providing structured, easily digestible
						content.
						<br />
						<br />
						Embark on this journey with me, as we navigate the sea of self-improvement{' '}
						<b>together</b>.
					</p>
				</div>

				<div className='flex items-center pt-12'>
					<span className='mr-4 h-3 w-3 rounded-full bg-emperor-200' />

					<span className='mr-4 h-3 w-3 rounded-full bg-emperor-200' />

					<span className='mr-4 h-3 w-3 rounded-full bg-emperor-200' />

					<button
						className='ml-4 flex items-center justify-center space-x-2'
						type='button'
						disabled
					>
						<span className='text-emperor-200'>More staff soon</span>

						<span className='hidden scale-75'>
							<Arrow />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

import Image from 'next/image';
import jarekPhoto from '@/public/images/jarek-photo.webp';
import Arrow from '@/public/images/svg/arrow.svg';

export default function AboutUsComponent() {
	return (
		<div className='flex flex-col lg:flex-row justify-center items-center'>
			<div className='w-[26.5rem] h-[25.5625rem] relative'>
				<Image
					className='object-cover object-center shadow-xl rounded-lg'
					src={jarekPhoto}
					fill
					fetchPriority='low'
					alt='Jarek picture'
					unoptimized
				/>
			</div>

			<div className='flex flex-col w-full h-fit pt-24 lg:pt-0 lg:pl-24 justify-between'>
				<div className='space-y-12'>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='font-bold text-4xl'>Jarek Kudzia</h2>

						<h5 className='font-bold text-picton-blue-600 text-xl'>
							Founder of Journey
						</h5>
					</div>

					<p className='font-open-sans leading-normal'>
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
					<span className='w-3 h-3 bg-emperor-200 rounded-full mr-4' />

					<span className='w-3 h-3 bg-emperor-200 rounded-full mr-4' />

					<span className='w-3 h-3 bg-emperor-200 rounded-full mr-4' />

					<button
						className='ml-4 flex space-x-2 justify-center items-center'
						type='button'
						disabled
					>
						<span className='text-emperor-200'>More staff soon</span>

						<span className='scale-75 hidden'>
							<Arrow />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

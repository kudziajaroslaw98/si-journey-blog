import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import ButtonComponent from '@/components/button.component.tsx';

import Image1 from '@/public/images/image-1.webp';
import Image2 from '@/public/images/image-2.webp';
import Image3 from '@/public/images/image-3.webp';
import Image4 from '@/public/images/image-4.webp';
import Image5 from '@/public/images/image-5.webp';

const PricingComponent = dynamic(
	() => import('@/components/landing-page/pricing/pricing.component.tsx')
);

const ContactComponent = dynamic(
	() => import('@/components/landing-page/contact/contact.component.tsx')
);

const AboutUsComponent = dynamic(
	() => import('@/components/landing-page/about-us/about-us.component.tsx')
);

const TestimonialsComponent = dynamic(
	() =>
		import('@/components/landing-page/testimonials/testimonials.component.tsx')
);
const BenefitsComponent = dynamic(
	() => import('@/components/landing-page/benefits/benefits.component.tsx')
);

function Page() {
	return (
		<div className='overflow-x-clip'>
			<div className='relative flex h-screen w-full flex-col justify-center px-12 sm:px-24 xl:mx-auto xl:max-w-6xl xl:px-0'>
				<div className='flex w-full flex-col text-center sm:w-[29.3125rem] md:w-[39.3125rem] md:text-left'>
					<div className='space-y-6'>
						<h1 className='h-fit font-bold text-[2.5rem] tracking-[-0.18rem] leading-[3rem] text-emperor-100 sm:text-[5rem] sm:leading-[6rem] md:text-[6rem]'>
							Pure self <br />
							improvement
							<br />
							content
						</h1>

						<p className='text-lg text-emperor-100 font-open-sans sm:text-xl md:text-2xl'>
							No ads, no distractions.
						</p>
					</div>

					<Link href='/blog/category/all'>
						<ButtonComponent
							text='Start Reading'
							arrow
							outline
							className='mt-16 w-fit'
						/>
					</Link>
				</div>

				<div className='absolute right-0 -z-20 flex h-full w-full flex-row-reverse gap-8 sm:translate-x-[35%] sm:top-[8rem]'>
					<Image
						src={Image1}
						alt='Background tile'
						className='background-image-common brightness-[.2] sm:brightness-[.4] !h-screen sm:!h-[46.5625rem]'
						priority
						fetchPriority='high'
						placeholder='blur'
					/>

					<Image
						src={Image2}
						alt='Background tile'
						className='hidden object-left background-image-common blur-[2px] brightness-[.2] sm:block xl:brightness-[.6]'
						priority
						fetchPriority='high'
						placeholder='blur'
					/>

					<Image
						src={Image3}
						alt='Background tile'
						className='hidden background-image-common blur-[4px] brightness-[.2] sm:block xl:brightness-[.5]'
						priority
						fetchPriority='high'
						placeholder='blur'
					/>

					<Image
						src={Image4}
						alt='Background tile'
						className='hidden background-image-common blur-[6px] brightness-[.4] md:block'
						fetchPriority='high'
						priority
						placeholder='blur'
					/>

					<Image
						src={Image5}
						alt='Background tile'
						className='hidden background-image-common blur-[8px] brightness-[.3] xl:block'
						fetchPriority='high'
						priority
					/>
				</div>
			</div>
			<div className='space-y-36'>
				<div className='w-full bg-emperor-100 text-emperor-900'>
					<div className='px-12 py-36 space-y-36 sm:px-24 xl:mx-auto xl:max-w-6xl xl:px-0'>
						<h1 className='text-center font-medium text-[3rem] leading-[1.05] -tracking-[0.09rem] max-w-[35rem] sm:text-[3.5rem] md:text-[4rem] md:text-left'>
							Stay <span className='gradient-text'>curious</span> yet{' '}
							<span className='gradient-text'>focused</span>
						</h1>

						<BenefitsComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100'>
					<div className='relative max-w-6xl px-12 h-[49.3125rem] space-y-24 sm:px-24 xl:mx-auto xl:px-0'>
						<div className='space-y-8'>
							<h2 className='mx-auto text-center font-semibold text-[2rem] leading-[1.1] -tracking-[0.09rem] max-w-[50rem] sm:text-[3rem] md:text-[3.5rem]'>
								Don’t take our word for it.
							</h2>

							<h1 className='mx-auto text-center font-extrabold text-[2rem] leading-[1.1] gradient-text -tracking-[0.09rem] max-w-[50rem] sm:text-[3rem] md:text-[3.5rem]'>
								Trust our readers
							</h1>
						</div>

						<TestimonialsComponent />
					</div>
				</div>

				<div className='w-full bg-emperor-100 text-emperor-900'>
					<div className='px-12 py-36 space-y-36 sm:px-24 xl:mx-auto xl:max-w-6xl xl:px-0'>
						<h1 className='text-center font-medium text-[3rem] leading-[1.05] -tracking-[0.09rem] max-w-[35rem] sm:text-[3.5rem] md:text-[4rem] lg:text-left'>
							About <span className='gradient-text'>Us</span>
						</h1>

						<AboutUsComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100'>
					<div className='relative max-w-6xl px-12 h-[49.3125rem] space-y-24 sm:px-24 xl:mx-auto xl:px-0'>
						<div className='absolute -z-10 pricing-background-image right-[-20rem] bottom-[-5.875rem] w-[90rem] h-[58.375rem] blur-[2px] xl:right-[-34rem]' />
						<h1 className='mx-auto text-center text-[2rem] leading-[1.5] gradient-text -tracking-[0.09rem] max-w-[50rem] sm:text-[3rem] md:text-[3.5rem]'>
							Pricing
						</h1>

						<PricingComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100'>
					<div className='relative max-w-6xl px-12 space-y-24 sm:px-24 xl:mx-auto xl:px-0'>
						<h1 className='mx-auto text-center text-[2rem] leading-[1.5] -tracking-[0.09rem] sm:text-[3rem] md:text-[3.5rem] md:text-left'>
							Have questions?
						</h1>

						<ContactComponent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;

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
			<div className='xl:max-w-6xl xl:mx-auto relative w-full h-screen flex flex-col justify-center px-12 sm:px-24 xl:px-0'>
				<div className='w-full sm:w-[29.3125rem] md:w-[39.3125rem] flex flex-col text-center md:text-left'>
					<div className='space-y-6'>
						<h1 className='text-[2.5rem] sm:text-[5rem] md:text-[6rem] h-fit font-bold tracking-[-0.18rem] leading-[3rem] sm:leading-[6rem] text-emperor-100'>
							Pure self <br />
							improvement
							<br />
							content
						</h1>

						<p className='text-emperor-100 text-lg sm:text-xl md:text-2xl font-open-sans'>
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

				<div className='absolute sm:translate-x-[35%] right-0 sm:top-[8rem] w-full h-full flex flex-row-reverse gap-8 -z-20 '>
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
						className='background-image-common blur-[2px] brightness-[.2] xl:brightness-[.6] object-left hidden sm:block'
						priority
						fetchPriority='high'
						placeholder='blur'
					/>

					<Image
						src={Image3}
						alt='Background tile'
						className='background-image-common blur-[4px] brightness-[.2] xl:brightness-[.5] hidden sm:block'
						priority
						fetchPriority='high'
						placeholder='blur'
					/>

					<Image
						src={Image4}
						alt='Background tile'
						className='background-image-common blur-[6px] brightness-[.4] hidden md:block'
						fetchPriority='high'
						priority
						placeholder='blur'
					/>

					<Image
						src={Image5}
						alt='Background tile'
						className='background-image-common blur-[8px] brightness-[.3] hidden xl:block'
						fetchPriority='high'
						priority
					/>
				</div>
			</div>
			<div className='space-y-36'>
				<div className='w-full bg-emperor-100 text-emperor-900'>
					<div className='xl:max-w-6xl xl:mx-auto py-36 space-y-36 px-12 sm:px-24 xl:px-0'>
						<h1 className='text-[3rem] sm:text-[3.5rem] md:text-[4rem] leading-[1.05] font-medium -tracking-[0.09rem] max-w-[35rem] text-center md:text-left'>
							Stay <span className='gradient-text'>curious</span> yet{' '}
							<span className='gradient-text'>focused</span>
						</h1>

						<BenefitsComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100'>
					<div className='max-w-6xl xl:mx-auto h-[49.3125rem] space-y-24 relative px-12 sm:px-24 xl:px-0'>
						<div className='space-y-8'>
							<h2 className='text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1]  font-semibold -tracking-[0.09rem] max-w-[50rem] mx-auto text-center'>
								Don’t take our word for it.
							</h2>

							<h1 className='text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1]  gradient-text font-extrabold -tracking-[0.09rem] max-w-[50rem] mx-auto text-center'>
								Trust our readers
							</h1>
						</div>

						<TestimonialsComponent />
					</div>
				</div>

				<div className='w-full bg-emperor-100 text-emperor-900'>
					<div className='xl:max-w-6xl xl:mx-auto py-36 space-y-36 px-12 sm:px-24 xl:px-0'>
						<h1 className='text-[3rem] sm:text-[3.5rem] md:text-[4rem] leading-[1.05] font-medium -tracking-[0.09rem] max-w-[35rem] text-center lg:text-left'>
							About <span className='gradient-text'>Us</span>
						</h1>

						<AboutUsComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100 '>
					<div className='relative max-w-6xl xl:mx-auto h-[49.3125rem] space-y-24 px-12 sm:px-24 xl:px-0'>
						<div className='absolute pricing-background-image right-[-20rem] xl:right-[-34rem] bottom-[-5.875rem] w-[90rem] h-[58.375rem] blur-[2px] -z-10' />
						<h1 className='text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.5] gradient-text -tracking-[0.09rem] max-w-[50rem] mx-auto text-center'>
							Pricing
						</h1>

						<PricingComponent />
					</div>
				</div>

				<div className='w-full text-emperor-100 '>
					<div className='relative max-w-6xl xl:mx-auto space-y-24 px-12 sm:px-24 xl:px-0'>
						<h1 className='text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.5] -tracking-[0.09rem] mx-auto  md:text-left text-center'>
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

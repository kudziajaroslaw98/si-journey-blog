import Image, { StaticImageData } from 'next/image';
import Quote from '@/public/images/svg/quote.svg';

type TestimonialCardComponentProps = {
	className?: string;
	name: string;
	text: string;
	image: StaticImageData;
};

function TestimonialCardComponent({
	className,
	name,
	text,
	image,
}: TestimonialCardComponentProps) {
	return (
		<div>
			<div
				className={`relative flex h-[27.75rem] w-[16.625rem] flex-col items-center rounded-lg bg-emperor-950 p-6 shadow-xl ${className}`}
			>
				<div className='flex flex-col items-center space-y-4'>
					<Image
						src={image}
						alt='person picture'
						width={64}
						height={64}
						fetchPriority='low'
						className='rounded-full'
					/>
					<h4 className='text-center -tracking-[0.03125rem]'>{name}</h4>
				</div>
				<p className='mt-[4.5rem] font-open-sans'>
					<span className='absolute left-[1.3125rem] top-[10.0625rem]'>
						<Quote />
					</span>
					{text}
					<span className='absolute bottom-[4.11544rem] right-[1.3125rem] rotate-180'>
						<Quote />
					</span>
				</p>
			</div>
		</div>
	);
}

export default TestimonialCardComponent;

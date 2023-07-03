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
				className={`p-6 rounded-lg w-[16.625rem] h-[27.75rem] flex flex-col items-center relative bg-[#101010] shadow-xl ${className}`}
			>
				<div className='space-y-4 flex flex-col items-center'>
					<Image
						src={image}
						alt='person picture'
						width={64}
						height={64}
						fetchPriority='low'
						className='rounded-full'
					/>
					<h4 className='-tracking-[0.03125rem] text-center'>{name}</h4>
				</div>
				<p className='mt-[4.5rem] font-open-sans'>
					<span className='absolute left-[1.3125rem] top-[10.0625rem]'>
						<Quote />
					</span>
					{text}
					<span className='absolute right-[1.3125rem] bottom-[4.11544rem] rotate-180'>
						<Quote />
					</span>
				</p>
			</div>
		</div>
	);
}

export default TestimonialCardComponent;

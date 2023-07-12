type BenefitProps = {
	title: string;
	description: string;
	circleClass: string;
};
export default function BenefitComponent({
	title,
	description,
	circleClass,
}: BenefitProps) {
	return (
		<div className='mx-4 md:w-[15.875rem]'>
			<h3 className='relative flex text-2xl font-bold -tracking-wide leading-[1.875rem] whitespace-break-spaces'>
				{title}
				<span
					className={`${circleClass} absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full`}
				/>
			</h3>

			<span className='mt-12 flex text-xl leading-[1.875rem] font-open-sans'>
				{description}
			</span>
		</div>
	);
}

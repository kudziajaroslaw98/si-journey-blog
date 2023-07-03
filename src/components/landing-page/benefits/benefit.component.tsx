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
		<div className='md:w-[15.875rem] mx-4'>
			<h3 className='flex relative text-2xl -tracking-wide font-bold leading-[1.875rem] whitespace-break-spaces'>
				{title}
				<span
					className={`${circleClass} absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full`}
				/>
			</h3>

			<span className='flex mt-12 text-xl leading-[1.875rem] font-open-sans'>
				{description}
			</span>
		</div>
	);
}

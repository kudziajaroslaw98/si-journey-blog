import Arrow from '@/public/images/svg/arrow.svg';

type ButtonComponentProps = {
	text: string;
	outline?: boolean;
	arrow?: boolean;
	className?: string;
	onClick?: () => void;
};

function ButtonComponent({
	text,
	outline,
	arrow,
	className,
	onClick,
}: ButtonComponentProps) {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`${
				className || ''
			} group inline-flex py-2 px-6 items-start gap-2.5 rounded-lg hover:bg-picton-blue-900 transition-colors ${
				outline ? 'border border-picton-blue-500' : ''
			}`}
		>
			<span className='flex after:hidden items-center font-bold transition-colors text-picton-blue-500 group-hover:text-emperor-100'>
				{text}{' '}
				{arrow && <Arrow className='ml-3 arrow-fill animate-bounce-horizontal' />}
			</span>
		</button>
	);
}

export default ButtonComponent;

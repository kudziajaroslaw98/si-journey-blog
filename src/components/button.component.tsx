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
				className ?? ''
			} group inline-flex items-start gap-2.5 rounded-lg px-6 py-2 transition-colors hover:bg-picton-blue-900 ${
				outline ? 'border border-picton-blue-500' : ''
			}`}
		>
			<span className='flex items-center font-bold text-picton-blue-500 transition-colors after:hidden group-hover:text-emperor-100'>
				{text}{' '}
				{arrow && <Arrow className='arrow-fill ml-3 animate-bounce-horizontal' />}
			</span>
		</button>
	);
}

export default ButtonComponent;

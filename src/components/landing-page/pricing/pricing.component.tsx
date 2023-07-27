import Link from 'next/link';
import ButtonComponent from '@/components/button.component.tsx';

export default function PricingComponent() {
	return (
		<div className='flex flex-col items-center text-center font-normal space-y-16'>
			<p className='text-2xl font-open-sans sm:text-3xl md:text-4xl'>
				We believe that everyone should have <br /> the same possibilities to change
				their lives. <br />
				That’s why this blog is entirely
				<span className='gradient-text !font-bold'> free.</span>
			</p>

			<p className='text-lg font-open-sans sm:text-xl md:text-2xl'>
				However, if u still would like to help us consider becoming our
				<br />
				<span className='gradient-text !font-bold'> Patreon</span>
			</p>

			<Link href='https://www.patreon.com/JourneySI'>
				<ButtonComponent text='Become Patreon' arrow outline className='w-fit' />
			</Link>
		</div>
	);
}

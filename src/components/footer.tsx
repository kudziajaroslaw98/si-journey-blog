'use client';

import {usePathname} from 'next/navigation';

import Link from 'next/link';
import Logo from '@/public/images/svg/logo.svg';
import Instagram from '@/public/images/svg/instagram.svg';
import Patreon from '@/public/images/svg/patreon.svg';
import Twitter from '@/public/images/svg/twitter.svg';

function Footer() {
	const pathname = usePathname();
	const isStudioMode = pathname.includes('studio');
	return (
		<div
			className={`${
				isStudioMode ? 'hidden' : ''
			} w-full text-emperor-100 pt-36 space-y-4 pb-16`}
		>
			<div className='max-w-6xl px-12 space-y-8 sm:px-24 xl:mx-auto xl:px-0'>
				<div className='flex items-center justify-center lg:justify-between'>
					<Link className='flex items-center gap-2 sm:gap-6' href='/'>
						<Logo className='h-8 w-8 object-fit' />

						<h1 className='text-xl uppercase leading-6 text-emperor-100 md:text-3xl'>
							Journey
						</h1>
					</Link>
				</div>

				<div className='flex items-center justify-center text-center lg:justify-between lg:text-left'>
					<span>Your journey with self improvement starts here</span>

					<div className='hidden space-x-12 lg:flex'>
						<Link href='/'>Home</Link>

						<Link href='/blog/category/all'>Blog</Link>
					</div>
				</div>
			</div>

			<hr className='max-w-6xl xl:mx-auto' />

			<div className='max-w-6xl px-12 space-y-24 sm:px-24 xl:mx-auto xl:px-0'>
				<div className='flex flex-col items-center justify-center text-center space-y-8 lg:flex-row lg:justify-between lg:text-left'>
					<span>© 2023 Journey. All Rights reserved.</span>

					<div className='flex space-x-8'>
						<Link
							href='https://www.instagram.com/embrace.journey.si/'
							title='instagram'
						>
							<Instagram />
						</Link>

						<Link href='https://www.patreon.com/JourneySI' title='patreon'>
							<Patreon />
						</Link>

						<Link href='https://twitter.com/JarekJorney' title='twitter'>
							<Twitter />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

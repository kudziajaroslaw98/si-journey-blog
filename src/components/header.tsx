'use client';

import Link from 'next/link';
import {Bars3Icon} from '@heroicons/react/24/solid';
import {usePathname} from 'next/navigation';

import {NavLinkComponent} from '@/components/nav-link.component.tsx';
import Logo from '@/public/images/svg/logo.svg';

export default function Header() {
	const pathname = usePathname();
	const isStudioMode = pathname.includes('studio');
	return (
		<header
			className={`${
				isStudioMode ? 'hidden' : 'fixed'
			} w-full z-50 top-0 bg-emperor-950 space-x-2 px-5 py-3 drop-shadow-2xl md:px-10`}
		>
			<div className='flex w-full items-center justify-between xl:mx-auto xl:max-w-6xl'>
				<Link className='flex items-center gap-2 sm:gap-6' href='/'>
					<Logo className='h-8 w-8 object-fit' />

					<h1 className='text-xl uppercase leading-6 text-emperor-100 md:text-3xl'>
						Journey
					</h1>
				</Link>

				<div className='flex flex-1 items-center justify-end gap-6 md:gap-12'>
					<Bars3Icon className='h-8 w-8 cursor-pointer text-emperor-100 md:hidden' />

					<div className='hidden items-center justify-end gap-6 md:flex md:gap-12'>
						<NavLinkComponent
							href='https://www.patreon.com/JourneySI'
							label='Become Patreon'
							button
						/>

						<NavLinkComponent
							href='/'
							label='Home'
							button={false}
							scroll={false}
							className='hidden sm:block'
						/>

						<NavLinkComponent href='/blog/category/all' label='Blog' button={false} />
					</div>
				</div>
			</div>
		</header>
	);
}

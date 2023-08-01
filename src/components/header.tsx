'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/public/images/svg/logo.svg';
import { NavLinkComponent } from '@/components/nav-link.component.tsx';
import HamburgerMenuComponent from '@/components/layout/hamburger-menu/hamburger-menu.component.tsx';

export default function Header() {
	const pathname = usePathname();
	const isStudioMode = pathname?.includes('studio');
	return (
		<header
			className={`${
				isStudioMode ? 'hidden' : 'fixed'
			} top-0 z-50 w-full space-x-2 bg-emperor-1000 px-5 py-3 drop-shadow-2xl md:px-10`}
		>
			<div className='flex w-full items-center justify-between xl:mx-auto xl:max-w-6xl'>
				<Link className='flex items-center gap-2 sm:gap-6' href='/'>
					<Logo className='object-fit h-8 w-8' />

					<h1 className='text-xl uppercase leading-6 text-emperor-100 md:text-3xl'>
						Journey
					</h1>
				</Link>

				<div className='flex flex-1 items-center justify-end gap-6 md:gap-12'>
					<HamburgerMenuComponent />

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
							linkClassName='hidden sm:block'
						/>

						<NavLinkComponent href='/blog/category/all' label='Blog' button={false} />

						<NavLinkComponent
							href='https://si-journey-journal.vercel.app/'
							label='Journal'
							button={false}
							scroll={false}
							linkClassName='hidden sm:block'
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

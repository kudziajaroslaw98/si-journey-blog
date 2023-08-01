'use client';

import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Instagram from '@/public/images/svg/instagram.svg';
import Patreon from '@/public/images/svg/patreon.svg';
import Twitter from '@/public/images/svg/twitter.svg';
import { NavLinkComponent } from '@/components/nav-link.component.tsx';

function HamburgerMenuComponent() {
	const [open, cycleOpen] = useCycle(false, true);

	const links = [
		{
			name: 'Home',
			key: 'home',
			href: '/',
		},
		{
			name: 'Blog',
			key: 'blog',
			href: '/blog/category/all',
		},
		{
			name: 'Journal',
			key: 'journal',
			href: 'https://si-journey-journal.vercel.app/',
		},
		{
			name: 'Become Patreon',
			key: 'patreon',
			href: 'https://www.patreon.com/JourneySI',
			button: true,
		},
	];

	const sideVariants = {
		closed: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};
	return (
		<>
			<div className='btn-container z-50'>
				<button
					type='button'
					onClick={() => cycleOpen()}
					title={open ? 'Open Menu' : 'Close menu'}
				>
					{open ? (
						<XMarkIcon className='h-8 w-8 cursor-pointer text-emperor-100 md:hidden' />
					) : (
						<Bars3Icon className='h-8 w-8 cursor-pointer text-emperor-100 md:hidden' />
					)}
				</button>
			</div>
			<AnimatePresence>
				{open && (
					<motion.aside
						initial={{
							width: 300,
							opacity: 0,
							x: 300,
						}}
						animate={{
							width: 300,
							opacity: 1,
							x: 0,
						}}
						exit={{
							width: 300,
							x: 300,
							opacity: 0,
						}}
						className='fixed right-0 top-0 h-screen bg-emperor-1000 p-8 pt-16 shadow-2xl'
					>
						<motion.div
							initial='closed'
							animate='open'
							exit='closed'
							variants={sideVariants}
							className='flex flex-col gap-8'
						>
							{links.map(({ name, href, key, button }) => (
								<NavLinkComponent
									key={key}
									button={button ?? false}
									href={href}
									label={name}
									onClickCallback={() => cycleOpen()}
									linkClassName={`${button ? 'justify-center mt-16' : '!my-2'}`}
									spanClassName={`${button ? 'text-lg' : '!text-xl'}`}
								/>
							))}
							<div className='mt-4 flex justify-center space-x-12'>
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
						</motion.div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}

export default HamburgerMenuComponent;

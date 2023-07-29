'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

function AnimatePresenceClientComponent({ children }: Props) {
	return (
		<div className='bg-emperor-1000'>
			<AnimatePresence>
				<motion.div
					initial='pageInitial'
					animate='pageAnimate'
					exit='pageExit'
					variants={{
						pageInitial: {
							opacity: 0,
							position: 'relative',
							transitionDuration: '1s',
						},
						pageAnimate: {
							opacity: 1,
							position: 'relative',
							transitionDuration: '1s',
						},
						pageExit: {
							opacity: 0,
							transitionDuration: '1s',
						},
					}}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default AnimatePresenceClientComponent;

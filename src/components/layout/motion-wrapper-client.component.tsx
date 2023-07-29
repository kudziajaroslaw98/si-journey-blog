'use client';

import { AnimationProps, motion } from 'framer-motion';
import React from 'react';

type Props = {
	children: React.ReactNode;
	motionProps?: Partial<AnimationProps>;
	key?: string;
};

function MotionWrapperClientComponent({ children, motionProps, key }: Props) {
	return (
		<motion.div
			key={key}
			initial={motionProps?.initial}
			animate={motionProps?.animate}
		>
			{children}
		</motion.div>
	);
}

export default MotionWrapperClientComponent;

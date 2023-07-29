'use client';

import { AnimationProps, motion } from 'framer-motion';
import React from 'react';

type Props = {
	children: React.ReactNode;
	motionProps?: Partial<AnimationProps>;
};

function MotionWrapperClientComponent({ children, motionProps }: Props) {
	return (
		<motion.div initial={motionProps?.initial} animate={motionProps?.animate}>
			{children}
		</motion.div>
	);
}

export default MotionWrapperClientComponent;

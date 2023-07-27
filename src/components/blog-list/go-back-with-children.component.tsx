'use client';

import React from 'react';

type Props = {
	children: React.ReactNode;
};

function GoBackWithChildrenComponent({ children }: Props) {
	const goBack = () => {
		// if history is out of range, go to home page
		if (window.history.length <= 2) {
			window.location.href = '/blog/category/all';
		} else {
			window.history.back();
		}
	};
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<span
			tabIndex={0}
			onKeyDown={(e) => e.key === 'Enter' && goBack()}
			onClick={goBack}
		>
			{children}
		</span>
	);
}

export default GoBackWithChildrenComponent;

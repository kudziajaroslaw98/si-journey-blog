'use client';

import React from 'react';

type Props = {
	children: React.ReactNode;
};

function GoBackWithChildrenComponent({ children }: Props) {
	const goBack = () => {
		window.history.back();
	};
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<span
			tabIndex={0}
			onKeyPress={(e) => e.key === 'Enter' && goBack()}
			onClick={goBack}
		>
			{children}
		</span>
	);
}

export default GoBackWithChildrenComponent;

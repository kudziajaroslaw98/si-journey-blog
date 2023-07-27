'use client';

import React from 'react';

type Props = {
	children: React.ReactNode;
};

function CopyToClipboardComponent({ children }: Props) {
	const copyCurrentWindowPathToClipboard = () => {
		const copyText = window.location.href;
		navigator.clipboard.writeText(copyText);
		if (navigator.canShare({ url: copyText })) {
			navigator.share({ url: copyText });
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<span
			tabIndex={0}
			onKeyDown={(e) => e.key === 'Enter' && copyCurrentWindowPathToClipboard()}
			onClick={copyCurrentWindowPathToClipboard}
		>
			{children}
		</span>
	);
}

export default CopyToClipboardComponent;

'use client';

import React from 'react';

type Props = {
	children: React.ReactNode;
};

function CopyToClipboardComponent({ children }: Props) {
	const copyCurrentWindowPathToClipboard = () => {
		const copyText = window.location.href;
		navigator.clipboard.writeText(copyText);
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<span onClick={copyCurrentWindowPathToClipboard}>{children}</span>
	);
}

export default CopyToClipboardComponent;

import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className='pt-16 pb-16'>{children}</div>;
}

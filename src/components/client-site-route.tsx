'use client';

import Link from 'next/link';
import React from 'react';

function ClientSiteRoute({
	children,
	route,
}: {
	children: React.ReactNode;
	route: string;
}) {
	return (
		<Link
			className='w-full max-w-[30rem] md:max-w-[21rem] min-[880px]:max-w-[26rem] lg:max-w-[19rem] xl:max-w-[23rem] '
			href={route}
		>
			{children}
		</Link>
	);
}

export default ClientSiteRoute;

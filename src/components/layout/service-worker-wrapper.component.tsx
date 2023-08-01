'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ServiceWorkerWrapperComponent() {
	const [isOnline, setIsOnline] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'ononline' in window &&
			'onoffline' in window
		) {
			setIsOnline(window.navigator.onLine);
			if (!window.ononline) {
				window.addEventListener('online', () => {
					setIsOnline(true);
				});
			}
			if (!window.onoffline) {
				window.addEventListener('offline', () => {
					setIsOnline(false);
				});
			}
		}
	}, []);
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator &&
			window.workbox !== undefined &&
			isOnline
		) {
			// skip index route, because it's already cached under `start-url` caching object
			if (pathname !== '/') {
				const wb = window.workbox;
				wb.active.then(() => {
					wb.messageSW({ action: 'CACHE_NEW_ROUTE' });
				});
			}
		}
	}, [isOnline, pathname]);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <div className='hidden'>hidden</div>;
}

export default ServiceWorkerWrapperComponent;

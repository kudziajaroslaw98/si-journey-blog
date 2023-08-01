import { Client, ServiceWorkerGlobalScope } from '@/types/service-worker.ts';

declare let workerGlobalScope: ServiceWorkerGlobalScope;

workerGlobalScope.addEventListener('message', async (event) => {
	if (event?.data && event?.data.action === 'CACHE_NEW_ROUTE') {
		caches.open('others').then((cache) =>
			cache.match((event?.source as Client).url).then((res) => {
				if (res === undefined) {
					return cache.add((event?.source as Client).url);
				}
				return undefined;
			})
		);
	}
});

workerGlobalScope.addEventListener('push', (event) => {
	const data = JSON.parse(event?.data.text() ?? '{}');
	event?.waitUntil(
		workerGlobalScope.registration.showNotification(data.title, {
			body: data.message,
			icon: '/icons/android-chrome-192x192.png',
		})
	);
});

workerGlobalScope.addEventListener('notificationclick', (event) => {
	event?.notification.close();
	event?.waitUntil(
		workerGlobalScope.clients
			.matchAll({ type: 'window', includeUncontrolled: true })
			.then((clientList) => {
				if (clientList.length > 0) {
					let client = clientList[0];
					clientList.forEach((item) => {
						if (item.focused) {
							client = item;
						}
					});
					return client.focus();
				}
				return workerGlobalScope.clients.openWindow('/');
			})
	);
});

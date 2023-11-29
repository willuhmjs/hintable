import { version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;

worker.addEventListener('install', (event) => {
	event.waitUntil(
		Promise.resolve().then(() => {
			worker.skipWaiting();
		})
	);
});

worker.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(async (keys) => {
			// delete all caches
			for (const key of keys) {
				await caches.delete(key);
			}

			worker.clients.claim();
		})
	);
});

worker.addEventListener('fetch', (event) => {
	event.respondWith(
		(async () => {
			const response = await fetch(event.request);
			return response;
		})()
	);
});

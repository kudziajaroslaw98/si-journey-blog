import { createClient, type SanityClient } from 'next-sanity';
import { cache } from 'react';
import { apiVersion, dataset, projectId } from '../env.ts';

export function getClient(preview?: { token: string }): SanityClient {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn: true,
		token: process.env.SANITY_API_READ_TOKEN,
		perspective: 'published',
		studioUrl: '/blog/studio',
	});
	if (preview) {
		if (preview.token) {
			return client.withConfig({
				token: preview.token,
				useCdn: false,
				ignoreBrowserTokenWarning: true,
				perspective: 'previewDrafts',
			});
		}
	}
	return client;
}

export function getReadWriteClient(): SanityClient {
	return createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn: true,
		token: process.env.NEXT_PRIVATE_SANITY_READ_WRITE,
		perspective: 'published',
		studioUrl: '/blog/studio',
	});
}

export const clientReadWrite = getReadWriteClient();
export const client = getClient();
export const clientFetch = cache(client.fetch.bind(client));

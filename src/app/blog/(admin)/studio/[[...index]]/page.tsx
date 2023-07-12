/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import {Metadata} from 'next';
import {metadata as studioMetadata} from 'next-sanity/studio/metadata';
import dynamic from 'next/dynamic';
import Studio from './Studio.tsx';

dynamic(() => require('easymde/dist/easymde.min.css'));

export const metadata: Metadata = {
	...studioMetadata,
};
export default function StudioPage() {
	return <Studio />;
}

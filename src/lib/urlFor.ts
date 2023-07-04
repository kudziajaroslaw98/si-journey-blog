import imageUrlBuilder from '@sanity/image-url';
import { getClient } from '@/sanity/lib/client.ts';

const builder = imageUrlBuilder(getClient());

function urlFor(source: any, width: number) {
	return builder
		.image(source)
		.auto('format')
		.width(width + 200);
}

export default urlFor;

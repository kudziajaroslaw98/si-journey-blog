import imageUrlBuilder from '@sanity/image-url';
import {getClient} from '@/sanity/lib/client.ts';

const builder = imageUrlBuilder(getClient());

function urlFor(source: any, width: number, quality = 90, blur = 1) {
	return builder
		.image(source)
		.auto('format')
		.width(width + 200)
		.quality(quality)
		.blur(blur);
}

export default urlFor;

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/xml');
	res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

	const { xml } = await fetch(
		'https://si-journey-blog.vercel.app/api/getSitemap'
	).then((fetchResponse) => fetchResponse.json());
	res.end(xml);
}

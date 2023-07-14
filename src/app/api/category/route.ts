import { NextRequest, NextResponse } from 'next/server';
import { clientFetch } from '@/sanity/lib/client.ts';
import { QueryUtils } from '@/utils/query-utils.ts';

export async function GET(req: NextRequest) {
	// @ts-ignore
	const searchParams: string = req.nextUrl.searchParams.toString();
	const category = searchParams.split('=')[1].split('&')[0];
	const from = Number(searchParams.split('=')[2].split('&')[0]);
	const to = Number(searchParams.split('=')[3]);

	if (category === 'all') {
		return NextResponse.json(
			await clientFetch(QueryUtils().fetchPaginatedPostsQuery, {
				from,
				to,
			})
		);
	}
	return NextResponse.json(
		await clientFetch(QueryUtils().fetchPaginatedCategoryPostsQuery, {
			category,
			from,
			to,
		})
	);
}

import { NextRequest, NextResponse } from 'next/server';
import { clientReadWrite } from '@/sanity/lib/client.ts';

export async function PUT(req: NextRequest) {
	const { postId } = await req.json();
	let likes = 0;
	let error: any = null;
	await clientReadWrite
		.patch(postId)
		.inc({ likes: 1 }) // Increment the likes field by 1
		.commit() // Perform the patch
		.then((updatedPost) => {
			likes = updatedPost.likes;
		})
		.catch((err) => {
			error = err;
		});
	if (error) {
		return NextResponse.json(
			{ error: error.response.body.error.description },
			{ status: error.statusCode }
		);
	}
	return NextResponse.json({ likes });
}

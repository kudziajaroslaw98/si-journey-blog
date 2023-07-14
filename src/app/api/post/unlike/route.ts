import { NextRequest, NextResponse } from 'next/server';
import { clientReadWrite } from '@/sanity/lib/client.ts';

export async function PUT(req: NextRequest) {
	const { postId } = await req.json();
	let likes = 0;
	let error: any = null;
	await clientReadWrite
		.patch(postId)
		.dec({ likes: 1 }) // Increment the likes field by 1
		.commit() // Perform the patch
		.then(async (updatedPost) => {
			if (updatedPost.likes < 0) {
				await clientReadWrite
					.patch(postId)
					.inc({ likes: 1 }) // Increment the likes field by 1
					.commit()
					.then(async (updatedPost2) => {
						if (updatedPost.likes < 0) {
							await clientReadWrite
								.patch(postId)
								.inc({ likes: 1 }) // Increment the likes field by 1
								.commit();
						}
						likes = updatedPost2.likes;
					});
			} else {
				likes = updatedPost.likes;
			}
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

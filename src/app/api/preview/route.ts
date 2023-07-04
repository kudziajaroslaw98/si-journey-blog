import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export function GET() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN! }
		: undefined;
	return NextResponse.json({ preview });
}

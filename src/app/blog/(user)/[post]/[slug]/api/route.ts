import { cache } from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { getClient } from '@/sanity/lib/client.ts';

export async function GET(req: NextRequest) {
	const client = getClient();
	const clientFetch = cache(client.fetch.bind(client));
	const slug = req.nextUrl.pathname.split('/')[3];
	const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `;
	const post = await clientFetch(query, { slug });
	return NextResponse.json(post);
}

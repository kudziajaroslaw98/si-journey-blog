import { NextRequest, NextResponse } from 'next/server';
import { draftMode } from 'next/headers';
import { groq } from 'next-sanity';
import { clientFetch } from '@/sanity/lib/client.ts';

export async function GET(req: NextRequest) {
  draftMode().enable();
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

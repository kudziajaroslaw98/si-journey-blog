import { Metadata } from 'next';
import React, { cache } from 'react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { draftMode } from 'next/headers';
import { getClient } from '@/sanity/lib/client.ts';
import urlFor from '@/lib/urlFor.ts';
import { Post } from '../../../../../../../typings.ts';

type Props = {
	params: {
		slug: string;
		category: string;
	};
};

export const revalidate = 10;
const client = getClient();
const clientFetch = cache(client.fetch.bind(client));

// *[_type == "post" && categories[]->slug.current match $categorySlug] | order(_createdAt desc) [5...10] - searching posts by category

export const generateMetadata = async ({
	params: { category, slug },
}: Props): Promise<Metadata> => {
	const query = groq`
       *[_type == "post" && slug.current == $slug && categories[]->slug.current match $category][0]{...,author->, categories[]->}  | order(_createdAt desc)`;

	const post: Post = await clientFetch(query, { slug, category });
	return {
		title: `Journey Blog: ${post?.title}` ?? 'Journey - blog',
		description:
			post?.description ??
			"Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
		openGraph: {
			title: `Journey Blog: ${post?.title}` ?? 'Journey - blog',
			description:
				post?.description ??
				"Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
		},
	};
};

export async function generateStaticParams() {
	const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `;
	const slugs: Post[] = await clientFetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

const Page = async ({ params: { category, slug } }: Props) => {
	const query = groq`
       *[_type == "post" && slug.current == $slug && categories[]->slug.current match $category][0]{
              ...,
              author->, 
              categories[]->
         }
       `;
	const post: Post = await clientFetch(query, { slug, category });

	return (
		<article className='max-w-3xl mx-auto px-6 md:px-10 pt-8'>
			<h1 className='text-5xl'>{draftMode().isEnabled ? 'preview mode' : ''}</h1>

			<section className='flex my-8 w-full h-[25rem] relative'>
				<Image
					className='object-cover rounded-lg shadow-lg'
					alt={post.title}
					src={urlFor(post.mainImage, 688).url()}
					priority
					fill
				/>
			</section>
			<section className='text-gray-100 w-full'>
				<div className='flex flex-col justify-between space-y-10'>
					<div>
						<h1 className='text-4xl font-extrabold'>{post?.title}</h1>

						<p className='text-gray-400 text-sm'>
							{new Date(post?._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</div>

					<div className='flex items-center space-x-5'>
						{post?.author?.image && (
							<Image
								className='rounded-full'
								src={urlFor(post.author.image, 40).url()}
								alt={post.author.name}
								height={40}
								width={40}
							/>
						)}

						<div className='w-64'>
							<h3 className='text-lg font-bold'>{post.author.name}</h3>

							<span>{post.timeToRead}</span>
						</div>
					</div>
				</div>
			</section>

			<section className='font-open-sans font-extralight text-emperor-100 leading-relaxed text-xl mx-auto whitespace-break-spaces py-10'>
				<ReactMarkdown>{post.markdown}</ReactMarkdown>
			</section>
		</article>
	);
};

export default Page;

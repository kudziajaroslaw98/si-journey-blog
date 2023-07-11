import {Metadata} from 'next';
import {ArrowUturnLeftIcon, ChatBubbleLeftIcon, HeartIcon, ShareIcon} from "@heroicons/react/24/solid";
import React, {cache} from 'react';
import {groq} from 'next-sanity';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from "next/link";


import {draftMode} from 'next/headers';
import {getClient} from '@/sanity/lib/client.ts';
import urlFor from '@/lib/urlFor.ts';
import {Post} from '../../../../../../typings.ts';
import GoBackWithChildrenComponent from "@/components/blog-list/go-back-with-children.component.tsx";
import getAbsolutePath from "@/utils/absolute-path.ts";

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 10;
const client = getClient();
const clientFetch = cache(client.fetch.bind(client));

// *[_type == "post" && categories[]->slug.current match $categorySlug] | order(_createdAt desc) [5...10] - searching posts by category

export const generateMetadata = async ({
	params: { slug },
}: Props): Promise<Metadata> => {
	const query = groq`
       *[_type == "post" && slug.current == $slug][0]{...,author->, categories[]->}  | order(_createdAt desc)`;

	const post: Post = await clientFetch(query, { slug });
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

const Page = async ({ params: { slug } }: Props) => {
	const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `;
	const post: Post = await clientFetch(query, { slug });

	return (
		<article className='max-w-6xl mx-auto px-6 md:px-10 pt-6 md:pt-14 flex flex-col justify-center'>
			<h1 className='text-5xl'>{draftMode().isEnabled ? 'preview mode' : ''}</h1>

			<section className='flex my-8 w-full h-[25rem] relative'>
				{post?.mainImage && (
					<Image
						className='object-cover rounded-lg shadow-lg'
						alt={post?.title}
						src={urlFor(post?.mainImage, 888).url()}
						priority
						fill
					/>
				)}
			</section>

			<aside className='flex flex-col fixed right-[29rem] top-[35rem] gap-y-2'>
				<GoBackWithChildrenComponent>
					<span className='w-12 h-12 bg-emperor-1000 text-emperor-100 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-emperor-900 transition-colors'>
						<ArrowUturnLeftIcon title='Go Back' className='w-5'/>
					</span>
				</GoBackWithChildrenComponent>

				<span className='w-12 h-12 bg-emperor-1000 text-emperor-100 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-emperor-900 transition-colors'>
					<ShareIcon title='Share' className='w-5'/>
				</span>

				<span className='w-12 h-12 bg-emperor-1000 text-emperor-100 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-emperor-900 transition-colors'>
					<HeartIcon title='Likes' className='w-5'/>
				</span>

				<span className='w-12 h-12 bg-emperor-1000 text-emperor-100 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-emperor-900 transition-colors'>
					<ChatBubbleLeftIcon title='Comments' className='w-5'/>
				</span>
			</aside>

			<section className='w-full max-w-3xl text-gray-100 mx-auto py-8'>
				<div className='flex flex-col justify-between space-y-10'>
					<div className='flex flex-col gap-y-2'>
						<h1 className='text-4xl font-extrabold'>{post?.title}</h1>

						<p className='text-gray-400 text-sm'>
							{new Date(post?._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-5'>
							{post?.author?.image && (
								<Image
									className='rounded-full'
									src={urlFor(post.author.image, 40).url()}
									alt={post?.author?.name}
									height={64}
									width={64}
								/>
							)}

							<div className='w-64'>
								<h3 className='text-2xl font-inter text-emperor-100 font-normal flex'>
									{post?.author?.name}
								</h3>

								<span className='text-emperor-500'>{post?.timeToRead}</span>
							</div>
						</div>

						<div className='flex flex-col gap-y-2'>
							<div className='flex justify-end gap-x-2'>
								{post?.categories?.map((category) =>
									<Link key={category._id}
										  href={`${getAbsolutePath()}/blog/category/${category.slug.current}`}>
										<span key={category._id} className='bg-emperor-900 px-2 py-0.5 rounded-lg text-sm hover:cursor-pointer hover:bg-emperor-700 transition-colors'>
											{category.title}
										</span>
									</Link>
								)}
							</div>

							<div className='flex justify-end items-center space-x-6 text-emperor-500'>
								<div className='flex justify-center items-center space-x-2'>
									<span className='flex space-x-2'>
										<HeartIcon title='Likes' className='w-6'/>
									</span>

									<span>20</span>
								</div>

								<div className='flex justify-center items-center space-x-2'>
									<span className='flex space-x-2'>
										<ChatBubbleLeftIcon title='Comments' className='w-6'/>
									</span>

									<span>2</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='markdown max-w-3xl font-open-sans font-extralight text-emperor-100 leading-relaxed text-xl mx-auto whitespace-break-spaces py-10'>
				<ReactMarkdown>{post?.markdown}</ReactMarkdown>
			</section>
		</article>
	);
};

export default Page;

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	ArrowUturnLeftIcon,
	ChatBubbleLeftIcon,
	HeartIcon,
	ShareIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { draftMode } from 'next/headers';
import { groq } from 'next-sanity';

import { clientFetch } from '@/sanity/lib/client.ts';
import urlFor from '@/lib/urlFor.ts';
import { Post } from '../../../../../../typings.ts';
import GoBackWithChildrenComponent from '@/components/blog-list/go-back-with-children.component.tsx';
import getAbsolutePath from '@/utils/absolute-path.ts';
import PostLikeComponent from '@/components/post/post-like.component.tsx';
import CopyToClipboardComponent from '@/components/post/copy-to-clipboard.component.tsx';
import defaultPicture from '@/public/images/people/default-picture.png';
import { CommentsDialogComponent } from '@/components/post/comments-dialog.component.tsx';

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 10;

export const generateMetadata = async ({
	params: { slug },
}: Props): Promise<Metadata> => {
	const query = groq`*[_type == "post" && slug.current == $slug]{...,author->, categories[]->}[0]`;
	const post: Post = await clientFetch(query, { slug });
	return {
		title: `Journey SI Blog: ${post.title}` ?? 'Journey SI - blog',
		description:
			post?.description ??
			"Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
		keywords: post?.categories?.map((category) => category.title) ?? [],
		creator: post?.author?.name ?? 'Journey SI',
		openGraph: {
			title: `Journey SI Blog: ${post.title}` ?? 'Journey SI - blog',
			description:
				post?.description ??
				"Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
			authors: [post?.author?.name ?? 'Journey SI'],
			tags: post?.categories?.map((category) => category.title) ?? [],
			type: 'article',
		},
	};
};

export async function generateStaticParams() {
	const query = groq`*[_type == "post"]{ slug }`;
	const slugs: Post[] = await clientFetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);
	return slugRoutes.map((slug) => ({
		slug,
	}));
}

const Page = async ({ params: { slug } }: Props) => {
	const query = groq`*[_type == "post" && slug.current == $slug][0]{..., author->, categories[]->, "comments": *[_type == "comment" && references(^._id) && approved == true] | order(_createdAt desc)}`;
	const post: Post = await clientFetch(query, { slug });
	const MarkdownComponents: object = {
		p: (paragraph: any) => {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				const metastring = image.properties.alt;
				const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
				const metaHeight = metastring.match(/{height:([^}]+)}/);
				const height = metaHeight ? metaHeight[1] : '432';
				const isPriority = metastring?.toLowerCase().match('{priority}');

				return (
					<div className='relative flex w-full' style={{ height: `${height}px` }}>
						<Image
							src={image.properties.src}
							className='rounded-lg bg-emperor-400 object-cover object-center shadow-lg'
							alt={alt}
							priority={isPriority}
							fill
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};
	return (
		<article className='mx-auto flex max-w-6xl flex-col justify-center overflow-x-clip px-6 pt-6 md:px-10 md:pt-14'>
			<h1 className='text-5xl'>{draftMode().isEnabled ? 'preview mode' : ''}</h1>

			<section className='relative my-8 flex h-[25rem] w-full'>
				{post?.mainImage && (
					<Image
						className='rounded-lg object-cover shadow-lg'
						alt={post?.title}
						src={urlFor(post?.mainImage, 888).url()}
						loading='eager'
						priority
						fill
					/>
				)}
			</section>

			<div className='mx-auto flex w-full max-w-3xl py-8 text-gray-100'>
				<article>
					<section className='w-full py-8 text-gray-100'>
						<div className='flex flex-col justify-between space-y-10'>
							<div className='flex flex-col gap-y-2'>
								<h1 className='text-3xl font-extrabold md:text-4xl xl:text-5xl '>
									{post?.title}
								</h1>

								<p className='text-sm text-gray-400'>
									{new Date(post?._createdAt).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}
								</p>
							</div>

							<div className='flex flex-col justify-between sm:flex-row sm:items-center'>
								<div className='flex items-center space-x-5'>
									{post?.author?.image && (
										<Image
											className='rounded-full'
											src={urlFor(post.author.image, 64).url()}
											alt={post?.author?.name}
											height={64}
											width={64}
										/>
									)}

									<div className='w-64'>
										<h3 className='flex font-inter text-lg font-normal text-emperor-100 sm:text-2xl'>
											{post?.author?.name}
										</h3>

										<span className='text-emperor-300'>{post?.timeToRead}</span>
									</div>
								</div>

								<div className='flex flex-col gap-y-4 pt-8 sm:gap-y-2 sm:pt-0'>
									<div className='flex justify-start gap-x-2'>
										{post?.categories?.map((category) => (
											<Link
												key={category._id}
												href={`${getAbsolutePath()}/blog/category/${category.slug.current}`}
											>
												<span
													key={category._id}
													className='rounded-lg bg-emperor-900 px-2 py-0.5 text-sm transition-colors hover:cursor-pointer hover:bg-emperor-700'
												>
													{category.title}
												</span>
											</Link>
										))}
									</div>

									<div className='flex items-center justify-start space-x-6 text-emperor-500'>
										<div className='flex items-center justify-center space-x-2'>
											<span className='flex space-x-2'>
												<HeartIcon title='Likes' className='w-6' />
											</span>

											<span>{post.likes}</span>
										</div>

										<div className='flex items-center justify-center space-x-2'>
											<span className='flex space-x-2'>
												<ChatBubbleLeftIcon title='Comments' className='w-6' />
											</span>

											<span>{post.comments.length}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='markdown whitespace-break-spaces py-10 font-open-sans text-lg font-extralight leading-relaxed text-emperor-100 md:text-xl'>
						<ReactMarkdown components={MarkdownComponents}>
							{post?.markdown}
						</ReactMarkdown>
					</section>

					<hr className='my-8 w-full border-emperor-800' />

					{post?.comments?.length > 0 && (
						<section className='space-y-6 whitespace-break-spaces py-10 font-open-sans text-xl font-extralight leading-relaxed text-emperor-100 md:space-y-12'>
							<span className='flex items-center pb-8 font-inter text-3xl font-semibold text-emperor-100'>
								Comments
								<span className='pl-4 font-inter text-xl font-semibold text-emperor-800'>
									({post.comments.length})
								</span>
							</span>

							{post.comments.map((comment, index) => (
								<div
									key={comment._id}
									className='relative flex w-full flex-col gap-x-8 md:flex-row'
								>
									<div className='relative z-10 flex h-full w-8 justify-center md:w-16'>
										{comment.picture ? (
											<span>picture</span>
										) : (
											<Image
												src={defaultPicture}
												fetchPriority='low'
												alt='Default profile picture'
												className='rounded-full object-cover'
											/>
										)}
									</div>

									{index < post.comments.length - 1 && (
										<span className='absolute -bottom-8 left-[0.95rem] -z-10 h-full w-[2px] bg-emperor-900 md:-bottom-16 md:left-8' />
									)}

									<div className='-mt-9 flex flex-col space-y-2 pl-16 font-open-sans text-lg font-extralight leading-relaxed text-emperor-100 md:-mt-0 md:pl-0 md:text-xl'>
										<span className='font-inter text-xl font-semibold'>
											{comment.name}
										</span>

										<span className='font-open-sans font-light'>{comment.message}</span>

										<span className='font-inter text-xs text-emperor-400'>
											{new Date(comment._createdAt).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})}
										</span>
									</div>
								</div>
							))}
						</section>
					)}
				</article>

				<aside className='fixed bottom-0 right-0 z-40 flex h-16 w-full flex-row items-center justify-center gap-x-8 gap-y-2 bg-emperor-1000 xl:sticky xl:top-[19rem] xl:-mr-[8rem] xl:h-full xl:w-fit xl:flex-col xl:justify-normal xl:bg-transparent xl:pl-12 xl:pt-8'>
					<GoBackWithChildrenComponent>
						<span className='flex h-12 w-12 items-center justify-center rounded-md bg-emperor-1000 text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full'>
							<ArrowUturnLeftIcon title='Go Back' className='w-8 xl:w-5' />
						</span>
					</GoBackWithChildrenComponent>

					<CopyToClipboardComponent>
						<span className='flex h-12 w-12 items-center justify-center rounded-md bg-emperor-1000 text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full'>
							<ShareIcon title='Share' className='w-8 xl:w-5' />
						</span>
					</CopyToClipboardComponent>

					<PostLikeComponent post={post} title='Likes' className='w-8 xl:w-5' />

					<CommentsDialogComponent />
				</aside>
			</div>
		</article>
	);
};

export default Page;
